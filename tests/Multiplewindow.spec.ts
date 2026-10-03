import{test,expect, chromium} from '@playwright/test';

test ('Multiwindows',async({page})=>{

const browser= await chromium.launch();

const context =await browser.newContext();

const page1=await context.newPage();

await page1.goto ("https://testautomationpractice.blogspot.com/");

await expect (page1).toHaveTitle('Automation Testing Practice');

const pagePromise= context.waitForEvent('page');
await page1.locator('//a[normalize-space()="merrymoonmary"]').click();

const newPage=await pagePromise
await expect(newPage).toHaveTitle("merrymoonmary Stock Image and Video Portfolio - iStock");
//await expect(newPage).toHaveTitle(/iStock/i);

await page1.waitForTimeout(3000)
await newPage.waitForTimeout(4000)

await browser.close()

})