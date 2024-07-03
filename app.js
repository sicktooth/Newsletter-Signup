import express from "express";
import { log } from "node:console";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const app = express();
const port = 3000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Middleware to serve static files from the 'public' directory
app.use(express.static(join(__dirname, 'public')));

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(join(__dirname, 'public', 'signup.html'));
});

app.listen(port, () => {
    log(`Server has started at http://localhost:${port}`);
});
