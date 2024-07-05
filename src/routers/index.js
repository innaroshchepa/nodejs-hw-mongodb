import { Router } from 'express';
import authRouter from '../routers/auth.js';
import contactsRouter from '../routers/contacts.js';


const rootRouter = Router();

rootRouter.use('/auth', authRouter);
rootRouter.use('/contacts', contactsRouter);


export default rootRouter;
