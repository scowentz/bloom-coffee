"use client";

import { useRef } from "react";
import type { Product } from "@/lib/products";
import { useCartStore } from "@/store/cart";

interface CoffeeCardProps {
  product: Product;
  delay: number;
}

export default function CoffeeCard({ product, delay }: CoffeeCardProps) {
  const addItem = useCartStore((s) => s.addItem);
  const btnRef = useRef<HTMLButtonElement>(null);

  const handleAdd = () => {
    addItem(product);
    const btn = btnRef.current;
    if (btn) {
      btn.textContent = "✓";
      btn.style.background = "var(--sage-mid)";
      setTimeout(() => {
        btn.textContent = "+";
        btn.style.background = "";
      }, 1600);
    }
  };

  const roastLabel =
    product.roast.charAt(0).toUpperCase() + product.roast.slice(1) + " Roast";

  return (
    <article className={`coffee-card reveal d${delay}`} data-roast={product.roast}>
      <div className="card-img">
        <div className={`card-bg ${product.bgClass}`} />
        <div className="card-pattern" aria-hidden="true">
          <div className="bean-art" />
        </div>
        <span className="roast-badge">{roastLabel}</span>
      </div>
      <div className="card-body">
        <h3 className="card-name">{product.name}</h3>
        <div className="card-region">
          {product.region} &bull; {product.elevation}
        </div>
        <div className="card-notes">
          {product.notes.map((note) => (
            <span key={note} className="note-pill">
              {note}
            </span>
          ))}
        </div>
        <div className="card-foot">
          <div className="card-price">
            ${product.price / 100} <small>/ 250g</small>
          </div>
          <button
            ref={btnRef}
            className="card-add"
            aria-label={`Add ${product.name} to cart`}
            onClick={handleAdd}
          >
            +
          </button>
        </div>
      </div>
    </article>
  );
}
