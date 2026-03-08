"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import MobileNav from "./MobileNav";
import CartIcon from "./CartIcon";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav className={`nav${scrolled ? " scrolled" : ""}`} id="nav">
        <div className="container">
          <div className="nav__inner">
            <Link
              href="/"
              className="nav__logo"
              aria-label="Bloom Coffee Roasters — Home"
            >
              <Image
                src="/LogoTrans2.png"
                alt="Bloom Coffee Roasters"
                width={62}
                height={62}
                style={{ height: 62, width: "auto", mixBlendMode: "screen" }}
                priority
              />
            </Link>
          <ul className="nav__links">
              <li>
                <a href="/#about">Our Story</a>
              </li>
              <li>
                <a href="/#coffees">The Collection</a>
              </li>
              <li>
                <a href="/#process">Process</a>
              </li>
              <li>
                <Link href="/cart">
                  <CartIcon />
                </Link>
              </li>
              <li>
                <a href="/#coffees" className="nav__cta">
                  Shop Now
                </a>
              </li>
            </ul>
            <button
              className="hamburger"
              aria-label="Open menu"
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen(true)}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </nav>

      <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
