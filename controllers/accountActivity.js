const router = require('express').Router();
const sequelize = require('../config/connection');
const { Product, Review, Category, User } = require('../models');
const withAuth = require('../utils/auth');
const { post } = require('./api/reviewRoutes');

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
        .then((reviewData) => {
            const reviews = reviewData.map((review) => post.get({ plain: true }));
            res.render('account-activity', {
                reviews,
                logged_in: true,
                user_name: req.session.user_name,
            });
        })
        .catch((err) => {
            res.status(500).json(err);
        });
});

router.get('/update/:id', withAuth, (req,res) => {
    Review.findOne({
        where: {
            id: req.params.id,
        },
        attributes: ['id', 'product_id', 'date_created', 'stars', 'text', 'product'],
        include: [
            {
                model: User,
                attributes: ['user_name'],
            },
        ],
    })
        .then((reviewData) => {
            if (!reviewData) {
                res.status(404).json({ message: 'No review found with this id' });
                return;
            }
            
            const review = reviewData.get({ plain: true });
            console.log('sending' + req.session.user_name)
        })
})
