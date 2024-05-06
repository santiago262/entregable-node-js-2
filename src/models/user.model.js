const { Sequelize, DataTypes, Model } = require('sequelize');
const password="BQ0o1JivcitLQpkoH73g9TlMmklZWu9c"
const username="api_users_d7of_user"
const database ="api_users_d7of"
const sequelize = new Sequelize( database, username, password, {
    host: 'dpg-cosjapicn0vc738gmjqg-a',
    dialect: 'postgres',  
    port: 5432          
})

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


