
const {Router} = require("express")
const router = Router()

const clothesHandler = require("./clothesHandler/clothesHandler")
const muscleHandler = require("./muscleHandler/muscleHandler")

router.use("/clothes",clothesHandler)
router.use("/muscle", muscleHandler)
module.exports = router;