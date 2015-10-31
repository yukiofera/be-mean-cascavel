var Model = require('./model');

var Controller = {
  create: function(req, res){
    var dados = req.body;
    var model = new Model(dados);
    model.save(function (err, data) {
      if (err){
        console.log('Erro: ', err);
        msg = 'Erro: ' + err;
        return res.json(msg);
      }
      console.log('Cerveja Inserida: ', data);
      msg = (data);
      return res.json(msg);
    });
  }
, retrieve: function(req, res){
    var query = {};

    Model.find(query, function (err, data) {
      if (err){
        console.log('Erro: ', err);
        msg = 'Erro: ' + err;
        return res.json(msg);
      }
      console.log('Listagem: ', data);
      msg = (data);
      return res.json(msg);
    });
  }
, get: function(req, res){
    var query = {_id: req.params.id};

    Model.findOne(query, function (err, data) {
      if (err){
        console.log('Erro: ', err);
        msg = 'Erro: ' + err;
        return res.json(msg);
      }
      console.log('Listagem: ', data);
      msg = (data);
      return res.json(msg);
    });
  }
, update: function(req, res){
    var query = {_id: req.params.id};

    var mod = req.body;

    var optional = {
      upsert: false,
      multi: true
    };

    Model.update(query, mod, function (err, data) {
      if (err){
        console.log('Erro: ', err);
        msg = 'Erro: ' + err;
        return res.json(msg);
      }
      console.log('Cerveja alteradas: ', data);
      msg = (data);
      return res.json(msg);
    });

  }
, delete: function(req, res){
    var query = {_id: req.params.id};

    Model.remove(query, function(err, data) {
      if (err){
        console.log('Erro: ', err);
        msg = 'Erro: ' + err;
        return res.json(msg);
      }
      console.log('Cerveja(s) atualizada(s): ', data);
      msg = (data);
      return res.json(msg);
    });

  }
}

module.exports = Controller;