const express = require('express');
const app = express();

app.use('/',express.static(`${__dirname}/dist`));

app.get('/*',(req,res)=>{
    res.sendFile(`${__dirname}/dist/index.html`)
})

const port = process.env.PORT || 3000
app.listen(port,(err)=>{
    if (err) throw err;
    console.log(`Server start at http://localhost:${port}`);
})