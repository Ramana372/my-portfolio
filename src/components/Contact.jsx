import React, { useState } from 'react';
import styled from 'styled-components';

const ContactSection = styled.section`
  padding: 80px 0;
`;

const SectionTitle = styled.h1`
  position: relative; /* <-- Add this line */
  font-size: 2.5rem;
  margin-bottom: 40px;
  background:#ffff;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: center;

  &:after {
    content: '';
    position: absolute;
    bottom: -10px; /* Adjusted so it appears below the text */
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 3px;
    background: linear-gradient(90deg, #7ee8fa, #80ff72);
  }
`;


const ContactContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ContactInfo = styled.div`
  h2 {
    font-size: 1.8rem;
    margin-bottom: 30px;
    color: #ff6b6b;
  }
`;

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  color: #b8b8b8;

  i {
    font-size: 1.2rem;
    margin-right: 15px;
    color: #e94560;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 30px;
`;

const SocialLink = styled.a`
  color: #e94560;
  font-size: 1.5rem;
  transition: all 0.3s ease;

  &:hover {
    color: #ff6b6b;
    transform: translateY(-3px);
  }
`;

const ContactForm = styled.form`
  background: rgba(233, 69, 96, 0.05);
  border: 1px solid rgba(233, 69, 96, 0.1);
  border-radius: 16px;
  padding: 30px;

  h2 {
    font-size: 1.8rem;
    margin-bottom: 30px;
    color: #ff6b6b;
  }
`;

const FormGroup = styled.div`
  margin-bottom: 20px;

  label {
    display: block;
    margin-bottom: 8px;
    color: #b8b8b8;
  }

  input, textarea {
    width: 100%;
    padding: 12px;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(233, 69, 96, 0.2);
    border-radius: 8px;
    color: white;
    font-size: 1rem;
    transition: all 0.3s ease;

    &:focus {
      outline: none;
      border-color: #e94560;
      box-shadow: 0 0 0 2px rgba(233, 69, 96, 0.1);
    }
  }

  textarea {
    resize: vertical;
    min-height: 120px;
  }
`;

const SubmitButton = styled.button`
  background: linear-gradient(90deg, #e94560, #ff6b6b);
  color: white;
  border: none;
  padding: 12px 30px;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(233, 69, 96, 0.2);
  }
`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <ContactSection>
      <SectionTitle>Get in Touch</SectionTitle>
      
      <ContactContent>
        <ContactInfo>
          <h2>Contact Information</h2>
          <InfoItem>
            <i className="fas fa-envelope"></i>
            <p>sadhanalavenkat372@example.com</p>
          </InfoItem>
          <InfoItem>
            <i className="fas fa-phone"></i>
            <p>9347091279</p>
          </InfoItem>
          <InfoItem>
            <i className="fas fa-map-marker-alt"></i>
            <p>Kamavarapu Kota, Andhra Pradesh</p>
          </InfoItem>
          
          <SocialLinks>
            <SocialLink href="https://github.com/Ramana372" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </SocialLink>
            <SocialLink href="https://www.linkedin.com/in/venkat-sadhanala/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </SocialLink>
            <SocialLink href="#" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </SocialLink>
          </SocialLinks>
        </ContactInfo>

        <ContactForm onSubmit={handleSubmit}>
          <h2>Send Me a Message</h2>
          <FormGroup>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </FormGroup>
          <FormGroup>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </FormGroup>
          <FormGroup>
            <label htmlFor="subject">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </FormGroup>
          <FormGroup>
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </FormGroup>
          <SubmitButton type="submit">Send Message</SubmitButton>
        </ContactForm>
      </ContactContent>
    </ContactSection>
  );
};

export default Contact; 