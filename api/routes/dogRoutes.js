const express = require('express')
const router = express.Router()

const dogsController = require('../controllers/dogs')

router.get('/', dogsController.index)
router.post('/', dogsController.create)
router.get('/:id', dogsController.show)
router.delete('/:id', dogsController.destroy)
router.patch('/:id', dogsController.update)

module.exports = router
