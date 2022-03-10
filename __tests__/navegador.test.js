const puppeteer = require('puppeteer');

describe('Probando Puppeteer', () =>{

    it('Debe abrir y cerrar el browser', async() =>{
        const browser = await puppeteer.launch({
            headless :false, // se coloca en true para que no  vea en chromium
            slowMo:0, // velocidad de reproduccion  en milisegundos
            devtools: false,
            /* defaultViewport:{
                width:2100,
                height:1080
            } */
            //args:['--window-size=1920,1080']
            defaultViewport:null
        });
        const page = await browser.newPage();
        await page.goto('https://yahoo.com/');
        await page.waitForTimeout(5000);
        await page.waitForSelector('img')

        await page.reload(); //  reload the page

        await page.goto('https://www.youtube.com/');
        await page.waitForSelector('#avatar-btn') 

        await page.goBack();

        await page.goForward();

        await browser.close();
    },50000);
} );