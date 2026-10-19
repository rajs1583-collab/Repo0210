import{test,expect} from '@playwright/test';

import {Loginpage} from "../pages/LoginPage1.ts";

test ('POMtest',async({page})=>{

  const LogInPage  = new Loginpage(page);

  await page.goto('https://practicetestautomation.com/practice-test-login/');

  await LogInPage.login('student','Password123');

  await expect(page.getByText('Logged In Successfully')).toBeVisible();


})