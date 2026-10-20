import{test,expect} from '@playwright/test';

test('Screenshot',async({page})=>{

    await page.goto('https://www.amazon.in/');

    //await page.screenshot({path:'screenshot/amazon.png'})

    //await page.screenshot({path:'screenshot/amazon1.png',fullPage:true})

    //await page.locator('.nav-logo-base nav-sprite').click();

    //await page.locator('.nav-logo-base').click();

    //await page.locator("//div[contains(@class,'nav-sprite')]").last().click();

    //await page.locator('.nav_a').filter({hasText:'Twitter'}).click();

    await page.locator('.nav_a').filter({hasText:'Amazon Science'}).click();

    await page.pause();
})