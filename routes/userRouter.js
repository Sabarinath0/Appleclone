const express = require('express')
const userRouter = express.Router()
const productControllers = require('../controllers/productControllers')

userRouter.get('/',productControllers.productPage)
// userRouter.get('/',function(req,res){
//     res.send('admin home page');
// })

module.exports = userRouter;