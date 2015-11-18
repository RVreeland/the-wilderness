var bodyParser  = require('body-parser');
var cors = require('cors');

module.exports = function(app, express) {
  app.use(cors());
  app.use(bodyParser.urlencoded({extended: true}));
  app.use(bodyParser.json());

  app.use(express.static(__dirname + '/../../client'));
}
