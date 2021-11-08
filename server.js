const { notEqual } = require("assert")
const express = require("express")
const mongoose = require("mongoose")
const Router = require("./routes")
const app = express()
var Donacion = require("./Schemas/donationSchema")
var Usuario = require("./Schemas/userSchema")
var Articulo = require("./Schemas/articuloSchema")
var crearDonacion = require("./Schemas/nuevaDonacionSchema")
const { serialize } = require("v8")
const ArticuloDonacion = require("./Schemas/articuloDonacion")
const { Server } = require("http")


app.use(express.json());

const MONGODB_URI = 'mongodb+srv://caritasdb:caritasdb@dbcluster.y2ft3.mongodb.net/CaritasApp?retryWrites=true&w=majority'

mongoose.connect(MONGODB_URI || 'mongodb://localhost/CaritasDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.once("open",  () => {
    
    console.log("Conected to Caritas DB!")

}).on("error", (error) => {

    console.log("Failed to connect " +  error)
})

app.use(Router);

app.listen(process.env.PORT || 8081, () => {
    console.log("Server is running at port 8081");
  });


// Create donation
// POST request


app.post("/createdonation", async (req, res) => {
    var nuevaDonacion = req.body;
    console.log(nuevaDonacion);
    var donacion = new Donacion(nuevaDonacion)
    donacion.save(function (err, saved) {
        if (err) {
          console.log(err);
        } 
        else {  
           console.log(saved); 
           res.json(saved)        }
    });
})

// http://192.168.1.71:8081/createdonation

app.get("/fetchdonacion", (req, res) => {
    Donacion.find({}).then((DBitems) => {

        res.send(DBitems)
    })
})


app.get("/fetchusuario", (req, res) => {
    Usuario.find({}).then((DBitems) => {

        res.send(DBitems)
    })
})

app.get("/fetcharticulo", (req, res) => {
    Articulo.find({}).then((DBitems) => {

        res.send(DBitems)
    })
})

app.get("/fetchfechadonacion", (req, res) => {
    Donacion.find({fecha_creacion: ISODate('2021-10-10T06:00:00.000+00:00')}).then((DBitems) => {

        res.send(DBitems)
    })
})

// Delete donation
// POST request
/*
app.post("/deletedonation", (req, res) => {

    Data.findOneAndRemove({
        _id: req.get("id")
    },(error) => {
        console.log("Failed " + error)
    })

    res.send("Deleted!")
})

*/
// Update donation

//Se actualiza el valor de cantidad_recibida dentro de la donación que se recibe, además de ser actualizada a recibida
app.put("/updatedonation", (req, res) => {

    var donacionToUpdate = req.body;
    var donacionId = donacionToUpdate._id;
    delete donacionToUpdate._id;
    donacionToUpdate.estado_recepcion_almacen = true;

    console.log("Update donacion");
    console.log(donacionToUpdate);
    //var donacion = new Donacion(donacionToUpdate)

    Donacion.findByIdAndUpdate(donacionId, donacionToUpdate, {upsert: true, new:true}, function(error, saved){
        if (error) {
            console.log(error);
          } 
          else {  
             console.log("Saved object " + saved); 
             res.json(saved)        }
    });
})

app.put("/updatealmacen", function (req, res){
    
    var almacenToUpdate = req.body;
    var donacionId = almacenToUpdate._id;
    delete donacionId._id;

    Donacion.findByIdAndUpdate(donacionId, almacenToUpdate, {upsert: true, new:true}, function(error, saved){
        if (error) {
            console.log(error);
          } 
          else {  
             console.log("Saved object " + saved); 
             res.json(saved)        }
    });
})

/*
app.post("/updatearticulo", (req, res) => {
    
    Data.findOneAndUpdate({

        _id: req.get("id")

    }, {

        descripcion: req.patch("descripcion"),
        uom: req.patch("uom"),
        upc: req.patch("upc"),
        peso_articulo_kg: req.patch("peso_articulo_kg")
        

    }, (error) => {
        console.log("Failded to Update " + error)
    })

    res.send("Updated!")
    
})*/

app.post("/createarticulo", (req, res) => {

    var donation = new Articulo ({

        descripcion: req.get("descripcion"),
        uom: req.get("uom"),
        upc: req.get("upc"),
        peso_articulo_kg: req.get("peso_articulo_kg")

    })
    new Articulo(donation)
    donation.save().then(() => {

        if (donation.isNew == false) {
            
            console.log("Save data!")
            res.send("Saved data!")
        }
        else {

            console.log("Failed to save data!")
        }
    })
})


/*
app.post("/createarticulo", async (req,res) => {
    console.log(req.body);
    
   const post = new Articulo({
       descripcion: req.body.descripcion,
       uom: req.body.uom,
       upc: req.body.upc,
       peso_articulo_kg: req.body.peso_articulo_kg

       
   });

   try {
       const savedPost = await post.save();
       res.json(savedPost);
   }catch(err) {
       console.log(err);
       res.json({message: err});

   }
})*/

module.exports = app;