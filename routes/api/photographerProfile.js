const router = require("express").Router();
const photographerController = require("../../controllers/photographerController");

router.route("/")
    .get(photographerController.findAll)
    .post(photographerController.findByLocation)

router.route("/edit/:id").post(photographerController.create);

router
.route("/:id")
.get(photographerController.findById);

module.exports = router;