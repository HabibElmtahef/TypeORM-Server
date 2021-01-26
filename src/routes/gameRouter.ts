import {Router} from 'express'
const router = Router()

import {getGames, addGame, getGame, updateGame, deleteGame} from '../controllers/gameCtrl'

router.get('/games', getGames)
router.post('/add', addGame)
router.get('/game/:id', getGame)
router.put('/game/:id', updateGame)
router.delete('/game/:id', deleteGame)

export default router