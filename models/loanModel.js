const mongoose = require('mongoose');

const loanSchema = new mongoose.Schema(
  {
    loanNumber: {
        type: String,  
        trim: true
    },
    loanType: {
        type: String
    },
    amount: {
        type: Number,
        trim: true
    },
    interest: {
        type: Number,
        trim: true
    },
    loanTermYears: {
        type: Number,
        required: [true, 'A loan must have a loanTermYears'],
        trim: true,
        min: [1, 'A loan  must have more or equal than 1']
    },
    startDate: {
        type: Date,
        default: Date.now
    },
    createdDate: {
        type: Date,
        default: Date.now
    },
    modifiedDate: {
        type: Date,
        default: Date.now
    },
    isDeleted: {
        type: Boolean,
        default: false,
        select: true
    } 
});
const Loan = mongoose.model('Loan', loanSchema);

module.exports = Loan;