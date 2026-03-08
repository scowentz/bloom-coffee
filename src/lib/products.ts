export interface Product {
  id: string;
  name: string;
  region: string;
  elevation: string;
  roast: "light" | "medium" | "dark";
  notes: string[];
  price: number; // in cents
  bgClass: string;
  originTag: string;
}

export const products: Product[] = [
  {
    id: "guatemala-pena-blanca",
    name: "Guatemala Peña Blanca",
    region: "Camotan",
    elevation: "1,700-1,850m",
    roast: "medium",
    notes: ["Honey", "Cocoa", "Caramel"],
    price: 1800,
    bgClass: "bg-guatemala",
    originTag: "Guatemala",
  },
  /*
  {
    id: "ethiopia-yirgacheffe",
    name: "Yirgacheffe Kochere",
    region: "Gedeo Zone",
    elevation: "1,900–2,200m",
    roast: "light",
    notes: ["Jasmine", "Bergamot", "Stone Fruit", "Honey"],
    price: 2200,
    bgClass: "bg-ethiopia",
    originTag: "Ethiopia",
  },
  {
    id: "colombia-huila",
    name: "Huila Reserva",
    region: "Huila",
    elevation: "1,700–1,950m",
    roast: "medium",
    notes: ["Dark Chocolate", "Caramel", "Red Apple"],
    price: 1900,
    bgClass: "bg-colombia",
    originTag: "Colombia",
  },
  {
    id: "kenya-kirinyaga",
    name: "Kirinyaga AA",
    region: "Central Province",
    elevation: "1,750–2,100m",
    roast: "light",
    notes: ["Blackcurrant", "Tomato", "Grapefruit"],
    price: 2400,
    bgClass: "bg-kenya",
    originTag: "Kenya",
  },
  {
    id: "brazil-cerrado",
    name: "Cerrado Sunset",
    region: "Minas Gerais",
    elevation: "950–1,150m",
    roast: "dark",
    notes: ["Dark Cocoa", "Hazelnut", "Dried Fruit"],
    price: 1600,
    bgClass: "bg-brazil",
    originTag: "Brazil",
  },
  {
    id: "sumatra-mandheling",
    name: "Sumatra Mandheling",
    region: "North Sumatra",
    elevation: "1,000–1,500m",
    roast: "dark",
    notes: ["Cedar", "Dark Earth", "Tobacco"],
    price: 2000,
    bgClass: "bg-sumatra",
    originTag: "Indonesia",
  }, */
];
