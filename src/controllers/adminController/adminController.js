const Admin = require("../../models/adminModel");
const { successResponse } = require("../responseController/responseController");

const getAdmins = async (req, res, next) => {
	try {
		let admin = await Admin.find();

		return successResponse(res, {
			statusCode: 201,
			message: `admin profile return successfully`,
			payload: {
				admin,
			},
		});
	} catch (error) {
		return next(error);
	}
};
module.exports = { getAdmins };
