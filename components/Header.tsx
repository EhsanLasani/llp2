// // import styles from "./Header.module.scss";
// // import {
// //   Header as CarbonHeader,
// //   HeaderName,
// //   HeaderNavigation,
// //   HeaderMenuItem,
// // } from "@carbon/react";

// // export default function Header() {
// //   return (
// //     <header className={styles.header}>
// //       <CarbonHeader aria-label="Lasani Fluid Power LLP">
// //         <div className={styles.inner}>
// //           <HeaderName href="/" prefix="">
// //             <img src="/images/logo.png" alt="lasani" style={{ height: 50 }} />
// //           </HeaderName>
// //           <HeaderNavigation aria-label="Main navigation">
// //             <HeaderMenuItem href="/products">Products</HeaderMenuItem>
// //             <HeaderMenuItem href="/services">Services</HeaderMenuItem>
// //             <HeaderMenuItem href="/insight">Insight</HeaderMenuItem>
// //             <HeaderMenuItem href="/about">About</HeaderMenuItem>
// //             <HeaderMenuItem href="/contact">Contact</HeaderMenuItem>
// //           </HeaderNavigation>
// //         </div>
// //       </CarbonHeader>
// //     </header>
// //   );
// // }
// import {
//   Header as CarbonHeader,
//   HeaderName,
//   HeaderNavigation,
//   HeaderMenuItem,
// } from "@carbon/react";
// import styles from "./Header.module.scss";

// export default function Header() {
//   return (
//     <header className={styles.header}>
//       <CarbonHeader aria-label="Lasani Fluid Power LLP">
//         <div className={styles.inner}>
//           <HeaderName href="/" prefix="">
//             <img src="/images/logo.png" alt="lasani" style={{ height: 50 }} />
//           </HeaderName>
//           <HeaderNavigation aria-label="Main navigation">
//             <HeaderMenuItem className={styles.navLink} href="/products">
//               Products
//             </HeaderMenuItem>
//             <HeaderMenuItem className={styles.navLink} href="/services">
//               Services
//             </HeaderMenuItem>
//             <HeaderMenuItem className={styles.navLink} href="/insight">
//               Insight
//             </HeaderMenuItem>
//             <HeaderMenuItem className={styles.navLink} href="/about">
//               About
//             </HeaderMenuItem>
//             <HeaderMenuItem className={styles.navLink} href="/contact">
//               Contact
//             </HeaderMenuItem>
//           </HeaderNavigation>
//         </div>
//       </CarbonHeader>
//     </header>
//   );
// }
// Header.tsx
// Header.tsx
"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import {
  Header as CarbonHeader,
  HeaderName,
  HeaderNavigation,
  HeaderMenuItem,
  HeaderMenuButton,
  SideNav,
  SideNavItems,
  SideNavLink,
} from "@carbon/react";
import styles from "./Header.module.scss";

const DESKTOP_BP = 992; // px (match your CSS breakpoints)

export default function Header() {
  const [expanded, setExpanded] = useState(false);
  const pathname = usePathname();

  // Close on route change
  useEffect(() => {
    setExpanded(false);
  }, [pathname]);

  // Auto-close when switching to desktop width
  useEffect(() => {
    const mql = window.matchMedia(`(min-width:${DESKTOP_BP}px)`);
    const handle = (e: MediaQueryListEvent | MediaQueryList) => {
      const matches = "matches" in e ? e.matches : e.matches;
      if (matches) setExpanded(false);
    };
    handle(mql); // set initial state on mount
    mql.addEventListener("change", handle as EventListener);
    return () => mql.removeEventListener("change", handle as EventListener);
  }, []);

  return (
    <header className={styles.header}>
      <CarbonHeader aria-label="Lasani Fluid Power LLP">
        <HeaderMenuButton
          aria-label={expanded ? "Close menu" : "Open menu"}
          isActive={expanded}
          onClick={() => setExpanded((v) => !v)}
          className={styles.menuButton}
        />

        <div className={styles.inner}>
          <HeaderName href="/" prefix="">
            <img src="/images/logo.png" alt="lasani" style={{ height: 50 }} />
          </HeaderName>

          {/* Desktop navigation */}
          <HeaderNavigation aria-label="Main navigation" className={styles.nav}>
            <HeaderMenuItem href="/">Home</HeaderMenuItem>
            <HeaderMenuItem className={styles.navLink} href="/products">
              Products
            </HeaderMenuItem>
            <HeaderMenuItem className={styles.navLink} href="/services">
              Services
            </HeaderMenuItem>
            <HeaderMenuItem className={styles.navLink} href="/insight">
              Insight
            </HeaderMenuItem>
            <HeaderMenuItem className={styles.navLink} href="/about">
              About
            </HeaderMenuItem>
            <HeaderMenuItem className={styles.navLink} href="/contact">
              Contact
            </HeaderMenuItem>
          </HeaderNavigation>
        </div>

        {/* Mobile overlay nav */}
        <SideNav
          aria-label="Side navigation"
          expanded={expanded}
          isFixedNav={false}
          isChildOfHeader={true}
          onOverlayClick={() => setExpanded(false)}
        >
          <SideNavItems>
            <SideNavLink href="/products">Products</SideNavLink>
            <SideNavLink href="/services">Services</SideNavLink>
            <SideNavLink href="/insight">Insight</SideNavLink>
            <SideNavLink href="/about">About</SideNavLink>
            <SideNavLink href="/contact">Contact</SideNavLink>
          </SideNavItems>
        </SideNav>
      </CarbonHeader>
    </header>
  );
}
