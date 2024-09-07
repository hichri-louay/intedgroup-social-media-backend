const express = require('express');
const swaggerUi = require('swagger-ui-express');
const app = express();
const connectDB = require('./config/db');
const swaggerSpec = require('./config/swaggerConfig');
const authRoutes = require('./routes/authRoutes');
const postRoutes = require('./routes/postRoutes');
const profileRoutes = require('./routes/profileRoutes');
const cors = require('cors');
require('dotenv').config();


const PORT = process.env.PORT || 3000;


connectDB();

app.use(cors('*'));
app.use(express.json());

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use('/api/auth', authRoutes);
app.use('/api/post', postRoutes);
app.use('/api/user', profileRoutes);

app.listen(PORT, () => {  
    console.log(`Server is up and running on port ${PORT}`);
});