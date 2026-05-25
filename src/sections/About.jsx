import "./About.css";

const About = () => {
  const achievements = [
    {
      number: "5+",
      title: "Years Experience",
      description: "Building enterprise-scale applications"
    },
    {
      number: "50+",
      title: "Projects Delivered",
      description: "Across Finance, Healthcare, E-commerce"
    },
    {
      number: "100+",
      title: "Team Collaborations",
      description: "Cross-functional teams globally"
    },
    {
      number: "99.9%",
      title: "Uptime Achievement",
      description: "Production systems reliability"
    }
  ];

  const expertise = [
    {
      category: "Backend Architecture",
      skills: ["Java 17+", "Spring Boot", "Microservices", "REST APIs", "Event-Driven Systems"],
      icon: "🏗️"
    },
    {
      category: "Cloud & DevOps",
      skills: ["AWS", "Azure", "Kubernetes", "Docker", "CI/CD Pipelines"],
      icon: "☁️"
    },
    {
      category: "Database Engineering",
      skills: ["PostgreSQL", "Oracle", "MongoDB", "Redis", "Cassandra"],
      icon: "🗄️"
    },
    {
      category: "Frontend Technologies",
      skills: ["React", "Angular", "TypeScript", "Next.JS", "Vue.JS"],
      icon: "⚛️"
    }
  ];

  return (
    <section className="about" id="about">
      <div className="about-container">
        <div className="section-header">
          <span className="section-label">Get To Know Me</span>
          <h2 className="section-title">About Me</h2>
          <p className="section-description">
            Full Stack Java Developer with 5+ years of experience architecting and delivering scalable, high-performance applications
          </p>
        </div>

        {/* Main About Content */}
        <div className="about-content">
          <div className="about-text">
            <div className="intro-card">
              <h3 className="intro-title">Professional Overview</h3>
              <p className="about-intro">
                I'm a{" "}
                <span className="highlight-text">
                  Full Stack Java Developer
                </span>{" "}
                with 5+ years of proven expertise in architecting and delivering scalable, high-performance applications across Financial Services, Banking, E-commerce, and Healthcare sectors.
              </p>

              <p className="about-description">
                Specialized in building <strong>enterprise microservices architecture</strong> using Java, Spring Boot, and Spring Cloud. Expert in designing and implementing cloud-native solutions on <strong>AWS and Azure</strong>, with deep knowledge of containerization and orchestration technologies.
              </p>

              <p className="about-description">
                My approach combines <strong>full-stack development expertise</strong> with strong DevOps capabilities. I excel at optimizing database performance across <strong>relational (PostgreSQL, Oracle) and NoSQL (MongoDB, Cassandra)</strong> systems, while implementing robust <strong>CI/CD pipelines</strong> using Docker, Kubernetes, and Jenkins.
              </p>

              <p className="about-description">
                Recognized for <strong>transforming legacy systems</strong> into modern architectures, leading cross-functional teams, and delivering solutions that improve system performance by 30-40%. Strong advocate for <strong>Agile methodologies, code quality, and best practices</strong> in software engineering.
              </p>
            </div>
          </div>

          {/* Stats Section */}
          <div className="about-stats">
            <div className="stats-grid">
              {achievements.map((stat, index) => (
                <div key={index} className="stat-card">
                  <div className="stat-number">{stat.number}</div>
                  <div className="stat-title">{stat.title}</div>
                  <div className="stat-desc">{stat.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Expertise Grid */}
        <div className="expertise-section">
          <h3 className="expertise-title">Core Expertise</h3>
          <div className="expertise-grid">
            {expertise.map((exp, index) => (
              <div key={index} className="expertise-card">
                <div className="expertise-icon">{exp.icon}</div>
                <h4 className="expertise-category">{exp.category}</h4>
                <div className="expertise-skills">
                  {exp.skills.map((skill, idx) => (
                    <span key={idx} className="skill-badge">{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Highlights */}
        <div className="highlights-section">
          <div className="highlight-item">
            <div className="highlight-icon">💡</div>
            <div className="highlight-content">
              <h3>Problem Solver</h3>
              <p>Architecting elegant solutions for complex technical challenges</p>
            </div>
          </div>

          <div className="highlight-item">
            <div className="highlight-icon">🚀</div>
            <div className="highlight-content">
              <h3>Performance Driven</h3>
              <p>Optimizing systems for 30-40% performance improvements</p>
            </div>
          </div>

          <div className="highlight-item">
            <div className="highlight-icon">🤝</div>
            <div className="highlight-content">
              <h3>Team Leader</h3>
              <p>Mentoring developers and leading cross-functional teams</p>
            </div>
          </div>

          <div className="highlight-item">
            <div className="highlight-icon">📈</div>
            <div className="highlight-content">
              <h3>Continuous Learner</h3>
              <p>Staying updated with latest technologies and best practices</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
