const { response } = require("express");

const renderPaginaPrincipal = async (req, res = response) => {
    res.render("principal");
};

module.exports ={
    renderPaginaPrincipal,
};