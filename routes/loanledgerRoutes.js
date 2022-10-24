const express = require('express');

const router = express.Router();

const loanledgerController = require('../controllers/loanledgerController');

router
  .route('/')
  .get(loanledgerController.getAllLoans)
  .post(loanledgerController.createLoan);

router
  .route('/:id')
  .get(loanledgerController.getLoan)
  .patch(loanledgerController.updateLoan)
  .delete(loanledgerController.deleteLoan);

module.exports = router;
