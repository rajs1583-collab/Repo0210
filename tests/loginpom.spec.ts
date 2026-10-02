import{test,expect} from'@playwright/test';

import {LoginPage} from '../pages/LogInPage.ts';

test('POMLOGIN',async({page})=>{

const Login = new LoginPage(page);

await page.goto('https://practicetestautomation.com/practice-test-login/');

await Login.login('student','Password123')

})

