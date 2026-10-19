import{test,expect} from '@playwright/test';

test('Screenshot',async({page})=>{

    await page.goto('https://www.amazon.in/');

    //await page.screenshot({path:'screenshot/amazon.png'})

    //await page.screenshot({path:'screenshot/amazon1.png',fullPage:true})
})