const router = require("express").Router();
const { User } = require("../../models");
const { Model, DataTypes } = require("sequelize");
const bcrypt = require("bcrypt");

router.post("/signup", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const newUser = await User.create({
      user_name: name,
      email: email,
      password: password,
    });
    res.json(newUser);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post("/", async (req, res) => {
  try {

    const userData = await User.findOne({ where: { email: req.body.email } });
    console.log(userData)
    
    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }
    
    const doesPasswordMatch = bcrypt.compareSync(
      req.body.password,
      userData.password
      );
      
      if (!doesPasswordMatch) {res.json({ msg: `data did not match` }); return};
      
      res.json(userData);
      console.log(userData);
      
      req.session.save(() => {
        req.session.email = userData.email;
        req.session.logged_in = true;
        console.log(userData);
        
        res.json({ user: userData, message: "You are now logged in!" });
      });
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
