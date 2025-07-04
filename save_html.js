const fs = require('fs');
const puppeteer = require('puppeteer');

(async () => {
  const url = 'https://scggeneral-site.framer.website/';

  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  await page.goto(url, { waitUntil: 'networkidle0' });

  const html = await page.content();
  fs.writeFileSync('index.html', html);

  await browser.close();
})();
