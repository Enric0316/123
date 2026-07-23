
# -*- coding: utf-8 -*-
"""
批次為所有景點加入 souvenirs / specialties / omamori 資料
在 toilets: [ 之前插入對應的三個欄位
"""
import re

with open("app.js", "r", encoding="utf-8") as f:
    content = f.read()

# 每個景點的 id -> 要插入的 souvenirs / specialties / omamori 資料
SPOT_DATA = {
    "spot-4-1": {
        "souvenirs": """[
            { name: "合掌造 miniature 模型", emoji: "🏡", price: "¥ 2,500", desc: "精緻茅草屋頂合掌造民家模型，帶回台灣最有記念價值的白川鄉伴手禮" },
            { name: "白川鄉 手工傳統草木染布", emoji: "🧣", price: "¥ 3,000", desc: "合掌村老奶奶手工染色的布料，使用山草植物天然染製，每件獨一無二" },
            { name: "飛驒山椒味噌醬 (合掌村特產)", emoji: "🧂", price: "¥ 700", desc: "以白川鄉特產山椒拌入白味噌，是世界遺產村的限定調味料" }
          ]""",
        "specialties": """[
            { name: "城山展望台 全景俯瞰體驗", emoji: "🏔️", price: "¥ 200 (接駁車)", desc: "從高處俯瞰整個合掌村，冬天雪景更是世界級絕景，夏天綠意同樣震撼" },
            { name: "神田家 合掌屋見學", emoji: "🏘️", price: "¥ 400", desc: "進入真實有人居住的300年茅草屋內部參觀，體驗江戶時代農村生活" }
          ]""",
        "omamori": """[
            { name: "白川鄉 白川八幡神社 安産守", emoji: "🪬", effect: "安產祈願・孩子健康成長", price: "¥ 500" }
          ]"""
    },
    "spot-4-2": {
        "souvenirs": """[
            { name: "金澤棒茶 (ほうじ茶)", emoji: "🍵", price: "¥ 1,000", desc: "金澤名物焙茶，以茶梗低溫焙煎，香氣迷人，近江町市場附近有多家百年老店" },
            { name: "近江町市場 鮮度保證海鮮便當", emoji: "🍱", price: "¥ 2,500", desc: "市場即買即食，滿滿日本海新鮮海產，也有保冰箱裝可帶上飛機" },
            { name: "金澤金箔工藝品", emoji: "✨", price: "¥ 800起", desc: "金澤佔日本金箔生產量的99%，近江町市場周邊有多家金箔專賣店，筷子/髮夾等精緻紀念品" }
          ]""",
        "specialties": """[
            { name: "近江町市場 海鮮丼 (18種頂料)", emoji: "🍣", price: "¥ 3,000起", desc: "鋪滿鮪魚大腹、甜蝦、海膽、鮭魚卵共18種食材的豪華海鮮丼，金澤必吃" },
            { name: "鼓門 光影藝術攝影", emoji: "🥁", price: "免費", desc: "夜間鼓門投影燈光秀，是全日本最美車站之一的招牌打卡地點" }
          ]""",
        "omamori": "[]"
    },
    "spot-5-1": {
        "souvenirs": """[
            { name: "兼六園 御朱印 (石川護國神社)", emoji: "📖", price: "¥ 500", desc: "兼六園旁的護國神社限定御朱印，精美金箔裝飾，金澤文化氣息濃厚" },
            { name: "金澤 金箔霜淇淋 (箔一)", emoji: "🍦", price: "¥ 650", desc: "覆蓋真正金箔的霜淇淋，吃起來口感無異但視覺超豪華，兼六園外必吃" },
            { name: "加賀友禅 絲巾/手帕", emoji: "🧣", price: "¥ 3,000", desc: "金澤傳統加賀友禅染色工藝，以花卉自然圖案為主，色彩溫潤優雅" }
          ]""",
        "specialties": """[
            { name: "兼六園 徽軫燈籠 打卡景點", emoji: "🏮", price: "¥ 320 (入場費)", desc: "霞之池旁二腳石燈籠是日本最知名的庭園景物，日出時分最美" },
            { name: "金澤城 菱櫓・五十間長屋 見學", emoji: "🏯", price: "¥ 320", desc: "重建的前田百萬石城池建築，展示精湛的傳統木工技術" }
          ]""",
        "omamori": """[
            { name: "石川護國神社 平安御守", emoji: "🪬", effect: "旅途平安・身體健康", price: "¥ 500" }
          ]"""
    },
    "spot-5-2": {
        "souvenirs": """[
            { name: "21世紀美術館 限定藝術明信片", emoji: "🎨", price: "¥ 300 / 張", desc: "館內官方商店限定，收錄館藏作品的高質感明信片，設計感十足" },
            { name: "《泳池》作品 限定壓克力置物架", emoji: "🏊", price: "¥ 2,000", desc: "以 Leandro Erlich 知名泳池作品為主題的創意文具，美術館唯一限定版本" }
          ]""",
        "specialties": """[
            { name: "泳池互動藝術體驗 (The Swimming Pool)", emoji: "🌊", price: "¥ 430 (收費區)", desc: "從水上、水下兩個角度與觀眾互動揮手，是全球最獨特的沉浸式藝術體驗之一" },
            { name: "館內無料區 漫遊日本當代藝術", emoji: "🖼️", price: "免費", desc: "戶外裝置藝術免費欣賞，圓形玻璃建築本身就是最美的藝術品" }
          ]""",
        "omamori": "[]"
    },
    "spot-5-3": {
        "souvenirs": """[
            { name: "箔一 金箔化妝品 (金箔面膜)", emoji: "✨", price: "¥ 3,000", desc: "使用99.99%純金金箔製作的美容面膜，是東茶屋街最受歡迎的高級伴手禮" },
            { name: "加賀棒茶 (丸八製茶場)", emoji: "🍵", price: "¥ 1,200", desc: "金澤最著名的加賀傳統焙茶，茶梗低溫焙煎、回甘悠長，老字號名店限定" },
            { name: "箔一 金箔霜淇淋", emoji: "🍦", price: "¥ 650", desc: "覆蓋純金金箔、配抹茶冰淇淋，視覺震撼滋味豐富，必打卡" }
          ]""",
        "specialties": """[
            { name: "東茶屋街 金箔工藝 DIY 體驗", emoji: "🔨", price: "¥ 2,200", desc: "箔一本店提供金箔貼貼體驗，親手在筷子/漆盒上貼上真金箔，帶回家的絕佳紀念品" },
            { name: "長町武家屋敷 土牆巷弄漫遊", emoji: "🏚️", price: "免費", desc: "昔日中下級武士的住居區域，冬天土牆覆蓋稻草防凍的景色最具歷史風情" }
          ]""",
        "omamori": """[
            { name: "尾山神社 縁結び守", emoji: "⛩️", effect: "前田利家加持・戀愛成就良緣", price: "¥ 800" },
            { name: "尾山神社 開運守", emoji: "🪬", effect: "諸願成就・開運招福", price: "¥ 700" }
          ]"""
    },
    "spot-6-1": {
        "souvenirs": """[
            { name: "金澤柿之葉壽司", emoji: "🍣", price: "¥ 1,200", desc: "在白鷺號列車上吃的金澤站名物，以柿葉包裹鯖魚醃漬押壽司，清香微酸" },
            { name: "越前蟹黃押壽司便當", emoji: "🦀", price: "¥ 1,800", desc: "福井名物越前蟹的香濃蟹黃，搭配醋飯製成押壽司，金澤站月台限定名物" }
          ]""",
        "specialties": """[
            { name: "JR特急白鷺號 景窗體驗", emoji: "🚅", price: "含票價", desc: "沿途穿越石川、福井縣，可欣賞琵琶湖北岸與伊吹山壯麗景色，鐵路旅行精髓" }
          ]""",
        "omamori": "[]"
    },
    "spot-6-2": {
        "souvenirs": """[
            { name: "大須 古著/二手名牌", emoji: "👗", price: "時價", desc: "大須商店街有超過50間古著店，能以超低價買到日本高品質中古名牌衣物" },
            { name: "名古屋限定手羽先醬料包", emoji: "🍗", price: "¥ 800", desc: "世界之山將的胡椒鹽炸雞翅醬料包，帶回台灣自己複製名古屋味" },
            { name: "大須觀音 開運縁起物 (招財貓/不倒翁)", emoji: "🪆", price: "¥ 500起", desc: "大須觀音周邊廟會小販攤，有大量開運吉祥物與神社周邊紀念品可選購" }
          ]""",
        "specialties": """[
            { name: "大須 女僕咖啡廳體驗", emoji: "☕", price: "¥ 1,000起", desc: "大須商店街集中了多間知名女僕咖啡廳，是御宅族文化的聖地" },
            { name: "李先生台灣炸雞 (台灣名物)", emoji: "🍗", price: "¥ 400", desc: "在日本大受歡迎的台灣炸雞名店，異鄉遇台灣味，口感酥脆回家味" }
          ]""",
        "omamori": """[
            { name: "大須觀音 厄除け御守", emoji: "🪬", effect: "消災避厄・諸願成就", price: "¥ 500" },
            { name: "大須觀音 安全交通御守", emoji: "🚗", effect: "交通安全・出行無虞", price: "¥ 600" }
          ]"""
    },
    "spot-6-3": {
        "souvenirs": """[
            { name: "風來坊 手羽先炸雞翅 (真空包)", emoji: "🍗", price: "¥ 1,200", desc: "名古屋發源炸雞翅名店真空包，方便帶回台灣，胡椒香氣超下酒" },
            { name: "RAYARD 久屋 名古屋限定馬克杯", emoji: "☕", price: "¥ 1,500", desc: "RAYARD 公園內的文創商店有各種名古屋地標設計陶瓷杯，值得收藏" }
          ]""",
        "specialties": """[
            { name: "RAYARD 久屋大通公園 夜間散步", emoji: "🌳", price: "免費", desc: "翻新後的綠地公園結合時尚品牌餐廳，夜間搭配電視塔燈光無比浪漫" },
            { name: "名古屋電視塔 Sky Deck 展望", emoji: "🗼", price: "¥ 700", desc: "名古屋地標登高展望，夜景360度俯瞰名古屋市區燈海，戀人必去" }
          ]""",
        "omamori": "[]"
    },
    "spot-7-1": {
        "souvenirs": """[
            { name: "名古屋城 金鯱 限定金箔霜淇淋", emoji: "🍦", price: "¥ 650", desc: "城下金鯱橫丁限定，覆蓋金箔的金鯱造型霜淇淋，超出片必買打卡美食" },
            { name: "名古屋城 御城印", emoji: "📜", price: "¥ 300", desc: "德川家康建城限定御城印，印有「金鯱」圖案與天守輪廓，城迷必收藏" },
            { name: "金鯱 まるや本店 限定蝦煎餅", emoji: "🦐", price: "¥ 800", desc: "金鯱橫丁內老字號蝦煎餅，現烤香脆，是名古屋城最受歡迎的伴手禮首選" }
          ]""",
        "specialties": """[
            { name: "本丸御殿 金箔障壁畫 見學", emoji: "🏯", price: "含城票¥500", desc: "完全以檜木複原的德川將軍御殿，狩野派金箔繪畫令人嘆為觀止" },
            { name: "金鯱橫丁 名古屋めし 美食巡禮", emoji: "🍽️", price: "各店自費", desc: "雲集名古屋8大在地美食的橫丁，棊子麵、天むす、味噌豬排一次滿足" }
          ]""",
        "omamori": """[
            { name: "名古屋東照宮 勝運御守", emoji: "⛩️", effect: "德川家康加持・事業勝利", price: "¥ 700" }
          ]"""
    },
    "spot-7-2": {
        "souvenirs": """[
            { name: "熱田神宮 信長塀 御守", emoji: "🪬", price: "¥ 700", desc: "桶狹間大勝後信長奉納的石牆旁限定販售，武運最強御守，信長迷必買" },
            { name: "あつた蓬萊軒 鰻魚飯禮盒", emoji: "🍱", price: "¥ 3,800", desc: "百年名店特製醬汁鰻魚飯冷凍禮盒，可帶回台灣重現名古屋最頂級滋味" },
            { name: "熱田神宮 神札 (家內安全)", emoji: "🏮", price: "¥ 1,000", desc: "供奉草薙神劍的三大神宮神札，祈求家庭平安，是最有分量的開運品" }
          ]""",
        "specialties": """[
            { name: "ひつまぶし 鰻魚飯三吃 (蓬萊軒)", emoji: "🐟", price: "¥ 3,850", desc: "①直接吃 ②配山葵和蔥 ③加高湯泡茶漬飯，三種吃法在名古屋百年最頂" },
            { name: "熱田神宮 千年古木 參拜體驗", emoji: "🌲", price: "免費", desc: "被高達800年以上的巨大古杉林包圍，日本三大神宮之一的壓倒性神聖氣氛" }
          ]""",
        "omamori": """[
            { name: "熱田神宮 草薙御守 (開運最強)", emoji: "⚔️", effect: "日本三大神器加持・諸願成就・最強開運", price: "¥ 700" },
            { name: "熱田神宮 縁結び守", emoji: "🪬", effect: "天照大神・草薙神劍加持・戀愛良緣", price: "¥ 600" },
            { name: "熱田神宮 厄除け守", emoji: "🛡️", effect: "消災解厄・身體健康", price: "¥ 500" }
          ]"""
    },
    "spot-7-3": {
        "souvenirs": """[
            { name: "Noritake 限定彩繪陶盤 (New Bone China)", emoji: "🍽️", price: "¥ 3,500", desc: "Noritake 皇家瓷器百年品牌官方店，花卉彩繪骨瓷餐盤是頂級日本工藝伴手禮" },
            { name: "Noritake 咖啡杯碟組 (Factory Outlet)", emoji: "☕", price: "¥ 2,500 (特價)", desc: "Noritake 森區內的 Outlet 店有精選品項特賣，能以優惠價入手頂級瓷器" },
            { name: "山本屋總本家 味噌煮込うどん禮盒", emoji: "🍜", price: "¥ 1,500", desc: "名古屋傳統名物味噌烏龍麵的速食禮盒版，帶回台灣自己煮名古屋味" }
          ]""",
        "specialties": """[
            { name: "Noritake 之森 陶瓷 DIY 手繪體驗", emoji: "🎨", price: "¥ 3,300", desc: "在 Noritake 工廠園區親手繪製自己設計圖案的骨瓷，約3週後寄回台灣" },
            { name: "AEON 名古屋Noritake花園 書牆打卡", emoji: "📚", price: "免費", desc: "AEON 內的超大型書牆圖書館，高達3層樓的壯觀書架是IG超熱門打卡點" }
          ]""",
        "omamori": "[]"
    },
    "spot-8-1": {
        "souvenirs": """[
            { name: "伊勢神宮 授与品 (太陽紋御札)", emoji: "☀️", price: "¥ 1,000", desc: "外宮限定神札，供奉豐受大神的正式御札，是迄今最正統的神道祈福之物" },
            { name: "伊勢烏龍麵 禮盒", emoji: "🍜", price: "¥ 800", desc: "伊勢特產烏龍麵乾麵附醬汁組禮盒，口感綿軟有嚼勁，老少皆宜" }
          ]""",
        "specialties": """[
            { name: "外宮 正式參拜路線體驗", emoji: "⛩️", price: "免費", desc: "依照日本傳統先外宮再內宮的正式參拜順序，在千年古杉參道中感受神聖氣場" }
          ]""",
        "omamori": """[
            { name: "伊勢神宮外宮 交通安全御守", emoji: "🚗", effect: "豐受大神加持・旅途交通平安", price: "¥ 500" },
            { name: "伊勢神宮外宮 健康御守", emoji: "💪", effect: "衣食住守護神・身體健康長壽", price: "¥ 500" }
          ]"""
    },
    "spot-8-2": {
        "souvenirs": """[
            { name: "赤福餅 (赤福本店)", emoji: "🍡", price: "¥ 700 / 8個入", desc: "伊勢名物中最具代表性的和菓子！紅豆泥包覆白糯米的簡單組合卻美味無比，只能在現場購買" },
            { name: "松阪牛可樂餅 (豚捨)", emoji: "🥩", price: "¥ 200 / 個", desc: "A5 松阪牛絞肉製成的可樂餅，現炸現賣，是托福橫丁最受排隊歡迎的庶民美食" },
            { name: "伊勢 海老 (龍蝦) 仙貝", emoji: "🦞", price: "¥ 800", desc: "以伊勢龍蝦為材料製作的高級蝦仙貝，是伊勢最具代表性的可帶走伴手禮" }
          ]""",
        "specialties": """[
            { name: "赤福冰淇淋 (夏季限定)", emoji: "🍧", price: "¥ 680", desc: "赤福餅放在刨冰上的夏季限定甜品，在托福橫丁享受日式夏日消暑滋味" },
            { name: "伊勢龍蝦燒 現烤", emoji: "🦞", price: "¥ 3,000起", desc: "新鮮伊勢龍蝦炭烤，奢侈的海鮮體驗，托福橫丁高端海鮮名物" }
          ]""",
        "omamori": "[]"
    },
    "spot-8-3": {
        "souvenirs": """[
            { name: "伊勢神宮內宮 御守 (最強!)", emoji: "⛩️", price: "¥ 500", desc: "天照大御神直接加持的內宮限定御守，是日本神道信仰中最高等級的開運護身符" },
            { name: "內宮 しろえびせんべい (白蝦仙貝)", emoji: "🦐", price: "¥ 900", desc: "內宮參道沿途最多遊客購買的限定伴手禮，鮮甜白蝦製成酥脆仙貝" }
          ]""",
        "specialties": """[
            { name: "宇治橋 木造橋跨越體驗", emoji: "🌉", price: "免費", desc: "跨越五十鈴川的神聖宇治橋，每20年重建一次的日本傳統神宮橋，莊嚴歷史感十足" }
          ]""",
        "omamori": """[
            { name: "伊勢神宮內宮 開運御守 (最高等級)", emoji: "☀️", effect: "天照大御神加持・日本最強開運・諸願圓滿", price: "¥ 700" },
            { name: "伊勢神宮內宮 縁結び守", emoji: "🪬", effect: "皇室守護神加持・良縁成就・戀愛圓滿", price: "¥ 700" },
            { name: "伊勢神宮內宮 安産御守", emoji: "👶", effect: "天照大神守護・安產祈願・育兒健康", price: "¥ 600" }
          ]"""
    },
    "spot-9-1": {
        "souvenirs": """[
            { name: "常滑燒 招財貓 (Tokonyan)", emoji: "🐱", price: "¥ 1,500起", desc: "常滑燒名窯手製招財貓，各種尺寸顏色，招財招福，是日本六古窯最具代表性的紀念品" },
            { name: "常滑燒 急須茶壺", emoji: "🫖", price: "¥ 3,000起", desc: "以常滑特有紅土製成的傳統急須，不上釉的樸素質感反而越泡越醇，愛茶人必入手" },
            { name: "常滑手作陶器小杯", emoji: "🏺", price: "¥ 800", desc: "陶瓷散步道旁多間工坊直營店，可以極實惠的價格購入手作陶杯，每件都是獨一無二" }
          ]""",
        "specialties": """[
            { name: "Tokonyan 招財貓打卡", emoji: "🐱", price: "免費", desc: "全長6公尺的超大招財貓俯瞰整個常滑市，搭配陶瓷步道磚牆，極具衝擊性的可愛打卡名景" },
            { name: "常滑 陶藝手拉坯 DIY 體驗", emoji: "🏺", price: "¥ 1,500起", desc: "散步道沿途有多家工坊提供手拉坯體驗，親手製作一個屬於自己的常滑燒紀念品" }
          ]""",
        "omamori": "[]"
    },
    "spot-9-2": {
        "souvenirs": """[
            { name: "蝦餅仙貝 (免稅店最後購買)", emoji: "🦐", price: "¥ 800", desc: "最後機會大採購！機場免稅店有整箱優惠，可用免稅價格大量購入帶回台灣" },
            { name: "赤福餅 (機場限定包裝)", emoji: "🍡", price: "¥ 1,200 / 12個", desc: "機場限定的赤福禮盒包裝，保存期限較長，方便帶回台灣贈禮" },
            { name: "矢場豚 味噌豬排醬料 (禮盒)", emoji: "🫙", price: "¥ 1,500 / 3瓶組", desc: "機場免稅店有禮盒組合優惠，可買到名古屋最受歡迎的伴手禮組合包" }
          ]""",
        "specialties": """[
            { name: "FLIGHT OF DREAMS 波音787展示", emoji: "✈️", price: "¥ 700", desc: "全球唯一展示波音787初號機ZA001的互動體驗館，在飛機翼下逛街超酷" },
            { name: "機場免稅店 最後掃貨", emoji: "🛍️", price: "依購買", desc: "海關後免稅區有最齊全的名古屋名物與日本全國品牌，是採購最後伴手禮的最佳時機" }
          ]""",
        "omamori": "[]"
    }
}

