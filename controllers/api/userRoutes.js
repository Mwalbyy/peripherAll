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

router.post("/login", async (req, res) => {
  try {

    const userData = await User.findOne({ where: { email: req.body.email }});
    if (userData === null) {
      console.log('Not found!');
    } else {
      console.log(userData instanceof User);
      console.log(userData.email); 
    }
    console.log(userData.id)
    
    if (!userData) {
      res.status(400).json({ message: 'data did not match' });
      return;
    }
    
    const doesPasswordMatch = bcrypt.compareSync(
      req.body.password,
      userData.password
      );
      
      if (!doesPasswordMatch) {res.json({ msg: `data did not match` }); return};
      
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
