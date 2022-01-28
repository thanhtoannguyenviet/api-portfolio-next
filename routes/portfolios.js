const express = require('express')
const router = express.Router()
const {getPortfolios} = require('../controllers/portfolios')
// router.get('',(req,res)=>{
//     return res.json({message: "success"})
// })
router.get('',getPortfolios)
module.exports = router;
