import React from 'react';
import styled from 'styled-components';

const ProjectsSection = styled.section`
 padding: 80px 0;
  position: relative;
  z-index: 1;
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


const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin-top: 40px;
`;

const ProjectCard = styled.div`
  background: rgba(233, 69, 96, 0.05);
  border: 1px solid rgba(233, 69, 96, 0.1);
  border-radius: 16px;
  overflow: hidden;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(233, 69, 96, 0.1);
  }
`;

const ProjectImage = styled.div`
  width: 100%;
  height: 200px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  ${ProjectCard}:hover & img {
    transform: scale(1.05);
  }
`;

const ProjectContent = styled.div`
  padding: 25px;

  h3 {
    font-size: 1.4rem;
    margin-bottom: 15px;
    color: #ff6b6b;
  }

  p {
    color: #b8b8b8;
    margin-bottom: 20px;
    line-height: 1.6;
  }
`;

const ProjectTech = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 20px;

  span {
    background: rgba(233, 69, 96, 0.1);
    color: #e94560;
    padding: 5px 12px;
    border-radius: 20px;
    font-size: 0.9rem;
  }
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 15px;

  a {
    text-decoration: none;
    color:White;
    font-weight: 500;
    transition: all 0.3s ease;

    &:hover {
      color:  #7ee8fa;
      transform: translateY(-2px);
    }
  }
`;

const Projects = () => {
  const projects = [
    {
      title: "Athidhi Restaurant",
      description: "Built a full-stack table reservation system for Athidhi Restaurant using React.js, PHP, MySQL, and Bootstrap with user authentication, dynamic data handling, and SMTP integration.",
      image: "images/restaurant.png",
      technologies: ["React.js", "PHP", "MySQL", "BootStrap","CSS"],
      liveLink: "https://athidhi-restaurant.vercel.app/home",
      codeLink: "https://github.com/venkat2k3/Athidhi-Restaurant-php"
    },
    {
      title: "Expense-Track App",
      description: "Developed a responsive MERN-stack expense tracker with secure authentication, customizable dashboards, and external sharing capabilities.",
      image: "images/Expense.png",
      technologies: ["React.js", "Node.js","Express.js","MongoDB","CSS"],
      liveLink: "#",
      codeLink: "https://github.com/Ramana372/Expense-Tracker"
    },
    {
      title: "Agri-Equip-Website",
      description: "Created a jQuery-based platform for buying, selling, and auctioning agricultural tools with MongoDB integration for streamlined equipment management.",
      image: "images/agri.png",
      technologies: ["HTML5", "CSS3", "JavaScript"],
      liveLink: "#",
      codeLink: "https://github.com/venkat2k3/Agriculture-Equipments"
    }
  ];

  return (
    <ProjectsSection>
      <SectionTitle>My Projects</SectionTitle>
      
      <ProjectsGrid>
        {projects.map((project, index) => (
          <ProjectCard key={index}>
            <ProjectImage>
              <img src={project.image} alt={project.title} />
            </ProjectImage>
            <ProjectContent>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <ProjectTech>
                {project.technologies.map((tech, i) => (
                  <span key={i}>{tech}</span>
                ))}
              </ProjectTech>
              <ProjectLinks>
                <a href={project.liveLink} target="_blank" rel="noopener noreferrer">View Live</a>
                <a href={project.codeLink} target="_blank" rel="noopener noreferrer">Source Code</a>
              </ProjectLinks>
            </ProjectContent>
          </ProjectCard>
        ))}
      </ProjectsGrid>
    </ProjectsSection>
  );
};

export default Projects; 
