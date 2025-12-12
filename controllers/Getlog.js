import { LogCollection } from "../models/log.js";

const Getlog = async (req, res) => {
    try {

        const id = req.params["_id"]
        const { from, to, limit } = req.query

        const body = await LogCollection.findOne({ id: id })

        if (!body) return res.send("utilisateur non trouver")

        let log = body.log || []

        const fromDate = from ? new Date(from) : null
        const toDate = to ? new Date(to) : null

        if (fromDate && !isNaN(fromDate)) {
            log = log.filter(item => new Date(item.date) >= fromDate)
        }

        if (toDate && !isNaN(toDate)) {
            log = log.filter(item => new Date(item.date) <= toDate)
        }

        const limitNumber = parseInt(limit, 10)

        if (!isNaN(limitNumber) && limitNumber > 0) {
            log = log.slice(0, limitNumber)
        }

        res.json({
            _id: body.id,
            username: body.username,
            count: log.length,


            log: log.map(item => ({
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
