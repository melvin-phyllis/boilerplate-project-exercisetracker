import { ExerciceCollection } from "../models/exercice.js"
import { LogCollection } from "../models/log.js"
import { UserCollection } from "../models/user.js"

const Newexercie = async (req, res) => {
    try {

        const { _id } = req.params
        const id = _id
        const user = await UserCollection.findById(_id)

        console.log("a", user)
        if (!user) return res.send("utilisateur non trouver")

        const { description, duration, date } = req.body



        const body = await ExerciceCollection({
            id: _id,
            username: user.username,
            description: description,
            duration: duration,
            date: date ? date : new Date().toDateString()
        })

        console.log("b", body)
        await body.save();


        const numarate = await ExerciceCollection.countDocuments({})

        const log = await LogCollection.findOne({ "id": {  _id } })

        console.log(log)

        if (!log) {

            const log1 = new LogCollection({

                username: user.username,
                count: numarate,
                id: id,

            })

            await log1.save()
        }

        await LogCollection.findOneAndUpdate({ id: id }, {
            
          $push  : {
                log: {
                    description: description,
                    duration: duration,
                    date: date ? date : new Date().toDateString()
                }
            }
        })


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
