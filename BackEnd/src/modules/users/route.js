const express = require('express');

const response = require('../../network/response')
const controller = require('./controller')

const router = express.Router();

router.get('/', select);
router.post('/', update)
router.put('/', remove);


async function select(req, res, next) {
    try {
        const items = await controller.select()
        response.success(req, res, items, 200)
    } catch (err) {
        next(err);
    }
};

async function update(req, res, next) {
    try {
        const items = await controller.update(req.body)
        if (req.body.id == 0) {
            message = 'Item guardado'
        } else{
            message = 'Item no guardado'

        }

        response.success(req, res, message, 200)

    } catch (err) {
        next(err);
    }
};

async function remove(req, res, next) {
    try {
        const items = await controller.remove(req.body)
        response.success(req, res, 'Item Eliminado.', 200)
    } catch (err) {
        next(err);
    }
};

module.exports = router;