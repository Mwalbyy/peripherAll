const router = require('express').Router();
const {Product, Review, User} = require('../../models');

router.get('/', async (req, res) => {
    try {
        const productData = await Product.findAll({
          include: [
            { model: Review, 
            attributes: ['id', 'product_id', 'date_created', 'user_id', 'stars', 'text'],
            include: {
              model: User,
              attributes: ['user_name'],
            }
            },
          ],
        });
        const products = productData.map((product) => product.get({ plain:true }));
        // res.render('homepage', {
        //     products,
        // });
        res.status(200).json(productData)
    } catch(err) {
        res.status(500).json(err)
    }
});

// original one product call
router.get('/:id', async (req, res) =>{
    try {
        const productData = await Product.findByPk(req.params.id, {
          include: [
            { model: Review, attributes: ['id', 'product_id', 'date_created', 'user_id', 'stars', 'text'] },
          ],
        });
        const products = productData.get({ plain:true });
        console.log(products);
        res.render('productpage', {
            products
        })

    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
