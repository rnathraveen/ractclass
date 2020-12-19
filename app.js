const express = require("express")

const app = express()

const exampleroute = require("./routes/exampleroutes")

app.get('/', (req,res)=>{
    res.send('Hello server!!!   ')
})

const PORT = 5000
app.listen(PORT,()=>{
    console.log('server running on port ${PORT}')
})