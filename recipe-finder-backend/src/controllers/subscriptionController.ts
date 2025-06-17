import { Request, Response } from "express";
import Subscription from "../models/Subscription";
import sendEmail from "../utils/sendEmail";

export const sendSubscriptionEmail = async (req: Request, res: Response): Promise<void>=>{
   
    try {
        const {email} = req.body
        console.log("Raw req.body", req.body)
        if(!email){
             res.status(404).json({message: "Email is required"})
             return
        }
        const emailexist = await Subscription.findOne({email})
        if(emailexist){
            res.status(400).json({message: "Email already subscribed"})
            return
        }
        const newSub = new Subscription({email})
        await newSub.save()

        await sendEmail(
            email,
            "Welcome to Recipe Finder",
            `
             Welcome to Recipe Finder!
            Thanks for subscribing to Recipe Finder
            You'll now receive curated recipes, cooking tips & kitchen inspiration! 🥗🍕🥘
            The Recipe Finder Team 🥄
            
             `
        )
     res.status(201).json({message: "Subscribed successfully", newSub})
    } catch (error) {
        console.error("Error in subscription:", error);
         res.status(500).json({ message: "Something went wrong" });
    }
}