const fs = require('fs');
const path = require('path');

const srcPath = path.join(__dirname, '2026_9.html');
const destPath = path.join(__dirname, 'index.html');

let html = fs.readFileSync(srcPath, 'utf8');

// Insert manifest link if not present
if (!html.includes('manifest.json')) {
  html = html.replace(
    '<link rel="apple-touch-icon" href="icon.png">',
    '<link rel="apple-touch-icon" href="icon.png">\n    <link rel="manifest" href="manifest.json">'
  );
}

// Insert Service Worker registration if not present
const swRegistration = `
    <!-- Service Worker 離線快取註冊 -->
    <script>
        if ('serviceWorker' in navigator) {
            window.addEventListener('load', function() {
                navigator.serviceWorker.register('./sw.js').then(function(reg) {
                    console.log('SW 註冊成功！範疇:', reg.scope);
                }).catch(function(err) {
                    console.log('SW 註冊失敗:', err);
                });
            });
        }
    </script>
</body>`;

if (!html.includes('sw.js')) {
  html = html.replace('</body>', swRegistration);
}

fs.writeFileSync(destPath, html, 'utf8');
console.log('index.html created successfully with PWA features!');
