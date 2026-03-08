"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { useCartStore } from "@/store/cart";

const PAYMENT_LINK = "https://buy.stripe.com/test_aFafZhfftfYQ7tlgzBfYY00";

export default function CartPage() {
  const [mounted, setMounted] = useState(false);
  const { items, removeItem, updateQuantity, totalPrice } = useCartStore();

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <>
        <Nav />
        <div className="cart-page">
          <div className="container">
            <h1 className="cart-page__title">
              Your <em>Cart</em>
            </h1>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Nav />
      <div className="cart-page">
        <div className="container">
          <h1 className="cart-page__title">
            Your <em>Cart</em>
          </h1>

          {items.length === 0 ? (
            <div className="cart-empty">
              <p>Your cart is empty — time to explore our collection.</p>
              <Link href="/#coffees" className="btn-primary">
                <span>Shop Coffees</span>
              </Link>
            </div>
          ) : (
            <>
              <div className="cart-items">
                {items.map((item) => (
                  <div key={item.product.id} className="cart-item">
                    <div
                      className={`cart-item__color ${item.product.bgClass}`}
                    />
                    <div className="cart-item__info">
                      <div className="cart-item__name">
                        {item.product.name}
                      </div>
                      <div className="cart-item__region">
                        {item.product.region} &bull; {item.product.elevation}
                      </div>
                    </div>
                    <div className="cart-item__qty">
                      <button
                        onClick={() =>
                          updateQuantity(item.product.id, item.quantity - 1)
                        }
                        aria-label="Decrease quantity"
                      >
                        −
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        onClick={() =>
                          updateQuantity(item.product.id, item.quantity + 1)
                        }
                        aria-label="Increase quantity"
                      >
                        +
                      </button>
                    </div>
                    <div className="cart-item__price">
                      ${(item.product.price * item.quantity) / 100}
                    </div>
                    <button
                      className="cart-item__remove"
                      onClick={() => removeItem(item.product.id)}
                      aria-label={`Remove ${item.product.name}`}
                    >
                      ✕
                    </button>
                  </div>
                ))}
              </div>

              <div className="cart-summary">
                <div className="cart-summary__total">
                  <small>Total</small>${totalPrice() / 100}
                </div>
                <a
                  href={PAYMENT_LINK}
                  className="cart-checkout-btn"
                >
                  <span>Checkout</span>
                </a>
              </div>
            </>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}
