const express = require('express');
//Hago el require del router. Como lo nombré index.js no hace falta especificar el archivo. 
const mainRouter = require("./routes")
const app = express();
const port = 3000;

app.use(express.static("public"));
app.set('view engine', 'ejs');

//Modifico el Hello world para que derive al manejador de rutas. Todas las peticiones que llegan al servidor por el index, las va a manejar el mainRouter. 
app.use('/', mainRouter);

app.listen(process.env.PORT || port, () => {
  console.log(`Example app listening on port ${port}`)
})