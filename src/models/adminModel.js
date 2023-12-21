const { Schema, model, models } = require("mongoose");
const bcrypt = require("bcryptjs");
const { jwtAdminKey } = require("../secret");
const { sign } = require("jsonwebtoken");

const adminSchema = new Schema(
	{
		name: {
			type: String,
		},
		email: {
			type: String,
			required: [true, "email is required"],
			trim: true,
			unique: true,
			lowercase: true,
			validate: {
				validator: function (v) {
					return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
				},
				message: "Please enter a valid email",
			},
		},
		password: {
			type: String,
			required: [true, "password is required"],
			trim: true,
			minLength: [6, "password should be minimum 6 charectures"],
			set: (v) => bcrypt.hashSync(v, bcrypt.genSaltSync(10)),
		},
		avatar: {
			type: String,
			default: "https://i.ibb.co/m05PxmS/avatar.jpg",
		},
		isAdmin: {
			type: Boolean,
			default: false,
		},
	},
	{ timestamps: true }
);
adminSchema.methods.generateJWT = async function () {
	return sign({ id: this._id }, jwtAdminKey, {
		expiresIn: "30d",
	});
};
const Admin = models.admin || model("admin", adminSchema);

module.exports = Admin;
