var express = require("express")

var cors = require("cors")

var url = "mongodb://127.0.0.1:27017";

var mongoClient = require("mongodb").MongoClient;

var app = express();

app.use(cors())

app.use(
  express.urlencoded({
    extended: true
  })
)

app.use(express.json())

app.get("/regdetails", (req, res) => {
  mongoClient.connect(url).then((obj) => {
    var database = obj.db("reg");
    database
      .collection("regform")
      .find({})
      .toArray()
      .then((doc) => {
        res.send(doc);
        res.end();
      })
      .catch((err) => {
        console.log(err);
      });
  });
});

app.post("/regdetails", (req, res) => {
  var regDetails = {
    Name: req.body.Name,
    Email: req.body.Email,
    Password: req.body.Password,
  };
  mongoClient.connect(url).then((obj) => {
    var database = obj.db("reg")
    database
      .collection("regform")
      .insertOne(regDetails)
      .then(() => {
        console.log("success inserted")
        res.redirect("/regdetails")
      })
      .catch((err) => {
        console.log(err)
      });
  });
});

app.listen(5000);
console.log(`server started:http://127.0.0.1:5000`);
