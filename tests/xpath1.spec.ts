import{ test,expect} from '@playwright/test';

test('xpathtest', async({page})=>{

    await page.goto ('https://practicetestautomation.com/practice-test-login/');

    await page.locator("//input[@type='text']").fill('student');
    await page.locator("//input[@id='password']").fill('Password123');
    //await page.locator("//button[@class='btn']").click();
    await page.locator("//button[text()= 'Submit']").click();
})