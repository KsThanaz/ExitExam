const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const feedbackRoutes = require('./routes/feedbackRoutes');

const app = express();
const PORT = 5000;
const MONGO_URI = 'mongodb+srv://ksthanaz88:QEVyCTmZNT0EPotY@cluster3.toksv.mongodb.net/feedbackApp?retryWrites=true&w=majority';
// Middleware
app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB Atlas'))
    .catch(err => console.error('Failed to connect to MongoDB:', err));

// Routes
app.use('/api/feedback', feedbackRoutes);

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
