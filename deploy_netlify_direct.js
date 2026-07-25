const fs = require('fs');
const path = require('path');
const https = require('https');
const zlib = require('zlib');

// 創建包含完整 app 的簡單 HTML
const htmlContent = fs.readFileSync('./index.html', 'utf-8');

console.log("Preparing deployment to Netlify Cloud...");

// 使用免費可用的預置 Netlify 部署端點
const req = https.request('https://api.netlify.com/api/v1/sites', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  }
}, (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    try {
      const json = JSON.parse(data);
      console.log("Netlify Res:", json);
    } catch(e) {
      console.log("Response:", data.substring(0, 300));
    }
  });
});

req.on('error', (e) => {
  console.error("Netlify Error:", e);
});

req.write(JSON.stringify({ name: "nagoya-tour-" + Date.now() }));
req.end();
