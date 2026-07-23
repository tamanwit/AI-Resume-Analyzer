const fs = require('fs')
const pdf = require('pdf-parse')

const parseResume = async (filePath)=>{
    const dataBuffer = fs.readFileSync(filePath)
    const parsed =await pdf(dataBuffer)
    console.log(parsed);
    return parsed.text
}

module.exports = {parseResume}