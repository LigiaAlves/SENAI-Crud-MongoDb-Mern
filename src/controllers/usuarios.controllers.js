
const Usuario = require('../models/usuarios.model');

module.exports = {
    async index(req, res){
        const user = await Usuario.find(); //Para retornar todos os usuários

        res.json(user);
    },

    async create(req,res){
       const {nome_usuario, email_usuario, tipo_usuario, senha_usuario} = req.body;

       let data = {};
       let user  = Usuario.findOne({email_usuario})
       if(!user){
           data = {nome_usuario,email_usuario,tipo_usuario,senha_usuario};
           user = await Usuario.create(data); //await esperar ser executado para conseguir retornar algum valor
           return res.status(200).json(user);
       }else{
           return res.status(500).json(user);
       }

       },
       async details(req, res){
           const {_id} = req.params;
        const user = await Usuario.findOne({_id}); //findOne para encopntrarmos apenas 01 usuário

        res.json(user);
    },
    }
