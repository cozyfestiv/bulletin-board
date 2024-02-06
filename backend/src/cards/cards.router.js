const router = require("express").Router({ mergeParams:true });
const controller = require("./cards.controller");
const methodNotAllowed = require("../errors/methodNotAllowed");

router.route("/list")
  .get(controller.list)
  .all(methodNotAllowed);



module.exports = router;