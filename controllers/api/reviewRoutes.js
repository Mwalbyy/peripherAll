const router = require('express').Router();
const { Product, Review } = require('../../models');

// get all review
router.get('/', async (res, req) => {
    try {
        const reviewData = await Review.findAll(req.params.id, {
            include: [{ model: Product }]
        });

        res.status(200).json(reviewData);
    } catch(err) {
        res.status(500).json(err);
    }
});


//single review
router.get('/:id', async (res, req) => {
    try {
        const reviewData = await Review.findByPk(req.params.id, {
            include: [{ model: Product }]
        });

        if(!reviewData) {
            res.status(404).json({ message: 'No review found with this id!' });
            return;
        }

        res.render('review');
    } catch(err) {
        res.status(500).json(err);
    }
});


//create review
router.post('/', async (req, res) => {
    try {
        const reviewData = await Review.create(req.body);
        res.render('review');
    } catch(err) {
        res.status(400).json(err);
    }
});

//update review?
router.put('/:id', async (req, res) => {
    try {
        const reviewData = await Review.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.render('review');
    } catch(err) {
        res.status(500).json(err);
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const reviewData = await Review.destroy({
            where: {
                id: req.params.id
            }
        });
        if(!reviewData) {
            res.status(404).json({ message: 'No review found with this id!' });
            return;
        }
        res.render('review');
    } catch(err) {
        res.status(500).json(err);
    }
});

module.exports = router;