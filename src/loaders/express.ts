import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import hpp from 'hpp';
import morgan from 'morgan';

import controller from '../controller';

export default async ({ app }: { app: express.Application }) => {
  const prod = process.env.NODE_ENV === 'production';

  if(prod) {
    app.use(cors({
      origin: /seoulforest.com\.$/,
      credentials: true,
    }));
    app.use(morgan('combined'));
    app.use(helmet());
    app.use(hpp());
  } else {
    app.use(cors({
      origin: true,
      credentials: true,
    }));
    app.use(morgan('dev'));
  }
  
  app.use(express.json())
  app.use(express.urlencoded({ extended: true }));
  app.use(controller);
};