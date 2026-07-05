const { test } = require('../../fixtures/baseFixture')
const { LoginPage } = require('../../pages/LoginPage')
const { WaitHelper } = require('../../helpers/WaitHelper')

test('Login', async ({ loginPage, page }) => {

    // const login = new LoginPage(page);

    await loginPage.navigate();

    await loginPage.loginUser('standard_user', 'secret_sauce');

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