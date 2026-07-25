const fs = require('fs');
const htmlContent = fs.readFileSync('./index.html', 'utf-8');

const data = {
  title: "2027 名古屋・昇龍道夢幻旅行 App",
  description: "頂級黑金玻璃質感旅遊手帳",
  html: htmlContent,
  html_pre_processor: "none",
  css: "",
  css_pre_processor: "none",
  js: "",
  js_pre_processor: "none",
  editors: "100"
};

const jsonStr = JSON.stringify(data).replace(/"/g, '&quot;');

const formHtml = `<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>即將載入 2027 名古屋旅遊 APP...</title>
</head>
<body onload="document.forms[0].submit()">
    <h3 style="font-family:sans-serif; text-align:center; margin-top:20%;">📱 正在為您載入手機專用高奢版 App，請稍候 1 秒...</h3>
    <form action="https://codepen.io/pen/define" method="POST">
        <input type="hidden" name="data" value='${jsonStr}' />
    </form>
</body>
</html>`;

fs.writeFileSync('./codepen_loader.html', formHtml, 'utf-8');
console.log("CodePen loader created successfully.");
