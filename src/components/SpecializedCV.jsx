import React from 'react';
import styled from 'styled-components';

const PopupOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: 20px;
`;

const PopupContent = styled.div`
  background: rgba(26, 26, 26, 0.95);
  border-radius: 12px;
  padding: 30px;
  max-width: 800px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  border: 1px solid rgba(233, 69, 96, 0.05);
  box-shadow: 0 0 20px rgba(233, 69, 96, 0.05);
`;

const CloseButton = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  background: none;
  border: none;
  color: rgba(233, 69, 96, 0.5);
  font-size: 24px;
  cursor: pointer;
  padding: 5px;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.1);
    color: rgba(233, 69, 96, 0.7);
  }
`;

const ResumeHeader = styled.div`
  text-align: center;
  margin-bottom: 30px;
  color: #fff;

  h2 {
    font-size: 2rem;
    margin-bottom: 10px;
    color: rgba(233, 69, 96, 0.6);
  }

  p {
    margin: 5px 0;
    color: rgba(184, 184, 184, 0.9);
  }

  a {
    color: rgba(233, 69, 96, 0.5);
    text-decoration: none;
    transition: all 0.3s ease;

    &:hover {
      text-decoration: underline;
      color: rgba(233, 69, 96, 0.7);
    }
  }
`;

const ResumeSection = styled.div`
  margin-bottom: 25px;

  h3 {
    color: rgba(233, 69, 96, 0.5);
    font-size: 1.2rem;
    margin-bottom: 15px;
    border-bottom: 1px solid rgba(233, 69, 96, 0.05);
    padding-bottom: 5px;
  }

  p {
    color: rgba(184, 184, 184, 0.9);
    margin: 5px 0;
    line-height: 1.6;
  }
`;

const ResumeItem = styled.div`
  margin-bottom: 20px;

  h4 {
    color: rgba(255, 255, 255, 0.9);
    font-size: 1.1rem;
    margin-bottom: 5px;
  }

  h5 {
    color: rgba(233, 69, 96, 0.5);
    font-size: 0.9rem;
    margin-bottom: 10px;
  }

  ul {
    list-style-type: disc;
    margin-left: 20px;
    color: rgba(184, 184, 184, 0.9);
  }

  li {
    margin: 5px 0;
  }
`;

const DownloadButton = styled.button`
  background: rgba(233, 69, 96, 0.03);
  border: 1px solid rgba(233, 69, 96, 0.05);
  color: rgba(233, 69, 96, 0.5);
  padding: 10px 20px;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 20px auto;

  &:hover {
    background: rgba(233, 69, 96, 0.05);
    transform: translateY(-2px);
    color: rgba(233, 69, 96, 0.7);
  }
`;

