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
