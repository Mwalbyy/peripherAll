const router = require('express').Router();
const { Product, Review, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req,res) => {
    try {
    const reviewData = await Review.findAll({
        attributes: ['id', 'product_id', 'date_created', 'stars', 'text'],
        include: [
            {
                model: User,
                attributes: ['user_name'],
            },
            {
                model: Product,
                attributes: ['name'],
            }
        ],
    })
        const reviews = reviewData.map((review) => review.get({ plain: true }));
            res.render('dashboard', {
                reviews,
                logged_in: true,
                user_name: req.session.user_name,
            });
    } catch(err) {
        res.status(500).json(err);
        };
});

router.get('/update/:id', async (req,res) => {
    try {
    const reviewData = await Review.findOne({
        attributes: ['id', 'product_id', 'date_created', 'stars', 'text'],
        include: [
            {
                model: User,
                attributes: ['user_name'],
            },
            {
                model: Product,
                attributes: ['name'],
            },
        ],
    })
        const reviews = reviewData.get({ plain: true });
            res.render('edit-delete-review', {
                reviews,
                logged_in: true,
                user_name: req.session.username,
            });
        } catch(err) {
            res.status(500).json(err);
        };
});

module.exports = router;