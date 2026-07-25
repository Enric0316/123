process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
const fs = require('fs');
const https = require('https');

const fileData = fs.readFileSync('./index.html');
const boundary = '----WebKitFormBoundary' + Math.random().toString(16).substring(2);

let body = '';
body += `--${boundary}\r\n`;
body += `Content-Disposition: form-data; name="file"; filename="index.html"\r\n`;
body += `Content-Type: text/html\r\n\r\n`;

const bodyBuffer = Buffer.concat([
  Buffer.from(body, 'utf-8'),
  fileData,
  Buffer.from(`\r\n--${boundary}--\r\n`, 'utf-8')
]);

const req = https.request('https://tmpfiles.org/api/v1/upload', {
  method: 'POST',
  headers: {
    'Content-Type': `multipart/form-data; boundary=${boundary}`,
    'Content-Length': bodyBuffer.length
  }
}, (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    try {
      const json = JSON.parse(data);
      if (json.status === 'success' && json.data && json.data.url) {
        const pageUrl = json.data.url.replace('tmpfiles.org/', 'tmpfiles.org/dl/');
        console.log("DIRECT_HTML_URL:", pageUrl);
      } else {
        console.log("Upload result:", data);
      }
    } catch(e) {
      console.error("Parse error:", data);
    }
  });
});

req.on('error', (e) => {
  console.error("Upload error:", e);
});

req.write(bodyBuffer);
req.end();
