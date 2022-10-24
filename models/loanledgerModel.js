const mongoose = require('mongoose');

const loanledgerSchema = new mongoose.Schema(
  {
    paymentAmount: {
        type: String,
        trim: true     
    },
    customerName: {
        type: String,
        trim: true,
        maxlength: [40, 'A customer must have less or equal then 40 characters'],
        minlength: [5, 'A customer must have more or equal then 5 characters']
    },
    interest: {
        type: String
    },
    principal: {
        type: String
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
const LoanLedger = mongoose.model('LoanLedger', loanledgerSchema);

module.exports = LoanLedger;