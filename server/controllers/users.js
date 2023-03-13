import User from "../models/User.js";

// READ //
export const getUser = async (req, res) => {
    try{
     const { id } = req.params
     const user = await User.findById(id)
     res.status(200).json(user)
    }catch(err) {
        res.status(404).json({message: err.message})
    }
}


export const getFriends = async (req, res) => {
    try {
        const { id } = req.params
        const user = await User.findById(id)
    
        // multiple api calls to the db thats why promise.all
       const friends = await Promise.all(user.friends.map((id) => User.findById(id)))
       const formattedFriends = friends.map(
        ({id_, firstName, lastName, location, picturePath }) => {
            return {id_, firstName, lastName, location, picturePath }
        }
       )
       res.status(200).json(formattedFriends)
    }catch(err){
     res.status(404).json({message: err.message})
    }
};


// UPDATE //
export const addRemoveFriends = async (req, res) => {
    try {
        const { id, friendId} = req.params
        const user = await User.findById(id);
        const friend = await User.findById(friendsId)

        if(user.friends.includes(friendId)) {
            user.friends = user.friends.filter((id) => id !== friendId)
            friends.friends = friend.friends.filter((id) => id !== id)
        } else {
            user.friends.push(friendId)
            friends.friends.push(id)
        }
        await user.save()
        await friend.save()

        const friends = await Promise.all(user.friends.map((id) => User.findById(id)))
        const formattedFriends = friends.map(
         ({id_, firstName, lastName, location, picturePath }) => {
             return {id_, firstName, lastName, location, picturePath }
         }
        )

        res.status(200).json(formattedFriends);
    }catch(err){
        res.status(400).json({ message: err.message })
    }
}