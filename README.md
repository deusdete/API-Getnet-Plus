## API Getnet Plus

<p align="center">
  <a href="#rocket-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-projeto">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-projeto">Rest API</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-como-contribuir">Como contribuir</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-licença">Licença</a>
</p>

<p align="center">
 <img src="https://img.shields.io/static/v1?label=PRs&message=welcome&color=7159c1&labelColor=000000" alt="PRs welcome!" />

  <img alt="License" src="https://img.shields.io/static/v1?label=license&message=MIT&color=7159c1&labelColor=000000">
</p>

<br>


## 🚀 Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- [Node.js](https://nodejs.org/en/)
- [MongoDB](https://www.mongodb.com/)

Hospedagem

- [Heroku](https://www.heroku.com/home)

## 💻 Projeto

Uma API com autenticação JWT para gerências saldo e sonhos
Projeto desenvolvido para o Hackathon Empreenda Getnet 2020

## Rest API

### Login

#### Request

`POST /login/`

    curl -i -H 'Accept: application/json' http://localhost:3333/login/
            -d 'email=deusdete@email.com&password=123456'

#### Response

    HTTP/1.1 200 OK
    Status: 200 OK
    {
      "user": {
        "_id": "",
        "cpf": "12345678901",
        "name": "Deusdete F. Silva",
        "email": "deusdete@email.com",
        "createAt": "2020-10-12T01:42:17.205Z",
        "__v": 0
      },
      "token": "eyJhbGcdasdsadInR5cCI6IkpXVCJ9.eyJpZCI6IdassadsavasdasvdiIsImlhdCI6MTYwMjQ3MTIwMiwiZXhwIjoxNjAyNTU3NjAyfQ.RoZasdasva4lz-Tf1KLamgQzvEHkJSRQNM"
    }

### Register

#### Request

`POST /register/`

    curl -i -H 'Accept: application/json' http://localhost:3333/login/
            -d 'cpf'=12345678901&'name=Deusdete F. Silva'&email=deusdete@email.com&password=123456'

#### Response

    HTTP/1.1 200 OK
    Status: 200 OK
    {
      "user": {
        "_id": "",
        "cpf": "12345678901",
        "name": "Deusdete F. Silva",
        "email": "deusdete@email.com",
        "createAt": "2020-10-12T01:42:17.205Z",
        "__v": 0
      },
      "token": "eyJhbGcdasdsadInR5cCI6IkpXVCJ9.eyJpZCI6IdassadsavasdasvdiIsImlhdCI6MTYwMjQ3MTIwMiwiZXhwIjoxNjAyNTU3NjAyfQ.RoZasdasva4lz-Tf1KLamgQzvEHkJSRQNM"
    }

### Sonhos

#### Request

`GET /dreams/`

    curl -i -H 'Accept: application/json' http://localhost:3333/dreams/
            -H 'Authorization: Basic {token}' \

#### Response

    HTTP/1.1 200 OK
    Status: 200 OK
    {
      "dreams": [
        {
          "_id": "5f844a7e997c091be8686bee",
          "title": "Reformar minha loja",
          "value": {
            "$numberDecimal": "1000"
          },
          "deadline": "20/10/2020",
          "user": "5f83b479ec222d4120876eee",
          "done": false,
          "createdAt": 1602505342,
          "updatedAt": 1602505420,
          "__v": 0
        },
        {
          "_id": "5f844aae997c091be8686bee",
          "title": "Comprar macbook para trabalho",
          "value": {
            "$numberDecimal": "14000"
          },
          "deadline": "20/12/2020",
          "user": "5f83b479ec222d4120876eee",
          "done": false,
          "createdAt": 1602505390,
          "updatedAt": 1602505390,
          "__v": 0
        }
      ]
    }

#### Request

`POST /dreams/`

    curl -i -H 'Accept: application/json' http://localhost:3333/dreams/
            -H 'Authorization: Basic {token}'
            -D 'title'=Reforma Loja&'value':14000&'deadline'=20/12/2020

#### Response

    HTTP/1.1 200 OK
    Status: 200 OK
    {
      "message": "Sonho criado com sucesso"
    }

#### Request

`PUT /dreams/`

    curl -i -H 'Accept: application/json' http://localhost:3333/dreams/5f844aae997c091be8686bee
            -H 'Authorization: Basic {token}'
            -D 'title'=Reforma Loja&'value':15000&'deadline'=30/12/2020

#### Response

    HTTP/1.1 200 OK
    Status: 200 OK
    {
      "message": "Sonho atualizado com sucesso"
    }

#### Request

`DELETE /dreams/`

    curl -i -H 'Accept: application/json' http://localhost:3333/dreams/5f844aae997c091be8686bee
            -H 'Authorization: Basic {token}'

#### Response

    HTTP/1.1 200 OK
    Status: 200 OK
    {
      "message": "Sonho apagado com sucesso"
    }

### Saldo

#### Request

`GET /bank/balance/`

    curl -i -H 'Accept: application/json' http://localhost:3333/bank/balance/
            -H 'Authorization: Basic {token}' 

#### Response

    HTTP/1.1 200 OK
    Status: 200 OK
    {
      "balance": {
        "_id": "5f84320f179c654ba42d8cee",
        "amount": {
          "$numberDecimal": "202.04"
        },
        "user": "5f83b479ec222d4120876eee",
        "createdAt": 1602499087,
        "updatedAt": 1602501012,
        "__v": 0
      }
    }

#### Request

`POST /bank/balance/`

    curl -i -H 'Accept: application/json' http://localhost:3333/bank/balance/
            -H 'Authorization: Basic {token}' 
            -D 'value'=202.04

#### Response

    HTTP/1.1 200 OK
    Status: 200 OK
    {
      message: 'Saldo adicionado com sucesso'
    }

## 🤔 Como contribuir

- Faça um fork desse repositório;
- Cria uma branch com a sua feature: `git checkout -b minha-feature`;
- Faça commit das suas alterações: `git commit -m 'feat: Minha nova feature'`;
- Faça push para a sua branch: `git push origin minha-feature`.

Depois que o merge da sua pull request for feito, você pode deletar a sua branch.

## :memo: Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE.md) para mais detalhes.

---

Feito com ♥ by [Losenvo](https://losenvo.com/)
