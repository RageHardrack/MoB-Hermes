module.exports = (sequelize, Sequelize) => {
	const CodigoPostal = sequelize.define(
		"codigosPostales",
		{
			codigo: {
				type: Sequelize.STRING(5),
				allowNull: false,
			},
		},
		{
			tableName: "codigos postales",
			timestamps: false,
		}
	);
	return CodigoPostal;
};
