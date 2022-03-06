const express = require("express");
const bodyParser = require("body-parser");
const headers = new express.Router()

headers.use(bodyParser.json());
headers.use(bodyParser.urlencoded({ extended: false }));
console.log("part1")

headers.use((req, res, next) => {
   
    res.setHeader("Access-Control-Allow-Origin", "*");
   
    res.setHeader("content-type", "application/json; charset=utf-8");
    res.setHeader("date", `${new Date().toGMTString()}`);
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept,Authorization"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, PATCH,PUT, DELETE, OPTIONS"
    );
      res.removeHeader('via');
      res.removeHeader('server');
    next();
});

module.exports = headers 
