import express from 'express';
import { createLead } from '../controllers/contact.controller.js';

const router = express.Router();

router.post('/lead', createLead);

export default router;
