import React, { useState, useEffect, useRef } from 'react';
import './Skills.css';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const skillsData = {
    languages: [
      { name: 'Java 17/13/8', level: 95, icon: '☕' },
      { name: 'SQL (Advanced)', level: 95, icon: '📊' },
      { name: 'JavaScript', level: 90, icon: '⚡' },
      { name: 'TypeScript', level: 85, icon: '📘' },
      { name: 'HTML5', level: 90, icon: '🌐' },
      { name: 'CSS3', level: 90, icon: '🎨' }
    ],
    backend: [
      { name: 'Spring Boot', level: 95, icon: '🌱' },
      { name: 'Spring MVC', level: 92, icon: '🌿' },
      { name: 'Spring Security', level: 90, icon: '🔒' },
      { name: 'Spring WebFlux', level: 88, icon: '⚡' },
      { name: 'Hibernate & JPA', level: 92, icon: '🏛️' },
      { name: 'JDBC & JSP', level: 88, icon: '🔌' },
      { name: 'J2EE', level: 85, icon: '☕' },
      { name: 'REST APIs', level: 95, icon: '📡' },
      { name: 'Microservices', level: 92, icon: '🏗️' },
      { name: 'GraphQL', level: 80, icon: '⚙️' },
      { name: 'gRPC', level: 80, icon: '🔄' }
    ],
    frontend: [
      { name: 'React', level: 90, icon: '⚛️' },
      { name: 'Angular', level: 85, icon: '🅰️' },
      { name: 'Vue.JS', level: 82, icon: '💚' },
      { name: 'Next.JS', level: 85, icon: '⚫' },
      { name: 'Node.JS', level: 88, icon: '🟢' },
      { name: 'Redux', level: 88, icon: '🔄' },
      { name: 'Material UI', level: 85, icon: '🎭' },
      { name: 'Bootstrap', level: 90, icon: '📦' },
      { name: 'AJAX & JSON', level: 90, icon: '💾' }
    ],
    security: [
      { name: 'OAuth 2.0', level: 90, icon: '🔐' },
      { name: 'JWT Authentication', level: 92, icon: '🔑' },
      { name: 'Spring Security', level: 90, icon: '🛡️' },
      { name: 'SSL/TLS Encryption', level: 85, icon: '🔒' },
      { name: 'PCI-DSS Compliance', level: 85, icon: '✓' }
    ],
    databases: [
      { name: 'Oracle', level: 90, icon: '🏛️' },
      { name: 'PostgreSQL', level: 92, icon: '🐘' },
      { name: 'MySQL', level: 88, icon: '🐬' },
      { name: 'MongoDB', level: 88, icon: '🍃' },
      { name: 'Cassandra', level: 85, icon: '📊' },
      { name: 'Redis', level: 88, icon: '🚀' },
      { name: 'Elasticsearch', level: 82, icon: '🔍' },
      { name: 'Spring Data JPA', level: 90, icon: '📚' },
      { name: 'Flyway', level: 85, icon: '🛫' }
    ],
    cloud: [
      { name: 'AWS (EC2, S3, Lambda, RDS)', level: 92, icon: '☁️' },
      { name: 'Azure (App Service, SQL DB)', level: 90, icon: '🔵' },
      { name: 'AWS CloudWatch', level: 88, icon: '👁️' },
      { name: 'API Gateway', level: 88, icon: '🚪' },
      { name: 'VPC & IAM', level: 88, icon: '🔐' },
      { name: 'GCP', level: 80, icon: '☁️' },
      { name: 'OpenShift', level: 82, icon: '🔴' },
      { name: 'ROSA', level: 82, icon: '🔴' }
    ],
    devops: [
      { name: 'Docker', level: 92, icon: '🐳' },
      { name: 'Kubernetes', level: 88, icon: '⚓' },
      { name: 'Jenkins', level: 90, icon: '🔨' },
      { name: 'GitLab CI/CD', level: 88, icon: '🦊' },
      { name: 'GitHub Actions', level: 88, icon: '⚙️' },
      { name: 'Git & Bitbucket', level: 95, icon: '📚' },
      { name: 'Terraform', level: 88, icon: '🏗️' },
      { name: 'Maven & Gradle', level: 92, icon: '📦' }
    ],
    testing: [
      { name: 'JUnit', level: 92, icon: '✅' },
      { name: 'TestNG', level: 88, icon: '🧪' },
      { name: 'Mockito', level: 90, icon: '🎭' },
      { name: 'Selenium', level: 85, icon: '🤖' },
      { name: 'Cypress', level: 85, icon: '🌳' },
      { name: 'REST Assured', level: 85, icon: '🔬' },
      { name: 'Postman', level: 90, icon: '📮' }
    ],
    monitoring: [
      { name: 'ELK Stack', level: 85, icon: '📊' },
      { name: 'Log4J & SLF4J', level: 88, icon: '📝' },
      { name: 'Prometheus', level: 82, icon: '📈' },
      { name: 'Grafana', level: 85, icon: '📉' },
      { name: 'Dynatrace', level: 80, icon: '👁️' },
      { name: 'SonarQube', level: 85, icon: '🔍' },
      { name: 'Nexus', level: 82, icon: '📦' }
    ],
    messaging: [
      { name: 'Kafka', level: 88, icon: '🚂' },
      { name: 'RabbitMQ', level: 85, icon: '🐰' },
      { name: 'WebSockets', level: 85, icon: '🔌' },
      { name: 'ActiveMQ', level: 82, icon: '📬' },
      { name: 'Solace', level: 80, icon: '🌊' },
      { name: 'AWS SNS', level: 85, icon: '📢' }
    ],
    tools: [
      { name: 'IntelliJ IDEA', level: 95, icon: '💡' },
      { name: 'Swagger/OpenAPI', level: 88, icon: '📖' },
      { name: 'JIRA', level: 88, icon: '📋' },
      { name: 'Confluence', level: 85, icon: '📚' },
      { name: 'Agile/Scrum', level: 90, icon: '🎯' }
    ]
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const SkillBar = ({ skill, index }) => (
    <div 
      className="skill-item"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="skill-header">
        <div className="skill-name">
          <span className="skill-icon">{skill.icon}</span>
          <span>{skill.name}</span>
        </div>
        <span className="skill-percentage">{skill.level}%</span>
      </div>
      <div className="skill-bar">
        <div 
          className={`skill-progress ${isVisible ? 'animate' : ''}`}
          style={{ 
            '--skill-level': `${skill.level}%`,
            animationDelay: `${index * 0.1}s`
          }}
        />
      </div>
    </div>
  );

  return (
    <section className="skills" id="skills" ref={sectionRef}>
      <div className="skills-container">
        <div className="section-header">
          <span className="section-label">Technical Expertise</span>
          <h2 className="section-title">Skills & Technologies</h2>
          <p className="section-description">
            A comprehensive overview of my technical skills across the full stack, 
            from frontend frameworks to cloud infrastructure.
          </p>
        </div>

        <div className="skills-grid">
          <div className="skills-category">
            <div className="category-header">
              <h3 className="category-title">
                <span className="category-icon">⚛️</span>
                Frontend Technologies
              </h3>
            </div>
            <div className="skills-list">
              {skillsData.frontend.map((skill, index) => (
                <SkillBar key={skill.name} skill={skill} index={index} />
              ))}
            </div>
          </div>

          <div className="skills-category">
            <div className="category-header">
              <h3 className="category-title">
                <span className="category-icon">🚀</span>
                Backend Technologies
              </h3>
            </div>
            <div className="skills-list">
              {skillsData.backend.map((skill, index) => (
                <SkillBar key={skill.name} skill={skill} index={index} />
              ))}
            </div>
          </div>

          <div className="skills-category">
            <div className="category-header">
              <h3 className="category-title">
                <span className="category-icon">🗄️</span>
                Databases
              </h3>
            </div>
            <div className="skills-list">
              {skillsData.databases.map((skill, index) => (
                <SkillBar key={skill.name} skill={skill} index={index} />
              ))}
            </div>
          </div>

          <div className="skills-category">
            <div className="category-header">
              <h3 className="category-title">
                <span className="category-icon">☁️</span>
                Cloud & DevOps
              </h3>
            </div>
            <div className="skills-list">
              {skillsData.cloud.map((skill, index) => (
                <SkillBar key={skill.name} skill={skill} index={index} />
              ))}
            </div>
          </div>

          <div className="skills-category">
            <div className="category-header">
              <h3 className="category-title">
                <span className="category-icon">🛠️</span>
                Tools & Platforms
              </h3>
            </div>
            <div className="skills-list">
              {skillsData.tools.map((skill, index) => (
                <SkillBar key={skill.name} skill={skill} index={index} />
              ))}
            </div>
          </div>
        </div>

        <div className="additional-skills">
          <h3 className="additional-title">Additional Expertise</h3>
          <div className="skills-tags">
            <span className="skill-tag">JWT Authentication</span>
            <span className="skill-tag">SoapUI</span>
            <span className="skill-tag">JUnit</span>
            <span className="skill-tag">Mockito</span>
            <span className="skill-tag">AWS Lambda</span>
            <span className="skill-tag">AWS S3</span>
            <span className="skill-tag">AWS EC2</span>
            <span className="skill-tag">AWS EKS</span>
            <span className="skill-tag">ELK Stack</span>
            <span className="skill-tag">CloudFormation</span>
            <span className="skill-tag">GitHub Actions</span>
            <span className="skill-tag">Agile/Scrum</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;