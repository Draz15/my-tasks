import { User } from "../model/User.js"

export const addUser = async (req, res) => {
    const { name, age, city } = req.body;
    if (!name || !age || !city) return res.sendStatus(400)

    try {
        const newUser = new User({
            name,
            age,
            city
        })
        await newUser.save()

        res.status(201).json({
            message: "user added successfully"
        })

    } catch (error) {
        res.status(500).json({
            message: error.message
        })

    }
}

export const displayUsers = async (req, res) => {
    try {
        const users = await User.find({})
        res.status(200).json(users)
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

export const displayUserById = async (req, res) => {
    const { _id } = req.params

    try {
        const user = await User.findById({ _id })
        res.status(200).json(user)
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

export const updateUserById = async (req, res) => {
    const { _id } = req.params
    const { name, age, city } = req.body;

    try {
        const user = await User.updateOne({ _id },{
            $set: {
                name,
                age,
                city
            }
        })

        const count = user.modifiedCount 
        res.status(201).json({
            message: "number of updated users: "+ count
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

export const deleteUserById = async (req, res) => {
    const { _id } = req.params

    try {
        const user = await User.deleteOne({ _id })
        const count = user.deletedCount
        res.status(201).json({
            message: "number of deleted users: "+ count
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}