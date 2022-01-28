const mongoose = require('mongoose')
const common = require('../common/contain')

require('./models/portfolio')
exports.connect = () => {
    mongoose.connect(common.MONGO_DB, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        },
        (err) => {
            if (err) {
                console.log(err)
            }
            console.log("Connected to DB")
        })
}

