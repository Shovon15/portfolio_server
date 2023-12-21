const express = require("express");
const { getAdmins } = require("../../controllers/adminController/adminController");

const adminRouter = express.Router();

adminRouter.get("/", getAdmins);

module.exports = adminRouter;
