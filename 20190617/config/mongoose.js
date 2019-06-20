const mongoose = require('mongoose');

let connection = mongoose.connect('mongodb://localhost:27017/exams', { useNewUrlParser: true })

module.exports = connection;