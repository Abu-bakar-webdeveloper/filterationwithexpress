import express from 'express';
import router from './src/routes/table.routes.js';
import{ connectDB } from './src/config/db.js';

const app = express();
const PORT = process.env.PORT || 3000;

connectDB()
  .then(() => console.log('Database connected successfully'))
  .catch(err => console.error('Database connection failed:', err));

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

app.use("/api/v1", router);