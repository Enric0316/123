process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
const fs = require('fs');
const https = require('https');

const fileData = fs.readFileSync('./site.zip');
const boundary = '----WebKitFormBoundary' + Math.random().toString(16).substring(2);

let body = '';
body += `--${boundary}\r\n`;
body += `Content-Disposition: form-data; name="file"; filename="site.zip"\r\n`;
body += `Content-Type: application/zip\r\n\r\n`;

const bodyBuffer = Buffer.concat([
  Buffer.from(body, 'utf-8'),
  fileData,
  Buffer.from(`\r\n--${boundary}--\r\n`, 'utf-8')
]);

const req = https.request('https://www.file.io', {
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
      console.log("FILE_IO_RES:", json);
      if (json.link) {
        console.log("ZIP_DOWNLOAD_URL:", json.link);
      }
    } catch(e) {
      console.log("Raw Response:", data);
    }
  });
});

req.on('error', (e) => {
  console.error("Upload Error:", e);
});

req.write(bodyBuffer);
req.end();
