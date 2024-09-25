const path = require("path");
const express = require('express')
const dbconfig = require("./config/dbconfig.js")
require('dotenv').config()
const app = express()
const router = require("./routes")
app.use(express.json())
var cors = require('cors')
const errorHandler = require('./utils/errorHandeler.js')


dbconfig()
app.use(express())
app.use(cors());

app.use("/uploads", express.static(path.join(__dirname, "uploads"))); // Serving static files


app.listen(8000,()=>{
    console.log("server running on port 8000")
})
app.use(router)
app.use(errorHandler)


