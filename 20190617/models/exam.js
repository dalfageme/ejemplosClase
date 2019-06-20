const mongoose = require('mongoose');

let examSchema = new mongoose.Schema({
    title: String,
    questions: [{
        question: String,
        answer: String
    }]
})

let Exam = mongoose.model('Exam', examSchema)

module.exports = Exam;