import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Confirmation.css';

const Confirmation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { formData } = location.state || {};

  // Use effect to handle page refresh
  useEffect(() => {
    // Clear local storage on refresh and navigate back to contact page
    const handleBeforeUnload = () => {
      localStorage.removeItem('contactFormData');
      navigate('/contact');
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [navigate]);

  // Redirect if formData is undefined
  useEffect(() => {
    if (!formData) {
      navigate('/contact'); // Navigate back if no form data is available
    }
  }, [formData, navigate]);

  const handleConfirm = async () => {
    try {
      const response = await fetch('https://contact-render.onrender.com/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        localStorage.removeItem('contactFormData'); // Clear the local storage on successful submission
        navigate('/thankyou'); // Navigate to thank you page
      } else {
        alert('Failed to send message.');
      }
    } catch (error) {
      alert('An error occurred.');
    }
  };

  const handleEdit = () => {
    navigate('/contact', { state: { formData } }); // Pass form data back to Contact component
  };

  // Return null or a loading state if formData is not available
  if (!formData) {
    return null; // Or you could return a loading spinner or a message
  }

  return (
    <div className="confirmation-container">
      <h2>入力内容の確認</h2>
      <h3>以下の内容で送信してよろしいですか？</h3>
      <div className="confirmation-details">
        <div class="form-group">
          <label for="name">お名前</label>
          <p>{formData.name}</p>
        </div>


        <div class="form-group">
          <label for="name">ふりがな</label>
          <p>{formData.furigana}</p>
        </div>
        <div class="form-group">
          <label for="name">電話番号</label>
          <p>{formData.phone}</p>
        </div>
        <div class="form-group">
          <label for="name">メールアドレス</label>
          <p>{formData.email}</p>
        </div>
        <div class="form-group">
          <label for="name">お問い合わせ内容</label>
          <p>{formData.message}</p>
        </div>

      </div>
      <button onClick={handleEdit}>修正</button>
      <button onClick={handleConfirm}>送信</button>
    </div>
  );
};

export default Confirmation;
