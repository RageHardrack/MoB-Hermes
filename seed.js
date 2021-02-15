const db = require("./src/models/index");
const bcrypt = require("bcryptjs");
const User = db.user;
const Role = db.role;
// const Mobiker = db.mobiker;
const Distrito = db.distrito;
const CodigoPostal = db.codigoPostal;
const Rango = db.rango;
const Comprobante = db.comprobante;
const Carga = db.carga;
const Modalidad = db.modalidad;
const FormaDePago = db.formaDePago;
const RolCliente = db.rolCliente;
const Envio = db.envio;

// Usuarios
const users = [
	{
		fullName: "Daniel Colmenares",
		username: "dcolmenares",
		email: "dacolmenares93@gmail.com",
		password: bcrypt.hashSync("123123", 10),
		empresa: "Mail On Bike",
		roles: [1, 5],
	},
	{
		fullName: "Fernando Carbajal",
		username: "fcarbajal",
		email: "fcarbajal@dan.com",
		password: bcrypt.hashSync("123123", 10),
		empresa: "Mail On Bike",
		roles: [1, 5],
	},
	{
		fullName: "Gaby Vilorio",
		username: "gvilorio",
		email: "gvil@dan.com",
		password: bcrypt.hashSync("123123", 10),
		empresa: "Mail On Bike",
		roles: [3, 5],
	},
	{
		fullName: "Anderson Vallejo",
		username: "avallejo",
		email: "avell@dan.com",
		password: bcrypt.hashSync("123123", 10),
		empresa: "Mail On Bike",
		roles: [2, 5],
	},
	{
		fullName: "Angélica Moreno",
		username: "amoreno",
		email: "amoreno@dan.com",
		password: bcrypt.hashSync("123123", 10),
		empresa: "Mail On Bike",
		roles: [2, 5],
	},
];

// Roles
const roles = [
	{ id: 1, name: "administrador" },
	{ id: 2, name: "operador" },
	{ id: 3, name: "auditor" },
	{ id: 4, name: "cliente" },
	{ id: 5, name: "mobiker" },
];

// MoBikers
// const mobikers = [
// 	{ nombres: "Daniel", apellidos: "Colmenares" },
// 	{ nombres: "Alberto", apellidos: "Hernández" },
// 	{ nombres: "Angélica", apellidos: "Moreno" },
// 	{ nombres: "Fernando", apellidos: "Carbajal" },
// ];

// Rangos
const rangos = [
	{ id: 1, rangoMoBiker: "Pre-MoBiker" },
	{ id: 2, rangoMoBiker: "MoBiker" },
	{ id: 3, rangoMoBiker: "MoBiker Pro" },
	{ id: 4, rangoMoBiker: "MoBiker Élite" },
];

// Tipo de Comprobante
const tipoDeComprobante = [
	{ id: 1, tipo: "Ninguno" },
	{ id: 2, tipo: "Factura Inc/IGV" },
	{ id: 3, tipo: "Factura Sin/IGV" },
	{ id: 4, tipo: "Boleta" },
	{ id: 5, tipo: "Recibo por Honorarios" },
];

// Tipo de Carga
const tipoDeCarga = [
	{ id: 1, tipo: "Producto E-commerce" },
	{ id: 2, tipo: "Producto Alimenticio" },
	{ id: 3, tipo: "Documento/Sobre" },
];

// Modalidad
const modalidades = [
	{ id: 1, tipo: "Una vía" },
	{ id: 2, tipo: "Ruteo" },
	{ id: 3, tipo: "Express" },
	{ id: 4, tipo: "Con Retorno" },
];

// Formas de Pago
const formasDePago = [
	{ id: 1, pago: "Crédito 7 Días" },
	{ id: 2, pago: "Crédito 15 Días" },
	{ id: 3, pago: "Crédito 30 Días" },
	{ id: 4, pago: "Crédito 60 Días" },
	{ id: 5, pago: "Efectivo en Destino" },
	{ id: 6, pago: "Efectivo en Origen" },
	{ id: 7, pago: "Transferencia" },
	{ id: 8, pago: "Sin Cargo x Canje" },
	{ id: 9, pago: "Sin Cargo x Compensación" },
	{ id: 10, pago: "Sin Cargo x Cortesía" },
	{ id: 11, pago: "Sin Cargo x Envío Propio" },
	{ id: 12, pago: "Sin Cargo x Error MoB" },
];

