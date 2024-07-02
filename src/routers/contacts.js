import { Router } from 'express';

import {
  getContactsController,
  getContactByIdController,
  createContactController,
  deleteContactController,
  upsertContactController,
  patchContactController,
} from '../controllers/contacts.js';

import { ctrlWrapper } from '../utils/ctrlWrapper.js';

import { validateBody } from '../middlewares/validateBody.js';
import {
  createContactSchema,
  updateContactSchema,
} from '../validation/contacts.js';

import { validateMongoId } from '../middlewares/validateMongoId.js';

import { authenticate } from '../middlewares/authenticate.js';

const router = Router();

router.use('/contacts/:contactId', validateMongoId('contactId'));

router.use('/', authenticate);

router.get('/contacts', ctrlWrapper(getContactsController));

router.get('/contacts/:contactId', ctrlWrapper(getContactByIdController));

router.post('/contacts', validateBody(createContactSchema), ctrlWrapper(createContactController));

router.delete('/contacts/:contactId', ctrlWrapper(deleteContactController));

router.put('/contacts', validateBody(createContactSchema), ctrlWrapper(upsertContactController));

router.patch('/contacts/:contactId',  validateBody(updateContactSchema),
  ctrlWrapper(patchContactController),);

export default router;
