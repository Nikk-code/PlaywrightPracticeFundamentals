const { test } = require('@playwright/test');

test('Handle JS Alert', async ({ page }) => {

    await page.goto('https://the-internet.herokuapp.com/javascript_alerts');

    page.on('dialog', async dialog => {

        console.log(dialog.message());

        await dialog.accept();

    });

    await page.click('text=Click for JS Alert');

});



// page.on() registers an event listener.Playwright waits for that event to occur and automatically executes the callback function when the event is triggered.


// You are asking:

// After clicking the button, how does page.on('dialog') execute automatically ?

//     Think of page.on() as an event listener

// Similar to JavaScript in browsers:

// button.addEventListener('click', function () {

//     console.log("Button clicked");

// });

// You are not calling the function yourself.

// The browser calls it when the event happens.

// Same concept here.

//     page.on('dialog', async dialog => {

//         await dialog.accept();

//     });

// means:

// "Hey Playwright, if a dialog ever appears on this page, run this function."

// Playwright registers this listener and waits.

// Nothing happens yet.