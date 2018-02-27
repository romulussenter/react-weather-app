const express = require('express');
const axios = require('axios');


const serverApp = express();
const port = process.env.PORT || 5000;


serverApp.get('/forecast/68a8fa6b7cedc8e8942d7ca2419d91d3/37.8267,-122.4233', function(request, responce){
    const url=`https://api.darksky.net/forecast/68a8fa6b7cedc8e8942d7ca2419d91d3/37.8267,-122.42330`
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

