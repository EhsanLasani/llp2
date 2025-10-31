import type { ReactNode } from "react";
import "./globals.scss";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Lasani Fluid Power LLP",
  description: "Hydraulic tubes, chrome plated bars & precision machining",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <div className="site-shell">
          {/* Header (Carbon or your own) */}
          <Header />

          {/* Main grows to push footer to the bottom on short pages */}
          <main>{children}</main>

          {/* Footer is anchored to the bottom by the grid */}
          <Footer />
        </div>
      </body>
    </html>
  );
}
