const express = require('express')
const app = express()
var db = require("./models");

// app.use(express.bodyParser())
app.use(express.json());

var PORT = process.env.PORT || 8080;

db.sequelize.sync().then(function() {
    app.listen(PORT, function() {
      console.log("App listening on PORT " + PORT);
    });
  });

app.post('/api/users', (req, res) => {
    // res.send('Hello World!');
    // const user = req.body;
    // console.log(req.body);
    db.User.create(req.body).then(function(dbUser) {
        res.json(dbUser);
      });
});

// app.listen(port, () => console.log(`Example app listening on port ${port}!`));