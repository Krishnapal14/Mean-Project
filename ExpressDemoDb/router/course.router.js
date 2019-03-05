let express = require("express");
let router = express.Router();
let courseController = require("../controller/course.controller.js");

router.get("/courseTest", courseController.getcourseTest);
router.get("/courseJson", courseController.getcourseJson);
router.get("/courseDbInfo", courseController.getcourseInfoDb);
router.post("/courseDbStore", courseController.postcourseDbStore);
router.put("/courseDbStoreupdate", courseController.updatecourseInfo);
router.delete("/courseDbStoredel", courseController.delcourseInfo);
module.exports = router;
