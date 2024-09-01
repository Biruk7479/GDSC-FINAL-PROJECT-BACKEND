import User from '../models/userModel.js';

export const getUsers = async (req, res) => {
    try {
        const users = await User.find();
        
        if (!users || users.length === 0) {
            res.status(404).send("No users found.");
        } else {
            res.status(200).json({ users });
        }
    } catch (e) {
        return res.status(500).send("Failed to retrieve users.");
    }
};

export const getUser = async (req, res) => {
    try {
        const id = req.params.id;
        const user = await User.findById(id);

        if (!user) return res.status(404).send("No user found.");

        return res.status(200).json({ user });
    } catch (e) {
        return res.status(500).json({ error: "Failed to search user." });
    }
};

export const deleteUser = async (req, res) => {
    try {
        const id = req.params.id;

        const User = await User.findByIdAndDelete(id);
        if (!User) return res.status(404).json({ error: "Couldn't find User" });

        return res.status(204).send("Deleted Successfully!");
    } catch (e) {
        return res.status(500).json({ error: e.message });
    }
};