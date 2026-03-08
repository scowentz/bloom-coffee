export default function Hero() {
  return (
    <section className="hero" id="hero" aria-label="Hero">
      <div className="hero__glow" aria-hidden="true" />

      <div className="ring ring-1" aria-hidden="true" />
      <div className="ring ring-2" aria-hidden="true" />
      <div className="ring ring-3" aria-hidden="true" />

      <div className="particle p1" aria-hidden="true" />
      <div className="particle p2" aria-hidden="true" />
      <div className="particle p3" aria-hidden="true" />
      <div className="particle p4" aria-hidden="true" />
      <div className="particle p5" aria-hidden="true" />

      <div className="hero__content">
        <div className="hero__eyebrow" aria-hidden="true">
          <div className="hero__eyebrow-line" />
          <span className="hero__eyebrow-text">
            Small-Batch &middot; Single Origin &middot; Sustainably Sourced
          </span>
        </div>
        <h1 className="hero__headline">
          Where Every
          <br />
          Bean <em>Blooms</em>
        </h1>
        <p className="hero__sub">
          Meticulously sourced from family farms across the world&apos;s finest
          growing regions — roasted in small batches to honor each bean&apos;s
          singular story.
        </p>
        <div className="hero__actions">
          <a href="#coffees" className="btn-primary">
            <span>Shop the Collection</span>
          </a>
          <a href="#about" className="btn-ghost">
            <div className="btn-ghost-arrow" aria-hidden="true" />
            Our Story
          </a>
        </div>
      </div>

      <div className="hero__scroll-hint" aria-hidden="true">
        <span className="hero__scroll-text">Scroll</span>
        <div className="hero__scroll-line" />
      </div>
    </section>
  );
}
