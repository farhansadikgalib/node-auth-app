const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoute');

const cors = require('cors');

dotenv.config();

const app = express();

//Middleware
app.use(cors());
app.use(express.json());


//Routes
app.use('/api/auth',authRoutes);

app.use('/api/users', userRoutes);

//Database

connectDB();

//server

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server is Running on port ${PORT}`));