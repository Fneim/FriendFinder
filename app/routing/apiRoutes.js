var friends = require("../data/friends");

module.exports = function(app) {

  app.get("/api/friends", function (req, res) {
    res.json(friends);
  });

  app.post("/api/friends", function(req, res) {
    for(var i = 0; i < friends.scores.length; i++) {
      console.log(friends[i].scores);
    }
  });
}
