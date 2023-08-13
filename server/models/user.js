const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const Joi = require("joi");


const userSchema = new mongoose.Schema({
	firstName: { type: String, required: true },
	lastName: { type: String, required: true },
	roll: { type: String, required: true },
	email: { type: String, required: true },
	mobileNo: { type: Number,min:6000000000, max:9999999999, required: true },
	github: { type: String, required: true },
	tech: { type: String, required: true },
	linkedin: { type: String, required:false },
});

userSchema.methods.generateAuthToken = function () {
	const token = jwt.sign({ _id: this._id }, process.env.JWTPRIVATEKEY, {
		expiresIn: "7d",
	});
	return token;
};

const User = mongoose.model("user", userSchema);

const validate = (data) => {

	if(data.linkedin=="")
	data.linkedin="NA";

	const schema = Joi.object({
		firstName: Joi.string().required().label("First Name"),
		lastName: Joi.string().required().label("Last Name"),
		roll:Joi.string().required().label("Roll Number"),
		email: Joi.string().email().required().label("Email"),
		mobileNo: Joi.number().required().label("Mobile Number"),
		github:  Joi.string().required().label("Github"),
		tech: Joi.string().required().label("Technical Preference"),
		linkedin: Joi.string().label("Linkedin").optional(),
		
	});
	return schema.validate(data);
};

module.exports = { User, validate };