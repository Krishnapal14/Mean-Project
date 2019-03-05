let express = require("express");
let router = express.Router();
let empController = require("../controller/emp.controller.js");

router.get("/empTest", empController.getEmpTest);
router.get("/empJson", empController.getEmpJson);
router.get("/empDbInfo", empController.getEmpInfoDb);
router.post("/empDbStore", empController.postEmpDbStore);
router.put("/empDbStoreupdate", empController.updateEmpInfo);
router.delete("/empDbStoredel", empController.delEmpInfo);
module.exports = router;
