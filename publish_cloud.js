const fs = require('fs');
const https = require('https');

const htmlContent = fs.readFileSync('./index.html', 'utf-8');

const postData = JSON.stringify({
  description: "2027 名古屋旅遊網頁 App (手機修復版)",
  public: true,
  files: {
    "index.html": {
      content: htmlContent
    }
  }
});

const options = {
  hostname: 'api.github.com',
  path: '/gists',
  method: 'POST',
  headers: {
    'User-Agent': 'Node-App',
    'Content-Type': 'application/json',
    'Content-Length': Buffer.byteLength(postData)
  }
};

const req = https.request(options, (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    try {
      const json = JSON.parse(data);
      if (json.id) {
        console.log("GIST_ID:", json.id);
        const rawUrl = json.files["index.html"].raw_url;
        console.log("RAW_URL:", rawUrl);
      } else {
        console.error("Gist Failed:", data);
      }
    } catch(e) {
      console.error("Parse Error:", e);
    }
  });
});

req.on('error', (e) => {
  console.error("Request Error:", e);
});

req.write(postData);
req.end();
