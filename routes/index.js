//Importo el controlador de la carpeta controllers
const indexController = require("../controllers/indexController");

//Llamo al router de express
const router = require("express").Router();

//Hago las rutas
router.get("/", indexController.home);


//Exporto el router
module.exports = router;
