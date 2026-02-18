import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import path from 'path';

dotenv.config();
const app = express();
app.use(express.json());
app.use(
  cors({
    origin: 'http://localhost:5173',
    credentials: true,
  })
);

const __dirname = path.resolve();

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../frontend/dist')));

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend', 'dist', 'index.html'));
  });
}

import waitlistRoutes from './routes/waitlist.routes.js';
import careerRoutes from './routes/career.routes.js';
import { connectDB } from './lib/db.js';
import { verifyConnection } from './services/zoho-mail.service.js';

app.use('/api/waitlist', waitlistRoutes);
app.use('/api/careers', careerRoutes);

const PORT = process.env.PORT || 5000;
app.listen(
  connectDB() && verifyConnection()  &&
  PORT, () => console.log(`🚀 Server running on port ${PORT}`)
);
