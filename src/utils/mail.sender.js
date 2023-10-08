import { config } from "../config/env.js";
import mail from "@sendgrid/mail";

export const sendMail = (userEmail, myEmail) => {
  const ApiKey = config.SENDGRID_API_KEY;

  mail.setApiKey(ApiKey);

  const message = {
    to: userEmail,
    from: myEmail,
    subject: "Reset Your Password",
    text: " This is the link to reset your password",
  };

  mail
    .send(message)
    .then((response) => console.log("email sent"))
    .catch((err) => console.log(err.response.body));
};
