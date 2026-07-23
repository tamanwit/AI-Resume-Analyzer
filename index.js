const express = require('express')
require("dotenv").config()
const app = express()
const router = require('./routes/resumeRoute')
const port = process.env.PORT
app.use(router)
app.use(express.json())

app.listen(port, ()=>console.log('Server started port 8080'))