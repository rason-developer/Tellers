import mongoose, {ConnectOptions} from "mongoose";
import { MONGO_URI } from "./config";

const connectDB =  async() => {
    try {
        const options: ConnectOptions = {
            //@ts-ignore
            useNewUrlParser: true,
            useUnifiedTopology: true,
        };

        await mongoose.connect(MONGO_URI, options);
    }catch(err) {
        console.error("Error connecting to MongoDB: ",err);
    }
}
export default connectDB;