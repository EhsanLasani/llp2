// app/products/[slug]/page.tsx
import { notFound } from "next/navigation";
import { products } from "@/lib/products";

type PageProps = { params: { slug: string } };

export const generateMetadata = ({ params }: PageProps) => {
  const p = products[params.slug];
  return {
    title: p ? `${p.title} — Lasani` : "Product — Lasani",
    description: p?.subtitle ?? "Lasani product",
  };
};

export default function ProductPage({ params }: PageProps) {
  const product = products[params.slug];
  if (!product) return notFound();

  return (
    <main className="container" style={{ padding: "40px 0" }}>
      <nav style={{ marginBottom: 16, fontSize: 14 }}>
        <a href="/products">Products</a> &nbsp;/&nbsp;{" "}
        <strong>{product.title}</strong>
      </nav>

      <h1 style={{ margin: 0 }}>{product.title}</h1>
      {product.subtitle && (
        <p className="lead" style={{ marginTop: 8 }}>
          {product.subtitle}
        </p>
      )}

      <section style={{ marginTop: 32 }}>
        <ul>
          {product.specs?.map((s: string, i: number) => (
            <li key={i}>{s}</li>
          ))}
        </ul>
      </section>
    </main>
  );
}
