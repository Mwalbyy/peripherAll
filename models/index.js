const User = require('./user');
const Product = require('./product');
const Category = require('./category');
const Review = require('./review');

User.manyToOne(Review, {
    foreignKey: 'user_id',
});

Category.onToMany(Product, {
    foreignKey: 'category_id',
});

module.exports = {User, Product, Category, Review};