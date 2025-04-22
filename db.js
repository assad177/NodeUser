const mongoose = require('mongoose');
// const mongoURL = "mongodb://localhost:27017/mydatabase";
const mongoURL="mongodb+srv://assadwazeer3:assad7890@cluster0.evtfmxq.mongodb.net/"

mongoose.connect(mongoURL, {
  
  // Add other options as needed
});

const db = mongoose.connection;

// Error handling
db.on('error', (err) => {
  console.error('MongoDB connection error:', err);
});

db.once('open', () => {
  console.log('Connected to MongoDB server');
});

// Handle disconnection
db.on('disconnected', () => {
  console.log('MongoDB disconnected');
});

module.exports = db;