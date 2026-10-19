import{test,expect} from '@playwright/test';

test ('Locators',async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/?m=1');
    //await page.getByRole ('textbox',{name:'Name'}).fill('Puli');
    //await page.getByPlaceholder('Email').fill('Pulisekhar123@gmail.com');
    //await page.getByPlaceholder('Phone').fill('9987877770');
    //await page.getByRole('textbox',{name:'Address'}).fill('ABCDEF');
    //await expect(page.locator("//h1[normalize-space()='Automation Testing Practice']")).toBeVisible();

    //await page.getByRole('button',{name:'start'}).click();
    //await expect(page.getByRole('button',{name:'STOP'})).toBeVisible();

    await expect(page.getByText('Automation Testing Practice')).toBeVisible();


    await page.pause();

})