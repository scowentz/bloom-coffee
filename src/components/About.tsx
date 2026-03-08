export default function About() {
  return (
    <section className="about" id="about" aria-labelledby="about-heading">
      <div className="about__watermark" aria-hidden="true">
        BLOOM
      </div>
      <div className="container">
        <div className="about__grid">
          <div className="about__left">
            <div className="section-label reveal">
              <span>Our Story</span>
            </div>
            <h2 className="about__headline reveal d1" id="about-heading">
              Rooted in <em>Passion</em>,
              <br />
              Crafted with Care
            </h2>
            <p className="about__text reveal d2">
              Bloom Coffee Roasters was born from a simple conviction: that
              extraordinary coffee is the result of an unbroken chain of care —
              from the farmer who tends the trees, to the roaster who coaxes out
              each bean&apos;s hidden complexity.
            </p>
            <p className="about__text reveal d3">
              Every lot we purchase is chosen by hand — paying well above (at
              least 50% above) Fair Trade prices, because we believe truly great
              coffee starts with human dignity.
            </p>
            <div className="about__stats reveal d4">
              <div className="about__stat">
                <div className="about__stat-num">4</div>
                <div className="about__stat-lbl">Countries of Origin</div>
              </div>
              <div className="about__stat">
                <div className="about__stat-num">2026</div>
                <div className="about__stat-lbl">Year Founded</div>
              </div>
            </div>
          </div>

          <div className="about__visual reveal d2">
            <div className="about__circle">
              <div className="about__circle-glow" aria-hidden="true" />
              <div className="about__circle-content">
                <div className="about__circle-year">Est. 2022</div>
                <div className="about__circle-num">4+</div>
                <div className="about__circle-tag">Years Roasting</div>
              </div>
            </div>
            <div className="about__badge about__badge-2" aria-hidden="true">
              <div className="about__badge-num">100%</div>
              <div className="about__badge-text">Direct Trade</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
