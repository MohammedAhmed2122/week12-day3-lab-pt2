const express = require('express');
const Vegetable = require('../models/vegetable');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const vegetables = await Vegetable.find({})
    res.status(200).render('vegetables/Index', { vegetables })
  } catch(error) {
    console.log(error.message)
    res.status(400).send({ message: error.message })
  }
})

router.get('/new', (req, res) => {
  res.render('vegetables/New')
})

router.post('/', async (req, res) => {
  try {
    req.body.readyToEat = req.body.readyToEat === 'on';
    await Vegetable.create(req.body);
    res.status(201).redirect('/vegetables')
  } catch(error) {
    console.log(error.message)
    res.status(400).send({ message: error.message })
  }
})

router.get('/:id', async (req, res) => {
  try {
    res.status(200).render('vegetables/Show', { vegetable: req.vegetable })
  } catch(error) {
    console.log(error.message)
    res.status(400).send({ message: error.message })
  }
})

router.param('id', async (req, res, next, id) => {
  req.vegetable = await Vegetable.findById(req.params.id)
  next()
})

module.exports = router;