const { default: axios } = require("axios");

module.exports = axios.create({
  baseURL: 'https://auth-example1.herokuapp.com/',
})