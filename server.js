import cors from 'cors';
import express from "express"
import colors from "colors"
import dotenv from "dotenv"
import morgan from "morgan"
import connectdb from "./db.js"
import authRoutes from "./routes/authRoutes.js"
import categoryRoutes from "./routes/CategoryRoutes.js"
import productRoutes from "./routes/productRoutes.js";

dotenv.config()
connectdb();
const app = express()
app.use(cors());

app.use(express.json())
app.use(morgan('dev'))

app.use("/api/v1/auth", authRoutes)
app.use("/api/v1/category", categoryRoutes);
app.use("/api/v1/product", productRoutes);

app.get('/', (req, res) => {
  res.send(`<h1>Welcome to Ecommerce App</h1>`)
})
const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
  console.log(`Server is running on ${process.env.DEV_MODE} mode on  ${PORT}`.bgCyan.white);

})

