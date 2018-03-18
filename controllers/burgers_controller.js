var express = require("express")

var router = express.Router()
//  we have index so we don't need /burgers
var db = require("../models/")

// get route -> index
//  we use router and they can be tied to any app
//  do not need access to any app
//  router is an express object makes loose coupling
router.get("/", function(req, res) {
  res.redirect("/burgers")

  db.Burger.findAll({}).then(function(data) {
    var hbsObject = { burgers: data }
    res.render("index", hbsObject)
  })
})



router.post("burgers/create", function(req, res) {
  db.Burger.create({
    "burger_name": req.body.burger_name
  }).then(function(result) {
    console.log(result)
    res.redirect("/")
  })
})

// put route -> back to index
router.put("/burgers/update/:id", function(req, res) {
  db.Burger.update(
    {
      devoured: true
    },
    {
      where: {
        id: req.params.id
      }
    }
  ).then(function(result) {
    // wrapper for orm.js that using MySQL update callback will return a log to console,
    // render back to index with handle
    console.log(result)
    // Send back response and let page reload from .done in Ajax
    res.json("/")
  })
})
console.log("burger controller!")

module.exports = router
