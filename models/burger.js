module.exports = function(sequelize, DataTypes) {
    var Burger = sequelize.define("Burger", {
        //  constraints and columns go here when we call sequelize.define 
        burger_name: {

       type: DataTypes.STRING,
       allowNull: false

    },

        devoured: {

         type: DataTypes.BOOLEAN,
         defaultValue: false
        }
    });

    Burger.associate = function(models) {
        Burger.belongsToMany(models.Customer, {
            through: models.CustomerBurger,
            onDelete: "CASCADE"
        })
    }
    //  always return what you define else will get an error 
    console.log(`THIS IS THE BURGER!!! RIGHT BEFORE THE RETURN ----- ${Burger}`);
    return Burger;
};