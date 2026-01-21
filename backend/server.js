import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { body, validationResult } from 'express-validator'
import nodemailer from 'nodemailer'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000

// Middleware
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Cấu hình Nodemailer
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
})

// Routes
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Server is running' })
})

// API to get personal information (can be extended later)
app.get('/api/profile', (req, res) => {
  res.json({
    name: 'Do Tuan Duy',
    title: 'Solution Specialist | AI & Data Automation Engineer',
    email: 'dotuanduy0512.work@gmail.com',
    phone: '(+84) 88 624 2420',
    location: 'Ho Chi Minh City, Vietnam',
    github: 'https://github.com/DTJ512',
    linkedin: ''
  })
})

// API gửi email liên hệ
app.post(
  '/api/contact',
  [
    body('name').trim().notEmpty().withMessage('Name is required'),
    body('email').isEmail().withMessage('Invalid email'),
    body('message').trim().notEmpty().withMessage('Message is required')
  ],
  async (req, res) => {
    try {
      // Kiểm tra validation
      const errors = validationResult(req)
      if (!errors.isEmpty()) {
        return res.status(400).json({ 
          success: false, 
          errors: errors.array() 
        })
      }

      const { name, email, message } = req.body

      // Cấu hình email
      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_USER, // Email nhận thông báo
        replyTo: email,
        subject: `Contact from Portfolio - ${name}`,
        html: `
          <h2>You have a new message from Portfolio</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, '<br>')}</p>
        `,
        text: `
          You have a new message from Portfolio
          
          Name: ${name}
          Email: ${email}
          
          Message:
          ${message}
        `
      }

      // Gửi email
      await transporter.sendMail(mailOptions)

      res.json({
        success: true,
        message: 'Message sent successfully! I will get back to you as soon as possible.'
      })
    } catch (error) {
      console.error('Error sending email:', error)
      res.status(500).json({
        success: false,
        message: 'An error occurred while sending the message. Please try again later.'
      })
    }
  }
)

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).json({
    success: false,
    message: 'An error occurred on the server'
  })
})

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: 'API endpoint does not exist'
  })
})

app.listen(PORT, () => {
  console.log(`🚀 Server is running at http://localhost:${PORT}`)
})

