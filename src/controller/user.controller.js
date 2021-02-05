module.exports = {
	allAccess = (req, res) => {
	res.status(200).send("Public Content.");
},

	userBoard = (req, res) => {
	res.status(200).send("Cliente Content.");
},

	adminBoard = (req, res) => {
	res.status(200).send("Admin Content.");
},

	operadorBoard = (req, res) => {
	res.status(200).send("Operador Content.");
}
}
