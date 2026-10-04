import{test,expect} from '@playwright/test';

test('iframes',async({page})=>{

    await page.goto('https://ui.vision/demo/webtest/frames/')

    const inputbox= page.frameLocator('frame[src="frame_1.html"]').locator("[name='mytext1']").fill('Chandra Sekhar');;
   
    //await inputbox.locator("[name='mytext1']").fill('Chandra Sekhar');

    await page.waitForTimeout(3000)
})