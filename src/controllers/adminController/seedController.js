const Data = require("../../../seedData");
const Admin = require("../../models/adminModel");

const seedAdmin = async (req, res, next) => {
	try {
		// delete existing data
		await Admin.deleteMany({});

		//  insert data
		const admin = await Admin.insertMany(Data);

		// successful response
		return res.status(201).json(admin);
	} catch (error) {
		next(error);
	}
};
module.exports = { seedAdmin };
