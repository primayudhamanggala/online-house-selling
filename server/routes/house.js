const express         = require('express'),
      router          = express.Router(),
      houseController = require('../controllers/house')


router.post('/', houseController.create)

router.get('/', houseController.getAll)

router.put('/:id', houseController.update)

router.delete('/:id', houseController.delete)




module.exports = router;
