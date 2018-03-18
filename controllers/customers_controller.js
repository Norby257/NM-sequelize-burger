var express = require("express")

var router = express.Router()
//  we have index so we don't need /burgers
var db = require("../models/")

// get route -> index
//  we use router and they can be tied to any app
//  do not need access to any app
//  router is an express object
//  db.methods we are using are db.findAll db.update, db.createOne? idk
router.get("/", function(req, res) {
  res.redirect("/customers")
  //  I need to select the correct thing here and not the operation data 
  // db.Burger.selectAll(function(data){
  //   var hbsObject = {
  //     burgers: data
  //   }
  //   console.log(hbsObject);
  //   res.render("index", hbsObject);
  // })
    // db.Burger.selectAll(function(data){
    //   res.render("index", {burgers: data})
    // });
})

router.get("/customers", function(req, res) {
  // express callback response by calling burger.selectAllBurger
  db.Customer.findAll({}).then(function(dbCustomer) {
    res.json(dbCustomer)
  })
})


router.post("customer/create", function(req, res) {
  db.Customer.create({
    customerName: req.body.customerName
  }).then(function(result) {
    console.log(result)
    res.redirect("/")
  })
})
console.log("customer controller!");

module.exports = router
