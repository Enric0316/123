process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
const fs = require('fs');
const https = require('https');
const querystring = require('querystring');

const htmlContent = fs.readFileSync('./index.html', 'utf-8');

const postData = querystring.stringify({
  html: htmlContent
});

const req = https.request('https://jsbin.com/api/save', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    'Content-Length': Buffer.byteLength(postData)
  }
}, (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    try {
      const json = JSON.parse(data);
      console.log("JSBIN_RESULT:", json);
      if (json.url) {
        console.log("MOBILE_URL:", `https://jsbin.com/${json.url}`);
      }
    } catch(e) {
      console.log("Raw Response:", data);
    }
  });
});

req.on('error', (e) => {
  console.error("Error:", e);
});

req.write(postData);
req.end();
