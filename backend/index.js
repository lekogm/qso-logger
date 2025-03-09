import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import { fileURLToPath } from 'url';
import { Low } from 'lowdb';
import { JSONFile } from 'lowdb/node';


// Define __dirname in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 3000;

// Setup lowdb with a JSON file for persistence.
const dbFile = path.join(__dirname, 'db.json');
const adapter = new JSONFile(dbFile);
const db = new Low(adapter);

// Initialize default data.
async function initDB() {
  await db.read();
  db.data = db.data || { logs: [] };
  await db.write();
}
initDB();

app.use(bodyParser.json());

// API endpoint to get logs.
app.get('/api/logs', async (req, res) => {
  await db.read();
  res.json(db.data.logs);
});

// API endpoint to save a log.
app.post('/api/logs', async (req, res) => {
  const newLog = req.body;
  await db.read();
  db.data.logs.push(newLog);
  await db.write();
  res.json({ success: true });
});

// Serve static files from the frontend build later.
app.use(express.static(path.join(__dirname, '../frontend/dist')));

// Fallback for other routes.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/dist/index.html'));
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});