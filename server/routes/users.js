const router = require("express").Router();
const { User, validate } = require("../models/user");


router.post("/", async (req, res) => {
	try {
		const { error } = validate(req.body);
		if (error)
			return res.status(400).send({ message: error.details[0].message });

		const user = await User.findOne({ roll:{$regex:req.body.roll ,$options:"i"} });
		if (user)
			return res.status(409).send({ message: "User with given roll already Exist!" });



		await new User(req.body).save();
		res.status(201).send({ message: "User created successfully" });
	} catch (error) {
		console.log(error);
		res.status(500).send({ message: "Internal Server Error" });
		
	}
});

module.exports = router;