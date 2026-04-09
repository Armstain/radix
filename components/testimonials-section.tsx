'use client';

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="section">
      <div className="reveal">
        <p className="section-label">Elite Clientele</p>
        <h2 className="section-title">Who We Work With</h2>
      </div>
      <div className="testi-grid">
        <div className="testi-card reveal">
          <p className="testi-text font-bold text-bg-steel/90 text-2xl leading-relaxed">
            Dhaka Club<br/>
            Huawei, Gulshan<br/>
            East-Coast Group<br/>
            Incepta<br/>
            ACCA, Gulshan<br/>
            Sonia Garments<br/>
            Maheen Label Tex Limited
          </p>
        </div>
        <div className="testi-card reveal">
          <p className="testi-text font-bold text-bg-steel/90 text-2xl leading-relaxed">
            Urmi Garments<br/>
            BD Food<br/>
            MEL Group<br/>
            Inndhan Nagar Tea State<br/>
            Friends International School<br/>
            Good Heal Hospital & Residential
          </p>
        </div>
      </div>
    </section>
  );
}
