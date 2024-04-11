import express from 'express';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app = express();
const port = 3000; // or any other port you prefer

// Middleware to parse incoming request bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Enable CORS for all routes
app.use(cors());

// Nodemailer transporter setup
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.USER,
    pass: process.env.PASS,
  },
});

// POST route to handle sending email
app.post('/sendMail', async (req, res) => {
  // Assuming you receive req.body with name, email, and message properties
  const { name, email, message } = req.body;

  const mailOptions = {
    from: {
      name: 'Portfolio Visitor',
      address: process.env.USER,
    },
    to: ["sarankumartsk@gmail.com", "sarankumartsk72726@gmail.com"],
    subject: "Mail From Portfolio Visitor",
    text: `Mail From ${name}\n-${email}\n${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("Email has been sent successfully");
    res.send("Email sent successfully");
  } catch (error) {
    console.error(error);
    res.status(500).send("Failed to send email");
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});