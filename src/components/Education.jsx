import React from 'react';
import styled from 'styled-components';

const EducationSection = styled.section`
  padding: 100px 0;
  position: relative;
  z-index: 1;
`;

const SectionHeading = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 50px;
  background: #ffff;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: center;
  position: relative;
  padding-bottom: 15px;

  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 3px;
    background: linear-gradient(90deg, #7ee8fa, #80ff72);
  }
`;

const EducationGrid = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  padding: 20px;
`;

const EducationItem = styled.div`
  background: rgba(233, 69, 96, 0.05);
  border-radius: 16px;
  padding: 30px;
  border: 1px solid rgba(233, 69, 96, 0.1);
  box-shadow: 0 10px 30px rgba(233, 69, 96, 0.1);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 35px rgba(233, 69, 96, 0.2);
    border-color: rgba(233, 69, 96, 0.2);
    background: rgba(233, 69, 96, 0.08);
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 5px;
    background: #e94560;
    border-radius: 16px 16px 0 0;
  }

  h3 {
    font-size: 1.4rem;
    margin-bottom: 15px;
    font-weight: 700;
    background: linear-gradient(90deg, #e94560, #ff6b6b);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    position: relative;
    display: inline-block;

    &::after {
      content: '';
      position: absolute;
      bottom: -5px;
      left: 0;
      width: 100%;
      height: 2px;
      background: linear-gradient(90deg, #7ee8fa, #80ff72);
      transform: scaleX(0);
      transform-origin: left;
      transition: transform 0.3s ease;
    }

    &:hover::after {
      transform: scaleX(1);
    }
  }

  p {
    color: #b8b8b8;
    margin-bottom: 8px;
    font-size: 1rem;
    line-height: 1.6;

    strong {
      color: white;
      font-weight: 600;
      margin-right: 5px;
    }
  }
`;

const Education = () => {
  const educationData = [
    {
      institution: 'Lovely Professional University',
      degree: 'Bachelor of Technology in Computer Science and Engineering',
      duration: 'since August 2022',
      location: 'Phagwara, Punjab',
      score: 'CGPA: 7.41',
      gradient: 'linear-gradient(90deg, #e94560, #ff6b6b)'
    },
    {
      institution: 'Sasi junior college',
      degree: 'Intermediate',
      duration: '2020 – 2022',
      location: 'Kamavarapu Kota, Andhra Pradesh',
      score: 'Percentage: 96.3%',
    },
    {
      institution: 'Sasi EM High School',
      degree: '10th',
      duration: '2019 – 2020',
      location: 'Kamavarapu Kota, Andhra Pradesh',
      score: 'Marks: 100%',
    }
  ];

  return (
    <EducationSection id="education">
      <SectionHeading>Education</SectionHeading>
      <EducationGrid>
        {educationData.map((edu, index) => (
          <EducationItem key={index}>
            <h3 style={{ background: edu.gradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              {edu.institution}
            </h3>
            <p><strong>Degree:</strong> {edu.degree}</p>
            <p><strong>Duration:</strong> {edu.duration}</p>
            <p><strong>Location:</strong> {edu.location}</p>
            <p><strong>{edu.score.includes('CGPA') ? 'CGPA' : edu.score.includes('Percentage') ? 'Percentage' : 'Marks'}:</strong> {edu.score.split(': ')[1]}</p>
          </EducationItem>
        ))}
      </EducationGrid>
    </EducationSection>
  );
};

export default Education; 