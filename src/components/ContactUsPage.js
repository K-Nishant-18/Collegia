import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiSend, FiCheckCircle } from 'react-icons/fi';

// Animations
const gradientFlow = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
`;

const pulse = keyframes`
  0% { box-shadow: 0 0 0 0 rgba(165, 180, 252, 0.7); }
  70% { box-shadow: 0 0 0 15px rgba(165, 180, 252, 0); }
  100% { box-shadow: 0 0 0 0 rgba(165, 180, 252, 0); }
`;

// Styled Components
const ContactUsContainer = styled.div`
  padding: 0;
  background: linear-gradient(-45deg, #0f0c29, #302b63, #24243e);
  background-size: 400% 400%;
  animation: ${gradientFlow} 15s ease infinite;
  min-height: 100vh;
  color: #f0f0f0;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  position: relative;
  overflow: hidden;
  
`;

const ParticleBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  pointer-events: none;
`;

const Particle = styled.div`
  position: absolute;
  border-radius: 50%;
  background: rgba(165, 180, 252, 0.15);
  animation: ${float} 15s infinite linear;

  &:nth-child(1) {
    width: 20px;
    height: 20px;
    top: 20%;
    left: 10%;
    animation-duration: 20s;
  }
  &:nth-child(2) {
    width: 30px;
    height: 30px;
    top: 60%;
    left: 25%;
    animation-duration: 25s;
  }
  &:nth-child(3) {
    width: 15px;
    height: 15px;
    top: 40%;
    left: 70%;
    animation-duration: 15s;
  }
  &:nth-child(4) {
    width: 25px;
    height: 25px;
    top: 80%;
    left: 80%;
    animation-duration: 30s;
  }
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 2;
  max-width: 1400px;
  margin: 0 auto;
  padding: 40px 20px;
`;

const Banner = styled(motion.div)`
  height: 500px;
  width: 100%;
  background-image: url('https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg');
  background-size: cover;
  background-position: center;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-radius: 0 0 20px 20px;
  margin-bottom: 80px;
  overflow: hidden;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, rgba(29, 30, 44, 0.9), rgba(13, 14, 18, 0.7));
    z-index: 1;
  }

  @media (max-width: 768px) {
    height: 400px;
    margin-bottom: 60px;
  }
`;

const BannerContent = styled(motion.div)`
  position: relative;
  z-index: 2;
  max-width: 800px;
  padding: 0 20px;
`;

const MainHeading = styled.h1`
  font-size: 4.5rem;
  font-weight: 800;
  margin: 0;
  background: linear-gradient(90deg, #ffffff, #e0e0e0);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  line-height: 1.2;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

const SectionHeading = styled.h2`
  font-size: 2.8rem;
  font-weight: 700;
  margin: 0 auto 30px; /* Changed to center the heading */
  background: linear-gradient(90deg, rgb(246, 159, 20), #6366f1);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  position: relative;
  display: block; /* Changed from inline-block to block */
  padding-bottom: 10px;
  text-align: center; /* Added to center the text */
  width: fit-content; /* Ensures underline doesn't span full width */

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background: linear-gradient(90deg, #6366f1, #a5b4fc);
    border-radius: 2px;
  }

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

const SubHeading = styled.p`
  color: rgba(255, 255, 255, 0.9);
  font-size: 1.3rem;
  line-height: 1.7;
  max-width: 700px;
  margin: 0 auto 60px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin-bottom: 40px;
  }
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  margin-bottom: 80px;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;

const FormContainer = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(16px);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
  padding: 40px;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.3);
  }

  @media (max-width: 768px) {
    padding: 30px 20px;
  }
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

const InputGroup = styled.div`
  position: relative;
`;

const Input = styled.input`
  width: 100%;
  padding: 18px 20px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  font-size: 1rem;
  background: rgba(255, 255, 255, 0.1);
  color: #fff;
  transition: all 0.3s ease;

  &:focus {
    border-color: #a5b4fc;
    outline: none;
    background: rgba(255, 255, 255, 0.15);
    box-shadow: 0 0 0 3px rgba(165, 180, 252, 0.2);
  }

  &::placeholder {
    color: rgba(255, 255, 255, 0.6);
  }
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 18px 20px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  font-size: 1rem;
  height: 200px;
  resize: none;
  background: rgba(255, 255, 255, 0.1);
  color: #fff;
  transition: all 0.3s ease;

  &:focus {
    border-color: #a5b4fc;
    outline: none;
    background: rgba(255, 255, 255, 0.15);
    box-shadow: 0 0 0 3px rgba(165, 180, 252, 0.2);
  }

  &::placeholder {
    color: rgba(255, 255, 255, 0.6);
  }
`;

const SubmitButton = styled(motion.button)`
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
  color: white;
  border: none;
  padding: 18px;
  border-radius: 12px;
  font-size: 1.125rem;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  box-shadow: 0 4px 15px rgba(99, 102, 241, 0.3);
  transition: all 0.3s ease;
  margin-top: 10px;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: 0.5s;
  }

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 20px rgba(99, 102, 241, 0.4);

    &::before {
      left: 100%;
    }
  }

  &:active {
    transform: translateY(0);
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const InfoCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  padding: 30px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
  display: flex;
  align-items: flex-start;
  gap: 20px;

  &:hover {
    transform: translateY(-5px);
    background: rgba(99, 102, 241, 0.1);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }
`;

const InfoIcon = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: rgba(165, 180, 252, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  color: #a5b4fc;
  font-size: 1.5rem;
  border: 1px solid rgba(165, 180, 252, 0.2);
`;

const InfoContent = styled.div`
  h3 {
    font-size: 1.5rem;
    margin: 0 0 10px;
    color: #fff;
  }

  p {
    color: rgba(255, 255, 255, 0.8);
    margin: 0;
    line-height: 1.6;
  }

  a {
    color: #a5b4fc;
    text-decoration: none;
    transition: all 0.3s ease;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const SuccessMessage = styled(motion.div)`
  background: rgba(40, 167, 69, 0.2);
  border: 1px solid rgba(40, 167, 69, 0.3);
  border-radius: 12px;
  padding: 20px;
  display: flex;
  align-items: center;
  gap: 15px;
  margin-top: 20px;

  svg {
    color: #28a745;
    font-size: 1.5rem;
    flex-shrink: 0;
  }

  p {
    color: rgba(255, 255, 255, 0.9);
    margin: 0;
  }
`;

const MapContainer = styled.div`
  width: 100%;
  height: 400px;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  margin-top: 80px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  position: relative;

  iframe {
    width: 100%;
    height: 100%;
    border: none;
    filter: grayscale(30%) contrast(110%) brightness(0.8);
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(165, 180, 252, 0.05));
    pointer-events: none;
  }
