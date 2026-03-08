import Link from "next/link";

export default function CheckoutCancel() {
  return (
    <div className="checkout-result">
      <div>
        <div className="checkout-result__icon">←</div>
        <h1 className="checkout-result__title">
          Checkout <em>cancelled</em>
        </h1>
        <p className="checkout-result__text">
          No worries — your cart is still waiting for you. Come back whenever
          you&apos;re ready.
        </p>
        <Link href="/cart" className="checkout-result__link">
          Return to Cart
        </Link>
      </div>
    </div>
  );
}
