const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('imc', 'root', 'luiz', {
  host: 'localhost',
  dialect: 'mysql'
})

async function authenticate() {
  try {
    await sequelize.authenticate();
    await sequelize.sync({ force: false });
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}



const User = sequelize.define(
  'User',
  {
    // Model attributes are defined here
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      // allowNull defaults to true
    },
  },{
    timestamps: true,
    paranoid: true,
    underscored: true,
    freezeTableName: true,
    tableName: 'users',
    modelName: 'Users',
    initialAutoIncrement: 100000,
    charset: 'utf8mb4',
    collate: 'utf8mb4_swedish_ci',
  }
);



authenticate()
module.exports = {
  sequelize,
  User,
};