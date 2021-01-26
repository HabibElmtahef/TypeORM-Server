import {Request, Response} from 'express'
import {getRepository} from 'typeorm'
import {Game} from '../entity/Game'

export const getGames = async (req: Request, res: Response): Promise<Response> => {
     const games = await getRepository(Game).find()
     return res.json(games)
}

export const addGame = async (req: Request, res: Response): Promise<Response> => {
    const {name, description, genre, image} = req.body
    if(!name || !description || !genre || !image)
    return res.json({msg: "please Complete all fields"})
    
    const newGame = getRepository(Game).create(req.body)
    const result = await getRepository(Game).save(newGame)
    return res.json(result)
}

export const getGame = async(req: Request, res: Response): Promise<Response> => {
    const game = await getRepository(Game).findOne(req.params.id)
    if(game) return res.json(game)
    return res.json({msg: "Game Not Found !"})
}

export const updateGame = async (req: Request, res: Response): Promise<Response> => {
    const game = await getRepository(Game).findOne(req.params.id)
    if(game){
        getRepository(Game).merge(game, req.body)
        const result = await getRepository(Game).save(game)
        return res.json(result)
    }
    return res.json({msg: "Game Not Found"})
}

export const deleteGame = async (req: Request, res: Response): Promise<Response> => {
    const result = await getRepository(Game).delete(req.params.id)
    if(result) return res.json({msg: "Game Deleted"})
    return res.json({msg: "Game Not Found !"})
}

