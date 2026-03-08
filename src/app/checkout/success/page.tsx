"use client";

import { useEffect } from "react";
import Link from "next/link";
import { useCartStore } from "@/store/cart";

export default function CheckoutSuccess() {
  const clearCart = useCartStore((s) => s.clearCart);

  useEffect(() => {
    clearCart();
  }, [clearCart]);

  return (
    <div className="checkout-result">
      <div>
        <div className="checkout-result__icon">☕</div>
        <h1 className="checkout-result__title">
          Thank you for your <em>order</em>
        </h1>
        <p className="checkout-result__text">
          Your coffee is being prepared with care. You&apos;ll receive a
          confirmation email shortly with tracking details.
        </p>
        <Link href="/" className="checkout-result__link">
          Back to Bloom
        </Link>
      </div>
    </div>
  );
}
