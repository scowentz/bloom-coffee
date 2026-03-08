const items = [
  "Direct Trade",
  "Single Origin",
  "Small Batch Roasted",
  "Sustainably Sourced",
  "Specialty Grade",
  "Fresh Roasted Weekly",
];

export default function MarqueeStrip() {
  return (
    <div className="marquee-strip" aria-hidden="true">
      <div className="marquee-track">
        {[...items, ...items].map((text, i) => (
          <div className="marquee-item" key={i}>
            {text} <span className="marquee-dot" />
          </div>
        ))}
      </div>
    </div>
  );
}
