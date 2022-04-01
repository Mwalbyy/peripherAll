const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');
const accountActivity = require('./accountActivity.js');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/accountActivity', accountActivity);

router.use((req, res) => {
    res.status(404).end();
});

module.exports = router;
