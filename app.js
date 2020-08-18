const express = require('express');
const path = require('path')
const fs = require('fs');
const cors = require('cors');
const app = express();

app.use(express.json()) 
app.use(cors({ origin: '*'}))

app.get('/', (req, res) => {
    console.log("Hola Mundo")
    res.send('Hola Mundo');
});

app.post('/user', (req, res) => {
    console.log(req.body);
    try {
        const user = req.body;
        let  age = req.isl; 
        
        if(age2 >= 18 ){
            console.log("Status OK")
            res.status(200).send("Mayor de edad");
        } 
        console.log("Status Unahtorized")
        res.status(401).send("No autorizado");
    } catch (error) {
        console.log(error);        

        res.status(500).send(error);
    }
    
})

app.get('/mocks/bot-detail', (req, res) => {
    const pathJ = fs.readFile(path.resolve('./bot-details.json'), (err, data) => {
        setTimeout(() => {
            res.send(JSON.parse(data))
        }, 3000)
    })
    
})

app.get('/mocks/bots', (req, res) => {
    const pathJ = fs.readFile(path.resolve('./bots.json'), (err, data) => {
        setTimeout(() => {
            res.send(JSON.parse(data))
        }, 3000)
    })
    
})
const server = app.listen(3000, () => { console.log("Server running on port 3000...") });
