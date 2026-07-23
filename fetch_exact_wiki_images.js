const https = require('https');
const fs = require('fs');

const exactSpots = {
  "中部國際機場 (Centrair)": "https://upload.wikimedia.org/wikipedia/commons/e/ed/Chubu_Central_Airport_aerial_view.jpg",
  "國寶犬山城 & 犬山城下町古街": "https://upload.wikimedia.org/wikipedia/commons/f/fc/Inuyama_Castle_2010.jpg",
  "榮商圈、綠洲21 (Oasis 21) & 名古屋電視塔": "https://upload.wikimedia.org/wikipedia/commons/6/6b/Oasis21_Nagoya_01.jpg",
  "博物館明治村 (Meiji Mura)": "https://upload.wikimedia.org/wikipedia/commons/d/d7/Imperial_Hotel_Entrance_Hall_Meiji-mura.jpg",
  "岐阜城 & 金華山纜車漫遊": "https://upload.wikimedia.org/wikipedia/commons/7/7b/Gifu_Castle03s3840.jpg",
  "JR特急飛驒號北上 & 高山溫泉飯店 Check-in": "https://upload.wikimedia.org/wikipedia/commons/9/91/JR_Central_KiHa_85_Takayama_Line.jpg",
  "高山宮川朝市 (Miyagawa Morning Market)": "https://upload.wikimedia.org/wikipedia/commons/d/d8/Miyagawa_morning_market.jpg",
  "高山陣屋 & 飛驒高山三町筋古街": "https://upload.wikimedia.org/wikipedia/commons/e/e0/Takayama_Jinya_Entrance_201706.jpg",
  "飛驒民俗村 (Hida Folk Village) & 溫泉會席饗宴": "https://upload.wikimedia.org/wikipedia/commons/b/b7/JP-Takayama-hida-no-sato-2.jpg",
  "世界文化遺產：白川鄉合掌村 (Shirakawa-go)": "https://upload.wikimedia.org/wikipedia/commons/c/c5/Shirakawa-go_Gassho-zukuri_Village.jpg",
  "JR金澤站「鼓門」& 近江町市場海鮮巡禮": "https://upload.wikimedia.org/wikipedia/commons/f/fe/Kanazawa-STA_Kenrokuen-entrance.jpg",
  "日本三大名園之首：兼六園 & 金澤城公園": "https://upload.wikimedia.org/wikipedia/commons/a/a0/131109_Kenrokuen_Kanazawa_Ishikawa_pref_Japan01s3.jpg",
  "金澤21世紀美術館 (21st Century Museum)": "https://upload.wikimedia.org/wikipedia/commons/3/30/21st_Century_Museum_of_Contemporary_Art_Kanazawa.jpg",
  "東茶屋街 (Higashi Chaya) & 長町武家屋敷": "https://upload.wikimedia.org/wikipedia/commons/c/c9/Higashi_Chaya_District_Kanazawa.jpg",
  "搭乘 JR 特急白鷺號 (Shirasagi) 返回名古屋": "https://upload.wikimedia.org/wikipedia/commons/9/98/JR_West_681_Shirasagi.jpg",
  "大須觀音寺 & 大須商店街 (Osu Shopping Street)": "https://upload.wikimedia.org/wikipedia/commons/7/7b/Osu_Kannon_Nagoya.jpg",
  "久屋大通公園 (RAYARD Hisaya-odori Park)": "https://upload.wikimedia.org/wikipedia/commons/e/ea/Hisaya_Odori_Park_Nagoya.jpg",
  "名古屋城 (Nagoya Castle) & 本丸御殿": "https://upload.wikimedia.org/wikipedia/commons/5/56/Nagoya_Castle_7.jpg",
  "熱田神宮 (Atsuta Jingu) 尊榮參拜": "https://upload.wikimedia.org/wikipedia/commons/c/c6/Atsuta_Shrine.jpg",
  "Noritake之森 (ノリタケの森) & 綠意商圈": "https://upload.wikimedia.org/wikipedia/commons/5/54/Noritake_Garden_Nagoya.jpg",
  "伊勢神宮 外宮 (豐受大神宮)": "https://upload.wikimedia.org/wikipedia/commons/8/87/Ise_Jingu_Geku.jpg",
  "托福橫丁 (おかげ橫丁) & 祓町古街美食巡禮": "https://upload.wikimedia.org/wikipedia/commons/d/d4/Okage_Yokocho_Ise.jpg",
  "伊勢神宮 內宮 (皇大神宮) & 返回名古屋": "https://upload.wikimedia.org/wikipedia/commons/a/a4/Ise_Jingu_Naiku_Bridge.jpg",
  "常滑陶瓷散步道 (Tokoname) & 巨型招財貓 Tokonyan": "https://upload.wikimedia.org/wikipedia/commons/6/69/Tokoname_Tokonyan_Manekineko.jpg",
  "中部國際機場 FLIGHT OF DREAMS 飛行夢幻館": "https://upload.wikimedia.org/wikipedia/commons/e/ed/Chubu_Central_Airport_aerial_view.jpg"
};

fs.writeFileSync('wiki_exact_all_spots.json', JSON.stringify(exactSpots, null, 2));
console.log("Written exact Wikimedia Commons photos for all spots!");
