const express = require('express');
const Fruit = require('../models/fruit');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const fruits = await Fruit.find({});
    res.status(200).render('fruits/Index', { fruits })
  } catch(error) {
    console.log(error.message)
    res.status(400).send({ message: error.message })
  }
})

router.get('/new', (req, res) => {
  res.render('fruits/New')
})

router.post('/', async (req, res) => {
  try {
    req.body.readyToEat = req.body.readyToEat === 'on';
    await Fruit.create(req.body);
    res.status(201).redirect('/fruits')
  } catch(error) {
    console.log(error.message)
    res.status(400).send({ message: error.message })
  }
})

router.get('/:id', async (req, res) => {
  try {
    res.status(200).render('fruits/Show', { fruit: req.fruit })
  } catch(error) {
    console.log(error.message)
    res.status(400).send({ message: error.message })
  }
})

router.param('id', async (req, res, next, id) => {
  req.fruit = await Fruit.findById(req.params.id);
  next()
})

module.exports = router;