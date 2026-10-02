import{test,expect} from'@playwright/test';

test ('Screenshots', async({page})=>{

    await page.goto('https://www.google.com/');

    //await page.screenshot({path:'Screenshot/google.png'});

    //await page.screenshot({path:'Screenshot/googlepage.png',fullPage:true});

    const timestamp= Date.now();

    await page.screenshot ({path:'Screenshot/'+ 'Googletime.png'+ timestamp + '.png'})

})