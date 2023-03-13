import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

// REGISTER USER // 

//mongo call 
export const register = async(req, res) => {
 try {
    //assigning req.body values to vars with the same name
    const { 
        firstName, 
        lastName, 
        email, 
        password, 
        picturePath,
        friends,
        location, 
        occupation
    } = req.body
 
    //salt is a random string data 
    //give user json web token
    const salt = await bcrypt.genSalt()
    const passwordHash = await bcrypt.hash(password, salt);

    const newUser = new User({
        firstName, 
        lastName, 
        email, 
        passwordHash,
        picturePath,
        friends,
        location,
        occupation 
    })
    const savedUser = await newUser.saved();
    res.status(202).json(savedUser)
    
 } catch (err) {
  res.status(500).json({error: err.message});
 }
}


// * LOGIN CONTROLLER * //
// verify if the user is typing the correct credentials //
export const login = async (req, res) => {
    try {
    const { email, password } = req.body
    const user = await User.findOne({ email: email})
    if (!user) return res.status(400).json({message: 'User not found'})

    const pswrdMatch = await bcrypt.compare(password, user.password)
    if (!pswrdMatch) return res.status(400).json({message: 'Invalid credenential' })

    const jwtToken = jwt.sign({id: user._id}, process.env.JWT_KEY)
    // passsord doesnt get sent to the front end
    delete user.password 
    res.status(200).json({jwtToken, user})
    } catch(err ) {
        res.status(500).json({error: err.message})
    }
} 