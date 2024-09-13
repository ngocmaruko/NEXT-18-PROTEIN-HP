const transporter = require('../config/mailConfig');

// Controller to handle form submissions
const contactFormHandler = async (req, res) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    res.setHeader('Access-Control-Allow-Origin', 'https://next-18protein.jpn.org');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.status(200).end();
    return;
  }

  // Handle form submissions
  res.setHeader('Access-Control-Allow-Origin', 'https://next-18protein.jpn.org');
  const { name, email, message } = req.body;

  // Validate form data
  if (!name || !email || !message) {
    return res.status(400).json({ message: 'All fields are required.' });
  }

  const mailOptions = {
    from: email, // User's email address
    to: process.env.RECEIVER_EMAIL, // Your email address
    subject: `Contact Form Submission from ${name}`,
    text: message,
    html: `
      <h3>Contact Form Submission</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong> ${message}</p>
    `,
    replyTo: email, // Reply directly to the user's email
  };

  try {
    // Send the email
    await transporter.sendMail(mailOptions);
    res.json({ message: 'Message sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ message: 'Failed to send message.' });
  }
};

module.exports = { contactFormHandler };
