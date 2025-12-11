import { UserCollection } from "../models/user.js"

const Newuser = async (req, res) => {
    try {
        const { username } = req.body

        console.log(username)

        if (username) {

            const data = await UserCollection({ username: username })

            await data.save()


            return res.json({ username: data.username, _id: data["_id"] })
        }
        res.send("entre non valide")
    } catch (error) {

        console.log(error)
        return res.json({ message: "une erreur c'est produite" })
    }
}

export default Newuser
