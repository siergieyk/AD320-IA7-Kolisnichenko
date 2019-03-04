var express = require('express');
var router = express.Router();
var colors = require("../colors.json");

router.get('/all', function(req, res, next){
    res.send(colors);
})

router.get('/:color', function(req, res, next){
    var myColor = getColorByName(req.params.color.toLowerCase().toString());
    res.send(myColor);
});

function getColorByName(key){
    for(var i = 0; i < colors.colors.length; i++){
        if(colors.colors[i].color === key){
        return colors.colors[i];
        
    }else{
        res.status(404).send('Error 404 Not found');
    }
    }
}
module.exports = router;