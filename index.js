const express = require('express');
const app = express();
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
require('dotenv').config();


const PORT = process.env.PORT || 3000;


connectDB();


app.use(express.json());

app.use('/api/auth', authRoutes);

app.listen(PORT, () => {  
    console.log(`Server is up and running on port ${PORT}`);
});