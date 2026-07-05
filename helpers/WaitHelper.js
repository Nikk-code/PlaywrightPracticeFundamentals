class WaitHelper {

    static async visible(locator) {

        await locator.waitFor();

    }

}

module.exports = { WaitHelper }