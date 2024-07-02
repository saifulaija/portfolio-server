/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import router from './app/routes';
import globalErrorHandler from './app/middleware/middleware';
import notFound from './app/middleware/notFound';
import cookieParser from 'cookie-parser';

const app: Application = express();

app.use(express.json());
app.use(cookieParser());

app.use(cors({origin:'http://localhost:3000',credentials:true}))

// application routes
app.use('/api', router);

app.get('/', (req: Request, res: Response) => {
  res.send(' Trendy Leather DB Connected !!');
});

app.use(globalErrorHandler);

//Not Found
app.use(notFound);

export default app;
