const express = require('express');

const router = express.Router();

const customerController = require('../controllers/customerController');

router
  .route('/')
  .get(customerController.getAllLoans)
  .post(customerController.createLoan);

router
  .route('/:id')
  .get(customerController.getLoan)
  .patch(customerController.updateLoan)
  .delete(customerController.deleteLoan);

module.exports = router;
