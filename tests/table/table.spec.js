const { test } = require('@playwright/test')

test('Table', async ({ page }) => {

    await page.goto('https://the-internet.herokuapp.com/tables')

    const rows = page.locator('#table1 tbody tr')

    console.log(await rows.count())

}

)