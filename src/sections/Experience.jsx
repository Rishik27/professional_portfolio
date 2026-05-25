import React from 'react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      company: 'Citizens Bank',
      role: 'Full Stack Java Developer',
      period: 'Jul 2025 – Present',
      location: 'Edmond, Oklahoma (Remote)',
      achievements: [
        'Developed end-to-end financial applications using Java, Spring Boot, Hibernate, improving transaction efficiency by 25%',
        'Designed responsive front-end interfaces using ReactJS, TypeScript, HTML5, CSS3, reducing UI issues by 30%',
        'Implemented security mechanisms including OAuth2, JWT, SSL/TLS encryption, adhering to PCI-DSS compliance',
        'Built microservices architecture with secure API communication, reducing onboarding time by 20%',
        'Deployed AWS services (EC2, S3, RDS, Lambda, CodePipeline) resulting in 35% lower infrastructure costs and 40% faster deployments',
        'Optimized Oracle, Cassandra, Redis, MongoDB queries, improving database performance by 35%',
        'Implemented IaC using Terraform, Helm, Ansible, and CloudFormation for secure, repeatable deployments',
        'Automated testing using Junit, Mockito, Cucumber, increasing code coverage by 25% and reducing production defects by 15%'
      ],
      current: true
    },
    {
      company: 'Walmart',
      role: 'Full Stack Java Developer',
      period: 'Aug 2024 – Jun 2025',
      location: 'San Francisco, CA',
      achievements: [
        'Designed scalable RESTful microservices using Java, Spring Boot, Hibernate integrated with Angular, improving API response by 30%',
        'Created dynamic Angular and NodeJS components for internal dashboards, improving UI performance by 25%',
        'Deployed Microsoft Azure AKS, Azure SQL Database, API Management, cutting infrastructure costs by 20% and deployment errors by 40%',
        'Automated CI/CD using Jenkins, Docker, GitHub Actions, Kubernetes, enabling 90% faster deployments with zero downtime',
        'Created detailed API documentation with Swagger/OpenAPI, enhancing integration speed across teams',
        'Optimized SQL, MySQL, PostgreSQL, MongoDB queries, achieving 35% improvement in report generation',
        'Boosted test coverage to 92% using Junit and Mockito, reducing post-release defects by 40%',
        'Collaborated within Agile methodology, delivering sprint-based, release-ready features every two weeks'
      ],
      current: false
    },
    {
      company: 'Adobe',
      role: 'Full Stack Java Developer',
      period: 'Oct 2022 – Jul 2023',
      location: 'Remote',
      achievements: [
        'Designed high-performance, scalable full-stack applications using Java, Spring Boot, ReactJS, and Microservices architecture',
        'Built and maintained RESTful APIs using Spring Boot, Spring Cloud with OAuth2, JWT authentication',
        'Implemented CI/CD pipelines using Jenkins and GitLab CI, automating build, test, and deployment processes',
        'Optimized complex SQL queries and NoSQL databases (MongoDB, PostgreSQL) for large-scale data workloads',
        'Designed modular Java components adhering to SOLID principles, increasing code maintainability by 50%',
        'Deployed applications on Docker, Kubernetes, AWS (S3, EC2, Lambda, RDS, DynamoDB)',
        'Conducted code reviews and performance tuning, reducing production issues and memory leaks',
        'Collaborated with Data Engineers, AI/ML teams, and DevOps to build end-to-end solutions'
      ],
      current: false
    },
    {
      company: 'Cigna Healthcare',
      role: 'Java Developer',
      period: 'Mar 2021 – Sep 2022',
      location: 'Remote',
      achievements: [
        'Developed healthcare logistics models using Java, Spring Boot, ReactJS supporting drug inventory tracking across 1000+ locations',
        'Deployed Microsoft Azure AKS, Azure SQL Database, Azure DevOps Pipelines for secure healthcare operations',
        'Built scalable REST APIs using Spring Boot, Spring Cloud, Hibernate frameworks',
        'Implemented caching, logging, asynchronous processing, and RESTful Web Services',
        'Created Docker applications and container orchestration for cloud-native deployments',
        'Wrote and maintained PostgreSQL, DynamoDB, Oracle queries for healthcare order management',
        'Collaborated with cross-functional teams ensuring HIPAA-compliant software development',
        'Participated in Agile methodology with daily stand-ups, sprint planning, and retrospectives'
      ],
      current: false
    },
    {
      company: 'Insta Global Source',
      role: 'Java Developer (Internship)',
      period: 'Jan 2020 – Feb 2021',
      location: 'Hyderabad, India',
      achievements: [
        'Built internal compliance dashboards using Java, Spring MVC, Angular providing real-time regulatory insights',
        'Integrated applications with core banking systems, payment gateways, and financial APIs',
        'Optimized database performance using SQL and Oracle for high-volume transactional data',
        'Worked on fraud detection and risk monitoring systems with analytics teams',
        'Developed batch processing jobs for trade data validation using Spring Batch',
        'Deployed applications to AWS with CI/CD pipelines using Jenkins and GitHub Actions',
        'Conducted code reviews and performance tuning to maintain system reliability',
        'Followed Agile methodology and financial data governance practices'
      ],
      current: false
    }
  ];

  return (
    <section className="experience" id="experience">
      <div className="experience-container">
        <div className="section-header">
          <span className="section-label">My Journey</span>
          <h2 className="section-title">Work Experience</h2>
          <p className="section-description">
            A track record of delivering high-quality software solutions in fast-paced, collaborative environments.
          </p>
        </div>

        <div className="timeline">
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className={`timeline-item ${exp.current ? 'current' : ''}`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="timeline-marker">
                <div className="timeline-dot"></div>
                {index < experiences.length - 1 && <div className="timeline-line"></div>}
              </div>
              
              <div className="timeline-content">
                <div className="experience-header">
                  <div className="experience-title-section">
                    <h3 className="experience-role">{exp.role}</h3>
                    <div className="experience-company">
                      <span className="company-name">{exp.company}</span>
                      {exp.current && <span className="current-badge">Current</span>}
                    </div>
                  </div>
                  <div className="experience-meta">
                    <span className="experience-period">📅 {exp.period}</span>
                    <span className="experience-location">📍 {exp.location}</span>
                  </div>
                </div>

                <ul className="experience-achievements">
                  {exp.achievements.map((achievement, idx) => (
                    <li key={idx}>{achievement}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;