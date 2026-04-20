'use client';

export function ProcessSection() {
  return (
    <section id="process">
      <div className="reveal">
        <p className="section-label process-label">How We Work</p>
        <h2 className="section-title process-title">Our Process</h2>
      </div>
      <div className="process-steps">
        <div className="process-step reveal">
          <span className="step-num">01</span>
          <div className="step-dot"></div>
          <h4 className="step-name">Discovery & Consultation</h4>
          <p className="step-desc">We discuss your goals for architecture, structure, electrical systems, plumbing, landscaping, and interior design to establish a clear project vision.</p>
        </div>
        <div className="process-step reveal">
          <span className="step-num">02</span>
          <div className="step-dot"></div>
          <h4 className="step-name">Tailored Planning</h4>
          <p className="step-desc">Preparation of customized strategies including project presentation, feasibility study, land use planning, cost estimation, and development strategy.</p>
        </div>
        <div className="process-step reveal">
          <span className="step-num">03</span>
          <div className="step-dot"></div>
          <h4 className="step-name">Implementation</h4>
          <p className="step-desc">Our team coordinates with soil engineers and surveyors for soil testing, land surveys, and detailed construction preparation and budget planning.</p>
        </div>
        <div className="process-step reveal">
          <span className="step-num">04</span>
          <div className="step-dot"></div>
          <h4 className="step-name">Project Management</h4>
          <p className="step-desc">Comprehensive handling of tender evaluation, construction supervision, site administration, and progress monitoring to ensure timely delivery.</p>
        </div>
        <div className="process-step reveal">
          <span className="step-num">05</span>
          <div className="step-dot"></div>
          <h4 className="step-name">Ongoing Support</h4>
          <p className="step-desc">Even after project delivery, we provide continuous support for future needs and improvements, ensuring long-term client satisfaction.</p>
        </div>
      </div>
    </section>
  );
}
