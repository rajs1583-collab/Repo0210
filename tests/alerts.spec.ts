import{test,expect} from '@playwright/test';

test.skip ('handling alert',async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/?m=1');

    page.on ('dialog',async dialog=>{

    expect (dialog.type()).toContain('alert');

    expect(dialog.message()).toContain('I am an alert box!');

    await dialog.accept();
    })

    await page.locator('//button[@id="alertBtn"]').click();
    await page.waitForTimeout(5000);

})

test.skip ('handling alert ok n cancel',async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/?m=1');

    page.on ('dialog',async dialog=>{

    expect (dialog.type()).toContain('confirm');

    expect(dialog.message()).toContain('Press a button!');

    await dialog.accept();
    })

    await page.locator('//button[@id="confirmBtn"]').click();
    await page.waitForTimeout(5000);

})

test ('handling prompt',async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/?m=1');

    page.on ('dialog',async dialog=>{

    expect (dialog.type()).toContain('prompt');

    expect(dialog.message()).toContain('Please enter your name:');

    await dialog.accept();
    })

    await page.locator('//button[@id="promptBtn"]').click();
    await page.waitForTimeout(5000);

})