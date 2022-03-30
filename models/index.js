const User = require('./user');
const Product = require('./product');
const Category = require('./category');
const Review = require('./review');

User.hasMany(Review, {
    foreignKey: 'user_id',
});

Review.belongsTo(User, {
    foreignKey: 'user_id',
});

Category.hasMany(Product, {
    foreignKey: 'category_id',
});

Product.belongsTo(Category, {
    foreignKey: 'category_id',
});

Product.hasMany(Review, {
    foreignKey: 'product_id',
});

Review.belongsTo(Product, {
    foreignKey: 'product_id',
});

module.exports = {User, Product, Category, Review};