const express = require('express');

const router = express.Router()
const {registerController, loginController} = require('../controller/userController')

router.get('/',(req, res, next)=>{
    res.send("USER API // V1")
})

router.post('/register',registerController);
router.post('/login',loginController);

module.exports = router;
