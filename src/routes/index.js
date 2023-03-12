//Importo el controlador de la carpeta controllers
const indexController = require("../controllers/indexController");

const upload = require("../middlewares/multer")

//Llamo al router de express
const router = require("express").Router();

//Hago las rutas
router.get("/", indexController.home);
router.get("/institutos", indexController.institutos)
router.get("/institutos/d/:id", indexController.detail)
router.get("/institutos/d/:id/integrantes", indexController.integrantes)
router.get("/institutos/d/:id/proyectos", indexController.proyectos)
router.get("/institutos/d/:id/becarixs", indexController.becarixs)
router.get("/institutos/d/:id/publicaciones", indexController.publicaciones)
router.get("/institutos/d/:id/reuniones", indexController.reuniones)
router.get("/institutos/d/:id/premios", indexController.premios)
router.get("/institutos/d/:id/relaciones", indexController.relaciones)




router.get("/json", indexController.json)

//Exporto el router
module.exports = router;
