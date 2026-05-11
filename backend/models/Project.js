const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    tags: [String],
    githubUrl: String,
    demoUrl: String,
    image: String,
    isFeatured: { type: Boolean, default: false }
}, { timestamps: true });

// CRITICAL FIX: Ensure 'module.exports' (plural) is used
module.exports = mongoose.model('Project', ProjectSchema);