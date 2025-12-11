import { LogCollection } from "../models/log.js"

const Newlog = async (req, res) => {
    try {

        const id = req.params["_id"]

        console.log(id)

        const body = await LogCollection.find({ "id": { $in: id } })
        res.json(body)

    } catch (error) {

        console.log(error)

        res.json({ message: "une erreur c'est produite" })
    }

}

export default Newlog
