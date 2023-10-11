const express = require('express');
const app = express();
const mongoose = require('mongoose');

// Connect to MongoDB using your MONGO_CONNECT environment variable
mongoose.connect(process.env.MONGO_CONNECT, { autoIndex: false });

// Import your models and routes
const TestModel = require('./api/models/test'); // Use the correct relative path
const mongoTestRoutes = require('./api/controllers/mongo-test'); // Use the correct relative path
const customRoutes = require('./api/routes/routes'); // Use the correct relative path

// Middleware for handling JSON data
app.use(express.json());

// Example: Define a route that uses the mongoTestRoutes module
app.use('/api/mongo-test', mongoTestRoutes);

// Example: Define a route that uses the customRoutes module
app.use('/custom', customRoutes);

app.listen(4004, () => console.log('Server is running on port 4004'));
