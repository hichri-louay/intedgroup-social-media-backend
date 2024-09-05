const express = require('express');
const app = express();
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const postRoutes = require('./routes/postRoutes');
require('dotenv').config();


const PORT = process.env.PORT || 3000;


connectDB();


app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/post', postRoutes);

app.listen(PORT, () => {  
    console.log(`Server is up and running on port ${PORT}`);
});