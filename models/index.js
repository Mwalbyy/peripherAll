const User = require('./user');
const Product = require('./product');
const Category = require('./category');
const Review = require('./review');

User.hasMany(Review, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Review.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Category.hasMany(Product, {
    foreignKey: 'category_id',
    onDelete: 'CASCADE'
});

Product.belongsTo(Category, {
    foreignKey: 'category_id',
    onDelete: 'CASCADE'
});

Product.hasMany(Review, {
    foreignKey: 'product_id',
    onDelete: 'CASCADE'
});

Review.belongsTo(Product, {
    foreignKey: 'product_id',
    onDelete: 'CASCADE'
});

module.exports = {User, Product, Category, Review};