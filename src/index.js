require("dotenv").config();
const cloudinary = require("cloudinary");
const express = require("express");
const path = require("path");
const app = express();

cloudinary.config({
    cloud_name: process.env.API_CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET,
    secure: true,
});

cloudinary.v2.uploader.upload(
    path.join(__dirname, "../images/login-bg.jpg"),
    {
        folder: "avatars",
        width: 150,
    },
    (error, result) => {
        if (!error) {
            console.log(result);
        }
        console.log(error);
    }
);
