const { test, expect } = require('@playwright/test');
const userData = require('../../test-data/users.json');

test('login test', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');

    await page.locator('#user-name').fill(userData.user);
    await page.locator('#password').fill(userData.password);

    await page.locator('#login-button').click();

})