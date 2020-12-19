const express = require("express")

const rout = express.Router()

const method = require("../controller/example")

rout.get('/ex,method')

module.export = rout