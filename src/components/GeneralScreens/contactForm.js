import React from 'react';
import '../../Css/contact.css';
import configData from '../../config.json'

const ContactForm = ({ title }) => {
  return (
      <div className="form-container">
        <h2 className="form-title">{title}</h2>
        <form className="form">
          <div className="form-field">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-field">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-field">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="5" required />
          </div>
          <button type="submit" className="submit-button" style={{background: configData.AppColor}}>Send</button>
        </form>
      </div>
  );
};

export default ContactForm;
