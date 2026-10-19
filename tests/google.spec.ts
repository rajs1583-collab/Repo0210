import{test,expect} from '@playwright/test';

test ('Google',async({page})=>{

await page.goto ('https://www.google.com/')

//await page.locator ('.gb_8').filter({hasText:'Search for Images '}).click()

//await page.locator ('.gb_8').filter({hasText:'Gmail'}).click();

//await page.locator ('.RNmpXc').filter({hasText:/Feeling Lucky/i}).click();

//await page.locator ('.gNO89b').filter({hasText:'Google Search'}).click();

//await page.getByRole('button',{name:'Google Search'}).click(); 

await page.getByRole('button',{name:/Feeling Lucky/i}).click(); 

})