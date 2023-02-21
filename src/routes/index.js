//Importo el controlador de la carpeta controllers
const indexController = require("../controllers/indexController");

const upload = require("../middlewares/multer")

//Llamo al router de express
const router = require("express").Router();

//Hago las rutas
router.get("/", indexController.home);
router.get("/institutos", indexController.institutos)
router.get("/institutos/:id", indexController.detail1)


router.get("/ci", indexController.create)
router.post("/ci", upload.single("logo"), indexController.store)



// router.get("/json", indexController.json)

//Exporto el router
module.exports = router;
