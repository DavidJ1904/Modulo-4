const express = require("express");
const bodyparser = require("body-parser");
const app = express();
const puerto = 2004;
app.listen(puerto, () => {
  console.log("Servidor levantado");
});


app.use(bodyparser.json());

const laptop = [
  {
    id: 1,
    marca: "ASUS",
    precesador: "intel core i7",
    memoria: "8 GB",
    disco: "512 GB",
  },
  {
    id: 2,
    marca: "ACER",
    precesador: "intel core i7",
    memoria: "16 GB",
    disco: "1 TB",
  },
  {
    id: 3,
    marca: "HP",
    precesador: "intel core i3",
    memoria: "8 GB",
    disco: "500 GB",
  },
  {
    id: 4,
    marca: "Apple",
    precesador: "M2",
    memoria: "8 GB",
    disco: "512 GB",
  },
  {
    id: 5,
    marca: "Lenovo",
    precesador: "intel core i3",
    memoria: "8 GB",
    disco: "500 GB",
  },
];
//METODO GET
app.get("/laptops", (request, response) => {
  response.send(laptop);
});
app.get("/laptops/:idParam", (request, response) => {
  const idParam = request.params.idParam;
  for (let i = 0; i < laptop.length; i++) {
    elementoBorrar = laptop[i];
    if (elementoBorrar.id == idParam) {
      const mostrar = {
        marca: elementoBorrar.marca,
        procesador: elementoBorrar.precesador,
        memoria: elementoBorrar.memoria,
        disco: elementoBorrar.disco,
      };
      response.send(mostrar);
    }
  }
});
// METODO POST
app.post("/laptops", (request, response) => {
  request.body.id = 50;
  response.send(request.body);
});
//METODO ACTUALIZAR
app.put("/laptops/:idParam", (request, response) => {
  const idParam = request.params.idParam;
  for (let i = 0; i < laptop.length; i++) {
    elementoBorrar = laptop[i];
    if (elementoBorrar.id == idParam) {
      elementoBorrar.id = request.body.id;
      elementoBorrar.marca = request.body.marca;
      elementoBorrar.precesador = request.body.precesador;
      elementoBorrar.memoria = request.body.memoria;
      elementoBorrar.disco = request.body.disco;
    }
  }
  response.send(laptop);
});
//METODO ELIMINAR
app.delete("/laptops/:idParam", (request, response) => {
  const idParam = request.params.idParam - 1;
  for (let i = 0; i < laptop.length; i++) {
    elementoBorrar = laptop[i];
    if (elementoBorrar.id == idParam) {
      laptop.splice(idParam, 1);
    }
  }
  response.send(laptop);
});
