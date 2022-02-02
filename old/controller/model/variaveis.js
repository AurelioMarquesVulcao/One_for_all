const mongoose = require('mongoose');


const variaveisSchema = new mongoose.Schema({
  aplicacao: String,
  codigo: Number,
  origem: String,
  dataCriacao: Date,
  dataAtualização: Date,
  variaveis: [Object],
})
const AplicacaoVar = mongoose.model('VariaveisAmbiente', variaveisSchema, 'variaveisAmbiente');

module.exports.AplicacaoVar = AplicacaoVar;