import express from 'express';
import dotenv from 'dotenv';
import connectDb from './database/db.js';
import userRoute from './routes/user.route.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';
dotenv.config({});

// call database connection here 
connectDb();

const app = express();
const PORT = process.env.PORT || 3000;

// default middlewares
app.use(express.json()); //converts the form data into json form and adds it to the req.body

app.use(cookieParser());//adds cookiedata in req.cookies
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}));

//apis
app.use("/api/v1/user",userRoute);



  
app.listen(PORT,()=>{
    console.log(`Server listening at port ${PORT} `);
    
});
