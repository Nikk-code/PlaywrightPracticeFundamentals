const { test } = require('@playwright/test')
const { LoginPage } = require('../../pages/LoginPage')
const { WaitHelper } = require('../../helpers/WaitHelper')

test('Login', async ({ page }) => {

    const login = new LoginPage(page);

    await login.navigate();

    await login.loginUser('standard_user', 'secret_sauce');

    await WaitHelper.visible(page.locator('#inventory_container').first());





    // locators
    // page.locator('#login')
    // page.locator('.btn-primary')
    // page.getByRole('button', { name: 'Login' })

    // page.getByText('Products')

    // page.getByLabel('Username')

    // page.getByPlaceholder('Password')

}

)