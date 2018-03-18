module.exports = function(sequelize, DataTypes) {
    console.log('we hit customer burger !!!');

    // var user = sequelize.define('User', {});
    // var box = sequelize.define('Box', {});

//   var UserBox = sequelize.define("UserBox", {

    const CustomerBurger = sequelize.define("CustomerBurger", {
        CustomerId: DataTypes.INTEGER,
        BurgerId: DataTypes.INTEGER
    })

    return CustomerBurger
}
