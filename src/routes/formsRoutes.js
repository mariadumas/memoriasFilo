const formsController = require("../controllers/formsController")

const upload = require("../middlewares/multer")

const router = require("express").Router();




router.get("/admin", formsController.admin)


router.get("/ci", formsController.createInstituto)
router.post("/ci", upload.single("logo"), formsController.storeInstituto)

router.get("/cint", formsController.createIntegrante)
router.post("/cint", upload.single("imagen"),formsController.storeIntegrante)

router.get("/cargo", formsController.createCargo)
router.post("/cargo",formsController.storeCargo)

router.get("/cp", formsController.createProyecto)
router.post("/cp",formsController.storeProyecto)

router.get("/cmp", formsController.createMiembroProyecto)
router.post("/cmp",formsController.storeMiembroProyecto)






module.exports = router;