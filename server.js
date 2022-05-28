const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyparser = require('body-parser');
const path = require('path');

const connectDB = require('./server/database/connection');

const app = express();

dotenv.config({ path: '.env' });
const PORT = process.env.PORT || 8080;

// log requests
app.use(morgan('tiny'));

// mongodb connection
connectDB();

// parse request to body-parser
app.use(bodyparser.urlencoded({ extended: true }));

// set view engine
app.set('view engine', 'ejs');
//app.set("views", path.resolve(__dirname, "views/ejs"))

// load assets
app.use('/static/css', express.static(path.resolve(__dirname, 'static/css')));
app.use('/static/img', express.static(path.resolve(__dirname, 'static/img')));
app.use('/static/js', express.static(path.resolve(__dirname, 'static/js')));

// load routers
app.use('/', require('./server/routes/router'));

app.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}`);
});
