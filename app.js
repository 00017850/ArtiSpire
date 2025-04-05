// Import necessary modules
const express = require('express');
const body_parser = require('body-parser');
const path = require('path');

// Initialize the Express app
const app = express();

// Middleware to parse incoming JSON request bodies
app.use(body_parser.json());

// Serve static files (optional)
app.use(express.static(path.join(__dirname, 'public')));

// Global mock database path
global.mock_db = path.join(__dirname, './data/mock_db.json');

// Define routes

// Home route
app.get('/', function(req, res){
    return res.json({ message: 'hello world' });
});

// Sample route to create an entry
app.post('/create-entry', function(req, res) {
    const { title, type, description, imageURL } = req.body;
    
    // You would typically add your logic to save this to your database here
    res.json({ message: 'Entry created', title, type, description, imageURL });
});

// Add more routes here as needed for updating, deleting, etc.

// Start the server
const port = 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));


