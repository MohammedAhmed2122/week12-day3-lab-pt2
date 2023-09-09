require('dotenv').config()
const express = require('express');
const viewEngine = require('jsx-view-engine');
const mongoose = require('mongoose');
const fruitRouter = require('./routes/fruits');
const vegetableRouter = require('./routes/vegetables');

const PORT = process.env.PORT || 3000;
const app = express();

app.set('views', './views')
app.set('view engine', 'jsx')
app.engine('jsx', viewEngine())

app.use(express.urlencoded({extended: false}))
app.use('/fruits', fruitRouter)
app.use('/vegetables', vegetableRouter)

app.get('/', (req, res) => {
  res.render('Home')
})

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

mongoose.connection.once('open', () => {
  console.log('connected to mongo')
  app.listen(PORT, console.log(`listening on port ${PORT}`))
})