// pages/api/sendEmail.js
import nodemailer from 'nodemailer';
export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { name, email, message } = req.body;

      // Create a Nodemailer transporter
      const transporter = nodemailer.createTransport({
        service: 'Gmail', // E.g., 'Gmail', 'Outlook', 'Yahoo', etc.
        auth: {
          user:process.env.EMAIL,
          pass: process.env.EMAIL_PASS,
        },
      });

      // Email data
      const mailData = {
        from: 'abdelhak.org@gmail.com',
        to: 'abdelhak.org@gmail.com', // Replace with the recipient's email
        subject: 'Contact Form Submission',
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      };

      // Send the email
      await transporter.sendMail(mailData);

      res.status(200).json({ message: 'Email sent successfully!' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'An error occurred while sending the email.' });
    }
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
