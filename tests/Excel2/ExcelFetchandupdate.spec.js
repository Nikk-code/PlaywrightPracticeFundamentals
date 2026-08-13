const { test, expect } = require('@playwright/test');
const XLSX = require('xlsx');


function writeOrderNumber(orderNumber) {

    const workbook = XLSX.utils.book_new();

    const data = [
        { OrderNumber: orderNumber }
    ];

    const worksheet = XLSX.utils.json_to_sheet(data);

    XLSX.utils.book_append_sheet(
        workbook,
        worksheet,
        'Orders'
    );

    XLSX.writeFile(workbook, 'orderData.xlsx');
}

test('Fetch data directly from Excel', async ({ page }) => {

});