let express = require("express");
let mongoose = require("mongoose");
let cors = require("cors");
let bodyParser = require("body-parser");

const studentRoute = require("../Backend/routes/student.route");
const db = require("../Backend/database/db").mongoURI; //Traemos el script db

//Conexión con base de datos MongoAtlas
mongoose
    .connect(db, {useNewUrlParser:true})
    .then(()=>{
        console.log("Conexión exitosa con MongoDB");
    })
    .catch((err)=>{
        console.log(err + " No se pudo establecer la conexión");
    });

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true,
}));

app.use(cors());
app.use("/students", studentRoute);

const port = process.env.PORT || 4000; //Puerto por el que va a trabajar la app
const server = app.listen(port, ()=>{
    console.log("Conectado al puerto " + port);
});

app.use(function(err, req, res, next){
    console.error(err.message)
    if(!err.statusCode){
        err.statusCode = 500;
    };

    res.status(err.statusCode).send(err.message);
});

