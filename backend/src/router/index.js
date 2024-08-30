
const {Router} = require("express")
const router = Router()

const clothesHandler = require("./clothesHandler/clothesHandler")
const muscleHandler = require("./muscleHandler/muscleHandler")
const userHandler = require("./userHandler/userHandler")

router.use("/clothes",clothesHandler)
router.use("/muscle", muscleHandler)
router.use("/user", userHandler)
module.exports = router;