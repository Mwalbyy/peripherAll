const router = require("express").Router();
const { Category, Product, User, Review } = require("../models");

router.get("/", async (req, res) => {
  try {
    const categoryData = await Category.findAll({
      include: [
        {
          model: Product,
          attributes: ['id', 'name', 'image'],
        },
      ],
    });

    const categories = categoryData.map((category) =>
      category.get({ plain: true })
      );
      console.log(categories)
    res.render("homepage", {
      categories
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/signup', async (req, res) => {
  try {
    res.render("signup")
  } catch (err) {
    res.status(500).json(err);
  }
})

module.exports = router;