const SpecializedCV = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/assets/specialized-cv.pdf';
    link.download = 'Venkata_Ramana_Specialized_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <PopupOverlay onClick={onClose}>
      <PopupContent onClick={e => e.stopPropagation()}>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        <div className="resume">
          <DownloadButton onClick={handleDownload}>
            <span className="download-icon">⬇️</span>
            Download Specialized CV
          </DownloadButton>
          <ResumeHeader>
            <h2>Venkata Ramana Sadhanala</h2>
            <p>Full Stack Developer</p>
            <p>Email: sadhanalavenkat372@gmail.com | Mobile: +91-9347091279</p>
            <p>
              <a href="https://www.linkedin.com/in/venkat-sadhanala/" target="_blank">LinkedIn</a> | 
              <a href="https://github.com/Ramana372" target="_blank">GitHub</a>
            </p>
          </ResumeHeader>      
      <ResumeSection>
            <h3>PROJECTS</h3>
            <ResumeItem>
              <h4>Athidhi Restaurant – Table Reservation System</h4>
              <h5>Sep 2024 - Dec 2024</h5>
              <p>Developed a responsive web platform for 100+ daily users to browse menus, place orders, and make reservations.</p>
              <p>Provides dynamic data from MySQL, responsive design, and dynamic pagination based on data.</p>
              <p>Integrates SMTP for data insertion, retrieval, deletion, user authentication, and individual user data storage.</p>
              <p><strong>Tech:</strong> React.js, PHP, CSS, BootStrap, MySQL</p>
              <p><strong>GitHub:</strong> https://github.com/venkat2k3/athidhi_restaurant</p>
            </ResumeItem>
            <ResumeItem>
              <h4>Expense Tracker</h4>
              <h5>Dec 2023 - May 2024</h5>
              <p>Enhanced a web application for tracking and categorizing expenses with secure user authentication.</p>
              <p>Designed an intuitive expense entry form and streamlined the input process.</p>
              <p>Enabled dashboard customization with logos, custom domains, and external sharing.</p>
              <p><strong>Tech:</strong> MERN Stack, Responsive web Design</p>
              <p><strong>GitHub:</strong> https://github.com/Ramana372/Expense-Tracker</p>
            </ResumeItem>

            <ResumeItem>
              <h4>Agriculture-Equipments</h4>
              <h5>May 2023 - Nov 2023</h5>
              <p>Refined and deployed a machine learning model to predict wine quality with 89% accuracy. Improved overall performance by 25% through effective feature engineering and hyperparameter tuning, while optimizing processing time by 15%.</p>
              <p><strong>Tech:</strong> jQuery, HTML, CSS, Boot-Strap, MongoDB.</p>
              <p><strong>GitHub:</strong> https://github.com/Ramana372/Agriculture-Equipmet-s </p>
            </ResumeItem>
          </ResumeSection>
          
          <ResumeSection>
            <h3>CERTIFICATIONS</h3>
            <ResumeItem>
              <h4>Certification in Cloud Computing – NPTEL</h4>
              <h5>July 2024 - Oct 2024</h5>
              <p>Gained hands-on experience with cloud platforms, enhancing deployment and visualization skills.</p>
            </ResumeItem>
            <ResumeItem>
              <h4>Data Structures and Algorithms using C++ – Board infinity</h4>
              <h5>May 2024 - July 2024</h5>
              <p>Learned key data structures like arrays, linked lists, stacks queues, trees, and graphs.</p>
            </ResumeItem>
            <ResumeItem>
              <h4>The Service Selection Board: A Dream Within Your Reach - LPU </h4>
              <h5>Sept 2023 - Oct 2023</h5>
              <p>Gained hands-on experience with basic ML algorithms.</p>
            </ResumeItem>
          </ResumeSection>
          

          <ResumeSection>
            <h3>ACHIEVEMENT</h3>
            <p>Solved 90+ LeetCode problems, improving coding and problem-solving skills.</p>
          </ResumeSection>

            
          <ResumeSection>
            <h3>TECHNICAL SKILLS</h3>
            <p><strong>Programming Languages:</strong> Java, C++, JavaScript, PHP, SQL</p>
            <p><strong>Frontend:</strong> React.js, HTML5, CSS3, Bootstrap, Responsive Design</p>
            <p><strong>Backend:</strong> Node.js, Express.js, RESTful APIs</p>
            <p><strong>Databases:</strong> MongoDB, MySQL</p>
            <p><strong>DevOps & Tools:</strong> Git, GitHub, AWS, Docker, Jenkins, VS Code, Ubuntu</p>
            <p><strong>Other Skills:</strong> Data Structures & Algorithms, Problem Solving, Team Collaboration</p>
          </ResumeSection>

          <ResumeSection>
            <h3>EDUCATION</h3>
             <ResumeItem>
              <h4>Lovely Professional University, Punjab, India</h4>
              <h5>Bachelor of Technology - Computer Science and Engineering | CGPA: 7.41</h5>
              <p>Since August 2022</p>
            </ResumeItem>
            <ResumeItem>
              <h4>Sasi Junior College, Kamavarapu Kota, Andhra Pradesh</h4>
              <h5>Intermediate | Percentage: 96.3%</h5>
              <p>2020 - 2022</p>
            </ResumeItem>
            <ResumeItem>
              <h4>Sasi EM High School, Kamavarapu Kota, Andhra Pradesh</h4>
              <h5>10th Marks: 100%</h5>
              <p>2019 - 2020</p>
            </ResumeItem>
          </ResumeSection>
        </div>
      </PopupContent>
    </PopupOverlay>
  );
};

export default SpecializedCV; 