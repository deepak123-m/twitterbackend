const connectToMongo = require('./db');
const express = require('express')
var cors = require('cors');
connectToMongo();

const app = express()
const port = 5000

app.use(cors())
   
app.use(express.json({limit: '50mb'}));


app.use('/twitter',require('./routes/users'));
app.use('/twitter',require('./routes/posts'));

app.get('/',(req,res)=>{
    res.send('helloworld')
})
app.listen(port, () => {
    console.log(`Twitter backend listening at http://localhost: ${port}`)
})

 
