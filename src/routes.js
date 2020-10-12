const express = require('express');
const router = express.Router();

const AuthController = require('./controllers/AuthController');
const BankController = require('./controllers/BankController');
const DreamController = require('./controllers/DreamController');
const Authorization = require('./shared/Authorization');

router.post('/login',AuthController.login);
router.post('/register',AuthController.register);

router.get('/bank/balance', Authorization, BankController.getBalance);
router.post('/bank/balance',Authorization, BankController.addBalance);

router.get('/dreams', Authorization, DreamController.getDreams);
router.post('/dreams',Authorization, DreamController.createDream);
router.put('/dreams/:id', Authorization, DreamController.updateDream);
router.delete('/dreams/:id',Authorization, DreamController.deteleDream);

module.exports = router