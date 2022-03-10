const puppeteer = require('puppeteer');

describe('Validando Elementos', () =>{

    it('Debe manipular form', async() =>{
        const browser = await puppeteer.launch({
            headless :false, // se coloca en true para que no  vea en chromium            
            devtools: false,           
            defaultViewport:null
        });
        const page = await browser.newPage();
        await page.goto('https://demo.guru99.com/test/simple_context_menu.html');

        // clic derecho
        /*  await page.click('#authentication > span',{button :'right', delay :500})
         await page.waitForTimeout(3000); */
        
         await page.click('#authentication > button',{clickCount :2 , delay :500})
         await page.waitForTimeout(3000);

         // aceptar los alert o dialog
         page.on('dialog', async (dialog) =>{
             await dialog.accept();
         }) ;

         await page.goto('https://devexpress.github.io/testcafe/example/');
         await page.type('#developer-name','Erik Medina');

        await browser.close();

    },50000);
});
