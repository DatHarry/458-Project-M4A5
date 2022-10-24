const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema(
  {
    customerName: {
        type: String,  
        trim: true,
        maxlength: [40, 'A customer must have less or equal then 40 characters'],
        minlength: [5, 'A customer must have more or equal then 5 characters']    
    },
    firstName: {
        type: String,
        trim: true    
    },
    middleName: {
        type: String,
        trim: true   
    },
    lastName: {
        type: String,
        trim: true   
    },
    dateOfBirth: {
        type: Date
    },
    gender: {
        type: String,
        trim: true
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
const Customer = mongoose.model('Customer', customerSchema);

module.exports = Customer;