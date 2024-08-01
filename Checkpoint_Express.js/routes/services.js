var express = require('express');
var router = express.Router();

/* GET services page. */
router.get('/services', function(req, res) {
    res.render('services');
});


module.exports = router;