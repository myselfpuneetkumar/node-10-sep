const express = require('express');
const user=require('./routes/user')
const app = express();

app.use(user);




app.listen(3000,(err)=>{
    if(err){
        console.log(err)
    }
    else{
    console.log("Server running successfully on port 3000");
    }
})
