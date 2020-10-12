const axios = require('axios');
require('dotenv').config();

const api = axios.create({
  baseURL: process.env.URL_API_GETNET,
  headers: {
    Authorization: `Basic ${process.env.AUTHORIZATION}`
  }
})

module.exports = api;