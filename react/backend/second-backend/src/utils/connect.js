import mongoose from "mongoose"
export const connectDb = async () => {
    try {
        const connection = await mongoose.connect(process.env.MONGODB_URL)
        if (connection) {
            console.log("db connected")
            return connection
        }
        return connection
    }
    catch (err) {
        console.log(err.message)
    }


}
