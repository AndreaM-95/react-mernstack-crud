let express = require("express"),
    router = express.Router();

let studentSchema = require("../Models/Student"); //Es un objeto del modelo studentSchema

//request recibe la petición del front
//Ruta para crear student
router.route("/create-student").post((req, res, next)=>{ //Apunta al archivo creado del front
    studentSchema.create(req.body, (error, data)=>{ //Aqui le doy los datos que vienen del front
        if(error){
            return next(error);
        }else{
            console.log(data);
            res.json(data);
        }
    });
});

//Ruta para leer estudiantes
router.route("/").get((req, res, next)=>{
    // eslint-disable-next-line array-callback-return
    studentSchema.find((error, data)=>{
        if(error){
            return next(error);
        }else{
            res.json(data);
        }
    });
});

//Ruta para obtener estudiantes
router.route("/edit-student/:id").get((req, res, next)=>{
    studentSchema.findById(req.params.id, (error, data)=>{
        if(error){
            return next(error);
        }else{
            res.json(data);
        }
    });
});

//Ruta para Actualizar estudiantes
router.route("/update-student/:id").put((req, res, next)=>{
    studentSchema.findByIdAndUpdate(
        req.params.id, //Los buscará y actualizará por el id
        {
            $set:req.body, //De aquí vienen los datos del formulario
        },
        (error, data)=>{
            if(error){
                console.log(error);
                return next(error);
            }else{
                res.json(data);
                console.log("Estudiante actualizado con éxito")
            }
        }
    );
});

//Ruta para eliminar estudiante
router.route("/delete-student/:id").delete((req, res, next) =>{
    studentSchema.findByIdAndDelete(req.params.id, (error, data)=>{
        if(error){
            return next(error);
        }else{
            res.status(200).json({
                msg:data,
            });
            console.log("Estudiante borrado con éxito")
        }
    });
});

module.exports = router;