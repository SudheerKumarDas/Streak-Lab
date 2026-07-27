import User from "../models/user.model.js";

export const registerUser = async (req,res) => {
    try {
        const {username,email,password} = req.body;
        if(!username || !email || !password){
            return res.status(400).json({
                message:"Not enough data"
            })
        }
        const user = await User.findOne({email})
    } catch (error) {
        console.error(`Error registering user`);
        res.status(500).json({
            message:"Internal server error"
        })
    }
}