import 'reflect-metadata'; // needs to be imported before express to work - used by typeorm to get metadata from entities
import express, { NextFunction, Request, Response } from 'express';
import cors from 'cors';
import routes from './routes';
import { AppError } from '../errors/AppError';
import '@shared/typeorm'; //import typeorm connection. Needs to be imported after express to work

const app = express(); //express instance on mais module

app.use(cors()); //cors without parameters to allow all origins
app.use(express.json()); //express.json() to parse json body
app.use(routes); //routes

//#region: error middleware
//middleware to  catch and handle all errors and exceptions
//to avoid use try/catch in all routes
app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof AppError) {
        return response.status(err.statusCode).json({
            status: 'error',
            error: err.message,
        });
    }

    return response.status(500).json({
        status: 'error',
        message: 'Internal Server Error',
    });
});
//#endregion: error middleware

app.listen(3333, () => {
    console.log('Server started on port 3333!');
});
