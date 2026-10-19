import{test,expect} from '@playwright/test';

test('xpath',async({page})=>{

    await page.goto('https://practicetestautomation.com/practice-test-login/')
    await page.locator('#username').fill('student');
    await page.locator('#password').fill('Password123');
    //await page.locator("//button[text()='Submit']").click();

    //await page.locator("//button[@id='submit']").click();

    //await page.locator('#submit').click();

    await page.locator("//button[@class='btn']").click();
})