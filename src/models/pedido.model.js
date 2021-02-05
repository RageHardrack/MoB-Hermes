module.exports = (sequelize, Sequelize) => {
	const Pedido = sequelize.define(
		"pedidos",
		{
			fecha: {
				type: Sequelize.DATE,
				allowNull: false,
			},
			contactoRemitente: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			empresaRemitente: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			direccionRemitente: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			distritoRemitente: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			contactoConsignado: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			empresaConsignado: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			direccionConsignado: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			distritoConsignado: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			tarifa: {
				type: Sequelize.FLOAT,
				allowNull: false,
			},
		},
		{
			tableName: "pedidos",
		}
	);
	return Pedido;
};
