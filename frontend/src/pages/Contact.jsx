import { useState } from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import contactData from '../contact.json'
import './Contact.css'

function Contact() {
  const { t, language } = useLanguage()
  const contactInfo = contactData[`contact_${language}`] || contactData.contact_vn
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null) // 'success' | 'error' | null

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    const formData = new FormData(e.target)
    const name = formData.get('name')
    const email = formData.get('email')
    const subject = formData.get('subject')
    const message = formData.get('message')

    // Lấy cấu hình Telegram từ contact.json
    const telegramConfig = contactData.telegram || {}
    const botToken = telegramConfig.botToken
    const chatId = telegramConfig.chatId

    if (!botToken || !chatId) {
      setSubmitStatus('error')
      setIsSubmitting(false)
      alert(language === 'vn' 
        ? 'Cấu hình Telegram chưa được thiết lập. Vui lòng thêm botToken và chatId vào contact.json'
        : 'Telegram configuration not set. Please add botToken and chatId to contact.json')
      return
    }

    // Tạo message để gửi
    const telegramMessage = `📧 *Tin nhắn mới từ CV Online*\n\n` +
      `👤 *Tên:* ${name}\n` +
      `📧 *Email:* ${email}\n` +
      `📌 *Chủ đề:* ${subject}\n\n` +
      `💬 *Nội dung:*\n${message}`

    try {
      // Gửi message đến Telegram Bot API
      const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: telegramMessage,
          parse_mode: 'Markdown'
        })
      })

      const data = await response.json()

      if (response.ok && data.ok) {
        setSubmitStatus('success')
        e.target.reset() // Reset form
        // Ẩn thông báo sau 5 giây
        setTimeout(() => setSubmitStatus(null), 5000)
      } else {
        setSubmitStatus('error')
        console.error('Telegram API error:', data)
      }
    } catch (error) {
      setSubmitStatus('error')
      console.error('Error sending message:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="contact-page">
      <div className="contact-content">
        <div className="contact-info">
          {(contactInfo.items || []).map((item, index) => (
            <div key={index} className="contact-item">
              <div className="contact-icon">{item.icon || '📌'}</div>
              <div className="contact-details">
                <h3>{item.title || '[title]'}</h3>
                {item.link ? (
                  <a href={item.link || '#'} target="_blank" rel="noopener noreferrer">
                    {item.content || '[content]'}
                  </a>
                ) : (
                  <p>{item.content || '[content]'}</p>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="contact-form-container">
          <h2>{contactInfo.formTitle || t('contact.sendMessage')}</h2>
          {submitStatus === 'success' && (
            <div className="form-message form-message-success">
              {language === 'vn' ? '✅ Tin nhắn đã được gửi thành công!' : '✅ Message sent successfully!'}
            </div>
          )}
          {submitStatus === 'error' && (
            <div className="form-message form-message-error">
              {language === 'vn' ? '❌ Có lỗi xảy ra. Vui lòng thử lại sau.' : '❌ An error occurred. Please try again later.'}
            </div>
          )}
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">{t('contact.yourName')}</label>
              <input type="text" id="name" name="name" placeholder={t('contact.enterName')} required />
            </div>

            <div className="form-group">
              <label htmlFor="email">{t('contact.email')}</label>
              <input type="email" id="email" name="email" placeholder={t('contact.enterEmail')} required />
            </div>

            <div className="form-group">
              <label htmlFor="subject">{t('contact.subject')}</label>
              <input type="text" id="subject" name="subject" placeholder={t('contact.enterSubject')} required />
            </div>

            <div className="form-group">
              <label htmlFor="message">{t('contact.message')}</label>
              <textarea 
                id="message" 
                name="message" 
                rows="6" 
                placeholder={t('contact.enterMessage')}
                required
              ></textarea>
            </div>

            <button type="submit" className="submit-button" disabled={isSubmitting}>
              {isSubmitting 
                ? (language === 'vn' ? 'Đang gửi...' : 'Sending...') 
                : t('contact.send')}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact

