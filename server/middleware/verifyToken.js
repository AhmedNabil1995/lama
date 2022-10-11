const jwt = require("jsonwebtoken");

const verify = (req,res,next)=>{
    const token = req.headers.token;
    
    if(token){
        

            jwt.verify(token,process.env.TOKEN_KEY,(err,user)=>{
                if(!err){
                    req.user = user;
                    next();
                }else{
                    res.status(500).json(err);
                }
            });
        

    }else{
        res.status(401).json('you are not authentication')
    }
}

const verifyTokenAndAuthorizationuser = (req,res,next)=>{
        verify(req,res,()=>{
            if(req.user.id === req.params.id || req.user.isAdmin ){
                next();
            }else{
                res.status(403).json("You are not alowed to do that!");
            }
        })
}

const verifyTokenAndAuthorization = (req,res,next)=>{
    verify(req,res,()=>{
        if(req.user.id === req.query.userId || req.user.isAdmin ){
            next();
        }else{
            res.status(403).json("You are not alowed to do that!");
        }
    })
}

const verifyTokenAndAdmin  = (req,res,next)=>{
    verify(req,res,()=>{
        if( req.user.isAdmin ){
            
            next();
        }else{
            res.status(403).json("You are not alowed to do that!");
        }
    })
}

module.exports = {
    verifyTokenAndAuthorization,
    verifyTokenAndAuthorizationuser,
    verifyTokenAndAdmin,
    verify
}