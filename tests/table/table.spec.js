const { test } = require('@playwright/test')

test('Table', async ({ page }) => {

    await page.goto('https://the-internet.herokuapp.com/tables')

    const rows = page.locator('#table1 tbody tr')

    console.log("This is the-internet Table: ", await rows.count())

}
);

test('Table Handle', async ({ page }) => {

    await page.goto('https://www.tutorialspoint.com/selenium/practice/webtables.php')

    const rows = page.locator('.table-responsive table tbody tr');
    const rowsCount = await rows.count()

    console.log("This is tutorialspoint Table: ", rowsCount);
    for (let i = 0; i < rowsCount; i++) {
        const row = rows.nth(i);

        //  Get the full row's text
        // console.log(`Row ${i + 1}:`, await row.innerText());

        // Get specific cells/columns in the row
        const cells = row.locator('td');
        const firstName = await cells.nth(0).innerText();
        const lastName = await cells.nth(1).innerText();
        const age = await cells.nth(2).innerText();
        console.log(`User: ${firstName} ${lastName}, Age: ${age}`);

    }
});