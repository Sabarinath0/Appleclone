const mongoose = require ('mongoose')
const cartSchema = new mongoose.Schema({
    
    
    product : {
        type:mongoose.Types.ObjectId,
        ref:product
    },
        
    quantity : {
        type:number,
        default:1
    },
    

    totalPrice : {
        type:number,
        default:0
    }
})
module.exports = mongoose.model('cart',cartSchema)