
const Newexercie = async (req, res) => {
    try {

        const { _id } = req.params

        const user = await UserCollection.findById(_id)
        console.log("a", user)
        if (!user) return res.send("utilisateur non trouver")

        const { description, duration, date } = req.body

        const body = await ExerciceCollection({
            _id: _id,
            username: user.username,
            description: description,
            duration: duration,
            date: date ? date : new Date().toDateString()
        })

        console.log("b", body)
        await body.save();


        return res.json({
            _id: body["_id"],
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
