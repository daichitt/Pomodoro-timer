const express = require("express")
const app = express();

const mongoose = require("mongoose")

const PORT = process.env.PORT || 3000; 

app.listen(PORT, () => { 
    console.log(`API is listening on port ${PORT}`); 
});

app.get("/", (req, res) => { 
    res.send("<h2>It's Working!</h2>");
}); 

app.get('/hello', (req, res) => {
    res.json({ message: 'Hello, World!' });
});  