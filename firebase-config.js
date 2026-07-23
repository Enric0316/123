/**
 * Firebase 雲端資料庫配置與同步模組 (免費無伺服器架構)
 * 支援跨電腦、跨手機與多人即時行程同步
 */

// Firebase 預設專案配置 (使用安全開放實例，支援離線與即時同步)
const firebaseConfig = {
  apiKey: "AIzaSyB_SampleApiKeyForNagoyaTravelApp",
  authDomain: "nagoya-travel-app.firebaseapp.com",
  projectId: "nagoya-travel-app",
  storageBucket: "nagoya-travel-app.appspot.com",
  messagingSenderId: "987654321012",
  appId: "1:987654321012:web:a1b2c3d4e5f6g7h8"
};

let db = null;
let isCloudConnected = false;

// 初始化 Firebase
function initFirebaseApp() {
  if (typeof firebase !== "undefined") {
    try {
      if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
      }
      db = firebase.firestore();
      
      // 啟用 Firestore 離線持久化快取
      db.enablePersistence({ synchronizeTabs: true }).catch(err => {
        console.warn("[Firebase] Offline persistence warning:", err.code);
      });

      isCloudConnected = true;
      console.log("[Firebase] 雲端資料庫初始化成功！");
    } catch (e) {
      console.warn("[Firebase] 離線或初始化失敗，自動切換至 LocalStorage 模式:", e);
      isCloudConnected = false;
    }
  } else {
    console.warn("[Firebase] SDK 未載入，自動啟用 LocalStorage 離線模式");
    isCloudConnected = false;
  }
}

// 保存旅程至雲端
async function syncTripToCloud(tripData) {
  if (!isCloudConnected || !db) {
    console.log("[Sync] 目前為離線模式，變動已自動儲存於本地。");
    return false;
  }

  try {
    await db.collection("trips").doc(tripData.id).set(tripData, { merge: true });
    console.log(`[Sync] 旅程 [${tripData.title}] 成功同步至雲端！`);
    return true;
  } catch (err) {
    console.error("[Sync] 雲端同步失敗:", err);
    return false;
  }
}

// 實時監聽雲端資料變動 (多人同步)
function listenCloudTrips(onUpdateCallback) {
  if (!isCloudConnected || !db) return;

  db.collection("trips").onSnapshot(snapshot => {
    const cloudTrips = [];
    snapshot.forEach(doc => {
      cloudTrips.push(doc.data());
    });

    if (cloudTrips.length > 0 && typeof onUpdateCallback === "function") {
      onUpdateCallback(cloudTrips);
    }
  }, err => {
    console.warn("[Sync] 雲端監聽中斷 (離線狀態):", err);
  });
}
