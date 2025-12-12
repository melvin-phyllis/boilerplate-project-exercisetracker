import { ExerciceCollection } from "../models/exercice.js"
import { LogCollection } from "../models/log.js"
import { UserCollection } from "../models/user.js"

const Newexercie = async (req, res) => {
    try {

        const { _id } = req.params
        const user = await UserCollection.findById(_id)

        if (!user) return res.send("utilisateur non trouver")

        const { description, duration, date } = req.body

        const parsedDate = date ? new Date(date) : new Date()
        const exerciseDate = isNaN(parsedDate) ? new Date() : parsedDate
        const exerciseDuration = Number(duration)

        const body = await ExerciceCollection({
            id: _id,
            username: user.username,
            description: description,
            duration: exerciseDuration,
            date: exerciseDate
        })

        await body.save();

        const updatedLog = await LogCollection.findOneAndUpdate(
            { id: _id },
            {
                $setOnInsert: { username: user.username, id: _id, count: 0 },
                $push: {
                    log: {
                        description: description,
                        duration: exerciseDuration,
                        date: exerciseDate
                    }
                }
            },
            { new: true, upsert: true }

        );

        updatedLog.count = updatedLog.log.length
        await updatedLog.save()


        res.json({
            _id: body["id"],
            username: body.username,
            description: body.description,
            duration: body.duration,
            date: new Date(body.date).toDateString()
        })


    } catch (error) {

        console.log(error)
        return res.json({ message: "une erreur c'est produite" })

    }

}

export default Newexercie
