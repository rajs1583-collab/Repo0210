import{test,expect} from '@playwright/test';

test('Locators',async({page})=>{

await page.goto('https://careers.vitechinc.com/');

//await page.getByAltText('Vitech - Home').first().click();
//await page.getByAltText('Vitech - Home').first().click();
await page.getByAltText('Vitech - Home').filter({ visible: true }).click();

})