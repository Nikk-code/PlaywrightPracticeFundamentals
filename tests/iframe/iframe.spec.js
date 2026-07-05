const { test, expect } = require('@playwright/test')

test('Iframe', async ({ page }) => {

    await page.goto('https://the-internet.herokuapp.com/iframe')

    const frame = page.frameLocator('#mce_0_ifr')
    const notification = page.locator('.tox-notification');

    if (await notification.isVisible()) {

        await page.locator('.tox-notification__dismiss').click();
    }
    await expect(frame.locator('#tinymce')).toContainText('Your content goes here.')
}

)