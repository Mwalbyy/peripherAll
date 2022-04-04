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

// test route for login
router.get("/logged", async (req, res) => {
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
    res.render("logged-in", {
      categories
    });
  } catch (err) {
    res.status(500).json(err);
  }
});
// test route for login

module.exports = router;
// hi