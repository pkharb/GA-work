/**
|--------------------------------------------------
| BONUS: Add a bookRouter
|--------------------------------------------------
*/

const 
    Book = require('../controllers/book'),
    express = require('express'),
    router = express.Router();


router.get('/', Book.index)
router.post('/', Book.create);
router.get('/:id', Book.show)
router.patch('/:id', Book.update);
router.put('/:id', Book.replace);
router.delete('/:id', Book.destroy);

module.exports = router;