const steps = [
  {
    icon: "🌱",
    num: "01",
    title: "Sourcing",
    desc: "Farms are visited to select only exceptional lots from trusted growing partners.",
  },
  {
    icon: "🔬",
    num: "02",
    title: "Cupping",
    desc: "Each lot is blind-cupped by our Q-certified roasters before we commit to a purchase.",
  },
  {
    icon: "🔥",
    num: "03",
    title: "Roasting",
    desc: "Small-batch profiles refined over dozens of test roasts to honor each bean's character.",
  },
  {
    icon: "🫙",
    num: "04",
    title: "Resting",
    desc: "Coffee degasses for 24–48 hours before sealing to ensure peak flavor in every bag.",
  },
  {
    icon: "✈️",
    num: "05",
    title: "Delivery",
    desc: "Shipped within 48 hours of roasting. From our roastery in Zionsville, Indiana to your door at its freshest.",
  },
];

export default function Process() {
  return (
    <section
      className="process"
      id="process"
      aria-labelledby="process-heading"
    >
      <div className="container">
        <div className="process__head">
          <div className="section-label reveal">
            <span>From Farm to Cup</span>
          </div>
          <h2 className="process__headline reveal d1" id="process-heading">
            The Art of
            <br />
            <em>The Roast</em>
          </h2>
          <p className="process__sub reveal d2">
            Five deliberate steps. An obsessive attention to detail.
          </p>
        </div>

        <div className="process__steps" role="list">
          {steps.map((step, i) => (
            <div
              key={step.num}
              className={`process__step reveal d${i + 1}`}
              role="listitem"
            >
              <div className="step-icon" aria-hidden="true">
                {step.icon} <span className="step-num">{step.num}</span>
              </div>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-desc">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
