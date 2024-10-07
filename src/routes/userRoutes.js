const express = require('express')
const { signup, login} = require('../controllers/userController')
const carsControllrs = require ('../controllers/carsController')
const authenticateToken = require('../middlewares/authMiddleware')

const router = express.Router()

router.post('/signup', signup)
router.post('/login', login)

router.get('/protected', authenticateToken, (req, res) => {
    res.status(200).json({ message: 'Acesso autorizado' });
})

router.post('/carros', authenticateToken, carsControllrs.criarCarro)
router.get('/carros', authenticateToken, carsControllrs.listarCarros)
router.put('/carros/:id', authenticateToken, carsControllrs.editarCarros)
router.delete('/carros/:id', authenticateToken, carsControllrs.deletarCarro)
router.patch('/carros/:id', authenticateToken, carsControllrs.MarcarComoVendido)

module.exports = router
