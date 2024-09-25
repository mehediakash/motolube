const express = require("express")
const _ = express.Router()
const authRouter = require("./authRouter.js")
const categoryRouter = require("./categoryRouter.js")
const upload = require("./productRout.js")
const order = require("./orderRouter.js")
const banner = require("./bannerRouter.js")
const brand = require("./brandRouter.js")

_.use("/auth",authRouter )
_.use("/category",categoryRouter )
_.use("/product",upload )
_.use("/order",order )
_.use("/banner",banner )
_.use("/brand",brand )

module.exports = _