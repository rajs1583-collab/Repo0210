import{test,expect} from '@playwright/test';
import testdata from "../testdata.json";
console.log(testdata);

test ('testdatajson',async({page})=>{

    await page.goto ("https://practicetestautomation.com/practice-test-login/");

    await page.locator("#username").fill(testdata.Validuser.Username);
    await page.locator ("#password").fill(testdata.Validuser.Password);
    await page.getByRole('button',{name: 'Submit'}).click();

    await expect(page.getByText("Logged In Successfully")).toBeVisible();

})

test('login with invalid',async({page}) =>{

    await page.goto ("https://practicetestautomation.com/practice-test-login/");
    await page.locator('#username').fill(testdata.Invaliduser.Username);
    await page.locator('#password').fill(testdata.Invaliduser.Password);
    await page.getByRole('button',{name: 'Submit'}).click();

   await expect(page.locator("#error")).toHaveText("Your username is invalid!")
})

 


