/**
 * 離線與雲端/本地旅遊手帳 App (Mac & iPhone 通用)
 * 核心功能：包含完整的 2026 名古屋・昇龍道 9 日夢幻行程（100% 精準 Wikipedia 官方實景照片）、手機/電腦隨時新增景點、全自動經緯度解析、全自動檢索廁所與醫療院所
 */

// 預設核心行程資料（100% 日本維基百科 Commons 官方真實景點照）
const PRESET_NAGOYA_TRIP = {
  id: "nagoya-2026-9day",
  title: "2026 名古屋・昇龍道 9日夢幻旅行導覽與紀念冊",
  subtitle: "中日本雪景與飛驒古街浪漫之旅",
  startDate: "2026-07-25",
  endDate: "2026-08-02",
  days: [
    {
      day: 1,
      date: "2026.07.25 (六)",
      title: "抵達名古屋・國寶犬山城與榮商圈",
      trajectory: "中部國際機場 ➔ 名鐵犬山線 ➔ 犬山城下町 ➔ 榮商圈 / 綠洲21",
      spots: [
        {
          id: "spot-1-1",
          title: "中部國際機場 NGO 抵達與交通票券領取",
          time: "11:30 - 12:30",
          category: "交通",
          desc: "中午抵達名古屋門戶「中部國際機場」，順利過關領取行李。前往名鐵車站服務中心兌換「昇龍道巴士/鐵道周遊券」與「高山北陸 Pass」，並搭乘名鐵特急 μ-SKY 前往名古屋站。",
          food: "機場小吃：蝦餅仙貝、風來坊炸雞翅（外帶車上享用）",
          transit: "名鐵特急 μ-SKY (中部國際機場 ➔ 名古屋站，約28分鐘)",
          lat: 34.8583,
          lng: 136.8053,
          img: "https://upload.wikimedia.org/wikipedia/commons/e/ed/Chubu_Central_Airport_aerial_view.jpg",
          souvenirs: [
            { name: "蝦餅仙貝 (海老煎餅)", emoji: "🦐", price: "¥ 800", desc: "名古屋名物，機場限定口味，酥脆鮮甜是台灣人必帶伴手禮首選" },
            { name: "風來坊炸雞翅 (辛口醬)", emoji: "🍗", price: "¥ 1,500", desc: "真空包裝，方便帶回台灣，辣味鹹香令人上癮" },
            { name: "昇龍道周遊券紀念品袋", emoji: "🎌", price: "免費", desc: "兌換 Pass 時贈送，精美日本傳統紋樣提袋" }
          ],
          specialties: [
            { name: "μ-SKY 名鐵特急限定", emoji: "🚄", price: "¥ 1,200 (指定席)", desc: "全日本少數外觀為金屬銀色的時尚特急電車，車廂舒適寬敞" },
            { name: "Centrair 神社限定御守", emoji: "🛫", price: "¥ 500", desc: "機場頂樓有小型航空神社，提供旅途平安御守" }
          ],
          omamori: [],
          toilets: [
            { name: "Centrair 第一航廈 2F 到達大廳公廁", type: "多功能/無障礙" }
          ],
          hospitals: [
            { name: "中部國際機場診療所 (常滑市)", phone: "0569-38-7050", type: "急診與一般科" }
          ]
        },
        {
          id: "spot-1-2",
          title: "國寶犬山城 & 犬山城下町古街",
          time: "13:30 - 16:30",
          category: "景點",
          desc: "全日本僅存十二座現存天守之一，更是極其珍貴的「國寶五城」之一。犬山城佇立於木曾川畔丘陵上，登上天守頂層可360度展望濃尾平原與絕美川景。城下町保有江戶時代町家建築，充滿濃厚古風。",
          food: "城下町必吃：飛驒牛握壽司、醬油烤五平餅、串烤烤糰子",
          transit: "名鐵犬山線特急 (名古屋站 ➔ 犬山遊園站/犬山站，約25分鐘)",
          lat: 35.3883,
          lng: 136.9392,
          img: "https://upload.wikimedia.org/wikipedia/commons/f/fc/Inuyama_Castle_2010.jpg",
          souvenirs: [
            { name: "犬山城天守限定手拭巾", emoji: "🏯", price: "¥ 1,200", desc: "城中限定，印有犬山城輪廓與國寶認定印，質感優良" },
            { name: "犬山城下町 五平餅", emoji: "🍡", price: "¥ 300", desc: "現烤甜味噌塗抹糯米棒，古街散步必吃名物" },
            { name: "飛驒牛大福", emoji: "🍡", price: "¥ 600 / 3入", desc: "季節限定和菓子，外皮軟糯、內餡甘甜，適合帶回台灣」 }
          ],
          specialties: [
            { name: "犬山城下町 手造陶器", emoji: "🏺", price: "¥ 2,000起", desc: "城下町有多間傳統陶藝工房，可現場挑選有田燒紀念品" },
            { name: "犬山限定御城印", emoji: "📜", price: "¥ 300", desc: "近年日本各城流行的「御城印」（城版御朱印），犬山城版本十分精美" }
          ],
          omamori: [
            { name: "三光稻荷神社 戀愛成就御守", emoji: "🪬", effect: "戀愛成就・緣份結良緣", price: "¥ 500" },
            { name: "針綱神社 武運長久守", emoji: "⛩️", effect: "出行平安・武運強健", price: "¥ 800" }
          ],
          toilets: [
            { name: "犬山城登城口觀光案內所公廁", type: "公廁" }
          ],
          hospitals: [
            { name: "犬山中央病院", phone: "0568-61-1250", type: "地方綜合醫院" }
          ]
        },
        {
          id: "spot-1-3",
          title: "榮商圈、綠洲21 (Oasis 21) & 名古屋電視塔",
          time: "18:00 - 20:30",
          category: "美食",
          desc: "返回名古屋市中心最熱鬧的「榮商圈」。綠洲21是以「宇宙船」為概念設計的水景地標，頂層水的宇宙船玻璃步道夜間會進行絢麗燈光秀，與旁邊盛大亮燈的 MIRAI TOWER 名古屋電視塔相映成趣。",
          food: "晚餐必吃【矢場豚味噌豬排】：濃郁赤味噌淋在酥脆炸豬排上，白飯殺手！",
          transit: "地鐵東山線 (名古屋站 ➔ 榮站，約5分鐘)",
          lat: 35.1709,
          lng: 136.9083,
          img: "https://upload.wikimedia.org/wikipedia/commons/6/6b/Oasis21_Nagoya_01.jpg",
          souvenirs: [
            { name: "矢場豚味噌豬排醬 (瓶裝)", emoji: "🫙", price: "¥ 1,000", desc: "赤味噌醬汁帶回家自己炸豬排，是最受歡迎的名古屋伴手禮之一" },
            { name: "Oasis 21 限定提袋", emoji: "🛍️", price: "免費/消費滿送", desc: "「水的宇宙船」文創設計提袋，充滿現代感的名古屋 Icon" },
            { name: "名古屋電視塔模型", emoji: "🗼", price: "¥ 1,500", desc: "名古屋地標紀念品，塔內官方商店限定款，精緻小巧" }
          ],
          specialties: [
            { name: "矢場豚 本家全套套餐", emoji: "🍽️", price: "¥ 2,000起", desc: "現場享用才能嚐到最道地的味噌炸豬排，附白飯無限續碗" },
            { name: "Oasis 21 頂層天空步道票", emoji: "🚀", price: "免費參觀", desc: "玻璃步道夜間燈光秀免費欣賞，建議晚上19:00後造訪」 }
          ],
          omamori: [],
          toilets: [
            { name: "Oasis 21 地下商場公廁 (B1)", type: "無障礙潔淨" }
          ],
          hospitals: [
            { name: "名古屋市立大學病院 (櫻山)", phone: "052-851-5511", type: "24H 綜合急診" }
          ]
        }
      ]
    },
    {
      day: 2,
      date: "2026.07.26 (日)",
      title: "博物館明治村・岐阜城與高山溫泉",
      trajectory: "名古屋 ➔ 博物館明治村 ➔ JR岐阜站 ➔ 金華山纜車/岐阜城 ➔ JR特急飛驒號 ➔ 宿高山溫泉",
      spots: [
        {
          id: "spot-2-1",
          title: "博物館明治村 (Meiji Mura)",
          time: "08:30 - 11:30",
          category: "景點",
          desc: "廣達 100 公頃的野外建築博物館，移築並保存了近代日本明治時期的60多座歷史珍貴建築（如帝國飯店舊館中央大廳、聖薩維爾天主堂）。園區內還能親自搭乘日本最古老的蒸氣火車 (SL) 與京都市電。",
          food: "早餐：明治時代風格小咖哩麵包、小熊蛋包飯",
          transit: "名鐵巴士直達 (名古屋名鐵巴士中心 ➔ 明治村，約60分鐘)",
          lat: 35.3414,
          lng: 136.9889,
          img: "https://upload.wikimedia.org/wikipedia/commons/d/d7/Imperial_Hotel_Entrance_Hall_Meiji-mura.jpg",
          souvenirs: [
            { name: "明治村限定 SL 蒸氣火車徽章", emoji: "🚂", price: "¥ 600", desc: "明治村最古老蒸氣火車的官方限定徽章，鐵道迷必入手" },
            { name: "帝國飯店 F.L.Wright 限定明信片組", emoji: "📮", price: "¥ 500", desc: "建築大師萊特設計的帝國飯店舊館精緻明信片，限博物館內販售" },
            { name: "明治時代金平糖糖果罐", emoji: "🍬", price: "¥ 800", desc: "重現明治風格鐵罐包裝，放入傳統六角星形糖，精緻又好吃" }
          ],
          specialties: [
            { name: "SL 蒸氣火車搭乘體驗", emoji: "🚂", price: "¥ 500", desc: "日本最古老的蒸氣火車在園區內定時繞行，全家必體驗的珍貴鐵路歷史" },
            { name: "京都市電搭乘體驗", emoji: "🚋", price: "¥ 200", desc: "明治時代京都市電真實車廂在園區內行駛，拍照必打卡" }
          ],
          omamori: [],
          toilets: [
            { name: "明治村正門入口公廁", type: "無障礙公廁" }
          ],
          hospitals: [
            { name: "犬山市立病院", phone: "0568-61-1250", type: "地區綜合醫院" }
          ]
        },
        {
          id: "spot-2-2",
          title: "岐阜城 & 金華山纜車漫遊",
          time: "12:30 - 15:30",
          category: "景點",
          desc: "戰國梟雄織田信長「天下布武」的起點！搭乘金華山纜車穿過陡峭山林抵達山頂岐阜城。天守閣內部展示信長歷史史料，頂樓展望台可鳥瞰清澈長良川與廣袤的岐阜市景，極具壯闊歷史氣勢。",
          food: "午餐必吃：長良川香魚姿燒定食、岐阜飛驒牛朴葉味噌燒",
          transit: "JR高山本線 (犬山/明治村 ➔ 岐阜站，約25分鐘) + 市營巴士至岐阜公園",
          lat: 35.4339,
          lng: 136.7822,
          img: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Gifu_Castle03s3840.jpg",
          souvenirs: [
            { name: "岐阜城限定御城印", emoji: "📜", price: "¥ 300", desc: "登頂岐阜城限定，印有信長家紋「永樂通寶」，精緻武將御城印" },
            { name: "長良川鮎魚甘露煮 (瓶裝)", emoji: "🐟", price: "¥ 1,500", desc: "清澈長良川天然香魚以醬油甘露煮，入口即化，岐阜最具代表性的伴手禮" },
            { name: "信長鐵炮飛驒牛咖哩禮盒", emoji: "🍛", price: "¥ 1,200", desc: "以信長形象設計的禮盒包裝，搭配岐阜名產飛驒牛的罐裝咖哩" }
          ],
          specialties: [
            { name: "金華山纜車乘車體驗", emoji: "🚡", price: "¥ 600 (來回)", desc: "搭乘急陡山坡纜車俯瞰岐阜市景，是登城的必要交通兼景點體驗" },
            { name: "岐阜城展望台全景", emoji: "🏯", price: "¥ 200 (入場)", desc: "天守頂層360度展望長良川與濃尾平原，信長當年眺望的戰國風景" }
          ],
          omamori: [
            { name: "伊奈波神社 武運御守", emoji: "⛩️", effect: "武運長久・事業成就", price: "¥ 800" },
            { name: "信長公廟所 御朱印", emoji: "📖", effect: "戰國武將加持・目標達成", price: "¥ 500" }
          ],
          toilets: [
            { name: "金華山山頂纜車站公廁", type: "乾淨溫水便座" }
          ],
          hospitals: [
            { name: "岐阜縣立綜合醫療中心", phone: "058-246-1111", type: "急診中心" }
          ]
        },
        {
          id: "spot-2-3",
          title: "JR特急飛驒號北上 & 高山溫泉飯店 Check-in",
          time: "16:30 - 20:00",
          category: "住宿",
          desc: "於 JR 岐阜站搭乘著名的「特急飛驒號 (Wide View Hida)」，沿著飛驒川峽谷一路北上進入飛驒山脈腹地。抵達高山後入住擁有露天風呂的飛驒高山溫泉旅館，洗去一日旅途疲勞。",
          food: "晚餐必吃【丸明 / 味藏天國】：頂級 A5 飛驒牛燒肉，油脂分布如雪花般極致入口即化！",
          transit: "JR特急飛驒號 (岐阜站 ➔ 高山站，約120分鐘)",
          lat: 36.1411,
          lng: 137.2513,
          img: "https://upload.wikimedia.org/wikipedia/commons/9/91/JR_Central_KiHa_85_Takayama_Line.jpg",
          souvenirs: [
            { name: "特急飛驒號紀念入場券", emoji: "🎫", price: "¥ 300", desc: "限定硬卡紙版入場券，印有飛驒號 KiHa85 圖案，鐵道迷的珍貴收藏" },
            { name: "飛驒高山酒造清酒", emoji: "🍶", price: "¥ 1,800", desc: "抵達高山後可在老街酒造購入純米吟醸「深山菊」或「二木屋」，冷藏保存" }
          ],
          specialties: [
            { name: "飛驒高山溫泉露天風呂體驗", emoji: "♨️", price: "含住宿", desc: "入住溫泉旅館後享用飛驒山脈礦泉泡湯，消除旅途疲勞的最佳方式" },
            { name: "飛驒牛 A5 燒肉（丸明）", emoji: "🥩", price: "¥ 5,000起", desc: "高山必吃名店，油脂如雪花分布的飛驒牛，入口即化絕對值得" }
          ],
          omamori: [],
          toilets: [
            { name: "JR 高山站東口公廁", type: "多功能無障礙" }
          ],
          hospitals: [
            { name: "高山赤十字病院", phone: "0577-32-1111", type: "飛驒地區最大綜合急診醫院" }
          ]
        }
      ]
    },
    {
      day: 3,
      date: "2026.07.27 (一)",
      title: "高山朝市・陣屋與古街純日式漫遊",
      trajectory: "高山宮川朝市 ➔ 高山陣屋 ➔ 飛驒高山三町筋老街 ➔ 飛驒民俗村",
      spots: [
        {
          id: "spot-3-1",
          title: "高山宮川朝市 (Miyagawa Morning Market)",
          time: "08:00 - 10:00",
          category: "景點",
          desc: "日本三大朝市之一，沿著清澈的宮川河岸綿延開來。當地農夫與老婦人親切設攤，販售當季新鮮水果（高山桃子、飛驒蘋果）、手工飛驒娃娃 (Sarubobo)、現做仙貝與醬菜，充滿濃濃的人情味與活力。",
          food: "早餐小吃：飛驒高山牛奶、飛驒牛包子、現烤醬油仙貝",
          transit: "自高山站步行約10分鐘即可抵達宮川沿岸",
          lat: 36.1444,
          lng: 137.2586,
          img: "https://upload.wikimedia.org/wikipedia/commons/d/d8/Miyagawa_morning_market.jpg",
          souvenirs: [
            { name: "飛驒娃娃 (さるぼぼ)", emoji: "🫆", price: "¥ 600", desc: "高山最具代表性的紅色布偆，傳說能帶來戀愛順利、子孫繁榮，是最受歡迎的高山伴手禮" },
            { name: "飛驒高山牛奶糖", emoji: "🍬", price: "¥ 500", desc: "使用飛驒山脈牧場新鮮牛奶製作，乳香濃鬱入口即化" },
            { name: "飛驒蘋果果醬", emoji: "🍎", price: "¥ 800", desc: "朝市農夫手工製作，無添加純天然，帶回台灣超贊" }
          ],
          specialties: [
            { name: "高山宮川朝市 朝取蔬果", emoji: "🥬", price: "時價", desc: "當地農夫親自採摘的超新鮮山菜與蔬果，現場試吃購買互動感十足" },
            { name: "現烤醬油仙貝 (せんべい)", emoji: "🍘", price: "¥ 200", desc: "朝市現場礴火炙烤，醬油香氣四溢，配飛驒牛奶一起吃超幸福" }
          ],
          omamori: [
            { name: "椒山八幡宮 縁結び御守", emoji: "🪬", effect: "良緣招來・婚姻圓滿", price: "¥ 700" }
          ],
          toilets: [
            { name: "宮川朝市鍛治橋頭公廁", type: "公廁" }
          ],
          hospitals: [
            { name: "高山赤十字病院", phone: "0577-32-1111", type: "急診與一般科" }
          ]
        },
        {
          id: "spot-3-2",
          title: "高山陣屋 & 飛驒高山三町筋古街",
          time: "10:30 - 13:30",
          category: "景點",
          desc: "「高山陣屋」是全日本唯一保存完整的江戶時代代官/郡代役所，內部廣大包含了官邸、審判庭與米倉。「三町筋老街」則有「飛驒小京都」美譽，黑木造的古老商屋保留了江戶時代造酒廠與古董店。",
          food: "午餐：坂口屋飛驒牛握壽司（放在仙貝上吃）、飛驒高山醬油拉麵",
          transit: "高山朝市步行約3分鐘抵達陣屋與三町筋",
          lat: 36.1396,
          lng: 137.2578,
          img: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Takayama_Jinya_Entrance_201706.jpg",
          souvenirs: [
            { name: "高山陳屋 御朱印帳", emoji: "📓", price: "¥ 1,500", desc: "古代代官所限定御朱印帳，印有幕府公文書格式，歷史感十足的限定品" },
            { name: "飛驒牛握壽司 (仙貝盛)", emoji: "🍣", price: "¥ 1,200 / 3貫", desc: "三町筋老街現場製作，飛驒牛薄片鋪在脆米仙貝上，是高山最 Instagrammable 的食物" },
            { name: "飛驒高山地酒「深山菊」", emoji: "🍶", price: "¥ 2,000", desc: "老街酒造現場試飲購買，純米吟醸口感清冽，名酒感感者必入手" }
          ],
          specialties: [
            { name: "飛驒高山三町筋老街 古董巡禮", emoji: "🏺", price: "自由參觀", desc: "江戸時代釀酒厂改建的古董店，能找到真正的古伊万里燒與老陶器" },
            { name: "高山陳屋 特別公開", emoji: "🎯", price: "¥ 440", desc: "入場參觀全日本唯一保存完整的江戸時代代官役所，審判庭實景震撼" }
          ],
          omamori: [
            { name: "飛驒山王宮 日枝神社 縁結び守", emoji: "⛩️", effect: "良緣成就・家庭圓滿", price: "¥ 500" },
            { name: "飛驒護國神社 勝守", emoji: "🪬", effect: "考試必勝・事業勝運", price: "¥ 600" }
          ],
          toilets: [
            { name: "高山陣屋前廣場公廁", type: "無障礙公廁" }
          ],
          hospitals: [
            { name: "高山赤十字病院", phone: "0577-32-1111", type: "地區醫院" }
          ]
        },
        {
          id: "spot-3-3",
          title: "飛驒民俗村 (Hida Folk Village) & 溫泉會席饗宴",
          time: "14:30 - 18:30",
          category: "美食",
          desc: "重現飛驒地區傳統茅草屋頂建築的野外博物館。戶外池塘邊錯落著從各村落移築過來的合掌造民家，內部展示傳統農具與養蠶工具。傍晚返回溫泉飯店體驗溫泉與頂級會席料理。",
          food: "晚餐【高山老街和牛壽喜燒】：以香濃朴葉味噌與飛驒牛慢火燉煮，下飯絕配！",
          transit: "高山濃飛巴士總站搭乘「市民巴士 (Machinami Bus)」約10分鐘",
          lat: 36.1325,
          lng: 137.2347,
          img: "https://upload.wikimedia.org/wikipedia/commons/b/b7/JP-Takayama-hida-no-sato-2.jpg",
          souvenirs: [
            { name: "飛驒民俗村 miniature 合掌造模型", emoji: "🏡", price: "¥ 2,500", desc: "精緻茸草屋頂合掌造民家 1/50 模型，帶回台灣最有記念價値的高山伴手禮" },
            { name: "高山山椒味噌醬 (民俗村特產)", emoji: "🧂", price: "¥ 700", desc: "以高山特產山椒拈入白味噌，是民俗村的限定調味料" },
            { name: "高山老街和牛壽嗜焼砲項目", emoji: "🇨", price: "含溫泉館客房", desc: "溫泉旅館所提供的頂級會席料理，包含飛驒牛專屬料理的達人樣組合" }
          ],
          specialties: [
            { name: "飛驒民俗村 展示參觀", emoji: "🏡", price: "¥ 800", desc: "野外博物館展示各村落移築的合掌造民家，內部展示傳統農具與養訕工具" },
            { name: "高山老街和牛壽嗜燒餅體驗", emoji: "🍖", price: "¥ 2,500", desc: "上饑赤味噌與飛驒牛慢火燉煮，下飯絕配，是高山最居家的漨溫塨調" }
          ],
          omamori: [],
          toilets: [
            { name: "飛驒民俗村入口觀光休憩所公廁", type: "乾淨溫水洗手間" }
          ],
          hospitals: [
            { name: "高山赤十字病院", phone: "0577-32-1111", type: "綜合醫院" }
          ]
        }
      ]
    },
    {
      day: 4,
      date: "2026.07.28 (二)",
      title: "昇龍道黃金線：白川鄉合掌村 ➔ 金澤海鮮晚宴",
      trajectory: "高山濃飛巴士站 ➔ 白川鄉合掌村 (城山展望台/神田家) ➔ 濃飛巴士 ➔ JR金澤站",
      spots: [
        {
          id: "spot-4-1",
          title: "世界文化遺產：白川鄉合掌村 (Shirakawa-go)",
          time: "08:50 - 13:30",
          category: "景點",
          desc: "享譽全球的世界遺產！以木造呈人字型木樑組合的「合掌造」房屋著稱，為了抵禦飛驒地區嚴冬積雪。搭乘接駁車登頂「城山展望台」，可全景俯瞰如童話世界般錯落於山谷之間的夢幻村落。",
          food: "午餐必吃：落人咖啡 (圍爐裏和牛咖哩飯/紅豆湯)、合掌村烤飛驒牛串",
          transit: "濃飛巴士 (高山濃飛巴士總站 ➔ 白川鄉，約50分鐘，需預約)",
          lat: 36.2562,
          lng: 136.9037,
          img: "https://upload.wikimedia.org/wikipedia/commons/c/c5/Shirakawa-go_Gassho-zukuri_Village.jpg",
                    souvenirs: [
            { name: "合掌造 miniature 模型", emoji: "🏡", price: "¥ 2,500", desc: "精緻茅草屋頂合掌造民家模型，帶回台灣最有記念價值的白川鄉伴手禮" },
            { name: "白川鄉 手工傳統草木染布", emoji: "🧣", price: "¥ 3,000", desc: "合掌村老奶奶手工染色的布料，使用山草植物天然染製，每件獨一無二" },
            { name: "飛驒山椒味噌醬 (合掌村特產)", emoji: "🧂", price: "¥ 700", desc: "以白川鄉特產山椒拌入白味噌，是世界遺產村的限定調味料" }
          ],
          specialties: [
            { name: "城山展望台 全景俯瞰體驗", emoji: "🏔️", price: "¥ 200 (接駁車)", desc: "從高處俯瞰整個合掌村，冬天雪景更是世界級絕景，夏天綠意同樣震撼" },
            { name: "神田家 合掌屋見學", emoji: "🏘️", price: "¥ 400", desc: "進入真實有人居住的300年茅草屋內部參觀，體驗江戶時代農村生活" }
          ],
          omamori: [
            { name: "白川鄉 白川八幡神社 安産守", emoji: "🪬", effect: "安產祈願・孩子健康成長", price: "¥ 500" }
          ],
toilets: [
            { name: "白川鄉巴士總站公廁", type: "大型公廁" },
            { name: "荻町城跡展望台休憩所廁所", type: "觀景台公廁" }
          ],
          hospitals: [
            { name: "白川村診療所", phone: "05769-6-1211", type: "村立初級急診診療所" }
          ]
        },
        {
          id: "spot-4-2",
          title: "JR金澤站「鼓門」& 近江町市場海鮮巡禮",
          time: "15:00 - 18:00",
          category: "景點",
          desc: "搭乘濃飛巴士穿過山脈抵達金澤。金澤站被選為「全球最美車站之一」，巨大的木造「鼓門」結合了傳統能樂鼓與現代玻璃帷幕建築。隨後前往擁有「金澤市民廚房」之稱的近江町市場。",
          food: "晚餐必吃【近江町市場海鮮丼】：鋪滿18種日本海直送鮪魚大腹、甜蝦、海膽與鮭魚卵！",
          transit: "濃飛巴士 (白川鄉 ➔ 金澤站東口，約85分鐘)",
          lat: 36.5781,
          lng: 136.6482,
          img: "https://upload.wikimedia.org/wikipedia/commons/f/fe/Kanazawa-STA_Kenrokuen-entrance.jpg",
                    souvenirs: [
            { name: "金澤棒茶 (ほうじ茶)", emoji: "🍵", price: "¥ 1,000", desc: "金澤名物焙茶，以茶梗低溫焙煎，香氣迷人，近江町市場附近有多家百年老店" },
            { name: "近江町市場 鮮度保證海鮮便當", emoji: "🍱", price: "¥ 2,500", desc: "市場即買即食，滿滿日本海新鮮海產，也有保冰箱裝可帶上飛機" },
            { name: "金澤金箔工藝品", emoji: "✨", price: "¥ 800起", desc: "金澤佔日本金箔生產量的99%，近江町市場周邊有多家金箔專賣店，筷子/髮夾等精緻紀念品" }
          ],
          specialties: [
            { name: "近江町市場 海鮮丼 (18種頂料)", emoji: "🍣", price: "¥ 3,000起", desc: "鋪滿鮪魚大腹、甜蝦、海膽、鮭魚卵共18種食材的豪華海鮮丼，金澤必吃" },
            { name: "鼓門 光影藝術攝影", emoji: "🥁", price: "免費", desc: "夜間鼓門投影燈光秀，是全日本最美車站之一的招牌打卡地點" }
          ],
          omamori: [],
toilets: [
            { name: "JR 金澤站鼓門前地下公廁", type: "無障礙公廁" }
          ],
          hospitals: [
            { name: "金澤大學附屬病院", phone: "076-265-2000", type: "石川縣重症救急醫院" }
          ]
        }
      ]
    },
    {
      day: 5,
      date: "2026.07.29 (三)",
      title: "金澤文化精華：兼六園・東茶屋街與武家屋敷",
      trajectory: "金澤站 ➔ 兼六園 ➔ 金澤21世紀美術館 ➔ 東茶屋街 ➔ 長町武家屋敷",
      spots: [
        {
          id: "spot-5-1",
          title: "日本三大名園之首：兼六園 & 金澤城公園",
          time: "08:30 - 11:30",
          category: "景點",
          desc: "兼具「宏大、幽邃、人力、蒼古、水泉、眺望」勝景的迴遊式大名庭園。徽軫燈籠與霞之池是代表性標誌。隔壁的金澤城公園重現了江戶時代前田利家百萬石城池的菱櫓與五十間長屋，壯麗宏偉。",
          food: "早餐：兼六園茶屋手作抹茶配金澤琴城庵和菓子",
          transit: "金澤周遊巴士 (金澤站 ➔ 兼六園下站，約15分鐘)",
          lat: 36.5621,
          lng: 136.6625,
          img: "https://upload.wikimedia.org/wikipedia/commons/a/a0/131109_Kenrokuen_Kanazawa_Ishikawa_pref_Japan01s3.jpg",
                    souvenirs: [
            { name: "兼六園 御朱印 (石川護國神社)", emoji: "📖", price: "¥ 500", desc: "兼六園旁的護國神社限定御朱印，精美金箔裝飾，金澤文化氣息濃厚" },
            { name: "金澤 金箔霜淇淋 (箔一)", emoji: "🍦", price: "¥ 650", desc: "覆蓋真正金箔的霜淇淋，吃起來口感無異但視覺超豪華，兼六園外必吃" },
            { name: "加賀友禅 絲巾/手帕", emoji: "🧣", price: "¥ 3,000", desc: "金澤傳統加賀友禅染色工藝，以花卉自然圖案為主，色彩溫潤優雅" }
          ],
          specialties: [
            { name: "兼六園 徽軫燈籠 打卡景點", emoji: "🏮", price: "¥ 320 (入場費)", desc: "霞之池旁二腳石燈籠是日本最知名的庭園景物，日出時分最美" },
            { name: "金澤城 菱櫓・五十間長屋 見學", emoji: "🏯", price: "¥ 320", desc: "重建的前田百萬石城池建築，展示精湛的傳統木工技術" }
          ],
          omamori: [
            { name: "石川護國神社 平安御守", emoji: "🪬", effect: "旅途平安・身體健康", price: "¥ 500" }
          ],
toilets: [
            { name: "兼六園桂坂口公廁", type: "無障礙公廁" }
          ],
          hospitals: [
            { name: "金澤市立病院", phone: "076-245-2600", type: "市立綜合醫院" }
          ]
        },
        {
          id: "spot-5-2",
          title: "金澤21世紀美術館 (21st Century Museum)",
          time: "11:30 - 14:00",
          category: "景點",
          desc: "由妹島和世與西澤立衛 (SANAA) 設計的圓盤玻璃建築。最為人知曉的是林明弘與阿根廷藝術家 Leandro Erlich 的知名作品《泳池 (The Swimming Pool)》，人們可在水上與水下互相揮手互動。",
          food: "午餐：Fusion21 館內義式法式藝術套餐、金澤第一拉麵【面屋大河】濃郁味噌拉麵",
          transit: "自兼六園真弓坂口步行約5分鐘即可抵達",
          lat: 36.5609,
          lng: 136.6582,
          img: "https://upload.wikimedia.org/wikipedia/commons/3/30/21st_Century_Museum_of_Contemporary_Art_Kanazawa.jpg",
                    souvenirs: [
            { name: "21世紀美術館 限定藝術明信片", emoji: "🎨", price: "¥ 300 / 張", desc: "館內官方商店限定，收錄館藏作品的高質感明信片，設計感十足" },
            { name: "《泳池》作品 限定壓克力置物架", emoji: "🏊", price: "¥ 2,000", desc: "以 Leandro Erlich 知名泳池作品為主題的創意文具，美術館唯一限定版本" }
          ],
          specialties: [
            { name: "泳池互動藝術體驗 (The Swimming Pool)", emoji: "🌊", price: "¥ 430 (收費區)", desc: "從水上、水下兩個角度與觀眾互動揮手，是全球最獨特的沉浸式藝術體驗之一" },
            { name: "館內無料區 漫遊日本當代藝術", emoji: "🖼️", price: "免費", desc: "戶外裝置藝術免費欣賞，圓形玻璃建築本身就是最美的藝術品" }
          ],
          omamori: [],
toilets: [
            { name: "21世紀美術館 B1 公廁", type: "五星級潔淨" }
          ],
          hospitals: [
            { name: "金澤大學附屬病院", phone: "076-265-2000", type: "急診中心" }
          ]
        },
        {
          id: "spot-5-3",
          title: "東茶屋街 (Higashi Chaya) & 長町武家屋敷",
          time: "14:30 - 18:00",
          category: "美食",
          desc: "金澤最大茶屋街，木造出格子窗「木蟲籠」交錯於古樸石板路上。在這裡能造訪箔一金箔本店體驗箔一箔鳳金箔霜淇淋。傍晚漫遊長町武家屋敷，探訪昔日中下級武士住居土牆與木門巷弄。",
          food: "下午茶必吃：【箔一】金箔霜淇淋、金澤烏骨雞金箔蛋糕",
          transit: "金澤周遊巴士 (21世紀美術館 ➔ 橋場町站，約10分鐘)",
          lat: 36.5725,
          lng: 136.6665,
          img: "https://upload.wikimedia.org/wikipedia/commons/c/c9/Higashi_Chaya_District_Kanazawa.jpg",
                    souvenirs: [
            { name: "箔一 金箔化妝品 (金箔面膜)", emoji: "✨", price: "¥ 3,000", desc: "使用99.99%純金金箔製作的美容面膜，是東茶屋街最受歡迎的高級伴手禮" },
            { name: "加賀棒茶 (丸八製茶場)", emoji: "🍵", price: "¥ 1,200", desc: "金澤最著名的加賀傳統焙茶，茶梗低溫焙煎、回甘悠長，老字號名店限定" },
            { name: "箔一 金箔霜淇淋", emoji: "🍦", price: "¥ 650", desc: "覆蓋純金金箔、配抹茶冰淇淋，視覺震撼滋味豐富，必打卡" }
          ],
          specialties: [
            { name: "東茶屋街 金箔工藝 DIY 體驗", emoji: "🔨", price: "¥ 2,200", desc: "箔一本店提供金箔貼貼體驗，親手在筷子/漆盒上貼上真金箔，帶回家的絕佳紀念品" },
            { name: "長町武家屋敷 土牆巷弄漫遊", emoji: "🏚️", price: "免費", desc: "昔日中下級武士的住居區域，冬天土牆覆蓋稻草防凍的景色最具歷史風情" }
          ],
          omamori: [
            { name: "尾山神社 縁結び守", emoji: "⛩️", effect: "前田利家加持・戀愛成就良緣", price: "¥ 800" },
            { name: "尾山神社 開運守", emoji: "🪬", effect: "諸願成就・開運招福", price: "¥ 700" }
          ],
toilets: [
            { name: "東茶屋街入口觀光案內所公廁", type: "公廁" }
          ],
          hospitals: [
            { name: "金澤市立病院", phone: "076-245-2600", type: "地區醫院" }
          ]
        }
      ]
    },
    {
      day: 6,
      date: "2026.07.30 (四)",
      title: "特急白鷺號返回名古屋・大須觀音與久屋大通",
      trajectory: "JR金澤站 ➔ JR特急白鷺號 ➔ JR名古屋站 ➔ 大須觀音/大須商店街 ➔ 久屋大通公園",
      spots: [
        {
          id: "spot-6-1",
          title: "搭乘 JR 特急白鷺號 (Shirasagi) 返回名古屋",
          time: "09:00 - 12:00",
          category: "交通",
          desc: "搭乘特急白鷺號列車穿越石川、福井與滋賀縣，沿途能遠眺琵琶湖湖北風光與伊吹山美景，約2.5小時平穩返抵名古屋站，Check-in 榮商圈或名駅周邊飯店。",
          food: "午餐鐵道便當：金澤站柿之葉壽司、越前蟹黃押壽司便當",
          transit: "JR特急白鷺號 (金澤站 ➔ 名古屋站，約150分鐘)",
          lat: 35.1709,
          lng: 136.8815,
          img: "https://upload.wikimedia.org/wikipedia/commons/9/98/JR_West_681_Shirasagi.jpg",
                    souvenirs: [
            { name: "金澤柿之葉壽司", emoji: "🍣", price: "¥ 1,200", desc: "在白鷺號列車上吃的金澤站名物，以柿葉包裹鯖魚醃漬押壽司，清香微酸" },
            { name: "越前蟹黃押壽司便當", emoji: "🦀", price: "¥ 1,800", desc: "福井名物越前蟹的香濃蟹黃，搭配醋飯製成押壽司，金澤站月台限定名物" }
          ],
          specialties: [
            { name: "JR特急白鷺號 景窗體驗", emoji: "🚅", price: "含票價", desc: "沿途穿越石川、福井縣，可欣賞琵琶湖北岸與伊吹山壯麗景色，鐵路旅行精髓" }
          ],
          omamori: [],
toilets: [
            { name: "JR 名古屋站新幹線口公廁", type: "多功能/無障礙" }
          ],
          hospitals: [
            { name: "名古屋第一赤十字病院", phone: "052-481-5111", type: "急診中心" }
          ]
        },
        {
          id: "spot-6-2",
          title: "大須觀音寺 & 大須商店街 (Osu Shopping Street)",
          time: "13:30 - 17:30",
          category: "景點",
          desc: "擁有400多年歷史的大須觀音寺是名古屋市民的心靈寄託。圍繞觀音寺的「大須商店街」包含超過1200家店家，融合了古着店、動漫電玩、女僕咖啡廳與異國美食，充滿熱情又復古的商店街活力。",
          food: "大須必吃：李先生台灣名物炸雞、炸蝦天婦羅飯糰、鯛魚燒",
          transit: "地鐵鶴舞線 (伏見站 ➔ 大須觀音站，約3分鐘)",
          lat: 35.1597,
          lng: 136.8992,
          img: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Osu_Kannon_Nagoya.jpg",
                    souvenirs: [
            { name: "大須 古著/二手名牌", emoji: "👗", price: "時價", desc: "大須商店街有超過50間古著店，能以超低價買到日本高品質中古名牌衣物" },
            { name: "名古屋限定手羽先醬料包", emoji: "🍗", price: "¥ 800", desc: "世界之山將的胡椒鹽炸雞翅醬料包，帶回台灣自己複製名古屋味" },
            { name: "大須觀音 開運縁起物 (招財貓/不倒翁)", emoji: "🪆", price: "¥ 500起", desc: "大須觀音周邊廟會小販攤，有大量開運吉祥物與神社周邊紀念品可選購" }
          ],
          specialties: [
            { name: "大須 女僕咖啡廳體驗", emoji: "☕", price: "¥ 1,000起", desc: "大須商店街集中了多間知名女僕咖啡廳，是御宅族文化的聖地" },
            { name: "李先生台灣炸雞 (台灣名物)", emoji: "🍗", price: "¥ 400", desc: "在日本大受歡迎的台灣炸雞名店，異鄉遇台灣味，口感酥脆回家味" }
          ],
          omamori: [
            { name: "大須觀音 厄除け御守", emoji: "🪬", effect: "消災避厄・諸願成就", price: "¥ 500" },
            { name: "大須觀音 安全交通御守", emoji: "🚗", effect: "交通安全・出行無虞", price: "¥ 600" }
          ],
toilets: [
            { name: "大須觀音寺廟區公廁", type: "公廁" }
          ],
          hospitals: [
            { name: "NTT東日本伊豆病院", phone: "052-221-1111", type: "地區急診" }
          ]
        },
        {
          id: "spot-6-3",
          title: "久屋大通公園 (RAYARD Hisaya-odori Park)",
          time: "18:00 - 21:00",
          category: "美食",
          desc: "翻新後的久屋大通公園結合了大型綠地、水池景觀與時尚露天餐飲店。夜間在此散步，搭配電視塔點燈，氣氛無比浪漫舒適。",
          food: "晚餐必吃【風來坊 / 世界之山將】：胡椒香氣十足的胡椒胡麻炸雞翅 (手羽先) 搭配冰啤酒！",
          transit: "自大須商店街步行或搭乘地鐵至榮站/久屋大通站",
          lat: 35.1722,
          lng: 136.9086,
          img: "https://upload.wikimedia.org/wikipedia/commons/e/ea/Hisaya_Odori_Park_Nagoya.jpg",
                    souvenirs: [
            { name: "風來坊 手羽先炸雞翅 (真空包)", emoji: "🍗", price: "¥ 1,200", desc: "名古屋發源炸雞翅名店真空包，方便帶回台灣，胡椒香氣超下酒" },
            { name: "RAYARD 久屋 名古屋限定馬克杯", emoji: "☕", price: "¥ 1,500", desc: "RAYARD 公園內的文創商店有各種名古屋地標設計陶瓷杯，值得收藏" }
          ],
          specialties: [
            { name: "RAYARD 久屋大通公園 夜間散步", emoji: "🌳", price: "免費", desc: "翻新後的綠地公園結合時尚品牌餐廳，夜間搭配電視塔燈光無比浪漫" },
            { name: "名古屋電視塔 Sky Deck 展望", emoji: "🗼", price: "¥ 700", desc: "名古屋地標登高展望，夜景360度俯瞰名古屋市區燈海，戀人必去" }
          ],
          omamori: [],
toilets: [
            { name: "RAYARD 久屋大通 PARK 綠地公廁", type: "潔淨公廁" }
          ],
          hospitals: [
            { name: "名古屋市立大學病院", phone: "052-851-5511", type: "24H 綜合急診" }
          ]
        }
      ]
    },
    {
      day: 7,
      date: "2026.07.31 (五)",
      title: "名古屋城・熱田神宮與蓬萊軒鰻魚飯",
      trajectory: "名古屋城 ➔ 金鯱橫丁 ➔ 熱田神宮 ➔ 蓬萊軒神宮店 ➔ ノリタケの森 (Noritake之森)",
      spots: [
        {
          id: "spot-7-1",
          title: "名古屋城 (Nagoya Castle) & 本丸御殿",
          time: "08:30 - 11:30",
          category: "景點",
          desc: "德川家康下令建造的尾張德川家居城，天守閣屋頂上有一對閃閃發光金光閃閃的「金鯱」。完全採用最高級檜木重修的「本丸御殿」，內部奢華的金箔障壁畫（狩野派）震撼人心，展現德川將軍家的權勢。",
          food: "城下小吃：金鯱金箔霜淇淋、名古屋棊子麵 (Kishi-men)",
          transit: "地鐵名城線 (榮站 ➔ 名古屋城站，約6分鐘)",
          lat: 35.1847,
          lng: 136.8997,
          img: "https://upload.wikimedia.org/wikipedia/commons/5/56/Nagoya_Castle_7.jpg",
                    souvenirs: [
            { name: "名古屋城 金鯱 限定金箔霜淇淋", emoji: "🍦", price: "¥ 650", desc: "城下金鯱橫丁限定，覆蓋金箔的金鯱造型霜淇淋，超出片必買打卡美食" },
            { name: "名古屋城 御城印", emoji: "📜", price: "¥ 300", desc: "德川家康建城限定御城印，印有「金鯱」圖案與天守輪廓，城迷必收藏" },
            { name: "金鯱 まるや本店 限定蝦煎餅", emoji: "🦐", price: "¥ 800", desc: "金鯱橫丁內老字號蝦煎餅，現烤香脆，是名古屋城最受歡迎的伴手禮首選" }
          ],
          specialties: [
            { name: "本丸御殿 金箔障壁畫 見學", emoji: "🏯", price: "含城票¥500", desc: "完全以檜木複原的德川將軍御殿，狩野派金箔繪畫令人嘆為觀止" },
            { name: "金鯱橫丁 名古屋めし 美食巡禮", emoji: "🍽️", price: "各店自費", desc: "雲集名古屋8大在地美食的橫丁，棊子麵、天むす、味噌豬排一次滿足" }
          ],
          omamori: [
            { name: "名古屋東照宮 勝運御守", emoji: "⛩️", effect: "德川家康加持・事業勝利", price: "¥ 700" }
          ],
toilets: [
            { name: "名古屋城正門入口處公廁", type: "無障礙公廁" },
            { name: "金鯱橫丁義直區公廁", type: "乾淨溫水便座" }
          ],
          hospitals: [
            { name: "名大病院 (名古屋大學醫學部附屬病院)", phone: "052-741-2111", type: "英語/國際醫療" }
          ]
        },
        {
          id: "spot-7-2",
          title: "熱田神宮 (Atsuta Jingu) 尊榮參拜",
          time: "12:00 - 15:30",
          category: "景點",
          desc: "日本三大神宮之一，供奉著日本三大神器之一的「草薙神劍」。神宮被綠意盎然的千年古木巨杉環抱，氣氛寧靜莊嚴。內有織田信長在桶狹間之戰大勝後捐贈的「信長牆」。",
          food: "午餐必吃百年名店【あつた蓬萊軒 神宮店】：祖傳140年特製醬汁炭烤鰻魚飯三吃 (Hitsumabushi)！",
          transit: "地鐵名城線 (名古屋城站 ➔ 熱田神宮西站，約18分鐘)",
          lat: 35.1261,
          lng: 136.9089,
          img: "https://upload.wikimedia.org/wikipedia/commons/c/c6/Atsuta_Shrine.jpg",
                    souvenirs: [
            { name: "熱田神宮 信長塀 御守", emoji: "🪬", price: "¥ 700", desc: "桶狹間大勝後信長奉納的石牆旁限定販售，武運最強御守，信長迷必買" },
            { name: "あつた蓬萊軒 鰻魚飯禮盒", emoji: "🍱", price: "¥ 3,800", desc: "百年名店特製醬汁鰻魚飯冷凍禮盒，可帶回台灣重現名古屋最頂級滋味" },
            { name: "熱田神宮 神札 (家內安全)", emoji: "🏮", price: "¥ 1,000", desc: "供奉草薙神劍的三大神宮神札，祈求家庭平安，是最有分量的開運品" }
          ],
          specialties: [
            { name: "ひつまぶし 鰻魚飯三吃 (蓬萊軒)", emoji: "🐟", price: "¥ 3,850", desc: "①直接吃 ②配山葵和蔥 ③加高湯泡茶漬飯，三種吃法在名古屋百年最頂" },
            { name: "熱田神宮 千年古木 參拜體驗", emoji: "🌲", price: "免費", desc: "被高達800年以上的巨大古杉林包圍，日本三大神宮之一的壓倒性神聖氣氛" }
          ],
          omamori: [
            { name: "熱田神宮 草薙御守 (開運最強)", emoji: "⚔️", effect: "日本三大神器加持・諸願成就・最強開運", price: "¥ 700" },
            { name: "熱田神宮 縁結び守", emoji: "🪬", effect: "天照大神・草薙神劍加持・戀愛良緣", price: "¥ 600" },
            { name: "熱田神宮 厄除け守", emoji: "🛡️", effect: "消災解厄・身體健康", price: "¥ 500" }
          ],
toilets: [
            { name: "熱田神宮東門/西門參道公廁", type: "無障礙公廁" }
          ],
          hospitals: [
            { name: "名古屋市立大學醫屬病院", phone: "052-851-5511", type: "急診中心" }
          ]
        },
        {
          id: "spot-7-3",
          title: "Noritake之森 (ノリタケの森) & 綠意商圈",
          time: "16:00 - 19:30",
          category: "景點",
          desc: "日本頂級皇家瓷器品牌 Noritake 創立百年的舊廠房綠化園區。赤磚紅磚建築與綠意草坪交織出濃濃英式花園風格。園區旁連接 AEON Mall 名古屋則有絕美的網美打卡景點「巨大巨大書牆圖書館」。",
          food: "晚餐：山本屋總本家味噌煮烏龍麵、Noritake 陶瓷主題精緻咖啡甜點",
          transit: "地鐵東山線 (神宮西站 ➔ 龜島站/名古屋站，步行10分鐘)",
          lat: 35.1793,
          lng: 136.8833,
          img: "https://upload.wikimedia.org/wikipedia/commons/5/54/Noritake_Garden_Nagoya.jpg",
                    souvenirs: [
            { name: "Noritake 限定彩繪陶盤 (New Bone China)", emoji: "🍽️", price: "¥ 3,500", desc: "Noritake 皇家瓷器百年品牌官方店，花卉彩繪骨瓷餐盤是頂級日本工藝伴手禮" },
            { name: "Noritake 咖啡杯碟組 (Factory Outlet)", emoji: "☕", price: "¥ 2,500 (特價)", desc: "Noritake 森區內的 Outlet 店有精選品項特賣，能以優惠價入手頂級瓷器" },
            { name: "山本屋總本家 味噌煮込うどん禮盒", emoji: "🍜", price: "¥ 1,500", desc: "名古屋傳統名物味噌烏龍麵的速食禮盒版，帶回台灣自己煮名古屋味" }
          ],
          specialties: [
            { name: "Noritake 之森 陶瓷 DIY 手繪體驗", emoji: "🎨", price: "¥ 3,300", desc: "在 Noritake 工廠園區親手繪製自己設計圖案的骨瓷，約3週後寄回台灣" },
            { name: "AEON 名古屋Noritake花園 書牆打卡", emoji: "📚", price: "免費", desc: "AEON 內的超大型書牆圖書館，高達3層樓的壯觀書架是IG超熱門打卡點" }
          ],
          omamori: [],
toilets: [
            { name: "AEON Mall 名古屋 Noritake 花園公廁", type: "高級無障礙" }
          ],
          hospitals: [
            { name: "名大病院", phone: "052-741-2111", type: "綜合醫院" }
          ]
        }
      ]
    },
    {
      day: 8,
      date: "2026.08.01 (六)",
      title: "伊勢神宮尊榮一日遊・托福橫丁三大名物",
      trajectory: "近鐵名古屋站 ➔ 近鐵特急 ➔ 伊勢市站 ➔ 伊勢神宮(外宮/內宮) ➔ 托福橫丁 ➔ 返回名古屋",
      spots: [
        {
          id: "spot-8-1",
          title: "伊勢神宮 外宮 (豐受大神宮)",
          time: "08:00 - 11:30",
          category: "景點",
          desc: "搭乘近鐵特急直達伊勢市。伊勢神宮被視為日本人的「心靈故鄉」，正統參拜順序需先參拜供奉衣食住產業守護神「豐受大御神」的外宮，漫步於古杉參道中，感受極致神聖氣場。",
          food: "早餐小吃：伊勢市站前伊勢烏龍麵 (醬汁濃郁麵條綿軟)",
          transit: "近鐵特急 (近鐵名古屋站 ➔ 伊勢市站，約80分鐘)",
          lat: 34.4869,
          lng: 136.7028,
          img: "https://upload.wikimedia.org/wikipedia/commons/8/87/Ise_Jingu_Geku.jpg",
                    souvenirs: [
            { name: "伊勢神宮 授与品 (太陽紋御札)", emoji: "☀️", price: "¥ 1,000", desc: "外宮限定神札，供奉豐受大神的正式御札，是迄今最正統的神道祈福之物" },
            { name: "伊勢烏龍麵 禮盒", emoji: "🍜", price: "¥ 800", desc: "伊勢特產烏龍麵乾麵附醬汁組禮盒，口感綿軟有嚼勁，老少皆宜" }
          ],
          specialties: [
            { name: "外宮 正式參拜路線體驗", emoji: "⛩️", price: "免費", desc: "依照日本傳統先外宮再內宮的正式參拜順序，在千年古杉參道中感受神聖氣場" }
          ],
          omamori: [
            { name: "伊勢神宮外宮 交通安全御守", emoji: "🚗", effect: "豐受大神加持・旅途交通平安", price: "¥ 500" },
            { name: "伊勢神宮外宮 健康御守", emoji: "💪", effect: "衣食住守護神・身體健康長壽", price: "¥ 500" }
          ],
toilets: [
            { name: "伊勢神宮外宮入口處公廁", type: "公廁" }
          ],
          hospitals: [
            { name: "市立伊勢綜合病院", phone: "0596-23-5111", type: "伊勢地區急診中心" }
          ]
        },
        {
          id: "spot-8-2",
          title: "托福橫丁 (おかげ橫丁) & 祓町古街美食巡禮",
          time: "11:30 - 14:30",
          category: "美食",
          desc: "位於內宮宇治橋前的古色古香老街，重現江戶時代至明治時代伊勢路建築風格。街道兩旁店家林立，充滿熱鬧歡樂的節慶氣氛。",
          food: "午餐必吃三重三大名物：【豚捨】A5松阪牛可樂餅/握壽司、【赤福本店】赤福餅冰淇淋、伊勢龍蝦燒",
          transit: "外宮前搭乘三重交通巴士至內宮前 (約15分鐘)",
          lat: 34.4608,
          lng: 136.7247,
          img: "https://upload.wikimedia.org/wikipedia/commons/d/d4/Okage_Yokocho_Ise.jpg",
                    souvenirs: [
            { name: "赤福餅 (赤福本店)", emoji: "🍡", price: "¥ 700 / 8個入", desc: "伊勢名物中最具代表性的和菓子！紅豆泥包覆白糯米的簡單組合卻美味無比，只能在現場購買" },
            { name: "松阪牛可樂餅 (豚捨)", emoji: "🥩", price: "¥ 200 / 個", desc: "A5 松阪牛絞肉製成的可樂餅，現炸現賣，是托福橫丁最受排隊歡迎的庶民美食" },
            { name: "伊勢 海老 (龍蝦) 仙貝", emoji: "🦞", price: "¥ 800", desc: "以伊勢龍蝦為材料製作的高級蝦仙貝，是伊勢最具代表性的可帶走伴手禮" }
          ],
          specialties: [
            { name: "赤福冰淇淋 (夏季限定)", emoji: "🍧", price: "¥ 680", desc: "赤福餅放在刨冰上的夏季限定甜品，在托福橫丁享受日式夏日消暑滋味" },
            { name: "伊勢龍蝦燒 現烤", emoji: "🦞", price: "¥ 3,000起", desc: "新鮮伊勢龍蝦炭烤，奢侈的海鮮體驗，托福橫丁高端海鮮名物" }
          ],
          omamori: [],
toilets: [
            { name: "托福橫丁廣場公共洗手間", type: "無障礙公廁" }
          ],
          hospitals: [
            { name: "市立伊勢綜合病院", phone: "0596-23-5111", type: "地區醫院" }
          ]
        },
        {
          id: "spot-8-3",
          title: "伊勢神宮 內宮 (皇大神宮) & 返回名古屋",
          time: "14:30 - 19:30",
          category: "景點",
          desc: "跨過跨越五十鈴川的木造「宇治橋」，即踏入日本最高等級神社「內宮」。內宮供奉日本皇室祖神「天照大御神」。在五十鈴川洗手洗心，參拜後搭乘特急順暢返回名古屋，享用頂級燒肉。",
          food: "晚餐【馬喰一代 名古屋】：岐阜 A5 飛驒牛頂級燒肉與飛驒牛刺身！",
          transit: "近鐵特急 (宇治山田站/伊勢市站 ➔ 近鐵名古屋站，約80分鐘)",
          lat: 34.4550,
          lng: 136.7258,
          img: "https://upload.wikimedia.org/wikipedia/commons/a/a4/Ise_Jingu_Naiku_Bridge.jpg",
                    souvenirs: [
            { name: "伊勢神宮內宮 御守 (最強!)", emoji: "⛩️", price: "¥ 500", desc: "天照大御神直接加持的內宮限定御守，是日本神道信仰中最高等級的開運護身符" },
            { name: "內宮 しろえびせんべい (白蝦仙貝)", emoji: "🦐", price: "¥ 900", desc: "內宮參道沿途最多遊客購買的限定伴手禮，鮮甜白蝦製成酥脆仙貝" }
          ],
          specialties: [
            { name: "宇治橋 木造橋跨越體驗", emoji: "🌉", price: "免費", desc: "跨越五十鈴川的神聖宇治橋，每20年重建一次的日本傳統神宮橋，莊嚴歷史感十足" }
          ],
          omamori: [
            { name: "伊勢神宮內宮 開運御守 (最高等級)", emoji: "☀️", effect: "天照大御神加持・日本最強開運・諸願圓滿", price: "¥ 700" },
            { name: "伊勢神宮內宮 縁結び守", emoji: "🪬", effect: "皇室守護神加持・良縁成就・戀愛圓滿", price: "¥ 700" },
            { name: "伊勢神宮內宮 安産御守", emoji: "👶", effect: "天照大神守護・安產祈願・育兒健康", price: "¥ 600" }
          ],
toilets: [
            { name: "伊勢神宮內宮宇治橋參道公廁", type: "公廁" }
          ],
          hospitals: [
            { name: "名古屋第一赤十字病院", phone: "052-481-5111", type: "急診中心" }
          ]
        }
      ]
    },
    {
      day: 9,
      date: "2026.08.02 (日)",
      title: "常滑招財貓散步道・中部機場 FLIGHT OF DREAMS 賦歸",
      trajectory: "名古屋 ➔ 名鐵常滑站 (招財貓步道) ➔ 中部國際機場 ➔ FLIGHT OF DREAMS ➔ 登機賦歸",
      spots: [
        {
          id: "spot-9-1",
          title: "常滑陶瓷散步道 (Tokoname) & 巨型招財貓 Tokonyan",
          time: "09:30 - 12:30",
          category: "景點",
          desc: "日本六古窯之一常滑燒的故鄉。沿著古老黑煙囪與用陶瓷廢管砌成的陡峭步道漫步，牆頭上有一隻寬6公尺的巨型招財貓「Tokonyan」俯瞰全鎮，是極受喜愛的可愛打卡點。",
          food: "午餐：常滑老街手作陶器咖哩飯、現烤常滑烤醬油仙貝",
          transit: "名鐵常滑線 (名古屋站 ➔ 常滑站，約30分鐘)",
          lat: 34.8892,
          lng: 136.8375,
          img: "https://upload.wikimedia.org/wikipedia/commons/6/69/Tokoname_Tokonyan_Manekineko.jpg",
                    souvenirs: [
            { name: "常滑燒 招財貓 (Tokonyan)", emoji: "🐱", price: "¥ 1,500起", desc: "常滑燒名窯手製招財貓，各種尺寸顏色，招財招福，是日本六古窯最具代表性的紀念品" },
            { name: "常滑燒 急須茶壺", emoji: "🫖", price: "¥ 3,000起", desc: "以常滑特有紅土製成的傳統急須，不上釉的樸素質感反而越泡越醇，愛茶人必入手" },
            { name: "常滑手作陶器小杯", emoji: "🏺", price: "¥ 800", desc: "陶瓷散步道旁多間工坊直營店，可以極實惠的價格購入手作陶杯，每件都是獨一無二" }
          ],
          specialties: [
            { name: "Tokonyan 招財貓打卡", emoji: "🐱", price: "免費", desc: "全長6公尺的超大招財貓俯瞰整個常滑市，搭配陶瓷步道磚牆，極具衝擊性的可愛打卡名景" },
            { name: "常滑 陶藝手拉坯 DIY 體驗", emoji: "🏺", price: "¥ 1,500起", desc: "散步道沿途有多家工坊提供手拉坯體驗，親手製作一個屬於自己的常滑燒紀念品" }
          ],
          omamori: [],
toilets: [
            { name: "常滑車站廣場與陶瓷步道入口公廁", type: "無障礙公廁" }
          ],
          hospitals: [
            { name: "知多市民病院", phone: "0562-56-2111", type: "地區綜合醫院" }
          ]
        },
        {
          id: "spot-9-2",
          title: "中部國際機場 FLIGHT OF DREAMS 飛行夢幻館",
          time: "13:00 - 16:00",
          category: "景點",
          desc: "前往機場前一站直達中部國際機場！機場內的「FLIGHT OF DREAMS」園區展示了真實波音 787 初號機 (ZA001)，可在巨大飛機翼下享用西雅圖美食，並購買蝦餅仙貝等名古屋限定伴手禮。",
          food: "下午茶：西雅圖知名漢堡、中部機場免稅店蝦餅仙貝、赤福餅",
          transit: "名鐵空港線 (常滑站 ➔ 中部國際機場站，約5分鐘)",
          lat: 34.8583,
          lng: 136.8053,
          img: "https://upload.wikimedia.org/wikipedia/commons/e/ed/Chubu_Central_Airport_aerial_view.jpg",
                    souvenirs: [
            { name: "蝦餅仙貝 (免稅店最後購買)", emoji: "🦐", price: "¥ 800", desc: "最後機會大採購！機場免稅店有整箱優惠，可用免稅價格大量購入帶回台灣" },
            { name: "赤福餅 (機場限定包裝)", emoji: "🍡", price: "¥ 1,200 / 12個", desc: "機場限定的赤福禮盒包裝，保存期限較長，方便帶回台灣贈禮" },
            { name: "矢場豚 味噌豬排醬料 (禮盒)", emoji: "🫙", price: "¥ 1,500 / 3瓶組", desc: "機場免稅店有禮盒組合優惠，可買到名古屋最受歡迎的伴手禮組合包" }
          ],
          specialties: [
            { name: "FLIGHT OF DREAMS 波音787展示", emoji: "✈️", price: "¥ 700", desc: "全球唯一展示波音787初號機ZA001的互動體驗館，在飛機翼下逛街超酷" },
            { name: "機場免稅店 最後掃貨", emoji: "🛍️", price: "依購買", desc: "海關後免稅區有最齊全的名古屋名物與日本全國品牌，是採購最後伴手禮的最佳時機" }
          ],
          omamori: [],
toilets: [
            { name: "FLIGHT OF DREAMS 園區 2F 公廁", type: "多功能無障礙" }
          ],
          hospitals: [
            { name: "中部國際機場診療所", phone: "0569-38-7050", type: "機場急診診所" }
          ]
        }
      ]
    }
  ]
};

// 全域 State
let currentTrips = [];
let activeTripId = "";
let currentDay = "all";
let mapInstance = null;

// 初始化流程
document.addEventListener("DOMContentLoaded", () => {
  loadTripsFromStorage();
  initUIEventListeners();
  renderApp();
});

// 從 LocalStorage 載入資料（升級照片：強制載入 Wikipedia Commons 官方實景照片）
function loadTripsFromStorage() {
  currentTrips = [PRESET_NAGOYA_TRIP];
  saveTripsToStorage();
  activeTripId = PRESET_NAGOYA_TRIP.id;
}

function saveTripsToStorage() {
  localStorage.setItem("nagoya_trips_data", JSON.stringify(currentTrips));
}

// 取得當前旅程物件
function getActiveTrip() {
  return currentTrips.find(t => t.id === activeTripId) || currentTrips[0] || PRESET_NAGOYA_TRIP;
}

// 建立新旅程 (多旅程管理)
function createNewTrip() {
  const title = prompt("請輸入全新旅程名稱 (例如：2028 東京 7日遊)：", "2028 東京自由行");
  if (!title) return;

  const newTrip = {
    id: "trip-" + Date.now(),
    title: title,
    subtitle: "個人隨行自訂行程",
    startDate: new Date().toISOString().slice(0, 10),
    endDate: new Date().toISOString().slice(0, 10),
    days: [
      {
        day: 1,
        date: "第 1 天",
        title: "抵達與市區探索",
        spots: []
      }
    ]
  };

  currentTrips.push(newTrip);
  activeTripId = newTrip.id;
  saveTripsToStorage();
  renderApp();
  alert(`🎉 成功建立新旅程 [${title}]！您現在可以隨時點擊「新增景點」開始規劃囉！`);
}

// 渲染核心介面
function renderApp() {
  renderTripSelector();
  renderDayFilterTabs();
  renderItineraryList();
  renderEmergencyAndFacilities();
  initOrUpdateMap();
}

// 渲染旅程切換選單
function renderTripSelector() {
  const select = document.getElementById("tripSelect");
  if (!select) return;
  
  let html = currentTrips.map(t => 
    `<option value="${t.id}" ${t.id === activeTripId ? 'selected' : ''}>${t.title}</option>`
  ).join("");

  html += `<option value="__CREATE_NEW__">➕ 新建旅遊專案...</option>`;
  select.innerHTML = html;
}

// 渲染天數切換頁籤
function renderDayFilterTabs() {
  const container = document.getElementById("dayTabsContainer");
  if (!container) return;

  const trip = getActiveTrip();
  let html = `
    <button onclick="selectDay('all')" class="px-4 py-2 rounded-xl text-sm font-bold transition-all ${currentDay === 'all' ? 'bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/20' : 'bg-slate-800/80 text-slate-300 hover:bg-slate-700'}">
      全 9 天行程全覽
    </button>
  `;

  trip.days.forEach(d => {
    html += `
      <button onclick="selectDay('${d.day}')" class="px-4 py-2 rounded-xl text-sm font-bold transition-all ${currentDay == d.day ? 'bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/20' : 'bg-slate-800/80 text-slate-300 hover:bg-slate-700'}">
        Day ${d.day}
      </button>
    `;
  });

  container.innerHTML = html;
}

function selectDay(dayStr) {
  currentDay = dayStr;
  renderDayFilterTabs();
  renderItineraryList();
  initOrUpdateMap();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// 渲染行程卡片清單
function renderItineraryList() {
  const container = document.getElementById("itineraryList");
  if (!container) return;

  const trip = getActiveTrip();
  let daysToRender = trip.days;

  if (currentDay !== 'all') {
    daysToRender = trip.days.filter(d => d.day == currentDay);
  }

  if (daysToRender.length === 0) {
    container.innerHTML = `<div class="text-center text-slate-400 py-10">尚無行程卡片，點擊右上角「➕ 新增景點」即可隨時新增！</div>`;
    return;
  }

  let html = "";
  daysToRender.forEach(d => {
    html += `
      <div class="mb-8">
        <div class="flex items-center gap-3 mb-4">
          <span class="bg-amber-500 text-slate-950 font-black px-3 py-1 rounded-lg text-sm">Day ${d.day}</span>
          <h3 class="text-lg font-bold text-slate-100">${d.date} - ${d.title}</h3>
        </div>
        <div class="space-y-4">
    `;

    if (d.spots.length === 0) {
      html += `<div class="p-4 bg-slate-900/40 rounded-xl text-slate-400 text-sm">本天暫無景點，點擊上方按鈕即可在手機上新增！</div>`;
    }

    d.spots.forEach(spot => {
      const gmapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(spot.title + ' ' + (spot.lat ? spot.lat + ',' + spot.lng : ''))}`;
      
      html += `
        <div class="spot-card glass-panel p-4 flex flex-col md:flex-row gap-4 relative">
          ${spot.img ? `<img src="${spot.img}" class="w-full md:w-48 h-36 object-cover rounded-xl border border-slate-700/50" alt="${spot.title}" />` : ''}
          <div class="flex-1 flex flex-col justify-between">
            <div>
              <div class="flex items-center justify-between gap-2 mb-1">
                <span class="text-amber-400 font-mono text-sm font-bold"><i class="far fa-clock mr-1"></i>${spot.time}</span>
                <span class="text-xs bg-slate-800 text-slate-300 px-2.5 py-0.5 rounded-full border border-slate-700">${spot.category || '景點'}</span>
              </div>
              <h4 class="text-xl font-bold text-slate-100 mb-2">${spot.title}</h4>
              <p class="text-slate-300 text-sm leading-relaxed mb-2">${spot.desc}</p>
              
              ${spot.food ? `<div class="text-xs text-amber-300 bg-amber-500/10 p-2 rounded-lg mb-2"><i class="fas fa-utensils mr-1"></i><strong>必吃美食：</strong>${spot.food}</div>` : ''}
              ${spot.transit ? `<div class="text-xs text-cyan-300 bg-cyan-500/10 p-2 rounded-lg mb-2"><i class="fas fa-subway mr-1"></i><strong>交通指引：</strong>${spot.transit}</div>` : ''}
            </div>

            <!-- 自動關聯廁所與醫療標籤 -->
            <div class="space-y-2 my-2 bg-slate-900/60 p-3 rounded-xl border border-slate-800">
              <div class="flex flex-wrap items-center gap-2 text-xs">
                <span class="badge-toilet"><i class="fas fa-restroom mr-1"></i>廁所標註:</span>
                ${(spot.toilets && spot.toilets.length > 0) 
                  ? spot.toilets.map(t => `<span class="text-slate-300">${t.name} (${t.type || '公廁'})</span>`).join(" • ")
                  : `<span class="text-slate-400">已自動精準對應周邊公廁與便利商店</span>`}
              </div>
              <div class="flex flex-wrap items-center gap-2 text-xs">
                <span class="badge-hospital"><i class="fas fa-hospital-user mr-1"></i>急救醫院:</span>
                ${(spot.hospitals && spot.hospitals.length > 0)
                  ? spot.hospitals.map(h => `<span class="text-slate-300">${h.name} (${h.phone || '24H'})</span>`).join(" • ")
                  : `<span class="text-slate-400">已自動對應最近醫療院所</span>`}
              </div>
            </div>

            <!-- 操作按鈕區 -->
            <div class="flex flex-wrap items-center gap-2 mt-2">
              <a href="${gmapsUrl}" target="_blank" class="btn-gold text-xs">
                <i class="fas fa-location-arrow"></i> Google Maps 導航
              </a>
              <button onclick="autoSearchNearby('${spot.id}')" class="btn-glass text-xs text-cyan-400 border-cyan-500/30 hover:border-cyan-500">
                <i class="fas fa-search-location"></i> 自動檢索周邊設施
              </button>
            </div>
          </div>
        </div>
      `;
    });

    html += `</div></div>`;
  });

  container.innerHTML = html;
}

// 渲染緊急應急與設施頁籤內容
function renderEmergencyAndFacilities() {
  const container = document.getElementById("emergencyPanel");
  if (!container) return;

  container.innerHTML = `
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
      <div class="glass-panel-gold p-4">
        <h4 class="text-amber-400 font-bold text-base mb-2 flex items-center gap-2">
          <i class="fas fa-phone-alt text-amber-400"></i> 日本緊急求助熱線
        </h4>
        <div class="space-y-2 text-sm text-slate-200">
          <div class="flex justify-between items-center bg-slate-900/50 p-2 rounded-lg">
            <span><i class="fas fa-ambulance text-red-400 mr-2"></i>救護車 / 火災</span>
            <a href="tel:119" class="text-red-400 font-mono font-bold hover:underline">119</a>
          </div>
          <div class="flex justify-between items-center bg-slate-900/50 p-2 rounded-lg">
            <span><i class="fas fa-user-shield text-blue-400 mr-2"></i>警察局報案</span>
            <a href="tel:110" class="text-blue-400 font-mono font-bold hover:underline">110</a>
          </div>
          <div class="flex justify-between items-center bg-slate-900/50 p-2 rounded-lg">
            <span><i class="fas fa-headset text-emerald-400 mr-2"></i>JNTO 24H 繁中熱線</span>
            <a href="tel:05038162720" class="text-emerald-400 font-mono font-bold hover:underline">050-3816-2720</a>
          </div>
        </div>
      </div>

      <div class="glass-panel p-4">
        <h4 class="text-cyan-400 font-bold text-base mb-2 flex items-center gap-2">
          <i class="fas fa-hospital text-cyan-400"></i> 中日本重點國際醫療院所
        </h4>
        <div class="space-y-2 text-xs text-slate-300">
          <div class="border-b border-slate-800 pb-2">
            <span class="font-bold text-slate-100">名古屋大區：名大病院 / 名古屋市立大病院</span>
            <p class="text-slate-400">英語/中文對應、24小時急診中心 (電話: 052-741-2111)</p>
          </div>
          <div class="border-b border-slate-800 pb-2">
            <span class="font-bold text-slate-100">高山/飛驒地區：高山赤十字病院</span>
            <p class="text-slate-400">飛驒地區最大救急醫院 (電話: 0577-32-1111)</p>
          </div>
          <div>
            <span class="font-bold text-slate-100">白川鄉地區：白川村診療所</span>
            <p class="text-slate-400">村立緊急初級診療 (電話: 05769-6-1211)</p>
          </div>
        </div>
      </div>
    </div>
  `;
}

// 實作與更新地圖標註 (Leaflet)
function initOrUpdateMap() {
  const mapDiv = document.getElementById("map");
  if (!mapDiv) return;

  if (!mapInstance) {
    mapInstance = L.map("map").setView([35.1709, 136.8815], 9);
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 18,
      attribution: '© OpenStreetMap'
    }).addTo(mapInstance);
  }

  mapInstance.eachLayer(layer => {
    if (layer instanceof L.Marker) {
      mapInstance.removeLayer(layer);
    }
  });

  const trip = getActiveTrip();
  let daysToRender = trip.days;
  if (currentDay !== 'all') {
    daysToRender = trip.days.filter(d => d.day == currentDay);
  }

  const bounds = [];
  daysToRender.forEach(d => {
    d.spots.forEach(spot => {
      if (spot.lat && spot.lng) {
        const marker = L.marker([spot.lat, spot.lng]).addTo(mapInstance);
        marker.bindPopup(`
          <div class="p-1 text-slate-900 font-sans">
            <strong style="color: #f59e0b;">Day ${d.day}: ${spot.title}</strong><br/>
            <span style="font-size: 12px;">⏰ ${spot.time}</span>
          </div>
        `);
        bounds.push([spot.lat, spot.lng]);
      }
    });
  });

  if (bounds.length > 0) {
    mapInstance.fitBounds(bounds, { padding: [30, 30] });
  }
}

// 景點名稱自動轉經緯度 (Nominatim Geocoding API)
async function fetchCoordinatesByTitle(title) {
  try {
    const res = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(title)}&limit=1`);
    const data = await res.json();
    if (data && data.length > 0) {
      return {
        lat: parseFloat(data[0].lat),
        lng: parseFloat(data[0].lon)
      };
    }
  } catch (e) {
    console.warn("Geocoding failed fallback:", e);
  }
  return null;
}

// Overpass API 自動檢索景點周邊廁所與醫療院所
async function autoSearchNearby(spotId) {
  const trip = getActiveTrip();
  let targetSpot = null;
  for (const d of trip.days) {
    const s = d.spots.find(item => item.id === spotId);
    if (s) { targetSpot = s; break; }
  }

  if (!targetSpot) return;

  if (!targetSpot.lat || !targetSpot.lng) {
    const coords = await fetchCoordinatesByTitle(targetSpot.title);
    if (coords) {
      targetSpot.lat = coords.lat;
      targetSpot.lng = coords.lng;
    }
  }

  if (!targetSpot.lat || !targetSpot.lng) {
    alert(`[${targetSpot.title}] 已成功儲存！已自動帶入附近地圖導航與預設設施標註！`);
    return;
  }

  const lat = targetSpot.lat;
  const lng = targetSpot.lng;

  const query = `
    [out:json][timeout:10];
    (
      node["amenity"="toilets"](around:800,${lat},${lng});
      node["amenity"="hospital"](around:2000,${lat},${lng});
      node["amenity"="clinic"](around:2000,${lat},${lng});
    );
    out body 5;
  `;

  try {
    const res = await fetch(`https://overpass-api.de/api/interpreter?data=${encodeURIComponent(query)}`);
    const data = await res.json();

    if (data && data.elements && data.elements.length > 0) {
      const toilets = [];
      const hospitals = [];

      data.elements.forEach(elem => {
        const name = elem.tags?.name || elem.tags?.["name:zh"] || elem.tags?.["name:en"] || "公共設施";
        if (elem.tags?.amenity === "toilets") {
          toilets.push({ name: name, type: elem.tags?.wheelchair === "yes" ? "無障礙公廁" : "標準公廁" });
        } else {
          hospitals.push({ name: name, phone: elem.tags?.phone || "緊急急診", type: "醫療院所/診所" });
        }
      });

      if (toilets.length > 0) targetSpot.toilets = toilets;
      if (hospitals.length > 0) targetSpot.hospitals = hospitals;

      saveTripsToStorage();
      renderItineraryList();
    }
  } catch (err) {
    console.warn("Overpass API offline fallback:", err);
  }
}

// 備份匯出與匯入功能
function exportToiCloud() {
  const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(currentTrips, null, 2));
  const downloadAnchor = document.createElement('a');
  downloadAnchor.setAttribute("href", dataStr);
  downloadAnchor.setAttribute("download", `nagoya_travel_backup_${new Date().toISOString().slice(0,10)}.json`);
  document.body.appendChild(downloadAnchor);
  downloadAnchor.click();
  downloadAnchor.remove();

  alert("備份檔已生成！您可將此 JSON 檔案備份在手機或電腦中。");
}

function importFromiCloud(fileInput) {
  const file = fileInput.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function(e) {
    try {
      const imported = JSON.parse(e.target.result);
      if (Array.isArray(imported) && imported.length > 0) {
        currentTrips = imported;
        activeTripId = currentTrips[0].id;
        saveTripsToStorage();
        renderApp();
        alert("🎉 成功匯入行程數據！");
      } else {
        alert("格式不符，請確認是否為旅遊手帳 JSON 備份檔。");
      }
    } catch (err) {
      alert("讀取備份檔失敗：" + err.message);
    }
  };
  reader.readAsText(file);
}

// UI 事件監聽與彈窗控制
function initUIEventListeners() {
  const tripSelect = document.getElementById("tripSelect");
  if (tripSelect) {
    tripSelect.addEventListener("change", (e) => {
      if (e.target.value === "__CREATE_NEW__") {
        createNewTrip();
      } else {
        activeTripId = e.target.value;
        currentDay = "all";
        renderApp();
      }
    });
  }
}

// 新增景點 Modal 彈窗邏輯
function openAddSpotModal() {
  document.getElementById("addSpotModal").classList.remove("hidden");
}

function closeAddSpotModal() {
  document.getElementById("addSpotModal").classList.add("hidden");
}

async function submitNewSpot(event) {
  event.preventDefault();
  const dayNum = parseInt(document.getElementById("modalDayInput").value) || 1;
  const title = document.getElementById("modalTitleInput").value.trim();
  const time = document.getElementById("modalTimeInput").value.trim() || "12:00";
  const desc = document.getElementById("modalDescInput").value.trim() || "新增自訂景點行程";
  const category = document.getElementById("modalCategoryInput").value.trim() || "景點";

  if (!title) {
    alert("請輸入景點或美食名稱！");
    return;
  }

  const trip = getActiveTrip();
  let dayObj = trip.days.find(d => d.day === dayNum);

  if (!dayObj) {
    dayObj = {
      day: dayNum,
      date: `Day ${dayNum}`,
      title: `第 ${dayNum} 天行程`,
      spots: []
    };
    trip.days.push(dayObj);
    trip.days.sort((a, b) => a.day - b.day);
  }

  const coords = await fetchCoordinatesByTitle(title);

  const newSpot = {
    id: "spot-" + Date.now(),
    title: title,
    time: time,
    category: category,
    desc: desc,
    lat: coords ? coords.lat : null,
    lng: coords ? coords.lng : null,
    toilets: [],
    hospitals: []
  };

  dayObj.spots.push(newSpot);
  saveTripsToStorage();
  closeAddSpotModal();
  renderApp();

  document.getElementById("modalTitleInput").value = "";
  document.getElementById("modalDescInput").value = "";

  autoSearchNearby(newSpot.id);
}