def insert_before_toilets(content, spot_id, souvenirs_json, specialties_json, omamori_json):
    """在指定 spot_id 的 toilets: [ 之前插入三個欄位"""
    # 找到該 spot_id 的位置
    spot_start = content.find(f'id: "{spot_id}"')
    if spot_start == -1:
        print(f"  WARNING: spot {spot_id} not found")
        return content
    
    # 從那個位置之後找 toilets: [
    toilets_pos = content.find("toilets: [", spot_start)
    if toilets_pos == -1:
        print(f"  WARNING: toilets not found for {spot_id}")
        return content
    
    # 已經有 souvenirs 就跳過
    if content.find("souvenirs:", spot_start) != -1 and content.find("souvenirs:", spot_start) < toilets_pos:
        print(f"  SKIP: {spot_id} already has souvenirs")
        return content
    
    # 取得插入點之前的縮排
    line_start = content.rfind("\n", 0, toilets_pos) + 1
    indent = ""
    for c in content[line_start:]:
        if c in (" ", "\t"):
            indent += c
        else:
            break
    
    insert_text = (
        f"{indent}souvenirs: {souvenirs_json},\n"
        f"{indent}specialties: {specialties_json},\n"
        f"{indent}omamori: {omamori_json},\n"
    )
    
    content = content[:toilets_pos] + insert_text + content[toilets_pos:]
    print(f"  OK: {spot_id}")
    return content

print("開始插入景點詳細資料...")
for spot_id, data in SPOT_DATA.items():
    content = insert_before_toilets(
        content, spot_id,
        data["souvenirs"],
        data["specialties"],
        data["omamori"]
    )

with open("app.js", "w", encoding="utf-8") as f:
    f.write(content)

print("完成！所有景點資料已插入 app.js")
