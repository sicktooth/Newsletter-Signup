import express from "express";
import { log } from "node:console";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const app = express();
const port = 3000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Middleware to serve static files from the 'public' directory
app.use(express.static('public'));

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(join(__dirname, 'signup.html'));
});

app.post('/success', (req, res) =>{
    var email = req.body.email,
        firstName = req.body.firstName,
        lastName = req.body.lastName;
    log(firstName + ' ' + lastName + ' ' + email);
    res.sendFile(join(__dirname, 'success.html'));
});

app.listen(port, () => {
    log(`Server has started at http://localhost:${port}`);
});

// API KEY FOR 
// a78e00f410bcbbc2df05d514dd4678eb-us13