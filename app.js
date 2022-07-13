const express = require('express');
const mongoose = require('mongoose');
const Blog = require('./models/blog')
const blogRoutes = require('./routes/blogRoutes')

const app = express();
const dbURI = 'mongodb+srv://amryassen:7bDSq4VSD1DtAICl@amr-yassen-back-end.svkzxgv.mongodb.net/amr-yassen-back-end?retryWrites=true&w=majority'
mongoose.connect(dbURI).then((result) => app.listen(5000)).catch((err) => console.log(err))
app.set('view engine', 'ejs');

app.use(express.static('public'));
// when you use this public is already begin searched into, so just access /styles.css
app.use(express.urlencoded({ extended: true }));


app.get('/', (req, res) => {
  res.redirect('/blogs')
});

app.use('/blogs', blogRoutes)

app.get('/about', (req, res) => {
  res.render('about', { title: 'About' });
});

app.use((req, res) => {
  res.status(404).render('404', { title: '404' });
});