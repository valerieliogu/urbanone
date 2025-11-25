import React, { useState } from 'react';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [messages, setMessages] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name.trim() && formData.message.trim()) {
      const newMessage = {
        id: Date.now(),
        name: formData.name,
        message: formData.message
      };
      setMessages([newMessage, ...messages]);
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } else {
      alert('Harap isi Nama Lengkap dan Pesan');
    }
  };

  const handleDeleteMessage = (id) => {
    setMessages(messages.filter(msg => msg.id !== id));
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <div className="contact-header">
          <h1>CONTACT US</h1>
          <p>We'll reach you out soon.</p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <div className="info-item">
              <h3>ADDRESS</h3>
              <p>Urban One Headquarter<br/>Manado, Indonesia</p>
            </div>
            <div className="info-item">
              <h3>TELEPHONE</h3>
              <p>+62 812 3112 1839</p>
            </div>
            <div className="info-item">
              <h3>EMAIL</h3>
              <p>formunspoken@urbone.com</p>
            </div>
            <div className="info-item">
              <h3>OPENS</h3>
              <p>Monday - Friday: 09:00 - 18:00<br/>Sunday: 10:00 - 16:00<br/>Close at Saturday</p>
            </div>
          </div>

          <div className="contact-wrapper">
            <form className="contact-form" onSubmit={handleSubmit}>
              <h2>GET IN TOUCH</h2>
              
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
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
                  placeholder="Enter your email"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Enter your message"
                  rows="5"
                ></textarea>
              </div>

              <button type="submit" className="submit-btn">SEND</button>
            </form>

            <div className="messages-display">
              <h2>MESSAGE DELIVERED ({messages.length})</h2>
              {messages.length === 0 ? (
                <p className="no-messages">No message yet</p>
              ) : (
                <div className="messages-list">
                  {messages.map((msg) => (
                    <div key={msg.id} className="message-card">
                      <div className="message-header">
                        <h3 className="message-name">{msg.name}</h3>
                        <button 
                          className="delete-btn"
                          onClick={() => handleDeleteMessage(msg.id)}
                          title="Delete message"
                        >
                          ✕
                        </button>
                      </div>
                      <p className="message-text">{msg.message}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;