var express = require("express")
var bodyParser = require("body-parser")
var path = require("path")

var app = express()
// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(path.join(__dirname, "/public")))
// app.use(express.static("public"));
var db = require("./models")

// parse application/x-www-form-urlencoded
app.use(
  bodyParser.urlencoded({
    extended: false
  })
)

//  set handlebars
var exphbs = require("express-handlebars")

app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main"
  })
)
app.set("view engine", "handlebars")

var routes = require("./controllers/burgers_controller")

app.use("/", routes)
app.use("/update", routes)
app.use("/create", routes)

// listen on port 3000 OR what ever port is provided in the env
var PORT = process.env.PORT || 3000

db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log(`App listening on PORT ${PORT}`)
  })
})
