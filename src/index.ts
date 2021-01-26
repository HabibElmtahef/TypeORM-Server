import 'reflect-metadata'

import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import {createConnection} from 'typeorm'

import gameRouter from './routes/gameRouter'

const app = express()
createConnection()

// MiddleWares
app.use(cors())
app.use(morgan('dev'))
app.use(express.json())

//routes

app.use(gameRouter)


app.listen(5000);
console.log('Server on port', 5000);