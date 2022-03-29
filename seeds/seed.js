const sequelize = require('../config/connection');
const { User, Product, Review, Category } = require('../models');

const categoryData = require('./categoryData.json');
const productData = require('./productData.json');
const reviewData = require('./reviewData.json');
const userData = require('./userData.json');

const seedAll = async () => {
    try {
    await sequelize.sync({ force: true });

    const users = await User.bulkCreate(userData, {
        individualHooks: true,
      });
    
    const categories = await Category.bulkCreate(categoryData);
    const products = await Product.bulkCreate(productData);
    const reviews = await Review.bulkCreate(reviewData);

    console.log('databaseSeeded');

    process.exit(0);
    }catch(err){console.log(err)};
};

seedAll();