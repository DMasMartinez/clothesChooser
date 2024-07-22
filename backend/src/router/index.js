
const {Router} = require("express")
const router = Router()

const clothesHandler = require("./clothesHandler/clothesHandler")

router.use("/clothes",clothesHandler)
module.exports = router;