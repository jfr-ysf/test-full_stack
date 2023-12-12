if (process.env.NODE_ENV !== 'production'){
	require('dotenv').config();
}

const express = require('express')
const app = express()
const expressLayouts = require('express-ejs-layouts')

const indexRouter = require('./routes/index')

app.set('view engine', 'ejs')
app.set('views', __dirname + '/views') 
app.set('layout', 'layouts/layout')
app.use(expressLayouts)
app.use(express.static('public'))

const mongoose = require('mongoose');

const uri = process.env.DATABASE_URL;
console.log('MongoDB URI:', uri);
console.log('be4');
mongoose.connect(uri)
		.then(() => {
  		console.log('Connected to Mongoose');
		})
		.catch(error => {
  		console.error('Error connecting to Mongooose:', error);
		});
console.log('afta');

app.use('/', indexRouter)
// app.listen(process.env.PORT) used in real env
app.listen(process.env.PORT || 3000, () =>{
	console.log('Server is working li bithc')
})


/********
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.DATABASE_URL, {
      useNewUrlParser: true,
    });
    console.log(`MongoDB Connected: {conn.connection.host}`);
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }


********/
/***************
 const mongoose = require('mongoose')

const db = mongoose.connection
mongoose.connect(process.env.DATABASE_URL,() => {
	useNewUrlParser: true; useUnifiedTopology: true	})
.then(() => console.log('Connected Successfully'))

.catch((err) => { console.error(err); });



mongoose.connect(uri)
		.then(() => {
  		console.log('Connected to Mongoose');
		})
		.catch(error => {
  		console.error('Error connecting to Mongooose:', error);
		});





***************/