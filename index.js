
const express=require('express')
const app = express()
const port=process.env.PORT || 3000
const Taskroutes=require('./routes/tasks')
const connectDB=require('./db/connect')
const notFound=require('./middlewares/not-found')
require('dotenv').config()
//middleware
app.use(express.json())
app.use('/api/v1/tasks',Taskroutes)

app.use(notFound)

const start=async()=>{
    try{
await connectDB(process.env.MONGO_URI)
app.listen(port,()=>{
    console.log(`app listen on the port ${port}`)
})
    }catch(error){
console.log(error)
    }
}
start();