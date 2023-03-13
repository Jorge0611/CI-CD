import jwt from 'jsonwebtoken'

export const verifyToken = async(req,res,next) => {
    try{
        //grabing auth header from front end request
        let token = req.header("Authorization")
        if (!token) {
            return res.status(403).send("Denied!")
        }
        
        //trimming the left to take only the bearer token 
        if (token.startsWith("Bearer ")) {
            token = token.slice(7, token.length).trimLeft()
        }

        const verified = jwt.verify(token, process.env.JWT_KEY)
        req.user = verified
        //proceed to next step of the function
        next()
    }catch(err) {
        res.status(500).json({error: err.message})
    }
}