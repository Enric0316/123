process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
const fs = require('fs');
const https = require('https');

const fileData = fs.readFileSync('./index.html');

const req = https.request('https://pixeldrain.com/api/file/2027Nagoya_App.html', {
  method: 'PUT',
  headers: {
    'Content-Type': 'text/html; charset=utf-8',
    'Content-Length': fileData.length
  }
}, (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    try {
      const json = JSON.parse(data);
      console.log("PIXELDRAIN_RES:", json);
      if (json.id) {
        console.log("VIEW_URL:", `https://pixeldrain.com/u/${json.id}`);
      }
    } catch(e) {
      console.log("Raw Response:", data);
    }
  });
});

req.on('error', (e) => {
  console.error("Upload Error:", e);
});

req.write(fileData);
req.end();
