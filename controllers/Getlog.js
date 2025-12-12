import { LogCollection } from "../models/log.js";

const Getlog = async (req, res) => {
    try {

        const id = req.params["_id"]


        const body = await LogCollection.findOne({ "id": { $in: id } })

        res.json({
            _id: body._id,
            username: body.username,
            count: body.count,


            log: body.log.map(item => ({
                description: item.description,
                duration: item.duration,
                date: new Date(item.date).toDateString()
            }))
        });

    } catch (error) {

        console.log(error)

        res.json({ message: "une erreur c'est produite" })
    }

}

export default Getlog
