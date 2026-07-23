/**
 * 🔒 100% 純本地私密區域網路伺服器 (Mac & iPhone 通用)
 * 特點：完全不上傳網際網路、自動偵測本機 Wi-Fi IP、生成手機掃描連線 URL
 */

const http = require('http');
const fs = require('fs');
const path = require('path');
const os = require('os');

const PORT = 8085;
const PUBLIC_DIR = __dirname;

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon'
};

// 獲取本機區域網路 IP 位址
function getLocalIPAddress() {
  const interfaces = os.networkInterfaces();
  for (const devName in interfaces) {
    const iface = interfaces[devName];
    for (let i = 0; i < iface.length; i++) {
      const alias = iface[i];
      if (alias.family === 'IPv4' && !alias.internal && alias.address !== '127.0.0.1') {
        return alias.address;
      }
    }
  }
  return '127.0.0.1';
}

const server = http.createServer((req, res) => {
  let reqPath = req.url.split('?')[0];
  if (reqPath === '/') reqPath = '/index.html';

  const filePath = path.join(PUBLIC_DIR, decodeURIComponent(reqPath));

  if (!filePath.startsWith(PUBLIC_DIR)) {
    res.writeHead(403);
    res.end('Forbidden');
    return;
  }

  fs.stat(filePath, (err, stats) => {
    if (err || !stats.isFile()) {
      res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end('404 Not Found');
      return;
    }

    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';

    res.writeHead(200, {
      'Content-Type': contentType,
      'Access-Control-Allow-Origin': '*',
      'Cache-Control': 'no-cache'
    });

    fs.createReadStream(filePath).pipe(res);
  });
});

server.listen(PORT, '0.0.0.0', () => {
  const localIP = getLocalIPAddress();
  const localUrl = `http://${localIP}:${PORT}`;
  
  console.log('\n======================================================');
  console.log('🔒 100% 純本地私密伺服器已成功啟動！(完全不上傳網際網路)');
  console.log('======================================================');
  console.log(`📱 本機/Mac 電腦開啟網址： http://localhost:${PORT}`);
  console.log(`📲 手機與同行親友開啟網址 (需在同一個 Wi-Fi 或熱點)：`);
  console.log(`👉  ${localUrl}`);
  console.log('======================================================');
  console.log('💡 安裝步驟：');
  console.log('1. 用 iPhone Safari 打開上面的網址');
  console.log('2. 點擊 Safari 底部「分享按鈕 📤」 -> 「加入主畫面」');
  console.log('3. 完成！行程已 100% 離線下載至手機，出國完全不需連線！');
  console.log('======================================================\n');
});
