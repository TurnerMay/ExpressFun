const express = require("express");
const path = require('path')
const fs = require('fs')
const bodyParser = require('body-parser')

const app = express();

app.use(bodyParser.urlencoded({extended: false}))

app.post('/contact-form', (req, res) =>{
    console.log(req.body.email)
    console.log(req.body.name)
    res.send('Thanks for the deets!')
    
})

// app.use((req, res, next) => {
//     console.log(req.originalUrl)
//     next()
// })

// app.get("/", (req, res) => {
//   res.send("Hello from the web server side...");
// });

// app.get("/", (req, res) => {
//     res.sendFile(path.join(__dirname, '../public/index.html'));
//   });

//   app.get("/css/styles.css", (req, res) => {
//     res.sendFile(path.join(__dirname, '../public/css/styles.css'));
//   });

app.use(express.static(path.join(__dirname, '../public')))

// app.get('/order/:name', (req, res) => {
//     const name = req.params.name
//     const email = req.query.email
//     res.send(`Your name is ${name} and email is ${email}`)
// })
  
    
  




app.listen(3000);
