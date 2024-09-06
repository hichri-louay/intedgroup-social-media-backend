const express = require('express');
const swaggerUi = require('swagger-ui-express');
const app = express();
const connectDB = require('./config/db');
const swaggerSpec = require('./config/swaggerConfig');
const authRoutes = require('./routes/authRoutes');
const postRoutes = require('./routes/postRoutes');
require('dotenv').config();


const PORT = process.env.PORT || 3000;


connectDB();


app.use(express.json());

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use('/api/auth', authRoutes);
app.use('/api/post', postRoutes);

app.listen(PORT, () => {  
    console.log(`Server is up and running on port ${PORT}`);
});