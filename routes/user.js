const express = require('express');
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const user_controller = require('../controllers/user');


// a simple test url to check that all of our files are communicating correctly.
router.get('/test', user_controller.test);

router.post('/register', user_controller.create_user);

router.get('/:id', user_controller.get_user_details);

router.put('/:id/update', user_controller.update_user_details);


module.exports = router;