module.exports = (sequelize, Sequelize) => {
	const Pedido = sequelize.define(
		"pedidos",
		{
			fecha: {
				type: Sequelize.DATE,
				allowNull: false,
				defaultValue: Sequelize.NOW,
			},
			contactoRemitente: {
				type: Sequelize.STRING(50),
				allowNull: false,
			},
			empresaRemitente: {
				type: Sequelize.STRING(50),
				allowNull: true,
			},
			direccionRemitente: {
				type: Sequelize.STRING(150),
				allowNull: false,
			},
			distritoRemitente: {
				type: Sequelize.STRING(25),
				allowNull: false,
			},
			telefonoRemitente: {
				type: Sequelize.INTEGER(9),
				allowNull: false,
			},
			otroDatoRemitente: {
				type: Sequelize.STRING(150),
				allowNull: true,
			},
			contactoConsignado: {
				type: Sequelize.STRING(50),
				allowNull: false,
			},
			empresaConsignado: {
				type: Sequelize.STRING(50),
				allowNull: true,
			},
			direccionConsignado: {
				type: Sequelize.STRING(150),
				allowNull: false,
			},
			telefonoConsignado: {
				type: Sequelize.INTEGER(9),
				allowNull: false,
			},
			otroDatoConsignado: {
				type: Sequelize.STRING(150),
				allowNull: true,
			},
			tarifa: {
				type: Sequelize.FLOAT(3),
				allowNull: false,
			},
			comision: {
				type: Sequelize.FLOAT(3),
				allowNull: false,
			},
			tipoCarga: {
				type: Sequelize.STRING(25),
				allowNull: false,
			},
			formaPago: {
				type: Sequelize.STRING(30),
				allowNull: false,
			},
			distancia: {
				type: Sequelize.FLOAT(5),
				allowNull: false,
			},
			CO2Ahorrado: {
				type: Sequelize.FLOAT(4),
				allowNull: false,
			},
			ruido: {
				type: Sequelize.FLOAT(3),
				allowNull: false,
			},
			status: {
				type: Sequelize.INTEGER(1),
				allowNull: false,
			},
			statusFinanciero: {
				type: Sequelize.INTEGER(1),
				allowNull: false,
			},
		},
		{
			tableName: "pedidos",
		}
	);
	return Pedido;
};
