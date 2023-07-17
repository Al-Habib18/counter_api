/** @format */

const express = require("express");
const mongoose = require("mongoose");
const createDemoUser = require("./seed");
const app = express();

// app.use(not_found_handler, error_handler);s

const PORT = process.env.PORT || 4444;

mongoose
    .connect("mongodb://localhost:27017/mon-demo")
    .then(() => {
        console.log("Connected to MongoDB");
        createDemoUser();
        app.listen(PORT, () => {
            console.log(`listening on port ${PORT}`);
        });
    })
    .catch((err) => {
        console.log(err);
        mongoose.connection.close();
    });
