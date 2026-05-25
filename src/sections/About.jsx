import "./About.css";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-container">
        <div className="section-header">
          <span className="section-label">Get To Know Me</span>
          <h2 className="section-title">About Me</h2>
        </div>

        <div className="about-content">
          <div className="about-text">
            <p className="about-intro">
              I'm a{" "}
              <span className="highlight-text">
                full stack software developer
              </span>{" "}
              with 5 years of professional experience architecting and
              delivering scalable, high-performance applications across
              Financial/ Banking E-commerce, Healthcare.
            </p>

            <p className="about-description">
              Proficient in building{" "}
              <strong>microservices architecture with Java, Spring Boot</strong>
              , and deploying cloud-native solutions on{" "}
              <strong>AWS, Azure</strong>
            </p>

            <p className="about-description">
              Experienced in both backend and frontend technologies including{" "}
              <strong>
                REST APIs, Hibernate/JPA, Angular/React, HTML, CSS, and
                JavaScript and automate{" "}
                <strong>
                  DevOps pipelines using Docker, Kubernetes, Jenkins
                </strong>{" "}
                for efficient software delivery.
              </strong>
            </p>

            <p className="about-description">
              Recognized for transforming legacy systems, optimizing{" "}
              <strong>SQL, MySQL, PostgreSQL and NoSQL</strong>
              performance, and strong understanding to{" "}
              <strong>SDLC, Agile Methodologies</strong> and version control
              tools like
              <strong>Git, BitBucket</strong> along with collaboration platforms
              such as <strong>Jira and Confluence.</strong>
            </p>

            <div className="about-highlights">
              <div className="highlight-item">
                <div className="highlight-icon">💼</div>
                <div className="highlight-content">
                  <h3>Professional Experience</h3>
                  <p>5+ years building production-ready applications</p>
                </div>
              </div>

              <div className="highlight-item">
                <div className="highlight-icon">🎯</div>
                <div className="highlight-content">
                  <h3>Focus Areas</h3>
                  <p>React, JavaScript, Cloud Architecture, Microservices</p>
                </div>
              </div>

              <div className="highlight-item">
                <div className="highlight-icon">🚀</div>
                <div className="highlight-content">
                  <h3>Current Role</h3>
                  <p>Full Stack Java Developer at Citizens Bank</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
