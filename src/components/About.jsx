import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 80px 20px;
  background: transparent;
`;

const AboutContent = styled.div`
  max-width: 1200px;
  width: 100%;
  display: flex;
  gap: 50px;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const AboutText = styled.div`
  flex: 1;
  color: #fff;
h2 {
  position: relative;
  font-size: 2.5rem;
  margin-bottom: 20px;
  color: rgba(233, 69, 96, 0.6);
  transition: color 0.3s ease;

  &:after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 18%;
    transform: translateX(-50%);
    width: 60px;
    height: 3px;
    background: linear-gradient(90deg, #7ee8fa, #80ff72);
    transition: width 0.3s ease, opacity 0.3s ease;
    opacity: 0.7;
  }

  &:hover {
    color: rgba(233, 69, 96, 0.9);

    &:after {
      width: 150px;
      opacity: 1;
    }
  }
}



  p {
    font-size: 1.1rem;
    line-height: 1.8;
    color: rgba(184, 184, 184, 0.9);
    margin-bottom: 20px;
  }
`;

const ImageContainer = styled.div`
  flex: 1;
  position: relative;
  padding: 20px;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border: 2px solid rgba(233, 69, 96, 0.05);
    border-radius: 20px;
    transform: rotate(-3deg);
    z-index: 1;
  }
`;

const ProfileImage = styled.img`
  width: 100%;
  max-width: 400px;
  height: auto;
  border-radius: 15px;
  position: relative;
  z-index: 2;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const About = () => {
  return (
    <AboutContainer id="about">
      <AboutContent>
        <AboutText>
          <h2>About Me</h2>
          <p>
            I am a passionate Computer Science Engineering student with a strong foundation in web development
            and software engineering. My journey in technology has equipped me with skills in both front-end
            and back-end development, allowing me to create comprehensive and user-friendly applications.
          </p>
          <p>
            With expertise in modern frameworks like React and Node.js, I focus on building scalable and
            efficient solutions. My experience in data structures and algorithms has strengthened my
            problem-solving abilities, enabling me to tackle complex technical challenges.
          </p>
          <p>
            I am constantly learning and adapting to new technologies, always seeking to enhance my skills
            and contribute to innovative projects. My goal is to create impactful solutions that make a
            difference in people's lives.
          </p>
        </AboutText>
        <ImageContainer>
          <ProfileImage 
            src="/assets/profile.jpg" 
            alt="Venkata Ramana Sadhanala"
          />
        </ImageContainer>
      </AboutContent>
    </AboutContainer>
  );
};

export default About; 