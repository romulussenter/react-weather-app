const express = require('express');
const axios = require('axios');

require('dotenv').config();
const{API_KEY} =process.env;

const serverApp = express();
const port = process.env.PORT || 5000;


serverApp.get('/forecast/:lat,:lon', function(request, response){
    const {lat,lon} = request.params;
    const url=`https://api.darksky.net/forecast/${API_KEY}/${lat},${lon}`;
    axios.get(url)
    .then(checking =>{
     response.json(checking.data);
    })
    .catch(error =>{
        response.json({
        msg:'Your stuff is not working'
        });
    });
});

serverApp.listen(port, () =>{
    console.log(`This is listning on port ${port}`);
})

