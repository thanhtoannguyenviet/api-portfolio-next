const mongoose = require('mongoose')
const Schema = mongoose.Schema

const portfolioSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    title: {type:String, required:true, maxlength:128},
    company: {type:String, required:true, maxlength:128},

    companyWebsite: {type:String, required:true, maxlength:128},
    description: String,

})

module.exports = mongoose.model('Portfolio',portfolioSchema)