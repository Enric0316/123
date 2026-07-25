const fs = require('fs');
const https = require('https');

const htmlContent = fs.readFileSync('./index.html', 'utf-8');

const postData = JSON.stringify({
  name: "nagoya-luxury-travel-app",
  public: true,
  files: [
    {
      file: "index.html",
      data: htmlContent
    }
  ],
  projectSettings: {
    framework: null
  }
});

const req = https.request('https://api.vercel.com/v13/deployments', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': Buffer.byteLength(postData)
  }
}, (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    try {
      const json = JSON.parse(data);
      console.log("VERCEL_DEPLOY_RES:", json);
      if (json.url) {
        console.log("VERCEL_URL:", `https://${json.url}`);
      }
    } catch(e) {
      console.log("Raw Vercel Res:", data);
    }
  });
});

req.on('error', (e) => {
  console.error("Vercel Req Error:", e);
});

req.write(postData);
req.end();
