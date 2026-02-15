const express = require('express');
const User = require ("./Model");
const router = express.Router();

router.post('/register', async (req,res)=> {
    const email = req.body.email
    const password = req.body.password
    if (!email|| !password){
        return res.status(404).json({
            message: "Missing Password or email",
            userId: "null"
        })  
    }try{ 
        
        let user =  await User.findOne({ where: { email } });
        if(!user){ user = await User.create({
            email:email,
            password:password
        })}
        return res.status(200).json({
            message: "User created",
            userId: user.id
        })

    }catch(error){
        return res.status(500).json({
            message: "Server Error",
            err: error.stack
        })
    }

})

router.post('/login', async (req,res)=> {
    const email = req.body.email
    const password = req.body.password
    if (!email|| !password){
        return res.status(404).json({
            message: "Missing Password or email",
            userId: "null"
        })  
    }try{
        const user =  await User.findOne({ where: { email } });
        if(!user){
            return res.status(404).json({
                message: "User not found",
                userId: "null"
            })
        }
        if (user.password !== password){
            return res.status(401).json({
                message: "Invalid Password",
                userId: "null"
            })
        }
        return res.status(200).json({
            message: "Logged In",
            userId: user.id
        })

    }catch(error){
        return res.status(500).json({
            message: "Server Error",
            err: error.stack
        })
    }

})

module.exports = router