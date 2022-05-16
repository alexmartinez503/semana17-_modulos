var fs = require("fs");
var stringify = require("csv-stringify");

// json de datos
var data =[
    {"region": "Estados Unidos", "Idioma": "Ingles"},
    {"region": "El Salvador", "Idioma": "Español"}
];

stringify.stringify(data,{
    header: true
},function (err, output){
    fs.writeFileSync(__dirname+"/data.csv", output);
});