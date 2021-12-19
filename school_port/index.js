const path = require('path');
const express = require('express');
const app = express();
const port = process.env.PORT || 8000

const staticPath = path.join(__dirname, "../school_port");

app.use(express.static(staticPath));

app.get("", (req, res) => {
    res.send("Hey Ther ...")
});

app.get("/about", (req, res) => {
    res.send("Hey Ther ...")
});
app.get("/contact", (req, res) => {
    res.send("Hey Ther ...")
});

app.get("*", (req, res) => {
    res.send("404 page not found - OOPs 😣")
});

app.listen(port, () => {
    console.log("Listining at port 800");
})