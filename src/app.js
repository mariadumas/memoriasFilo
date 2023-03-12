const express = require('express');
//Hago el require del router. Como lo nombré index.js no hace falta especificar el archivo. 
const mainRouter = require("./routes")
const formsRoutes = require("./routes/formsRoutes")

// const bodyParser = require("body-parser")

const app = express();
const port = 3030;
const path = require('path');

app.use(express.static("./public"));
app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, './views'));

app.use(express.urlencoded({extended: false}));
app.use(express.json());

//Modifico el Hello world para que derive al manejador de rutas. Todas las peticiones que llegan al servidor por el index, las va a manejar el mainRouter. 
app.use('/', mainRouter);
app.use("/forms", formsRoutes)


app.listen(process.env.PORT || port, () => {
  console.log(`Example app listening on port ${port}`)
})