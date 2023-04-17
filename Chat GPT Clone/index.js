const express=require('express');
const colors=require('colors');
const morgan=require('morgan');
const dotenv=require('dotenv');
const cors=require('cors');
const authRoutes=require('./routes/authRoutes');
// const routes=require('./routes/openaiRoutes')
const connectDB=require('./config/db');
const errorHandler = require('./middleware/errorMiddleware')
const port=process.env.PORT ||8000;
//routes path




const app=express();

//dotenv
dotenv.config();

//mongo connections
connectDB();





//middlewares

app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));
app.use(errorHandler)

//API Routes
app.use('/api/v1/auth',authRoutes);
app.use('/api/v1/openai',require('./routes/openaiRoutes'));





    

app.listen(port,()=>{
    console.log(`Server Running at ${ process.env.DEV_MODE } Mode on port ${port}`.bgCyan.red);
})