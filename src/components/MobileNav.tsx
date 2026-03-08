"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

interface MobileNavProps {
  open: boolean;
  onClose: () => void;
}

export default function MobileNav({ open, onClose }: MobileNavProps) {
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div
      className={`mobile-nav${open ? " open" : ""}`}
      role="dialog"
      aria-modal="true"
      aria-label="Navigation"
    >
      <Link href="/" className="mobile-nav__logo" onClick={onClose}>
        <Image
          src="/LogoTrans2.png"
          alt="Bloom Coffee Roasters"
          width={72}
          height={72}
          style={{ height: 72, width: "auto", mixBlendMode: "screen" }}
        />
      </Link>
      <span
        className="mobile-nav__close"
        role="button"
        tabIndex={0}
        aria-label="Close menu"
        onClick={onClose}
        onKeyDown={(e) => e.key === "Enter" && onClose()}
      >
        ✕
      </span>
      <a href="/#about" className="mob-link" onClick={onClose}>
        Our Story
      </a>
      <a href="/#coffees" className="mob-link" onClick={onClose}>
        The Collection
      </a>
      <a href="/#process" className="mob-link" onClick={onClose}>
        Process
      </a>
      <a href="/cart" className="mob-link" onClick={onClose}>
        Cart
      </a>
      <a href="/#coffees" className="mob-link" onClick={onClose}>
        Shop Now
      </a>
    </div>
  );
}
