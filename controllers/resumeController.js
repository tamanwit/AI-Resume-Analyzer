const parseService = require('../services/parserService')
const aiService = require('../services/analysisService')

const uploadResume = async (req, res)=>{
    console.log(req.file)
    const text = await parseService.parseResume(req.file.path)
    const response = await aiService.interaction(text)
    console.log(response)
    res.json({
        text : text,
        review : response
    })
}

module.exports = {
    uploadResume
}