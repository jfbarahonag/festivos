import express from "express"
import cors from "cors"
import holidaysRouter from "./routes/holidays"

// init
const app = express();

// settings
app.set('port', process.env.PORT || 3000)

// middlewares
app.use(cors())
app.use(express.urlencoded({extended: false}))
app.use(express.json())

// routes
app.use("/api/holidays", holidaysRouter)

export default app