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
          <h4 className="step-name">Let The Adventure Begin!</h4>
          <p className="step-desc">We discuss your architectural, structural, electrical, plumbing, landscaping, or interior design goals.</p>
        </div>
        <div className="process-step reveal">
          <span className="step-num">02</span>
          <div className="step-dot"></div>
          <h4 className="step-name">Tailored Plans</h4>
          <p className="step-desc">Offering a tailored strategy with project presentation, analysis, feasibility study, land-use plan, cost estimates, and development approach.</p>
        </div>
        <div className="process-step reveal">
          <span className="step-num">03</span>
          <div className="step-dot"></div>
          <h4 className="step-name">Implementation</h4>
          <p className="step-desc">It&apos;s time to hit the road! With your custom plan in hand, associate soil engineers and surveyors provide soil test and land survey services.</p>
        </div>
        <div className="process-step reveal">
          <span className="step-num">04</span>
          <div className="step-dot"></div>
          <h4 className="step-name">Progress Tracking</h4>
          <p className="step-desc">Preparation of scheduled items, bill of quantities, evaluation of tenders, construction management, and administration.</p>
        </div>
      </div>
    </section>
  );
}
