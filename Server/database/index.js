import mongoose from "mongoose";

// database connection
export const mongoDB = () => {
    mongoose.connect(process.env.MONGO)
    .then(() => {
        console.log("MongoDb database is connected!");
    })
    .catch((error) => {
        console.log(error);
    });
}