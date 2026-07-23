const https = require('https');
const fs = require('fs');

const spots = [
  "高鐵南港站", "高鐵台南站", "沙崙車站", "臺南車站", "赤崁樓", "林百貨", "臺南孔廟", "吳園", 
  "神農街", "河樂廣場", "臺南市美術館", "國立故宮博物院南部院區", "嘉義車站", "車埕車站", 
  "興賢書院", "彰化車站", "鹿港公會堂", "鹿港天后宮", "鹿港龍山寺", "摸乳巷", "九曲巷", 
  "彰化扇形車庫", "追分車站", "臺中車站", "豐原車站", "新竹車站", "新竹市立動物園", 
  "新竹都城隍廟", "南港車站", "水仙宮市場", "桂花巷藝術村", "鹿港民俗文物館"
];

const results = {};
let pending = spots.length;

spots.forEach(spot => {
    const url = `https://zh.wikipedia.org/w/api.php?action=query&prop=pageimages&format=json&piprop=original&redirects=1&titles=${encodeURIComponent(spot)}`;
    const options = {
        headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) TravelApp/1.0' }
    };
    https.get(url, options, (res) => {
        let data = '';
        res.on('data', chunk => data += chunk);
        res.on('end', () => {
            try {
                const json = JSON.parse(data);
                if (json && json.query && json.query.pages) {
                    const pages = json.query.pages;
                    const pageId = Object.keys(pages)[0];
                    if (pageId !== '-1' && pages[pageId].original) {
                        results[spot] = pages[pageId].original.source;
                    }
                }
            } catch (e) {
                console.error('Error parsing', spot);
            }
            pending--;
            if (pending === 0) {
                fs.writeFileSync('taiwan_wiki_images.json', JSON.stringify(results, null, 2));
                console.log('Successfully fetched images and saved to taiwan_wiki_images.json');
            }
        }).on('error', (e) => {
            pending--;
            if (pending === 0) {
                fs.writeFileSync('taiwan_wiki_images.json', JSON.stringify(results, null, 2));
            }
        });
    });
});
