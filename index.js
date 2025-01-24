//Import Express
import express from 'express'
//Import testroute
import testRoute from './routes/testRoutes.js'

import productRoute from './routes/productRoutes.js'

import userRoute from './routes/userRoutes.js'
//import dotenv
import dotenv from 'dotenv'

//import dbconnection
import connectDB from './utils/db.js'

//import swagger
import setupSwagger from './utils/swagger.js'

//import CORS
import cors from 'cors'

//load environment variables
dotenv.config()

connectDB()

//create a new express application
const app = express()

//middleware for CORS
app.use(cors({
    // origin:'http://localhost:3000, http://localhost:4200',
    origin:'*',
    methods:'GET, POST, PUT, DELETE',
    allowedHeaders:['Content-Type', 'Authorization'],
    credentials:true
}))

setupSwagger(app)
app.use(express.json()) 
app.use('/api',testRoute)
app.use('/api/products',productRoute)
app.use('/api/users',userRoute)

//test connection db
app.get('/api/testdb', async (req, res) => {
    try{
        await connectDB()
        res.send('MongoDB Connected')
    }catch(error){
        res.status(500).send(`Fail to connect to  MongoDB : ${error.message}`)  
    }
})


//start the server on port 3000
app.listen(process.env.PORT,process.env.HOST
    ,()=>{
    console.log(`Server started on http://${process.env.HOST || 'localhost'}:${process.env.PORT}`)
})

