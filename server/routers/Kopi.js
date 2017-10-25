const express = require('express')
const router = express.Router()
const controller = require('../controller/controllerKopi')


router.get('/', controller.getAllKopi)
router.get('/:id', controller.findOneKopi)
router.post('/', controller.insertKopi )
router.delete('/:id', controller.deleteKopi)
router.put('/:id', controller.UpdateKopi)


module.exports = router;