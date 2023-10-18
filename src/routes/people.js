const express = require("express");
const router = express.Router();

const pessoas = [
  {
    nome: 'Lucas Souza',
    idade: 19,
    email: 'lucas@gmail.com'
  },
  {
    nome: 'Joane Amorim de Jesus',
    idade: 18,
    email: 'joane@gmail.com'
  }
]

router.get("/", async function (req, res) {
  return res.status(200).send({ response: pessoas })
})

router.post("/addNewPerson", async function (req, res) {
  let flag = false
  const body = req.body

  if(Object.keys(body).length > 0){
    pessoas.push(body)
    flag = true
  }

  return res.status(200).send({ response: flag ? 'Nova pessoa adicionada' : 'Erro ao adicionar uma nova pessoa' })
})

module.exports = router;