const { test } = require('../../fixtures/baseFixture')
const { LoginPage } = require('../../pages/LoginPage')
const { WaitHelper } = require('../../helpers/WaitHelper')
const { ExcelUtil } = require('../../utils/ExcelUtil')
const data = require('../../test-data/users.json')


test('Login', async ({ loginPage, page }) => {

    const users = ExcelUtil.read('./test-data/users.xlsx')
    console.log(users)

    await loginPage.navigate();

    await loginPage.loginUser(users[0].username, users[0].password);

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


test('Login With JSON', async ({ loginPage, page }) => {

    const login = new LoginPage(page);

    console.log(data.user)

    await loginPage.navigate();

    await loginPage.loginUser(data.user, data.password);

    await WaitHelper.visible(page.locator('#inventory_container').first());

}

)