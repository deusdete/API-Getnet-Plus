const auth = require('../auth');
const Balance = require('../models/Bank/Balance');
require('dotenv').config();

module.exports = {
  async getBalance (req, res) {
    try {
      const balance = await Balance.findOne({user: req.useId})
      if(!balance){
        return res.status(200).json({balance: 0})
      }
      return res.status(200).json({balance})
    } catch (error) {
      return res.status(400).json({ error: "Falha ao carregar saldo" })
    }
  },

  async addBalance (req, res) {
    const { value } = req.body
    try {
      const balance = await Balance.findOne({user: req.useId})
      if(balance){
        const _value = value + Number.parseFloat(balance.amount);
        const _newValue = Number.parseFloat(_value).toFixed(2)
        await Balance.updateOne({_id: balance._id}, {amount: _newValue}, {new: true}, (err, doc) => {
          if (err) return res.status(400).json({error: 'Falha ao adicionar saldo'});
          else return res.status(200).json({message: 'Saldo adicionado com sucesso'});
        })
      }else{
        const createBalance = await Balance.create({amount: value, user: req.useId})
        return res.status(200).json({balance: createBalance})
      }
      
    } catch (error) {
      return res.status(400).json({ error: "Falha ao adicionar saldo" })
    }
  },
}