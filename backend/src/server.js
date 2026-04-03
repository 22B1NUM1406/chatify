import express from 'express';
import dotenv from 'dotenv';
import authRouter from './routes/auth.route.js'

dotenv.config();
const PORT=process.env.PORT||3000;

const app=express();

app.use("/api/auth",authRouter);

app.listen(PORT,()=>{
    console.log("Server started on PORT:" +PORT);
});