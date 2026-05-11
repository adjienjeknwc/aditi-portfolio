const mongoose = require('mongoose');
const dotenv = require('dotenv');
const colors = require('colors');
const Project = require('./models/Project'); //
const connectDB = require('./config/db'); //

// 1. Load Environment Variables first
dotenv.config();

const projects = [
  {
    title: "Grid-Lock",
    description: "A P2P EV charging solution built with the MERN stack and Leaflet.js for real-time mapping.",
    tags: ["React", "Node.js", "MongoDB", "Leaflet.js"],
    githubUrl: "https://github.com/aditiverma/grid-lock",
    isFeatured: true
  },
  {
    title: "Dermalink",
    description: "Skincare ingredient auditor app using Gemini API for product analysis and routine tracking.",
    tags: ["React", "Gemini API", "Tailwind CSS"],
    githubUrl: "https://github.com/aditiverma/dermalink",
    isFeatured: true
  },
  {
    title: "Invoice Automation Bot",
    description: "RPA solution using UiPath to extract PDF data into Excel with 100% accuracy.",
    tags: ["UiPath", "RPA", "Excel Automation"],
    githubUrl: "#",
    isFeatured: false
  }
];

const importData = async () => {
  try {
    // 2. Await the connection BEFORE doing anything else
    await connectDB();

    console.log('Cleaning existing projects...'.yellow.italic);
    await Project.deleteMany(); // Prevents duplicate entries

    console.log('Seeding new project data...'.cyan.italic);
    await Project.insertMany(projects); //

    console.log('✅ Data successfully imported to MongoDB!'.green.inverse);
    process.exit(); // Success exit
  } catch (error) {
    console.error(`❌ Error during seeding: ${error.message}`.red.bold);
    process.exit(1); // Failure exit
  }
};

// 3. Execute the function
importData();