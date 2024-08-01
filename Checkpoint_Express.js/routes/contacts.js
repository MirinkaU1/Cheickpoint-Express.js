var express = require('express');
var router = express.Router();

/* GET contatcs page. */
router.get('/contacts', function(req, res) {
    res.render('contacts');
});


module.exports = router;