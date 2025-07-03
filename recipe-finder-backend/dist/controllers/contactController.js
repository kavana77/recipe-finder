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
exports.handleContactForm = void 0;
const sendEmail_1 = __importDefault(require("../utils/sendEmail"));
const handleContactForm = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, email, subject, message } = req.body;
        if (!name || !email || !message) {
            res.status(400).json({ message: "Required fields missing" });
            return;
        }
        const emailSubject = subject || "New Contact form message";
        const emailBody = `
        You received a new message from your contact form: 
        Name: ${name}
        Email: ${email}
        Subject: ${subject || "Not Provided"}
        Message: ${message}
        `;
        yield (0, sendEmail_1.default)(process.env.EMAIL_USER, emailSubject, emailBody);
        res.status(200).json({ message: "Message send successfully" });
    }
    catch (error) {
        next(error);
    }
});
exports.handleContactForm = handleContactForm;