`;

const ContactUsPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({
        name: '',
        email: '',
        message: '',
      });
      
      // Hide success message after 5 seconds
      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    }, 1500);
  };

  return (
    <ContactUsContainer>
      <ParticleBackground>
        <Particle />
        <Particle />
        <Particle />
        <Particle />
      </ParticleBackground>

      <Banner
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <BannerContent
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <MainHeading>Let's Connect</MainHeading>
          <SubHeading>We're here to help and answer any questions you might have</SubHeading>
        </BannerContent>
      </Banner>

      <ContentWrapper>
        <SectionHeading>Contact Us</SectionHeading>
        <SubHeading>
          Have questions or want to collaborate? Fill out the form below or reach out directly using our contact information.
        </SubHeading>

        <ContactGrid>
          <FormContainer
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <ContactForm onSubmit={handleSubmit}>
              <InputGroup>
                <Input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </InputGroup>

              <InputGroup>
                <Input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </InputGroup>

              <InputGroup>
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </InputGroup>

              <SubmitButton
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? (
                  <>Sending...</>
                ) : (
                  <>
                    <FiSend /> Send Message
                  </>
                )}
              </SubmitButton>

              {isSuccess && (
                <SuccessMessage
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <FiCheckCircle />
                  <p>Thank you! Your message has been sent successfully.</p>
                </SuccessMessage>
              )}
            </ContactForm>
          </FormContainer>

          <ContactInfo>
            <InfoCard
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              whileHover={{ scale: 1.02 }}
            >
              <InfoIcon>
                <FiMail />
              </InfoIcon>
              <InfoContent>
                <h3>Email Us</h3>
                <p>
                  <a href="mailto:me.knishant.com">me.knishant.com</a>
                </p>
                <p>
                  <a href="mailto:itsnishu445@gmail.com">itsnishu445@gmail.com</a>
                </p>
              </InfoContent>
            </InfoCard>

            <InfoCard
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              whileHover={{ scale: 1.02 }}
            >
              <InfoIcon>
                <FiPhone />
              </InfoIcon>
              <InfoContent>
                <h3>Call Us</h3>
                <p>
                  <a href="tel:+91 8986412823">+91 8986412823</a>
                </p>
                <p>Mon-Fri: 9am-5pm IST</p>
              </InfoContent>
            </InfoCard>

            <InfoCard
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              whileHover={{ scale: 1.02 }}
            >
              <InfoIcon>
                <FiMapPin />
              </InfoIcon>
              <InfoContent>
                <h3>Visit Us</h3>
                <p>JIS College of Engineering</p>
                <p>Block A5, Kalyani, West Bengal 741235</p>
              </InfoContent>
            </InfoCard>
          </ContactInfo>
        </ContactGrid>

        <MapContainer>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3662.041946328241!2d88.43477431544146!3d23.392911884753675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f8a9a9f6c7e4d5%3A0x9d8c8c8c8c8c8c8c!2sBlock%20A5%2C%20Block%20A%2C%20Kalyani%2C%20West%20Bengal%20741235!5e0!3m2!1sen!2sin!4v1623251234567!5m2!1sen!2sin"
          allowFullScreen=""
          loading="lazy"
          title="Kalyani Campus Location"
        ></iframe>
      </MapContainer>
      </ContentWrapper>
    </ContactUsContainer>
  );
};

export default ContactUsPage;