// Roles de Cliente
const rolesCliente = [
	{ id: 1, rol: "Remitente" },
	{ id: 2, rol: "Destinatario" },
	{ id: 3, rol: "Monitor" },
];

// Tipo de Envío
const tipoEnvio = [
	{ id: 1, tipo: "E-Commerce" },
	{ id: 2, tipo: "EmpresaG" },
	{ id: 3, tipo: "Express" },
	{ id: 4, tipo: "Juntoz" },
];

// Distritos
const distritos = [
	{ id: 1, distrito: "Cercado de Lima" },
	{ id: 2, distrito: "Ancón" },
	{ id: 3, distrito: "Ate" },
	{ id: 4, distrito: "Barranco" },
	{ id: 5, distrito: "Breña" },
	{ id: 6, distrito: "Carabayllo" },
	{ id: 7, distrito: "Comas" },
	{ id: 8, distrito: "Chaclacayo" },
	{ id: 9, distrito: "Chorrillos" },
	{ id: 10, distrito: "El Agustino" },
	{ id: 11, distrito: "Jesús María" },
	{ id: 12, distrito: "La Molina" },
	{ id: 13, distrito: "La Victoria" },
	{ id: 14, distrito: "Lince" },
	{ id: 15, distrito: "Lurigancho" },
	{ id: 16, distrito: "Lurín" },
	{ id: 17, distrito: "Magdalena del Mar" },
	{ id: 18, distrito: "Miraflores" },
	{ id: 19, distrito: "Pachacamac" },
	{ id: 20, distrito: "Pucusana" },
	{ id: 21, distrito: "Pueblo Libre" },
	{ id: 22, distrito: "Puente Piedra" },
	{ id: 23, distrito: "Punta Negra" },
	{ id: 24, distrito: "Punta Hermosa" },
	{ id: 25, distrito: "Rímac" },
	{ id: 26, distrito: "San Bartolo" },
	{ id: 27, distrito: "San Isidro" },
	{ id: 28, distrito: "Independencia" },
	{ id: 29, distrito: "San Juan de Miraflores" },
	{ id: 30, distrito: "San Luis" },
	{ id: 31, distrito: "San Martín de Porres" },
	{ id: 32, distrito: "San Miguel" },
	{ id: 33, distrito: "Santiago de Surco" },
	{ id: 34, distrito: "Surquillo" },
	{ id: 35, distrito: "Villa María del Triunfo" },
	{ id: 36, distrito: "San Juan de Lurigancho" },
	{ id: 37, distrito: "Santa María del Mar" },
	{ id: 38, distrito: "Santa Rosa" },
	{ id: 39, distrito: "Los Olivos" },
	{ id: 40, distrito: "Cieneguilla" },
	{ id: 41, distrito: "San Borja" },
	{ id: 42, distrito: "Villa El Salvador" },
	{ id: 43, distrito: "Santa Anita" },
	{ id: 44, distrito: "Callao" },
	{ id: 45, distrito: "Bellavista" },
	{ id: 46, distrito: "Carmen de La Legua" },
	{ id: 47, distrito: "La Perla" },
	{ id: 48, distrito: "La Punta" },
	{ id: 49, distrito: "Ventanilla" },
];

