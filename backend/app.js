const express = require("express")
const cors = require("cors")
const app = express()
require("dotenv").config();

app.use(cors())
app.use(express.json())

//DB conection
const conn = require("./db/conn")
conn();

//Routes
const routes = require("./routes/router");
app.use("/api", routes)

const port = process.env.PORT

app.listen(port, () => {
  console.log("Servidor Online!")
})

