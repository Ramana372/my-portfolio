import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import CVPopup from './CVPopup';
import SpecializedCV from './SpecializedCV';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const float = keyframes`
  0%, 100% {
    transform: translateY(0) rotate(0deg);
  }
  50% {
    transform: translateY(-20px) rotate(5deg);
  }
`;

const glow = keyframes`
  0% {
    box-shadow: 0 0 5px rgba(233, 69, 96, 0.2);
  }
  100% {
    box-shadow: 0 0 20px rgba(233, 69, 96, 0.4);
  }
`;

const gradientFlow = keyframes`
  0% { background-position: 0% 50%; }
  100% { background-position: 100% 50%; }
`;

const HeroContainer = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 0 20px;
  overflow: hidden;
  background: transparent;
`;

const HeroContent = styled.div`
  max-width: 800px;
  width: 100%;
  z-index: 1;
  position: relative;
  contain: layout style;
  text-align: center;
  padding: 0 20px;
`;

const HeroTitle = styled.h1`
  font-size: clamp(2.5rem, 5vw, 4rem);
  margin-bottom: 20px;
  font-weight: 800;
  background: linear-gradient(90deg, #e94560, #ff6b6b, #ffa502, #e94560);
  background-size: 300% 100%;
  animation: ${gradientFlow} 8s linear infinite, ${fadeIn} 1s ease-in;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  line-height: 1.2;
  text-shadow: 0 2px 20px rgba(233, 69, 96, 0.3);
`;

const HeroDescription = styled.p`
  font-size: clamp(1rem, 2vw, 1.2rem);
  margin-bottom: 30px;
  line-height: 1.6;
  animation: ${fadeIn} 1.5s ease-in;
  color: #b8b8b8;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const HeroObjects = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  pointer-events: none;
`;

const FloatingObject = styled.div`
  position: absolute;
  width: 80px;
  height: 80px;
  background: rgba(233, 69, 96, 0.05);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(233, 69, 96, 0.1);
  box-shadow: 
    0 0 30px rgba(233, 69, 96, 0.2),
    inset 0 0 20px rgba(233, 69, 96, 0.1);
  animation: ${float} 15s infinite ease-in-out, ${glow} 3s infinite alternate;
  border-radius: 16px;

  &:nth-child(1) {
    top: 20%;
    right: 15%;
    background: linear-gradient(135deg, 
      rgba(233, 69, 96, 0.1),
      rgba(255, 107, 107, 0.1)
    );
    animation-duration: 18s, 4s;
    transform: rotate(15deg);
  }

  &:nth-child(2) {
    top: 60%;
    right: 25%;
    background: linear-gradient(135deg, 
      rgba(255, 107, 107, 0.1),
      rgba(255, 165, 2, 0.1)
    );
    animation-duration: 12s, 5s;
    animation-delay: 2s, 1s;
    transform: rotate(-10deg);
  }

  &:nth-child(3) {
    top: 30%;
    right: 40%;
    background: linear-gradient(135deg, 
      rgba(255, 165, 2, 0.1),
      rgba(233, 69, 96, 0.1)
    );
    animation-duration: 20s, 6s;
    animation-delay: 0s, 2s;
    transform: rotate(5deg);
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  margin-top: 40px;
  animation: ${fadeIn} 2s ease-in;
`;

const Button = styled.a`
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: 600;
  font-size: 1rem;
  text-decoration: none;
  transition: all 0.3s ease;
  background: rgba(233, 69, 96, 0.1);
  border: 1px solid rgba(233, 69, 96, 0.2);
  color: #e94560;
  cursor: pointer;
  position: relative;
  overflow: hidden;

  &:hover {
    transform: translateY(-3px);
    background: rgba(233, 69, 96, 0.2);
    box-shadow: 0 5px 15px rgba(233, 69, 96, 0.3);
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(233, 69, 96, 0.2),
      transparent
    );
    transition: 0.5s;
  }

  &:hover::before {
    left: 100%;
  }
`;

const Home = () => {
  const [isGeneralCVOpen, setIsGeneralCVOpen] = useState(false);
  const [isSpecializedCVOpen, setIsSpecializedCVOpen] = useState(false);

  return (
    <HeroContainer>
      <HeroContent>
        <HeroTitle>Welcome to My Portfolio</HeroTitle>
        <HeroDescription>
          I'm a passionate web developer creating beautiful and functional web experiences.
        </HeroDescription>
        <ButtonContainer>
          <Button href="#projects">My Work</Button>
          <Button onClick={() => setIsGeneralCVOpen(true)}>General CV</Button>
          <Button onClick={() => setIsSpecializedCVOpen(true)}>Specialized CV</Button>
        </ButtonContainer>
      </HeroContent>
      <HeroObjects>
        <FloatingObject />
        <FloatingObject />
        <FloatingObject />
      </HeroObjects>
      <CVPopup 
        isOpen={isGeneralCVOpen} 
        onClose={() => setIsGeneralCVOpen(false)} 
        type="general"
      />
      <SpecializedCV 
        isOpen={isSpecializedCVOpen} 
        onClose={() => setIsSpecializedCVOpen(false)} 
      />
    </HeroContainer>
  );
};

export default Home; 