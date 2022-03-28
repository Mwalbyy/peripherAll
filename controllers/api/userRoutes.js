const router = require('express').Router();
const { User } = require('../../models');
const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');

router.post('/signup', async (req, res) => {
try {

    const {userFromSignUp, passwordFromSignUp} = req.body;
    
    const newUser = await User.create({
        userName: userFromSignUp,
        hashedPassword: bcrypt.hashSync(passwordFromSignUp, bcrypt.genSaltSync()),
    });
    res.json(newUser);
} catch (err) {
    res.status(400).json(err);
  }
    
});
router.post('/login', async (req, res) => {
    try {
        // coming from front end
        const {userFromSignUp, passwordFromSignUp} = req.body;

        // find a user from the DB
        const existingUser = await User.findOne({ userName: userFromSignUp});

        // if no user is found
        if(!existingUser) return res.json({ msg: `User Not Found` })

        // if the user is found in the DB, compare password with hashed password
        const doesPasswordMatch = bcrypt.compareSync(passwordFromSignUp, existingUser.hashedPassword);

        // if the password does not match
        if(!doesPasswordMatch) return res.json({ msg: `Passwords did not match` });

        // if it matches this sends them back to front end
        res.json(existingUser);
  
      
      }
        catch (err) {
        res.status(400).json(err);
      }
    })
  
  module.exports = router;
  