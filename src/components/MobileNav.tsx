"use client";

import { useEffect } from "react";

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
