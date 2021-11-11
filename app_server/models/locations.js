const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
name: {type: String, required: true},
review: String,
rating: {type: Number, "default": 0, min: 0, max: 5},
facilities: [String] 
});

mongoose.model('Review', reviewSchema);