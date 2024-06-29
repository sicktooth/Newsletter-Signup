import express from "express";
import { log } from "node:console";
import { fileURLToPath } from "node:url";
import {dirname} from "path";

const app = express(),
      port = 3000,
      __filename = fileURLToPath(import.meta.url),
      __dirname = dirname(__filename);

app.use(express.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/public" + '/signup.html');
});
app.listen(port, ()=> {
    log(`server has started at http://localhost:${port}`);
});