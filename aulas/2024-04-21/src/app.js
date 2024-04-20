const express = require("express")
const userRoutes = require("./routes/userRoutes")

const PORT = 8080

const app = express()

app.use(express.json())

app.use("/users", userRoutes)

app.listen(PORT, () => {
  console.log(`running in port ${PORT}`)
})