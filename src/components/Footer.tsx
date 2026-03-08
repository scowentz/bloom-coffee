import Image from "next/image";

export default function Footer() {
  return (
    <footer className="footer" aria-label="Site footer">
      <div className="container">
        <div className="footer__grid">
          <div>
            <a
              href="/"
              className="footer__logo"
              aria-label="Bloom Coffee Roasters — Home"
            >
              <Image
                src="/LogoTrans2.png"
                alt="Bloom Coffee Roasters"
                width={228}
                height={228}
                style={{ height: 228, width: "auto" }}
              />
            </a>
            <p className="footer__desc">
              Small-batch specialty coffee roasted with intention, sourced with
              care, and shipped at its freshest.
            </p>
          </div>

          <div>
            <div className="footer__col-title">Shop</div>
            <ul className="footer__links">
              <li>
                <a href="/#coffees">All Coffees</a>
              </li>
              <li>
                <a href="/#coffees">Light Roasts</a>
              </li>
              <li>
                <a href="/#coffees">Medium Roasts</a>
              </li>
              <li>
                <a href="/#coffees">Dark Roasts</a>
              </li>
              <li>
                <a href="/#coffees">Subscriptions</a>
              </li>
            </ul>
          </div>

          <div>
            <div className="footer__col-title">Company</div>
            <ul className="footer__links">
              <li>
                <a href="/#about">Our Story</a>
              </li>
              <li>
                <a href="/#process">The Roastery</a>
              </li>
              <li>
                <a href="/#process">Sourcing</a>
              </li>
            </ul>
          </div>

          <div>
            <div className="footer__col-title">Support</div>
            <ul className="footer__links">
              <li>
                <a href="#">Brewing Guides</a>
              </li>
              <li>
                <a href="#">FAQ</a>
              </li>
              <li>
                <a href="#">Shipping Policy</a>
              </li>
              <li>
                <a href="#">Returns</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copy">
            &copy; 2026 Bloom Coffee Roasters. All rights reserved.
          </p>
          <div className="footer__socials">
            <a href="#" className="footer__social" aria-label="Instagram">
              &#9675;
            </a>
            <a href="#" className="footer__social" aria-label="X / Twitter">
              &#10005;
            </a>
            <a href="#" className="footer__social" aria-label="Facebook">
              f
            </a>
            <a href="#" className="footer__social" aria-label="TikTok">
              &#9835;
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
