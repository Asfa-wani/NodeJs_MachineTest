/*
 * IMPORTING DEPENDENCIES 
 */
const express = require("express");
require("dotenv").config();
const cors = require("cors");
const connection = require("./Server/db/connection");
const productsRoutes = require("./Server/routes/products");
const categoryRoutes = require("./Server/routes/category");

const PORT = process.env.PORT || 3000;

/**
 * DB CONNECTION
 */
connection()

/*
 * INITIALIZING EXPRESS APP
 */
const app = express();

/**
 * MIDDLEWARE
 */
app.use(express.json());
app.use(cors());

/**
 * CREATING APIS
 */
app.use("/api/products", productsRoutes);
app.use("/api/category", categoryRoutes);
/*
 * STARTING APP
 */
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
});