import React from 'react';
import styled, { keyframes, createGlobalStyle } from 'styled-components';
import Home from './components';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Skills from './components/Skills';
import Education from './components/Education';
import Certifications from './components/Certifications';
import { theme } from './theme';

const gradientFlow = keyframes`
  0% { background-position: 0% 50%; }
  100% { background-position: 100% 50%; }
`;

const gradientShift = keyframes`
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.1); }
`;

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }
  
  html, body {
    background: ${theme.colors.background};
    color: ${theme.colors.text.primary};
    min-height: 100vh;
    overflow-x: hidden;
    position: relative;
    width: 100%;
    max-width: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
    will-change: scroll-position;
    overflow-anchor: none;
    scroll-behavior: smooth;
  }
  
  body::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at 50% 0%, rgba(100, 70, 255, 0.15) 0%, transparent 60%);
    pointer-events: none;
    z-index: -1;
  }

  #root {
    min-height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
  }
`;

const Header = styled.header`
  padding: 20px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(13, 17, 23, 0.85);
  position: sticky;
  top: 0;
  z-index: 100;
  backdrop-filter: blur(15px);
  border-bottom: 1px solid ${theme.colors.glass.border};
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.15);
  border-radius: 0 0 15px 15px;
  margin: 0 15px;
  width: calc(100% - 30px);
  left: 0;
  right: 0;
  transition: all 0.4s ease;
  contain: layout style;

  &:hover {
    background-color: rgba(13, 17, 23, 0.95);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
  }
`;

const Logo = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  background: ${theme.colors.gradient.primary};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  letter-spacing: 1px;
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
`;

const NavList = styled.ul`
  display: flex;
  list-style: none;
  gap: 10px;
  margin: 0;
  padding: 0;
`;

const NavItem = styled.li`
  margin: 0 10px;
  position: relative;

  a {
    color: ${theme.colors.text.primary};
    text-decoration: none;
    font-weight: 500;
    position: relative;
    padding: 8px 12px;
    transition: all 0.3s;
    font-size: 1.05rem;
    letter-spacing: 0.5px;
    border-radius: 8px;
    display: inline-block;

    &:hover {
      color: ${theme.colors.primary};
      background-color: ${theme.colors.glass.hover};
      transform: translateY(-2px);
    }

    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 50%;
      width: 0;
      height: 2px;
      background: ${theme.colors.gradient.primary};
      transition: all 0.3s;
      transform: translateX(-50%);
      opacity: 0;
      border-radius: 10px;
    }

    &:hover::after {
      width: 70%;
      opacity: 1;
    }
  }

  &.active a {
    color: ${theme.colors.secondary};
    font-weight: 600;

    &::after {
      width: 70%;
      opacity: 1;
    }
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  width: 100%;
  overflow-x: hidden;
  flex: 1;
`;

const Footer = styled.footer`
  padding: 30px 0;
  text-align: center;
  background: rgba(0, 0, 0, 0.2);
  margin-top: auto;
`;

const SocialLinks = styled.div`
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  gap: 20px;

  a {
    color: ${theme.colors.text.primary};
    text-decoration: none;
    font-size: 1.2rem;
    transition: all 0.3s;

    &:hover {
      color: ${theme.colors.primary};
      transform: translateY(-3px);
    }
  }
`;

function App() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <GlobalStyle />
      <Header>
        <Logo>My Portfolio</Logo>
        <Nav>
          <NavList>
            <NavItem>
              <a href="#home">Home</a>
            </NavItem>
            <NavItem>
              <a href="#about">About</a>
            </NavItem>
            <NavItem>
              <a href="#skills">Skills</a>
            </NavItem>
            <NavItem>
              <a href="#projects">Projects</a>
            </NavItem>
            <NavItem>
              <a href="#education">Education</a>
            </NavItem>
            <NavItem>
              <a href="#certifications">Certificates</a>
            </NavItem>
            <NavItem>
              <a href="#contact">Contact</a>
            </NavItem>
          </NavList>
        </Nav>
      </Header>

      <Container>
        <section id="home">
          <Home />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="education">
          <Education />
        </section>
        <section id="certifications">
          <Certifications />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </Container>

      <Footer>
        <Container>
          <SocialLinks>
            <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a href="https://twitter.com/your-handle" target="_blank" rel="noopener noreferrer">
              Twitter
            </a>
            <a href="https://www.instagram.com/your-handle" target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
          </SocialLinks>
          <p style={{ color: theme.colors.text.secondary }}>&copy; 2025 My Portfolio. All Rights Reserved.</p>
        </Container>
      </Footer>
    </>
  );
}

export default App;