import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    furigana: '',
    phone: '',
    email: '',
    message: '',
  });

  const navigate = useNavigate();

  // Load data only when editing (navigating back) and clear on refresh
  useEffect(() => {
    // Clear local storage on initial load
    const savedData = localStorage.getItem('contactFormData');
    if (savedData) {
      setFormData(JSON.parse(savedData));
    } else {
      // If there's no saved data, set fields to blank
      setFormData({ name: '', furigana: '', phone: '', email: '', message: '' });
    }

    const handleBeforeUnload = () => {
      localStorage.removeItem('contactFormData'); // Clear data on refresh
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const updatedFormData = {
      ...formData,
      [name]: value,
    };
    setFormData(updatedFormData);
    // Save data to local storage
    localStorage.setItem('contactFormData', JSON.stringify(updatedFormData));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/confirm', { state: { formData } });
  };

  return (
    <section className='container'>
      <form onSubmit={handleSubmit} className="contact-form">
        <h2>CONTACT</h2>
        <h3>お問い合わせ</h3>
        <div className="form-group">
          <label htmlFor="name">お名前<span className="required-tag">必須</span></label>
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
          <label htmlFor="furigana">お名前フリガナ<span className="required-tag">必須</span></label>
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
          <label htmlFor="phone">電話番号<span className="required-tag">必須</span></label>
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
          <label htmlFor="email">メールアドレス<span className="required-tag">必須</span></label>
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
          <label htmlFor="message">お問い合わせ内容<span className="required-tag">必須</span></label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="お問い合わせ内容"
            required
          />
        </div>


        <button type="submit">次へ</button>
      </form>
    </section>

  );
};

export default Contact;
