const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");
const createError = require("http-errors");

const connectDB = require("./config/dbConfig");
const { serverPort } = require("./secret");
const { errorResponse } = require("./controllers/responseController/responseController");
const seedRouter = require("./routers/admin/seedRouter");
const adminRouter = require("./routers/admin/adminRouter");

const app = express();
connectDB();

app.use(cors());
// middleware--------------------
app.use(morgan("dev"));

app.use(bodyParser.json({ limit: "100mb" }));
app.use(bodyParser.urlencoded({ limit: "100mb", extended: true }));

app.use("/api/admin", adminRouter);
// app.use("/api/seed", seedRouter);

app.get("/", (req, res) => {
	res.status(200).send({
		message: "welcome to shovon portfolio server!!!",
	});
});

app.listen(serverPort, async () => {
	console.log(`shovon portfolio server running on ${serverPort}`);
});

// -----------------------------------------------------
//client error--------------------
app.use((req, res, next) => {
	next(createError(404, "Route not found."));
});

//server error------------------
app.use((err, req, res, next) => {
	return errorResponse(res, {
		statusCode: err.status,
		message: err.message,
	});
});

module.exports = app;
