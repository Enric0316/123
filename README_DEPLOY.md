# GitHub Pages + iCloud 免費部署方案

這一版已整理成適合長期使用的免費方案：

- `GitHub Pages`：放 App 本體，提供固定 HTTPS 網址
- `iCloud Drive`：存完整備份與單一旅程備份
- `iPhone / Mac`：都用同一個固定網址安裝成 Web App

這樣做的好處：

- 不再依賴 `trycloudflare` 臨時網址
- 換手機時只要重新打開固定網址，再匯入備份
- iPhone 可以用 Safari 加到主畫面
- Mac 可以用 Safari `Add to Dock`
- 不用 Apple Developer 年費

## 1. 先準備 GitHub Repository

1. 到 [GitHub](https://github.com/) 登入你的帳號。
2. 按右上角 `+` -> `New repository`。
3. Repository 名稱建議用 `travel-app` 或 `nagoya-travel-app`。
4. 設為 `Public`。
5. 建立完成後，把這個 `2027名古屋` 資料夾整個放進去。

## 2. 這個專案已經幫你準備好的部署檔

目前資料夾內已經有：

- `.github/workflows/deploy-pages.yml`
  用來在你每次 push 到 `main` 時自動部署 GitHub Pages
- `.nojekyll`
  避免 GitHub Pages 把某些靜態檔擋掉
- `manifest.json`
  已補好 `scope`，比較適合安裝成 Web App

你不用再自己手動建 GitHub Actions。

## 3. 第一次啟用 GitHub Pages

1. 進入 GitHub 上的 Repository。
2. 點 `Settings`。
3. 左側點 `Pages`。
4. 在 `Build and deployment` 區塊確認來源使用 GitHub Actions。
5. 回到 Repository 主頁，把檔案 push 到 `main`。
6. 等 GitHub Actions 跑完。

完成後，你會拿到固定網址，格式通常會是：

`https://你的帳號.github.io/你的-repo-name/`

例如：

`https://yourname.github.io/travel-app/`

## 4. 後續更新方式

之後每次你改完 App，只要：

1. 存檔
2. commit
3. push 到 `main`

GitHub Pages 就會自動更新，不用再重開 tunnel。

## 5. iPhone 安裝方式

1. 用 `Safari` 打開你的 GitHub Pages 固定網址。
2. 等首頁完整載入。
3. 按 `分享`。
4. 選 `加入主畫面`。
5. 新增後從 iPhone 桌面打開。

Apple 官方也支援把網站加到主畫面，作為 Web App 使用：

- [Apple Support: Turn a website into an app on iPhone](https://support.apple.com/en-vn/guide/iphone/iphea86e5236/ios)

## 6. Mac 安裝方式

1. 用 `Safari` 打開同一個固定網址。
2. 在選單列點 `File` -> `Add to Dock`。
3. 之後就能像 App 一樣從 Dock 或應用程式資料夾開。

Apple 官方說明：

- [Apple Support: Use Safari web apps on Mac](https://support.apple.com/en-us/104996)

## 7. iCloud 備份流程

你現在最穩的資料保存方式是：

- 平常使用：App 本機離線資料
- 真正保命：匯出 `.json` 到 `iCloud Drive`

建議這樣做：

### 完整備份

1. 打開 App
2. 按 `匯入`
3. 在 `iCloud 備份與還原 (全量行程)` 區塊按 `導出備份檔`
4. 選 `儲存到檔案`
5. 存到 `iCloud Drive`

### 單一旅程備份

1. 先進到你要備份的旅程
2. 按 `匯入`
3. 在 `單一旅程備份與還原` 區塊按 `匯出目前旅程備份`
4. 選 `儲存到檔案`
5. 存到 `iCloud Drive`

## 8. 換手機的做法

如果你之後換 iPhone：

1. 在新手機打開 GitHub Pages 固定網址
2. 用 Safari `加入主畫面`
3. 打開桌面 App
4. 從 `iCloud Drive` 匯入你之前的完整備份或單一旅程備份

這樣就能把資料帶過去。

## 9. 費用

這套方案本體可以免費：

- GitHub Pages：免費
- Safari 加到主畫面：免費
- Mac Add to Dock：免費

需要注意的只有 iCloud 空間：

- Apple ID 原本有免費空間
- 如果你的照片很多，可能之後會需要更多 iCloud 儲存空間

## 10. 限制

這套方案雖然是目前最省錢也最穩的做法之一，但它還是有邊界：

- 它是 Web App，不是原生 App
- 大量照片還是會受瀏覽器與裝置本機儲存影響
- 跨裝置最穩的同步方式仍然是「匯出備份 -> iCloud -> 匯入備份」
- 不是像正式原生 App 那樣自動背景同步

## 11. 最推薦的使用節奏

1. 平常都用 GitHub Pages 固定網址安裝的桌面 App
2. 每次大改旅程後做一次 `單一旅程備份`
3. 每隔一段時間做一次 `完整備份`
4. 備份檔固定存到 `iCloud Drive`

這樣就算換手機、重裝、或某一版出問題，也能救回來。
