const axios = require("axios");

module.exports = {
  async cep(req, res) {
    const cep = req.params.id;
    let endereco = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);

    return res.json(endereco.data);
  },
  async index(req, res) {
    let endereco = await axios.get(
      `https://viacep.com.br/ws/RS/Porto%20Alegre/Domingos/json/`
    );
    res.render("index", {
      ceps: endereco.data,
    });
  },
};
