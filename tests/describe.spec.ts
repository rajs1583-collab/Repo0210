import { test, expect } from '@playwright/test';

test.describe('Login functionality', () => {

    test('Valid login', async ({ page }) => {
        await page.goto('https://practicetestautomation.com/practice-test-login/');

        await page.getByLabel('Username').fill('student');
        await page.getByLabel('Password').fill('Password123');
        await page.getByRole('button', { name: 'Submit' }).click();

        await expect(page).toHaveURL(/logged-in-successfully/);
    });

    test('Invalid login', async ({ page }) => {
        await page.goto('https://practicetestautomation.com/practice-test-login/');

        await page.getByLabel('Username').fill('wronguser');
        await page.getByLabel('Password').fill('wrongpassword');
        await page.getByRole('button', { name: 'Submit' }).click();
        const errorMessage = page.locator('#error');

        await expect(errorMessage).toBeVisible();
        await expect(errorMessage).toHaveText('Your username is invalid!');

        //await expect(page.getByText('Your username is invalid!')).toBeVisible();
    });

});