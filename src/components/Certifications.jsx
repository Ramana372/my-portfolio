import React from 'react';
import styled from 'styled-components';
import { theme } from '../theme';

const CertificationsSection = styled.section`
  padding: 100px 0;
  position: relative;
  z-index: 1;
`;

const SectionHeading = styled.h2`
  color: ${theme.colors.text.primary};
  font-size: 2.5rem;
  margin-bottom: 50px;
  position: relative;
  padding-bottom: 15px;
  text-align: center;

  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 3px;
    background: ${theme.colors.gradient.primary};
  }
`;

const CertificatesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  padding: 20px;
`;

const CertificateItem = styled.div`
  background: ${theme.colors.glass.background};
  border-radius: 12px;
  overflow: hidden;
  transition: all 0.3s ease;
  position: relative;
  height: 240px;
  border: 1px solid ${theme.colors.glass.border};
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
    border-color: ${theme.colors.glass.hover};
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: all 0.3s ease;
    opacity: 0.8;
    object-position: center;
    filter: brightness(0.7);
  }

  &:hover img {
    filter: brightness(0.5);
  }
`;

const CertificateOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: ${theme.colors.gradient.overlay};
  padding: 30px 20px 20px;
  color: ${theme.colors.text.primary};
  transform: translateY(60%);
  transition: all 0.3s ease;
  height: auto;
  max-height: 100%;

  ${CertificateItem}:hover & {
    transform: translateY(0);
  }

  h3 {
    font-size: 1.2rem;
    margin-bottom: 8px;
    color: ${theme.colors.text.primary};
  }

  p {
    font-size: 0.9rem;
    margin-bottom: 8px;
    line-height: 1.4;
    color: ${theme.colors.text.secondary};

    &:first-of-type {
      color: ${theme.colors.primary};
      font-weight: 500;
    }

    &:last-of-type {
      color: ${theme.colors.text.primary};
      margin-top: 10px;
    }
  }
`;

const Certifications = () => {
  const certificatesData = [
    {
      title: 'Data Structures and Algorithms',
      issuer: 'Board Infinity',
      description: 'Implemented core data structures (arrays, linked lists, trees, graphs) and algorithms. Solved complex programming problems focusing on optimization and efficiency.',
      image: 'images/BI-20240710-9337472(DSA).jpg'
    },
     {
      title: 'Cloud Computing',
      issuer: 'NPTEL',
      description: 'Learned cloud architecture, deployment models, and services. Gained hands-on experience with cloud platforms, virtualization, and containerization technologies.',
      image: 'images/Cloud Computing venkat.jpg'
    },
    {
      title: 'The Services Selection Board: A Dream Within your Reach',
      issuer: 'LPU',
      description: 'This course provides a comprehensive overview of the Services Selection Board (SSB) process, including its history, structure, and key components.',
      image: 'images/ssb(certificate).jpg'
    }
  ];

  return (
    <CertificationsSection id="certifications">
      <SectionHeading>Certifications / Courses</SectionHeading>
      <CertificatesGrid>
        {certificatesData.map((cert, index) => (
          <CertificateItem key={index}>
            <img src={cert.image} alt={cert.title} />
            <CertificateOverlay>
              <h3>{cert.title}</h3>
              <p>{cert.issuer}</p>
              <p>{cert.description}</p>
            </CertificateOverlay>
          </CertificateItem>
        ))}
      </CertificatesGrid>
    </CertificationsSection>
  );
};

export default Certifications; 