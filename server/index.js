//app
const express = require('express');  
const cors = require('cors');
const mongoose = require('mongoose');
const userRouter = require('./Routes/auth');
const cookieParser = require('cookie-parser');
const bookRouter = require('./Routes/bookr');
const app = express();

app.use(cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    credentials: true,
}))
app.use(express.json());
app.use(cookieParser());
app.use('/auth', userRouter);
app.use('/book', bookRouter);

mongoose.connect('mongodb+srv://JayvardhansinhZala:cwRE26GWHRW3f901@cluster0.xt8e9.mongodb.net/');


app.listen(7000, () => {
    console.log('Server Started')
});