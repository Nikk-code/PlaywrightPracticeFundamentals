const { test, expect } = require('@playwright/test');
const XLSX = require('xlsx');

test('Fetch data directly from Excel', async ({ page }) => {
    // 1. Read the Excel workbook from the path
    const workbook = XLSX.readFile('./test-data/users.xlsx');

    // 2. Get the name of the first sheet
    const sheetName = workbook.SheetNames[0];

    // 3. Get the worksheet data
    const worksheet = workbook.Sheets[sheetName];

    // 4. Convert the sheet data into an array of JSON objects
    const users = XLSX.utils.sheet_to_json(worksheet);

    // Log the output to console
    console.log('Fetched excel data directly:', users);

    // 5. Use the data in your Playwright test
    await page.goto('https://www.saucedemo.com/');
    await page.locator('#user-name').fill(users[0].username);
    await page.locator('#password').fill(users[0].password);
    await page.locator('#login-button').click();
    
    await expect(page).toHaveURL(/.*inventory.html/);
});
