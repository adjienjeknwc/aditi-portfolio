const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const cors = require('cors');
const connectDB = require('./config/db');

// 1. Load Environment Variables
dotenv.config();

// 2. Connect to Database
connectDB();

const app = express();

// 3. Middleware
app.use(cors()); // Allows your React frontend (Port 3000) to talk to this server
app.use(express.json()); // Parses incoming JSON requests

// 4. Define Routes
// This maps your project logic to the /api/projects URL path
app.use('/api/projects', require('./routes/projectRoutes'));

// 5. Root Route (For browser testing)
app.get('/', (req, res) => {
    res.send('API is running successfully...');
});

// 6. Start the Persistent Listener
const PORT = process.env.PORT || 5000;

// This function tells Node to stay awake and listen for traffic
app.listen(PORT, () => {
    console.log(`🚀 Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold);
});