import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    furigana: '',
    phone: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://contact-render.onrender.com/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('Message sent successfully!');
        setFormData({ name: '', furigana: '', phone: '', email: '', message: '' });
      } else {
        setStatus('Failed to send message.');
      }
    } catch (error) {
      setStatus('An error occurred.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <h2>CONTACT</h2>
      <h3>お問い合わせ</h3>
      <div className="form-group">
        <label htmlFor="name">お名前</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="お名前"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="furigana">お名前フリガナ</label>
        <input
          type="text"
          name="furigana"
          value={formData.furigana}
          onChange={handleChange}
          placeholder="お名前フリガナ"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="phone">電話番号</label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="電話番号"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">メールアドレス</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="メールアドレス"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="message">お問い合わせ内容</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="お問い合わせ内容"
          required
        />
      </div>
      <button type="submit">Send Message</button>
      {status && <p>{status}</p>}
    </form>
  );
};

export default Contact;
