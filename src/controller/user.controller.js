exports.allAccess = (req, res) => {
	res.status(200).send("Public Content.");
};

exports.userBoard = (req, res) => {
	res.status(200).send("Cliente Content.");
};

exports.adminBoard = (req, res) => {
	res.status(200).send("Admin Content.");
};

exports.operadorBoard = (req, res) => {
	res.status(200).send("Operador Content.");
};
