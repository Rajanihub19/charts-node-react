const express = require("express");
const { getPieController, postPieController } = require("../controller");
const { getBarController, postBarController } = require("../controller/bargraphcontroller");
const router = express.Router();

router.get('/getpie', getPieController)
router.post('/postpie', postPieController)
router.post('/postbar', postBarController)
router.get('/getbar', getBarController)
module.exports = { router }