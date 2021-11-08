let chai = require ("chai");
let chaiHttp = require("chai-http");
const app = require("../routes");
let server = require ("../server");


// Assertion Style
chai.should();

chai.use(chaiHttp);

describe("Tasks API", () => {

    // Test GET Donations
    describe("GET /fetchdonacion", () => {
        it("It shoudl get all the donations", (done) => {
            chai.request(server)
            .get("/fetchdonacion")
            .end((err, response) => {
                response.should.have.status(200);
                done();

            })
        })

        it("It shoudl NOT get all the donations", (done) => {
            chai.request(server)
            .get("/fetchdonaciones")
            .end((err, response) => {
                response.should.have.status(404);
                done();

            })
        })

    })

    // Test GET Users
    describe("GET /fetchusuario", () => {
        it("It shoudl get all the Users", (done) => {
            chai.request(server)
            .get("/fetchusuario")
            .end((err, response) => {
                response.should.have.status(200);
                done();
        
            })
        })
        it("It shoudl NOT get all the Users", (done) => {
            chai.request(server)
            .get("/fetchusuarios")
            .end((err, response) => {
                response.should.have.status(404);
                done();

            })
        })
    })

     // Test GET Items
     describe("GET /fetcharticulo", () => {
        it("It shoudl get all the Items", (done) => {
            chai.request(server)
            .get("/fetcharticulo")
            .end((err, response) => {
                response.should.have.status(200);
                done();
        
            })
        })
        it("It shoudl NOT get all the Items", (done) => {
            chai.request(server)
            .get("/fetcharticulos")
            .end((err, response) => {
                response.should.have.status(404);
                done();

            })
        })
    })
/*
    // Test POST Item
    describe("POST /createarticulo", () => {
       it("It shoudl POST a new Item", (done) => {
           const item = {
               "descripcion":"Papa Blanca",
               "uom": "kg",
               "upc": "666",
               "peso_articulo_kg": "2.5"

           }
           chai.request(server)
           .get("/createdonation")
           .end((err, response) => {
               response.should.have.status(200);
               done();
       
           })


        })
    })
    */

});





