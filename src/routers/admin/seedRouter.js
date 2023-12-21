const express = require("express");
const { seedAdmin } = require("../../controllers/adminController/seedController");

const seedRouter = express.Router();

seedRouter.get("/", seedAdmin);

module.exports = seedRouter;
