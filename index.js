const express = require('express');
const app = express();

app.use(express.static('public'));
const port = 3000;

app.listen(port, ()=>{ 
    console.log("Servidor escuchando en el puerto "+port);
});

app.get("/", (req, res)=>{
    res.sendFile(__dirname + '/index.html')
})