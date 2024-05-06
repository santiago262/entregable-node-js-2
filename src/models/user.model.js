const { Sequelize, DataTypes, Model } = require('sequelize');

const sequelize = new Sequelize('api_users', 'root', '1234', {
    host: 'localhost',
    dialect: "mysql",
    port:3306
  });


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
},{
  sequelize,
  modelName:"user"
})
module.exports=User;


