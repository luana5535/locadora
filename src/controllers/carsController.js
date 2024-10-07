const Cars = require('../models/Cars')

async function criarCarro(req, res){
    const {marca, modelo, placa, ano}= req.body
    try{
        let newCarro = new Cars({marca, modelo, placa, ano})
        await newCarro.save()
        res.status(200).json({mensagem: 'carro cadastrado com sucesso', carro: newCarro})
    }catch(erro){
        console.error('erro ao cadastrar carro', erro)
        throw erro
    }
}

async function listarCarros(req, res){
    try{
        let carros = await Cars.find()
        res.status(200).json(carros)
    }catch(erro){
        res.status(500).json({mensagem:'erro ao listar', erro: erro.message})
    }
}



async function editarCarros(req,res){
    const{id}= req.params
    const {marca, modelo, placa,ano}= req.body
    try{
        const carroAtualizado= await Cars.findByIdAndUpdate(
            id,
            {marca, modelo, placa, ano},
            {new: true, runValidators: true}
        )
        if(carroAtualizado){
            res.status(200).json({mensagem:'editado com sucesso', carro: carroAtualizado})
        }else{
            res.status(404).json({mensagem:'carro não encontrado'})
        }
    }catch(erro){
        console.error('erro ao editar carro', erro)
        throw erro
    }
}


async function deletarCarro(req, res){
    const {id} = req.params
    try{
        const carroDeletado = await Cars.findByIdAndDelete(id)
        if(carroDeletado){
            res.status(200).json({mensagem: "deletado com sucesso", carro: carroDeletado})
        }else{
            res.status(404).json({mensagem: 'carro não encontrado'})
        }
    }catch(erro){
        console.error('erro ao deletar carro', erro)
        throw erro
    }
}



async function MarcarComoVendido (req, res){
    try{
        const {id}= req.params
        const {comprador}= req.body
        
        const carroAtualizado= await Cars.findByIdAndUpdate(
            id,
            {vendido: true, comprador},
            { new: true, runValidators: true }
        )
        if(carroAtualizado){
            res.status(200).json({ mensagem: 'carro marcado como vendido', carro: carroAtualizado })
        }else{
            res.status(404).json({ mensagem: 'carro não encontrado' })
        }
    }catch(erro){
        res.status(500).json({ mensagem: 'erro ao marcar carro como vendido', erro: erro.message })
    }
}

module.exports = {criarCarro, listarCarros, editarCarros, deletarCarro, MarcarComoVendido}