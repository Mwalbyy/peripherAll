const router = require('express').Router();
const {Product} = require('../../models');

router.get('/', async( req, res) =>{
    try {
        const productData = await Product.findAll()
        const products = productData.map((product) => product.get({ plain:true}))
        res.render('homepage', {
            products
        })
    }catch (err) {
        res.status(500).json(err)
    }
});

router.get('/:id', async (req, res) =>{
    try {
        const productData = await Product.findByPk(req.params.id, {});
        res.status(200).json(productData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
