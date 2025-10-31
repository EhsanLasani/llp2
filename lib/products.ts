// lib/products.ts
export type Product = {
  slug: string;
  title: string;
  subtitle?: string;
  image?: string;
  specs?: string[];
};

export const products: Record<string, Product> = {
  "honed-tube": {
    slug: "honed-tube",
    title: "Honed / Burnish Tubes",
    subtitle: "Cold Drawn Seamless – EN10305-1 | DIN2391 ST52 / E355",
    image: "/images/products/honed-tube.jpeg",
    specs: [
      "OD range: 30–350 mm",
      "Length: up to 6 m",
      "Surface: Ra ≤ 0.4 μm",
      "Tolerance: H8/H9",
    ],
  },
  // …add the rest
} as const;
