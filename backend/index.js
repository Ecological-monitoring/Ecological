import express from "express";
import cors from 'cors';
import mongoose from "mongoose";


//import { LR1Router } from "./routes/LR1.js";


import { DB_ENDPOINT, DB_PASSWORD, DB_LOGIN, PORT } from "./config.js";

// MongoDB connection URL with authentication
const CONNECTION_STRING = `mongodb+srv://nazarshmagailo12:5uSX8yGFjwBXWVt3@cluster0.j5r04.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0}`;

const app = express();

// Enable CORS for all routes
app.use(cors());


// Connect to MongoDB
mongoose
    .connect(CONNECTION_STRING)
    .then(() => console.log("Connected to MongoDB"))
    .catch((error) => {
        console.error("Error connecting to MongoDB:", error);
        process.exit(1); // Exit the process with an error code
    });

// Start the Express server
app.listen(3000, () => {
    console.log(`Server is listening on port 3000`);
});
