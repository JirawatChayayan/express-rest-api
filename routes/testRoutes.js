import express from 'express'


const router = express.Router()

// Route Get
router.get('/',(req,resp)=>{
    resp.send('Hello World')
})

// Route About
router.get('/about',(req,resp)=>{
    resp.send('About Us')
})

// Route PostLogin
router.post('/login',(req,resp)=>{
    console.log(req.body)
    resp.send('Login Page')
})

// Route PUT /user
router.put('/user',(req,resp)=>{
    resp.send('Edit user page')
})

// Route PUT /user
router.delete('/user',(req,resp)=>{
    resp.send('Delete user page')
})

export default router