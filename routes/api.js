const { Router } = require("express");
const router = new Router();

const data = require("../data/beasts.json");

router.get("/beasts", function handleGET(req, res) {
  const { query } = req;
  const dragons = data.filter((beast) => beast.species === query.species);
  res.send(dragons);
});

router.post("/beasts", function handlePOST(req, res) {
  const { data } = req;
  console.log(data);
  res.send();
});

module.exports = router;
