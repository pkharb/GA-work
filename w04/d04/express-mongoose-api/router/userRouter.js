const 
    User = require('../controllers/user'),
    express = require('express'),
    router = express.Router();


router.get('/', User.index)
router.post('/',User.create);
router.get('/:id', User.show)
router.patch('/:id', User.update);
router.delete('/:id', User.destroy);

module.exports = router;