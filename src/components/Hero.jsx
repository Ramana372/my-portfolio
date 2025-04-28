import React from 'react';
import styled, { keyframes } from 'styled-components';

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

const HeroContainer = styled.section`
  height: calc(100vh - 80px);
  display: flex;
  align-items: center;
  position: relative;
  padding: 0 20px;
  overflow: hidden;
`;

const HeroContent = styled.div`
  max-width: 800px;
  z-index: 1;
  position: relative;
  contain: layout style;
`;

// const HeroTitle = styled.h1`
//   font-size: 4rem;
//   margin-bottom: 20px;
//   font-weight: 800;
//   animation: ${fadeIn} 1s ease-in;
//   background: linear-gradient(90deg, #ffffff, #b3b3b3);
//   -webkit-background-clip: text;
//   -webkit-text-fill-color: transparent;
//   line-height: 1.2;
// `;

const HeroTitle = styled.h1`
  font-size: 4rem;
  margin-bottom: 20px;
  font-weight: 800;
  animation: ${fadeIn} 1s ease-in;
  background: linear-gradient(90deg, #ffffff, #b3b3b3);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  line-height: 1.2;
+ white-space: nowrap;
`;

const HeroDescription = styled.p`
  font-size: 1.2rem;
  margin-bottom: 30px;
  line-height: 1.6;
  animation: ${fadeIn} 1.5s ease-in;
  color: #adbac7;
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
  background: rgba(255, 255, 255, 0.02);
  backdrop-filter: blur(5px);
  border-radius: 16px;
  animation: ${float} 15s infinite ease-in-out;
  box-shadow: 0 0 30px rgba(123, 97, 255, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.1);

  &:nth-child(1) {
    top: 20%;
    right: 15%;
    background: linear-gradient(135deg, rgba(238, 174, 202, 0.1), rgba(148, 187, 233, 0.1));
    animation-duration: 18s;
    transform: rotate(15deg);
  }

  &:nth-child(2) {
    top: 60%;
    right: 25%;
    background: linear-gradient(135deg, rgba(255, 222, 173, 0.1), rgba(252, 123, 123, 0.1));
    animation-duration: 12s;
    animation-delay: 2s;
    transform: rotate(-10deg);
  }

  &:nth-child(3) {
    top: 30%;
    right: 40%;
    background: linear-gradient(135deg, rgba(173, 216, 230, 0.1), rgba(144, 238, 144, 0.1));
    animation-duration: 20s;
    transform: rotate(5deg);
  }
`;

const Hero = () => {
  return (
    <HeroContainer>
      <HeroContent>
        <HeroTitle>I'm Venkata Ramana Sadhanala</HeroTitle>
        <HeroDescription>
          I'm a passionate web developer creating beautiful and functional web experiences.
        </HeroDescription>
      </HeroContent>
      <HeroObjects>
        <FloatingObject />
        <FloatingObject />
        <FloatingObject />
      </HeroObjects>
    </HeroContainer>
  );
};

export default Hero; 
