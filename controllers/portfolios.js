const mongoose = require('mongoose');
const Portfolio = require('../db/models/portfolio');

exports.getPortfolios = async (req,res) =>{
    const portfolios = await Portfolio.find({})
    return res.json(portfolios)
}