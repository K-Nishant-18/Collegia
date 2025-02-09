import React from 'react';
import styled from 'styled-components';

const AboutUsContainer = styled.div`
  padding: 60px 20px;
  background:rgb(230, 228, 228);
  text-align: center;
`;

const Banner = styled.div`
  width: 100%;
  height: 400px;
  background-image: url('https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2');
  background-size: cover;
  background-position: center;
  position: relative;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-radius: 15px;
  margin-bottom: 60px;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
    z-index: 1;
  }

  h1 {
    position: relative;
    font-size: 3rem;
    font-weight: bold;
    margin: 0;
    z-index: 2;
  }

  p {
    position: relative;
    font-size: 1.25rem;
    max-width: 800px;
    margin: 20px auto;
    z-index: 2;
  }

  @media (max-width: 768px) {
    height: 300px;

    h1 {
      font-size: 2.5rem;
    }

    p {
      font-size: 1rem;
    }
  }
`;

const Section = styled.section`
  margin-bottom: 60px;
`;

const Heading = styled.h1`
  color: #f75c7e;
  margin-bottom: 30px;
  font-size: 3rem;
  font-weight: bold;
`;

const SubHeading = styled.h2`
  color: #333;
  margin-bottom: 20px;
  font-size: 2.5rem;
  font-weight: 600;
`;

const Paragraph = styled.p`
  color: #666;
  line-height: 1.8;
  font-size: 1.125rem;
  max-width: 900px;
  margin: 0 auto;
`;

const TeamContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
`;

const TeamMember = styled.a`
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
  padding: 25px;
  text-align: center;
  width: 220px;
  text-decoration: none;
  color: inherit;
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
  }

  img {
  position: relative;
    border-radius: 50%;
    left:25px;
    width: 120px;
    height: 120px;
    object-fit: cover;
    margin-bottom: 15px;
    border: 3px solid #f75c7e;
  }

  h3 {
    color: #f75c7e;
    margin-bottom: 10px;
    font-size: 1.5rem;
  }

  p {
    color: #666;
    font-size: 1rem;
  }
`;

const AboutUsPage = () => {
  return (
    <AboutUsContainer>
      <Banner>
        <h1>About Us</h1>
        <p>
          Welcome to Collegia, where we are committed to revolutionizing the educational and professional networking landscape. Our platform is designed to connect individuals, foster knowledge exchange, and create opportunities for growth and collaboration.
        </p>
      </Banner>

      <Section>
        <Heading>Our Mission</Heading>
        <Paragraph>
          At Collegia, our mission is to empower individuals and communities through innovative solutions and seamless connectivity. We strive to support educational and career advancement, facilitating meaningful interactions and knowledge sharing.
        </Paragraph>
      </Section>

      <Section>
        <SubHeading>Meet Our Team</SubHeading>
        <TeamContainer>
          <TeamMember href="https://www.linkedin.com/in/kumar-nishant-275402279/" target="_blank" rel="noopener noreferrer">
            <img src="./images/Team-members/Nishant.jpeg" alt="Kumar Nishant" />
            <h3>Kumar Nishant</h3>
          </TeamMember>
          <TeamMember href="https://www.linkedin.com/in/udity-banerjee1211/" target="_blank" rel="noopener noreferrer">
            <img src="./images/Team-members/Udity.png" alt="Udity Banerjee" />
            <h3>Udity Banerjee</h3>
          </TeamMember>
          <TeamMember href="https://www.linkedin.com/in/tripti-sharma-714414252/" target="_blank" rel="noopener noreferrer">
            <img src="./images/Team-members/Tripti.jpg" alt="Tripti Sharma" />
            <h3>Tripti Sharma</h3>
          </TeamMember>
          <TeamMember href="https://www.linkedin.com/in/uddalok-basak-885a86286/" target="_blank" rel="noopener noreferrer">
            <img src="./images/Team-members/Messi.jpg" alt="Uddalok Basak" />
            <h3>Uddalok Basak</h3>
          </TeamMember>
          <TeamMember href="https://www.linkedin.com/in/supravat-biswas-7b538b252/" target="_blank" rel="noopener noreferrer">
            <img src="./images/Team-members/Supravat.jpeg" alt="Supravat Biswas" />
            <h3>Supravat Biswas</h3>
          </TeamMember>
        </TeamContainer>
      </Section>

      <Section>
        <SubHeading>Our Values</SubHeading>
        <Paragraph>
          Integrity, innovation, and collaboration are at the core of our values. We believe in creating a positive impact through transparent practices, creative solutions, and a commitment to teamwork. Our values drive us to continuously improve and deliver exceptional value to our users.
        </Paragraph>
      </Section>
    </AboutUsContainer>
  );
};

export default AboutUsPage;
