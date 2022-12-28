import express from "express";
import transporter from "../config/nodeMailer.js";

const router = express.Router();

router.get("/api/email", async (req, res) => {
  const data = {
    from: 'damian', // sender address,
    to: "damiantriebl@gmail.com",
    subject: "Checkeeemos que funcion",
    // text: 'Hello World'
    html: "<h1>muchaaachos!! nos volmimos a ilusiona</h1>",
  };
  const mail = await transporter.sendMail(data);
  res.send(mail);
});
export {router as emailRouter}
