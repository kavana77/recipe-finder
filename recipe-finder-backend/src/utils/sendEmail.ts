import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const sendEmail = async (to: string, subject: string, text: string) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to,
      subject,
      text,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent", info.response);
  } catch (error) {
    console.error("Email sending failed: ", error);
  }
};
export default sendEmail;
