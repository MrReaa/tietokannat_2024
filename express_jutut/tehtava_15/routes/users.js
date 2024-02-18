var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

//1. GET-metodi
router.get('/toka',function(request,response) 
{
    response.send('Olen toka reitti');
    console.log('Toka');
});

//2. GET-metodi yhdellä parametrilla
router.get('/kolmas/:name',function(request,response) 
{
    response.send('Heippa '+request.params.name);
    console.log(request.params.name);
});

//3. GET-metodi kahdella parametrilla
router.get('/neljas/:fname/:lname',function(request,response) 
{
    response.send('Heippa '+request.params.fname+' '+request.params.lname);
    console.log(request.params.fname+' '+request.params.lname);
});

//4. POST-metodi
router.post('/',function(request,response)
  {
    response.send(request.body.fname+' '+request.body.lname);
    console.log(request.body.fname+' '+request.body.lname);
  }
);

// PUT-metodi
router.put('/:id',function(request,response)
  {
    response.send('Henkilölle '+request.params.id+' muutetaan nimeksi '+request.body.fname+' '+request.body.lname);
    console.log(request.body.fname+' '+request.body.lname);
  }
);

module.exports = router;

