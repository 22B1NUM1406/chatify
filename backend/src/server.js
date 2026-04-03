import express from 'express';
import dotenv from 'dotenv';
import authRouter from './routes/auth.route.js'
import path from 'path';

dotenv.config();

const app=express();

const PORT=process.env.PORT||3000;
const __dirname=path.resolve();

app.use("/api/auth",authRouter);

//backend ni frontend dist folderiig serve hiij baina
if(process.env.NODE_ENV==="production"){
    app.use(express.static(path.join(__dirname,"../frontend/dist")));
    app.get("*",(req,res)=>{
        res.sendFile(path.join(__dirname,"../frontend/dist/index.html"));
    });
}

app.listen(PORT,()=>{
    console.log("Server started on PORT:" +PORT);
});