module.exports = (sequelize, Sequelize) => {
	const Carga = sequelize.define(
		"tipoDeCarga",
		{
			id: {
				type: Sequelize.INTEGER(1),
				primaryKey: true,
				allowNull: false,
			},
			tipo: {
				type: Sequelize.STRING(25),
				allowNull: false,
			},
		},
		{
			tableName: "tipo de carga",
			timestamps: false,
		}
	);
	return Carga;
};
