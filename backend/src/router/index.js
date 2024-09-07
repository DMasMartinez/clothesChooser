
const {Router} = require("express")
const router = Router()

const clothesHandler = require("./clothesHandler/clothesHandler")
const muscleHandler = require("./muscleHandler/muscleHandler")
const userHandler = require("./userHandler/userHandler")
const favoriteHandler = require("./favoriteHandler/favoriteHandler")

router.use("/clothes",clothesHandler)
router.use("/muscle", muscleHandler)
router.use("/user", userHandler)
router.use("/favorite", favoriteHandler)
module.exports = router;