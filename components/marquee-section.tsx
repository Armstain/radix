export function MarqueeSection() {
  const services = [
    "Architectural Consultancy",
    "Planning & Designing",
    "Interior Design & Decoration",
    "Large-Scale Civil Construction",
    "Furniture & Product Designing",
    "Supporting Services"
  ];

  return (
    <div className="marquee-wrap bg-brand-cobalt py-3.5 overflow-hidden whitespace-nowrap">
      <div className="marquee-inner flex animate-[marquee_22s_linear_infinite]">
        {[...services, ...services].map((service, index) => (
          <div key={index} className="flex items-center">
            <span className="text-[11px] font-bold tracking-[3px] uppercase text-white/90 mr-[60px]">{service}</span>
            <span className="dot text-brand-sky mr-[60px]">·</span>
          </div>
        ))}
      </div>
    </div>
  );
}
