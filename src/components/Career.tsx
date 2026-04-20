import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Business Dev Executive</h4>
                <h5>Airtribe</h5>
              </div>
              <h3>2025–26</h3>
            </div>
            <p>
              Conducted 300+ discovery calls with enterprise buyers. Ran
              data-driven experiments on outbound messaging, improving
              conversion rates by 25%. Managed end-to-end pipeline for 50+
              accounts — surfacing product feedback and feature requests to
              inform roadmap priorities. Promoted from Associate to Executive
              within 3 months.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Product Dev Intern</h4>
                <h5>TranquilAI</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Led product discovery and delivery for 3 AI-driven features
              end-to-end — from user research and scoping to cross-functional
              collaboration with engineering and design — improving platform
              usability scores by 20%. Prototyped and shipped features
              independently using Claude Code, Vercel, and Cursor.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech — EEE</h4>
                <h5>VIT, Vellore</h5>
              </div>
              <h3>2021–25</h3>
            </div>
            <p>
              Bachelor of Technology in Electrical and Electronics Engineering
              from Vellore Institute of Technology. CGPA: 7.95/10. Event
              Coordinator at Gravitas 2023, Finance Member at E-Cell VIT.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
