import ejs from "ejs";
import { createTransport } from "nodemailer";
import path from "path";
import {fileURLToPath} from "url"
import dotenv from "dotenv"
dotenv.config()
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const transporter = createTransport({
    service:process.env.SMTP_SERVICE,
    host:process.env.SMTP_HOST,
    port:587,
    auth:{
        user:process.env.SMTP_USER,
        pass:process.env.SMTP_PASSWORD
    }
});
export const sendMail = async (to, subject, template, data) => {
  try {
    const templatePath = path.join(__dirname, "../mail", template);
    const htmlContent = await ejs.renderFile(templatePath, data);
    await transporter.sendMail({
        from:process.env.SMTP_USER,
        to,
        subject,
        html:htmlContent
    })
    console.log(`email sent to ${to}`);
    
  } catch (error) {
    console.log("error sending emial",error)
  }
};
