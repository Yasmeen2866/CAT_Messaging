const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const colors = require("colors");
const userRoutes = require("./Routes/userRoutes");
const chatRoutes  = require("./Routes/chatRoutes");
const {notFound,errorHandler} = require("./middleware/errorMiddleware")
const cors = require('cors');

const app = express();
dotenv.config();
connectDB();
app.use(express.json()); //to accept json from frontend
app.use(cors());

app.get("/",(req,res)=>{
    res.send("API running successfully");
})

app.use('/api/user', userRoutes);
app.use('/api/chat', chatRoutes);

app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 5002;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`.yellow.bold));
