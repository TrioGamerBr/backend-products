const produtoService = require("../services/produtoService");

const produtoController = {
    async createProduto(req, res) {   
        const nome = req.body.nome;
        const preco = req.body.preco;
        const preco_desc = req.body.preco_desc;
        const qt_est = req.body.qt_est;
        const cate_id = req.body.cate_id;
        
        if(nome && preco &&  preco_desc &&  qt_est &&  cate_id){
            let produto = await produtoService.createProduto(nome, preco, preco_desc, qt_est, cate_id);
            if(!produto){
                return res.status(400).json({
                    error:'Parâmetros inválidos'
                });
            }
            return res.json(produto);
        }else{
            return res.status(400).json({
                error:'Parâmetros incompletos'
            });
        }
        
    }
}

module.exports = produtoController;