import React, { useState } from 'react'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub } from 'react-icons/fa'
import axios from 'axios'
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
    // Reset status khi user nhập lại
    if (submitStatus) {
      setSubmitStatus(null)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      const response = await axios.post('/api/contact', formData)
      setSubmitStatus({ type: 'success', message: response.data.message })
      setFormData({ name: '', email: '', message: '' })
    } catch (error) {
      const errorMessage = error.response?.data?.message || 
        error.response?.data?.errors?.[0]?.msg ||
        'An error occurred while sending the message. Please try again later.'
      setSubmitStatus({ type: 'error', message: errorMessage })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Contact Me</h2>
        <div className="contact-content">
          <div className="contact-info">
            <h3>Contact Information</h3>
            <p>
              I'm always open to hearing about new collaboration opportunities. 
              Feel free to reach out through the following channels:
            </p>
            <div className="contact-items">
              <div className="contact-item">
                <FaEnvelope />
                <div>
                  <h4>Email</h4>
                  <a href="mailto:dotuanduy0512.work@gmail.com">dotuanduy0512.work@gmail.com</a>
                </div>
              </div>
              <div className="contact-item">
                <FaPhone />
                <div>
                  <h4>Phone</h4>
                  <a href="tel:+84886242420">(+84) 88 624 2420</a>
                </div>
              </div>
              <div className="contact-item">
                <FaMapMarkerAlt />
                <div>
                  <h4>Location</h4>
                  <p>Ho Chi Minh City, Vietnam</p>
                </div>
              </div>
            </div>
            <div className="social-links">
              <a href="https://github.com/DTJ512" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
            </div>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Enter your name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your.email@example.com"
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                placeholder="Enter your message..."
              ></textarea>
            </div>
            <button type="submit" className="btn-submit" disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
            {submitStatus && (
              <div className={`submit-status ${submitStatus.type}`}>
                {submitStatus.message}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact

