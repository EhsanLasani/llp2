// app/products/page.tsx
import Link from "next/link";
import { Breadcrumb, BreadcrumbItem, Tile } from "@carbon/react";
import { products } from "@/lib/products";
const productList = Object.values(products);

export const metadata = {
  title: "Products — Lasani Fluid Power LLP",
  description: "Engineered tubes and hydraulic components.",
};

export default function ProductsIndex() {
  return (
    <main className="container" style={{ padding: "40px 0" }}>
      <Breadcrumb noTrailingSlash>
        <BreadcrumbItem href="/">Home</BreadcrumbItem>
        <BreadcrumbItem isCurrentPage>Products</BreadcrumbItem>
      </Breadcrumb>

      <h1>Products</h1>
      <p className="lead">
        Explore our range of precision-engineered tubes and hydraulic
        components.
      </p>

      <div
        style={{
          display: "grid",
          gap: 16,
          gridTemplateColumns: "repeat(3, 1fr)",
        }}
      >
        {productList.map((p) => (
          <Link
            key={p.slug}
            href={`/products/${p.slug}`}
            className="card"
            style={{ borderRadius: 12 }}
          >
            <Tile style={{ padding: 0 }}>
              {p.image && (
                <img
                  src={p.image}
                  alt={p.title}
                  style={{
                    width: "100%",
                    height: 180,
                    objectFit: "cover",
                    borderTopLeftRadius: 12,
                    borderTopRightRadius: 12,
                  }}
                />
              )}
              <div style={{ padding: 16 }}>
                <h3 style={{ margin: "0 0 6px" }}>{p.title}</h3>
                {p.subtitle && <div className="muted">{p.subtitle}</div>}
              </div>
            </Tile>
          </Link>
        ))}
      </div>
    </main>
  );
}
