import jwt from "jsonwebtoken";
import User from "../models/User.js";

export const getLoggedUser = async (req, res) => {
  try {
    // decrypt the token in the authorization header
    const token = req.headers.authorization.split(" ")[1];
    const decodedData = jwt.verify(token, process.env.JWT_KEY);
    const id = decodedData.id;

    let user = await User.findById(id);

    // the password doesn't get sent to the front end
    user.password = undefined;

    return res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getLoggedUserFriends = async (req, res) => {
  try {
    // decrypt the token in the authorization header
    const token = req.headers.authorization.split(" ")[1];
    const decodedData = jwt.verify(token, process.env.JWT_KEY);
    const id = decodedData.id;

    const user = await User.findById(id);

    // multiple api calls to the db that's why promise.all
    const friends = await Promise.all(
      user.friends.map((id) => User.findById(id))
    );
    const formattedFriends = friends.map(
      ({ _id, firstName, lastName, location, picturePath }) => {
        return { _id, firstName, lastName, location, picturePath };
      }
    );
    res.status(200).json(formattedFriends);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

// READ //
export const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    res.status(200).json(user);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

export const getFriends = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);

    // multiple api calls to the db that's why promise.all
    const friends = await Promise.all(
      user.friends?.map((id) => User.findById(id))
    );

    const formattedFriends = friends.map(
      ({ id_, firstName, lastName, location, picturePath }) => {
        return { id_, firstName, lastName, location, picturePath };
      }
    );
    res.status(200).json(formattedFriends);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

// UPDATE //
export const addRemoveFriends = async (req, res) => {
  try {
    const { id, friendId } = req.params;

    const user = await User.findById(id);
    const friend = await User.findById(friendId);

    if (user.friends.includes(friendId)) {
      user.friends = user.friends.filter((id) => id !== friendId);
      friend.friends = friend.friends.filter((id) => id !== id);
    } else {
      user.friends.push(friendId);
      friend.friends.push(id);
    }
    await user.save();
    await friend.save();

    const friends = await Promise.all(
      user.friends.map((id) => User.findById(id))
    );

    const formattedFriends = friends.map(
      ({ _id, firstName, lastName, location, picturePath }) => {
        return { _id, firstName, lastName, location, picturePath };
      }
    );

    res.status(200).json(formattedFriends);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
