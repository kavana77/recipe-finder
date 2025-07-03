"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendSubscriptionEmail = void 0;
const Subscription_1 = __importDefault(require("../models/Subscription"));
const sendEmail_1 = __importDefault(require("../utils/sendEmail"));
const sendSubscriptionEmail = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email } = req.body;
        console.log("Raw req.body", req.body);
        if (!email) {
            res.status(404).json({ message: "Email is required" });
            return;
        }
        const emailexist = yield Subscription_1.default.findOne({ email });
        if (emailexist) {
            res.status(400).json({ message: "Email already subscribed" });
            return;
        }
        const newSub = new Subscription_1.default({ email });
        yield newSub.save();
        yield (0, sendEmail_1.default)(email, "Welcome to Recipe Finder", `
             Welcome to Recipe Finder!
            Thanks for subscribing to Recipe Finder
            You'll now receive curated recipes, cooking tips & kitchen inspiration! 🥗🍕🥘
            The Recipe Finder Team 🥄
            
             `);
        res.status(201).json({ message: "Subscribed successfully", newSub });
    }
    catch (error) {
        next(error);
    }
});
exports.sendSubscriptionEmail = sendSubscriptionEmail;
