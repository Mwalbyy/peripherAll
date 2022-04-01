const router = require('express').Router();
const sequelize = require('../config/connection');
const { Product, Review, Category, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, (req,res) => {
    Review.findAll({
        where: {
            user_id: req.session.user_id,
        },
        attributes: ['id', 'product_id', 'date_created', 'stars', 'text', 'product'],
        include: [
            {
                model: User,
                attributes: ['user_name'],
            },
        ],
    })
})