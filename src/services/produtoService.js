const db = require("../../database/models");
const produtoModel = db.produto;

const produtoService = {
    async createProduto(nome, preco, preco_desc, qt_est, cate_id){
        try {
            let produto = await produtoModel.create({
                nome: nome,
                preco: preco,
                preco_desc: preco_desc,
                qt_est: qt_est,
                cate_id: cate_id
            });
            return produto;
        } catch (error) {
            console.error(error);
            return undefined;
        }   
    }
}

module.exports = produtoService;