const express        = require('express');
const bodyParser     = require('body-parser');
const app            = express();
const fs = require('fs');

const port = 8000;


const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://vitram:teseus77@cluster0-wpbwz.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");



  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json())
  app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
  
  app.get('/api/isPerviy/:useremail', (req, res) => {
    name = req.params.useremail

    collection.findOne({ name : name}).then(token => { if(token){
      console.log('Этот уже был')
      res.send({isFirst: false})
    } else {
      console.log('Этот уже былssdsddsds')
      const note = { name: name, isFirst: true };
      collection.insertOne(note)
      res.send({isFirst: true})
      console.log('Создали новенького')
    } } )
  
  
    });
  app.get('/api/js', (req, res) => {
    let rawdata = fs.readFileSync('javascript.json');
    let js = JSON.parse(rawdata);
    console.log(js);
    res.send(js)
    
   });
  app.post('/api/json', (req, res) => {
    var data = req.body

    if (data.type == 'payInfo') {
      var user = data.user.name
      var money
      money = data.money

      if (fs.existsSync(user + '.json')) {
        var values = JSON.parse(fs.readFileSync(user + '.json'))
        var prev_money_value = values.money
        console.log(prev_money_value)
        data.money += prev_money_value
        req.body = {money: data.money, info: 'Эта часть пока оочень сырая'}
        console.log(data)
      }


      data = JSON.stringify(data, 0, 5)
      fs.writeFileSync(user + '.json', data)
    }
    res.send(req.body)
    //Отправляй json данные в БД (нужно дополнительно разработать стандарт  JSON, который отправляется на сервер)
  })
  app.get('/api/json', (req, res) => {
    console.log('done')
  }) 


  app.listen(port, () => {
	  console.log('We are live on ' + port);
	});
});

