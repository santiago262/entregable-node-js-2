const { Sequelize, DataTypes, Model } = require('sequelize');

require('dotenv').config();

// Usar la variable de entorno que has definido
const miVariable = process.env.DATABASE_URL
// Crear la instancia de Sequelize usando miVariable
const sequelize = new Sequelize(miVariable, {
    dialect: 'mysql' // Especifica aquí el dialecto que estás utilizando
});

async function checkConnection() {
    try {
        await sequelize.authenticate();
        console.log("Conexión exitosa");
    } catch (err) {
        console.error("Error de conexión:", err);
    }
}


class User extends Model {}
User.init({
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    first_name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    last_name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    },
    birthday: {
        type: Sequelize.DATEONLY,
        allowNull: true 
    }
}, {
    sequelize,
    modelName: "user"
});


module.exports = User;
