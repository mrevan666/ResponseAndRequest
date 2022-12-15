const express = require("express");

const app = express();

const products = [ 
    {name:"First",id: "1",weight:"1kg",price:"100AZN"},
    {name:"Second",id: "2",weight:"2kg",price:"200AZN"},
    {name:"Third",id: "3",weight:"3kg",price:"300AZN"},
    {name:"Forth",id: "4",weight:"4kg",price:"400AZN"}
];

const PATH = 4000;


app.get('/list',function(req,res){
    res.send(products)
})

app.get('/list/:id', function (req, res) {
    res.send(JSON.stringify(products.find((product) => product.id == req.params.id)));
  });

app.listen(PATH,function(res,req){
    console.log("Successfully work")
});