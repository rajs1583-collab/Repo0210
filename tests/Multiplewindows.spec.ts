import{test,expect,chromium} from '@playwright/test';

test('Multiplebrowser', async({})=>{

   const browser = await chromium.launch();
   const context = await browser.newContext();
   const page1 = await context.newPage();

   await page1.goto('https://testautomationpractice.blogspot.com/');

   await expect(page1).toHaveTitle('Automation Testing Practice');

   const pagePromise= context.waitForEvent('page');

   await page1.locator("//a[normalize-space()='merrymoonmary']").click();

   const newPage = await pagePromise;

   await expect(newPage).toHaveTitle('Boards');

   await page1.waitForTimeout(5000);
   await newPage.waitForTimeout(5000);
   await browser.close()

})