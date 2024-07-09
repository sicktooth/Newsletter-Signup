import express from "express";
import { log } from "node:console";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import https from "node:https";

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
    const email = req.body.email,
        firstName = req.body.firstName,
        lastName = req.body.lastName;

    const data = {
        members: [
            {

                email_address: email,
                status: "subscribed",
                merge_fields: {
                    FNAME: firstName,
                    LNAME: lastName
                }
                
            }
        ]
    };

    const jsonData = JSON.stringify(data);
    res.sendFile(join(__dirname, 'success.html'));

    const url = "https://us13.api.mailchimp.com/3.0/lists/00bcda0944",
          options = {
            method: "POST",
          };

    https.request(url, options, (response)=>{

    });

});

app.listen(port, () => {
    log(`Server has started at http://localhost:${port}`);
});

// API KEY  


// List ID
// 00bcda0944