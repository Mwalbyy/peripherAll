const router = require('express').Router();
const { Review, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req,res) => {
    try {
    const reviewData = await Review.findAll({
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
        const reviews = reviewData.map((review) => review.get({ plain: true }));
            res.render('homepage', {
                reviews,
                // logged_in: true,
                // user_name: req.session.user_name,
            });
    } catch(err) {
        res.status(500).json(err);
        };
});

router.get('/update/:id', async (req,res) => {
    try {
    const reviewData = await Review.findOne({
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
        const reviews = reviewData.get({ plain: true });
            res.render('edit-delete-review', {
                reviews,
                // logged_in: true,
                // user_name: req.session.username,
            });
        } catch(err) {
            res.status(500).json(err);
        };
});

module.exports = router;