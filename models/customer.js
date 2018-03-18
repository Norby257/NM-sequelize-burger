module.exports = function(sequelize, DataTypes) {
  var Customer = sequelize.define("Customer", {
    customerName: {
      type: DataTypes.STRING,
      allowNull: false
    }
  })

  Customer.associate = function(models) {
  Customer.belongsToMany(models.Burger, {
        through: models.CustomerBurger,
        onDelete: "CASCADE"
    })
}
  console.log(`THIS IS THE customer!!! RIGHT BEFORE THE RETURN ----- ${Customer}`);  
  return Customer
}
