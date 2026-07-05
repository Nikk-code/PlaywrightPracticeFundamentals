const { test } = require('@playwright/test');

test('Drag and Drop', async ({ page }) => {

    await page.goto('https://the-internet.herokuapp.com/drag_and_drop')

    await page.locator('#column-a').dragTo(page.locator('#column-b'))

    await page.pause()

});