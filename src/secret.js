require("dotenv").config({ path: ".env" });

const serverPort = process.env.SERVER_PORT || 5000;
const mongoDB = process.env.MONGODB_URI;
const jwtAdminKey = process.env.JWT_ADMIN_KEY;

module.exports = {
	serverPort,
	mongoDB,
	jwtAdminKey,
};
