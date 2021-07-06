/**
 * 
 * Proxy server: localhost:3001
 * 
 */

 const express = require('express');
 const axios = require('axios')
 var cors = require('cors')
 const app = express();
 
app.use(cors());
 
 app.get('/api', function (req, res) {
 
   console.log("REQ PARAMS--->", req.query);

   const options = {
    method: 'GET',
    url: 'https://movie-database-imdb-alternative.p.rapidapi.com/',
    params: {s: `${req.query.name}`, page: '1', r: 'json'},
    headers: {
      'x-rapidapi-key': '46b46ffb95msh84506a18afeec86p1ebf8bjsnfb8ebfaac2be',
      'x-rapidapi-host': 'movie-database-imdb-alternative.p.rapidapi.com'
    }
  };
  
  axios.request(options).then( (error, response, body) => {
    console.log('poop',response)
    if (!error && response.statusCode === 200) {
      console.log('RES DATA',response.data);
      res.send(body)
    }
    
  }).catch(function (error) {
    console.error(error);
  });

//   fetch("https://movie-database-imdb-alternative.p.rapidapi.com/?i=tt4154796&r=json", {
// 	"method": "GET",
//   "params": {s: `${req.query.name}`, page: '1', r: 'json'},
// 	"headers": {
// 		"x-rapidapi-key": "46b46ffb95msh84506a18afeec86p1ebf8bjsnfb8ebfaac2be",
// 		"x-rapidapi-host": "movie-database-imdb-alternative.p.rapidapi.com"
// 	}
// })
// .then(res => {
// 	console.log(res);
// })
// .catch(err => {
// 	console.error(err);
// });
 
  //  request(`https://superheroapi.com/api/${TOKEN}/search/${req.query.name}`, function (error, response, body) {
  //    if (!error && response.statusCode === 200) {
  //      console.log(body);
  //      res.send(body);
  //      console.log(res);
  //      console.log("HOWDY HOWDY IM A COWBOY")
  //    }
  //  });
 });
 
 app.listen(3001);
 console.log('Server running on port %d', 3001);