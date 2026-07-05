const XLSX = require('xlsx')

class ExcelUtil {
    static read(path) {

        const wb = XLSX.readFile(path)

        const sheet = wb.Sheets[wb.SheetNames[0]]

        return XLSX.utils.sheet_to_json(sheet)

    }

}

module.exports = { ExcelUtil }