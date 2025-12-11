import { UserCollection } from "../models/user.js"

const GetAllusers = async (req, res) => {
    try {
        const users = await UserCollection.find()

        res.json(users)
    } catch (error) {
        console.log(error)
        res.json({ message: "une erreur c'est produite" })
    }
}

export default GetAllusers
