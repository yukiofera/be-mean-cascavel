var Model = require('./model');

var msg = '';

var Controller = {
    create: function(req, res) {
        var dados = req.body;

        var model = new Model(dados);

        model.save(function (err, data) {
          if (err){
            msg = 'Erro: ' + JSON.stringify(data);
            return res.json(msg);
        }

        msg = 'pimba: '+JSON.stringify(data);
        return res.json(msg);
    });     
    }

    , retrieve: function(req, res) {
        var query = {};

        Model.find(query, function (err, data) {
            if (err){
                msg = 'Erro: ' + JSON.stringify(data);
                return res.json(msg);
            }

            msg = 'pimba: '+JSON.stringify(data);
            return res.json(msg);
        });
    }
    
    , get: function(req, res) {
        var query = {_id: req.params.id};

        Model.findOne(query, function (err, data) {
            if (err){
                msg = 'Erro: ' + JSON.stringify(data);
                return res.json(msg);
            }

            msg = 'pimba: '+JSON.stringify(data);
            return res.json(msg);
        });
    }
    
    , update: function(req, res) {
        var query = {_id: req.params.id};
        var  mod = {
          name: 'Budweiser'
          , alcohol: 4
          , price: 6
      };

      Model.update(query, mod, function (err, data) {
        if (err){
            msg = 'Erro: ' + JSON.stringify(data);
            return res.json(msg);
        }

        res.json('Cervejas atualizadas com sucesso: ' + JSON.stringify(data));      
    });

  }
  
  , delete: function(req, res) {
    var query = {_id: req.params.id};

    Model.remove(query, function (err, data) {
      if (err){
        console.log('Erro: ', err);
    }
    else{
        console.log('Cerveja deletada com sucesso', data.result);    
    }
});

}
};

module.exports = Controller;
