const express = require('express')
const router = express.Router()
const { getActiveUser, DeleteGame3, DeleteGame, DeleteGame2, DeleteGame1, getGameNo3, getGameNo2, getGameNo1, getActiveUser1, getGameNo, getInactiveUser1, getUserInfo, postDeposit, withdrawalFromMainWallet, getWithdrawal } = require("../controllers/user.js")

router.get("/active-user", getActiveUser);
router.get("/active-count", getActiveUser1);
router.get("/inactive-count", getInactiveUser1);
router.get("/withdrawal", getWithdrawal);
router.get("/sports/game-no", getGameNo);
router.get("/forex/game-no", getGameNo1);
router.get("/binary/game-no", getGameNo3);
router.get("/crypto/game-no", getGameNo2);
router.delete("/sports/game-no/:id", DeleteGame);
router.delete("/forex/game-no/:id", DeleteGame1);
router.delete("/crypto/game-no/:id", DeleteGame2);
router.delete("/binary/game-no/:id", DeleteGame3);
router.get("/info/:id", getUserInfo);
router.post("/withdrawal", withdrawalFromMainWallet)
router.post("/deposit-money", postDeposit)

module.exports = router;