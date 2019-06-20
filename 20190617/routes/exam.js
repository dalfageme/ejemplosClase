const express = require('express');
const router = express.Router();

const Exam = require('../models/exam');

router.get('/', async (req, res) => {
    let exams = await Exam.find({});
    res.status(200).send(exams);
})

router.post('/', async (req, res) => {
    console.log(req.body)

    let questions = req.body.questionsTitles.map((q, i) => {
        return {
            question: q,
            answer: req.body.questionsAnswers[i]
        }
    });


    let exam = new Exam({
        title: 'Exam title',
        questions
    })

    await exam.save();

    exam.questions.push({
        question: 'Fake',
        answer: 'Fkae answer'
    });

    await exam.save();
    
    res.status(200).send(exam);
})

module.exports = router;