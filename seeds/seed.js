const sequelize = require('../config/connection');
const { User, Product, Review, Category } = require('../models');

const categoryData = require('./categoryData.json');
const productData = require('./productData.json');
const reviewData = require('./reviewData.json');
const userData = require('./userData.json');

const seedAll = async () => {
    await sequelize.sync({ force: true });

    


    process.exit(0);
};

seedAll();