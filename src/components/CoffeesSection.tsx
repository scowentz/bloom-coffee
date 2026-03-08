"use client";

import { useState } from "react";
import { products } from "@/lib/products";
import CoffeeCard from "./CoffeeCard";

const filters = ["all", "light", "medium", "dark"] as const;

export default function CoffeesSection() {
  const [active, setActive] = useState<string>("all");

  return (
    <section className="coffees" id="coffees" aria-labelledby="coffees-heading">
      <div className="container">
        <div className="coffees__head">
          <div>
            <div className="section-label reveal">
              <span>The Collection</span>
            </div>
            <h2 className="coffees__headline reveal d1" id="coffees-heading">
              Single Origin
              <br />
              <em>Selections</em>
            </h2>
          </div>
          <div
            className="filter-row reveal d2"
            role="group"
            aria-label="Filter coffees by roast"
          >
            {filters.map((f) => (
              <button
                key={f}
                className={`filter-btn${active === f ? " active" : ""}`}
                onClick={() => setActive(f)}
              >
                {f.charAt(0).toUpperCase() + f.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <div className="coffee-grid" id="coffeeGrid">
          {products.map((product, i) => {
            const match = active === "all" || product.roast === active;
            return (
              <div
                key={product.id}
                className={match ? "" : "filtered-out"}
                style={
                  match
                    ? undefined
                    : { opacity: 0.25, transform: "scale(0.97)", pointerEvents: "none" }
                }
              >
                <CoffeeCard product={product} delay={(i % 4) + 1} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
