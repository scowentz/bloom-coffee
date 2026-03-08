"use client";

import { useEffect, useState } from "react";
import { useCartStore } from "@/store/cart";

export default function CartIcon() {
  const [mounted, setMounted] = useState(false);
  const count = useCartStore((s) => s.totalItems());

  useEffect(() => setMounted(true), []);

  return (
    <span className="cart-icon-wrapper">
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
        <line x1="3" y1="6" x2="21" y2="6" />
        <path d="M16 10a4 4 0 01-8 0" />
      </svg>
      {mounted && count > 0 && <span className="cart-badge">{count}</span>}
    </span>
  );
}
