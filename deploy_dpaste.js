const fs = require('fs');
const https = require('https');
const querystring = require('querystring');

const htmlContent = fs.readFileSync('./index.html', 'utf-8');

const postData = querystring.stringify({
  content: htmlContent,
  syntax: 'html',
  expiry_days: 365
});

const options = {
  hostname: 'dpaste.com',
  path: '/api/v2/',
  method: 'POST',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    'Content-Length': Buffer.byteLength(postData)
  }
};

const req = https.request(options, (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    const url = data.trim();
    console.log("DPASTE_URL:", url);
    if (url) {
      console.log("RAW_HTML_URL:", `${url}.txt`);
    }
  });
});

req.on('error', (e) => {
  console.error("Error:", e);
});

req.write(postData);
req.end();