const codigosPostales = [
	{ codigo: "15001", distritoId: 1 }, // 01 Cercado de Lima
	{ codigo: "15003", distritoId: 1 },
	{ codigo: "15004", distritoId: 1 },
	{ codigo: "15006", distritoId: 1 },
	{ codigo: "15018", distritoId: 1 },
	{ codigo: "15046", distritoId: 1 },
	{ codigo: "15079", distritoId: 1 },
	{ codigo: "15081", distritoId: 1 },
	{ codigo: "15082", distritoId: 1 },
	{ codigo: "15083", distritoId: 1 },
	{ codigo: "15088", distritoId: 1 },
	{ codigo: "15123", distritoId: 2 }, // 02 Ancón
	{ codigo: "15022", distritoId: 3 }, // 03 Ate
	{ codigo: "15026", distritoId: 3 },
	{ codigo: "15483", distritoId: 3 },
	{ codigo: "15063", distritoId: 4 }, // 04 Barranco
	{ codigo: "15082", distritoId: 5 }, // 05 Breña
	{ codigo: "15083", distritoId: 5 },
	{ codigo: "15121", distritoId: 6 }, // 06 Carabayllo
	{ codigo: "15324", distritoId: 7 }, // 07 Comas
	{ codigo: "15472", distritoId: 8 }, // 08 Chaclacayo
	{ codigo: "15056", distritoId: 9 }, // 09 Chorrillos
	{ codigo: "15063", distritoId: 9 },
	{ codigo: "15067", distritoId: 9 },
	{ codigo: "15003", distritoId: 10 }, // 10 El Augustino
	{ codigo: "15004", distritoId: 10 },
	{ codigo: "15072", distritoId: 11 }, // 11 Jesús María
	{ codigo: "15076", distritoId: 11 },
	{ codigo: "15023", distritoId: 12 }, // 12 La Molina
	{ codigo: "15026", distritoId: 12 },
	{ codigo: "15018", distritoId: 13 }, //13 La Victoria
	{ codigo: "15019", distritoId: 13 },
	{ codigo: "15033", distritoId: 13 },
	{ codigo: "15046", distritoId: 14 }, // 14 Lince
	{ codigo: "15073", distritoId: 14 },
	{ codigo: "15457", distritoId: 15 }, // 15 Lurigancho
	{ codigo: "15461", distritoId: 15 },
	{ codigo: "15468", distritoId: 15 },
	{ codigo: "15472", distritoId: 15 },
	{ codigo: "15841", distritoId: 16 }, // 16 Lurín
	{ codigo: "15842", distritoId: 16 },
	{ codigo: "15076", distritoId: 17 }, // 17 Magdalena del Mar
	{ codigo: "15086", distritoId: 17 },
	{ codigo: "15046", distritoId: 18 }, // 18 Miraflores
	{ codigo: "15048", distritoId: 18 },
	{ codigo: "15074", distritoId: 18 },
	{ codigo: "15594", distritoId: 19 }, // 19 Pachacámac
	{ codigo: "15823", distritoId: 19 },
	{ codigo: "15865", distritoId: 20 }, // 20 Pucusana
	{ codigo: "15866", distritoId: 20 },
	{ codigo: "15084", distritoId: 21 }, // 21 Pueblo Libre
	{ codigo: "15086", distritoId: 21 },
	{ codigo: "15117", distritoId: 22 }, // 22 Puente Piedra
	{ codigo: "15121", distritoId: 22 },
	{ codigo: "15122", distritoId: 22 },
	{ codigo: "15851", distritoId: 23 }, // 23 Punta Negra
	{ codigo: "15845", distritoId: 24 }, // 24 Punta Hermosa
	{ codigo: "15846", distritoId: 24 },
	{ codigo: "15093", distritoId: 25 }, // 25 Rímac
	{ codigo: "15094", distritoId: 25 },
	{ codigo: "15096", distritoId: 25 },
	{ codigo: "15333", distritoId: 25 },
	{ codigo: "15855", distritoId: 26 }, // 26 San Bartolo
	{ codigo: "15856", distritoId: 26 },
	{ codigo: "15036", distritoId: 27 }, // 27 San Isidro
	{ codigo: "15046", distritoId: 27 },
	{ codigo: "15047", distritoId: 27 },
	{ codigo: "15073", distritoId: 27 },
	{ codigo: "15076", distritoId: 27 },
	{ codigo: "15311", distritoId: 28 }, // 28 Independencia
	{ codigo: "15332", distritoId: 28 },
	{ codigo: "15333", distritoId: 28 },
	{ codigo: "15801", distritoId: 29 }, // 29 San Juan de Miraflores
	{ codigo: "15803", distritoId: 29 },
	{ codigo: "15804", distritoId: 29 },
	{ codigo: "15806", distritoId: 29 },
	{ codigo: "15824", distritoId: 29 },
	{ codigo: "15828", distritoId: 29 },
	{ codigo: "15842", distritoId: 29 },
	{ codigo: "15019", distritoId: 30 }, // 30 San Luis
	{ codigo: "15021", distritoId: 30 },
	{ codigo: "15022", distritoId: 30 },
	{ codigo: "15102", distritoId: 31 }, // 31 San Martín de Porres
	{ codigo: "15103", distritoId: 31 },
	{ codigo: "15107", distritoId: 31 },
	{ codigo: "15108", distritoId: 31 },
	{ codigo: "15109", distritoId: 31 },
	{ codigo: "15112", distritoId: 31 },
	{ codigo: "15113", distritoId: 31 },
	{ codigo: "15086", distritoId: 32 }, // 32 San Miguel
	{ codigo: "15087", distritoId: 32 },
	{ codigo: "15088", distritoId: 32 },
	{ codigo: "15023", distritoId: 33 }, // 33 Santiago de Surco
	{ codigo: "15038", distritoId: 33 },
	{ codigo: "15039", distritoId: 33 },
	{ codigo: "15048", distritoId: 33 },
	{ codigo: "15049", distritoId: 33 },
	{ codigo: "15054", distritoId: 33 },
	{ codigo: "15056", distritoId: 33 },
	{ codigo: "15063", distritoId: 33 },
	{ codigo: "15036", distritoId: 34 }, // 34 Surquillo
	{ codigo: "15038", distritoId: 34 },
	{ codigo: "15047", distritoId: 34 },
	{ codigo: "15048", distritoId: 34 },
	{ codigo: "15809", distritoId: 35 }, // 35 Villa María del Triunfo
	{ codigo: "15811", distritoId: 35 },
	{ codigo: "15812", distritoId: 35 },
	{ codigo: "15817", distritoId: 35 },
	{ codigo: "15818", distritoId: 35 },
	{ codigo: "15822", distritoId: 35 },
	{ codigo: "15828", distritoId: 35 },
	{ codigo: "15401", distritoId: 36 }, // 36 San Juan de Lurigancho
	{ codigo: "15404", distritoId: 36 },
	{ codigo: "15408", distritoId: 36 },
	{ codigo: "15412", distritoId: 36 },
	{ codigo: "15416", distritoId: 36 },
	{ codigo: "15419", distritoId: 36 },
	{ codigo: "15423", distritoId: 36 },
	{ codigo: "15427", distritoId: 36 },
	{ codigo: "15431", distritoId: 36 },
	{ codigo: "15434", distritoId: 36 },
	{ codigo: "15438", distritoId: 36 },
	{ codigo: "15442", distritoId: 36 },
	{ codigo: "15446", distritoId: 36 },
	{ codigo: "15449", distritoId: 36 },
	{ codigo: "15453", distritoId: 36 },
	{ codigo: "15457", distritoId: 36 },
	{ codigo: "15861", distritoId: 37 }, // 37 Santa María del Mar
	{ codigo: "15123", distritoId: 38 }, // 38 Santa Rosa
	{ codigo: "15304", distritoId: 39 }, // 39 Los Olivos
	{ codigo: "15306", distritoId: 39 },
	{ codigo: "15307", distritoId: 39 },
	{ codigo: "15311", distritoId: 39 },
	{ codigo: "15314", distritoId: 39 },
	{ codigo: "15593", distritoId: 40 }, // 40 Cieneguilla
	{ codigo: "15594", distritoId: 40 },
	{ codigo: "15021", distritoId: 41 }, // 41 San Borja
	{ codigo: "15034", distritoId: 41 },
	{ codigo: "15036", distritoId: 41 },
	{ codigo: "15037", distritoId: 41 },
	{ codigo: "15816", distritoId: 42 }, // 42 Villa El Salvador
	{ codigo: "15828", distritoId: 42 },
	{ codigo: "15829", distritoId: 42 },
	{ codigo: "15831", distritoId: 42 },
	{ codigo: "15836", distritoId: 42 },
	{ codigo: "15837", distritoId: 42 },
	{ codigo: "15834", distritoId: 42 },
	{ codigo: "15841", distritoId: 42 },
	{ codigo: "15842", distritoId: 42 },
	{ codigo: "15007", distritoId: 43 }, // 43 Santa Anita
	{ codigo: "15008", distritoId: 43 },
	{ codigo: "15009", distritoId: 43 },
	{ codigo: "15011", distritoId: 43 },
	{ codigo: "07001", distritoId: 44 }, // 01 Cercado del Callao
	{ codigo: "07006", distritoId: 44 },
	{ codigo: "07021", distritoId: 44 },
	{ codigo: "07026", distritoId: 44 },
	{ codigo: "07031", distritoId: 44 },
	{ codigo: "07036", distritoId: 44 },
	{ codigo: "07041", distritoId: 44 },
	{ codigo: "07046", distritoId: 44 },
	{ codigo: "07001", distritoId: 45 }, // 02 Bellavista
	{ codigo: "07006", distritoId: 45 },
	{ codigo: "07011", distritoId: 45 },
	{ codigo: "07016", distritoId: 45 },
	{ codigo: "07021", distritoId: 45 },
	{ codigo: "07006", distritoId: 46 }, // 03 Carmen de La Legua Reynoso
	{ codigo: "07011", distritoId: 47 }, // 04 La Perla
	{ codigo: "07016", distritoId: 47 },
	{ codigo: "07021", distritoId: 48 }, // 05 La Punta
	{ codigo: "07046", distritoId: 49 }, // 06 Ventanilla
	{ codigo: "07051", distritoId: 49 },
	{ codigo: "07056", distritoId: 49 },
	{ codigo: "07061", distritoId: 49 },
	{ codigo: "07066", distritoId: 49 },
	{ codigo: "07071", distritoId: 49 },
	{ codigo: "07076", distritoId: 49 },
];

