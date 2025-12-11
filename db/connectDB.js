import mongoose from "mongoose"

const connectDB = async (req, res, next) => {
    try {

        if (mongoose.connection.readyState === 1) {
            return next()
        }

        await mongoose.connect(process.env.DB_URL,{
            dbName:"tracker"
        })
        return next()
    } catch (error) {

        console.log(error)
        res.json({ message: "une erreur c'est produite" })
    }
}

export default connectDB
