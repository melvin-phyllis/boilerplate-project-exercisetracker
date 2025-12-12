import { LogCollection } from "../models/log.js"

const Getlog = async (req, res) => {
    try {

        const id = req.params["_id"]


        const body = await LogCollection.findOne({ "id": { $in: id } })

        res.json(body)

    } catch (error) {

        console.log(error)

        res.json({ message: "une erreur c'est produite" })
    }

}

export default Getlog