db.sequelize
	.sync({ force: true })
	.then(() => {
		// Crear conexión
		console.log("Borrando data y creando nuevas tablas...");
	})
	.then(() => {
		// Creando roles
		roles.forEach((rol) => Role.create(rol));
	})
	.then(() => {
		// Creando los rangos
		rangos.forEach((rango) => Rango.create(rango));
	})
	.then(() => {
		// Creando los distritos
		distritos.forEach((distrito) => Distrito.create(distrito));
	})
	.then(() => {
		// Creando tabla de comprobante
		tipoDeComprobante.forEach((comprobante) => Comprobante.create(comprobante));
	})
	.then(() => {
		// Creando tabla de tipo de Carga
		tipoDeCarga.forEach((carga) => Carga.create(carga));
	})
	.then(() => {
		// Creando tabla de Modalidad
		modalidades.forEach((modalidad) => Modalidad.create(modalidad));
	})
	.then(() => {
		// Creando tabla de Forma de Pago
		formasDePago.forEach((pago) => FormaDePago.create(pago));
	})
	.then(() => {
		// Creando tabla de Roles del Cliente
		rolesCliente.forEach((rolCliente) => RolCliente.create(rolCliente));
	})
	.then(() => {
		// Creando tabla de Tipo de Envío
		tipoEnvio.forEach((envio) => Envio.create(envio));
	})
	.then(() => {
		// Creando usuarios
		users.forEach((user) => {
			let roles = user.roles;
			User.create(user).then((usuario) => {
				usuario.addRoles(roles);
			});
		});
	})
	// .then(() => {
	// 	// Creando MoBikers
	// 	mobikers.forEach((mobiker) => Mobiker.create(mobiker));
	// })
	.then(() => {
		// Creando los Códigos Postales
		codigosPostales.forEach((codigo) => CodigoPostal.create(codigo));
	});
