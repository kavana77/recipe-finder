import { RequestHandler } from "express"
import sendEmail from "../utils/sendEmail"

export const handleContactForm: RequestHandler = async (req, res,next)=>{

    try {
        const {name, email, subject, message} = req.body

        if(!name || !email || !message){
            res.status(400).json({message: "Required fields missing"})
            return
        }
    
        const emailSubject = subject || "New Contact form message"
        const emailBody = `
        You received a new message from your contact form: 
        Name: ${name}
        Email: ${email}
        Subject: ${subject || "Not Provided"}
        Message: ${message}
        `
        await sendEmail(process.env.EMAIL_USER!, emailSubject, emailBody)

        res.status(200).json({message: "Message send successfully"})
    } catch (error) {
        next(error)
    }
}