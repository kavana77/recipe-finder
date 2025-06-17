import mongoose,{Document, Schema} from "mongoose";
import { IEmail } from "../types/subscription";

interface IEmailModel extends IEmail, Document {}

const subscriptionSchema: Schema= new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    }
},{
    timestamps: true
})
const Subscription = mongoose.model<IEmailModel>("Subscription", subscriptionSchema)
export default Subscription