import React from 'react';
import styled from 'styled-components';

const SkillsSection = styled.section`
  padding: 100px 0;
  position: relative;
  z-index: 1;
`;

const SectionHeading = styled.h2`
  color: #ffffff;
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
    background: linear-gradient(90deg, #7ee8fa, #80ff72);
  }
`;

const SkillsContainer = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 40px;
  padding: 20px;
`;

const SkillsCategory = styled.div`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 15px;
  padding: 30px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
    border-color: rgba(255, 255, 255, 0.2);
    background: rgba(255, 255, 255, 0.08);
  }

  h3 {
    font-size: 1.4rem;
    margin-bottom: 25px;
    color: white;
    padding-bottom: 15px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    position: relative;
    text-align: center;

    &:after {
      content: '';
      position: absolute;
      bottom: -1px;
      left: 50%;
      transform: translateX(-50%);
      width: 60px;
      height: 3px;
      background: linear-gradient(90deg, #7ee8fa, #80ff72);
      border-radius: 3px;
    }
  }
`;

const SkillsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
`;

const SkillItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80px;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const SkillIcon = styled.div`
  background: rgba(255, 255, 255, 0.08);
  width: 60px;
  height: 60px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
  overflow: hidden;

  ${SkillItem}:hover & {
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
    border-color: rgba(255, 255, 255, 0.3);
    transform: scale(1.05);
  }

  img {
    width: 35px;
    height: 35px;
    object-fit: contain;
    transition: all 0.3s ease;
  }

  ${SkillItem}:hover & img {
    transform: scale(1.1);
  }
`;

const SkillName = styled.span`
  font-size: 0.85rem;
  color: #adbac7;
  text-align: center;
`;

const Skills = () => {
  const skillsData = {
    programming: [
      { name: 'Java', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg' },
      { name: 'HTML', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg' },
      { name: 'CSS', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg' },
      { name: 'JavaScript', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg' },
      { name: 'PHP', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg' }
    ],
    frameworks: [
      { name: 'React.Js', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg' },
      { name: 'Node.Js', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg' },
      { name: 'Angular.Js', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/angularjs/angularjs-original.svg' },
      { name: 'Express.Js', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg' },
    ],
    tools: [
      { name: 'MySQL', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg' },
      { name: 'MongoDb', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg' },
      { name: 'Docker', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg' },
      { name: 'Jenkins', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/jenkins/jenkins-original.svg' },
      { name: 'Git', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg' }
    ]
  };

  return (
    <SkillsSection id="skills">
      <SectionHeading>Skills & Technologies</SectionHeading>
      <SkillsContainer>
        <SkillsCategory>
          <h3>Programming Languages</h3>
          <SkillsList>
            {skillsData.programming.map((skill, index) => (
              <SkillItem key={index}>
                <SkillIcon>
                  <img src={skill.icon} alt={skill.name} />
                </SkillIcon>
                <SkillName>{skill.name}</SkillName>
              </SkillItem>
            ))}
          </SkillsList>
        </SkillsCategory>

        <SkillsCategory>
          <h3>Frameworks & Libraries</h3>
          <SkillsList>
            {skillsData.frameworks.map((skill, index) => (
              <SkillItem key={index}>
                <SkillIcon>
                  <img src={skill.icon} alt={skill.name} />
                </SkillIcon>
                <SkillName>{skill.name}</SkillName>
              </SkillItem>
            ))}
          </SkillsList>
        </SkillsCategory>

        <SkillsCategory>
          <h3>Tools & Platforms</h3>
          <SkillsList>
            {skillsData.tools.map((skill, index) => (
              <SkillItem key={index}>
                <SkillIcon>
                  <img src={skill.icon} alt={skill.name} />
                </SkillIcon>
                <SkillName>{skill.name}</SkillName>
              </SkillItem>
            ))}
          </SkillsList>
        </SkillsCategory>
      </SkillsContainer>
    </SkillsSection>
  );
};

export default Skills; 