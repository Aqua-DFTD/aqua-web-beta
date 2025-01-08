const express = require("express")
const app = express();
let port = 8100;

// Middlewares
app.use(express.static("public"))

// Routes
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html")
})

app.get("/getstarted", (req, res) => {
    res.sendFile(__dirname + "/pages/get-started.html")
})

app.get("/learnmore", (req, res) => {
    res.sendFile(__dirname + "/pages/learn-more.html")
})

app.get("/contact", (req, res) => {
    res.sendFile(__dirname + "/pages/contact.html")
})

// Listeners
app.listen(port, () => {
    console.log("Serveur démarré sur le port", port)
})
