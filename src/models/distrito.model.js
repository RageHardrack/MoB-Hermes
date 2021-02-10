module.exports = (sequelize, Sequelize) => {
	const Distrito = sequelize.define(
		"distritos",
		{
			id: {
				type: Sequelize.INTEGER(2),
				primaryKey: true,
				allowNull: false,
			},
			distrito: {
				type: Sequelize.STRING(25),
				allowNull: false,
			},
			// codigoPostal: {
			// 	type: Sequelize.INTEGER(5),
			// 	allowNull: false,
			// },
		},
		{
			tableName: "distritos",
			timestamps: false,
		}
	);
	return Distrito;
};
