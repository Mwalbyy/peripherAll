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
  
      
      }
  
      
  
      if (!validPassword) {
        res
          .status(400)
          .json({ message: 'Incorrect email or password, please try again' });
        return;
      }
  
      req.session.save(() => {
        req.session.user_id = userData.id;
        req.session.logged_in = true;
        
        res.json({ user: userData, message: 'You are now logged in!' });
      });
  
    } catch (err) {
      res.status(400).json(err);
    }
  });
  
  router.post('/logout', (req, res) => {
    if (req.session.logged_in) {
      req.session.destroy(() => {
        res.status(204).end();
      });
    } else {
      res.status(404).end();
    }
  });
  
  module.exports = router;
  