module.exports = [
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/components/Section.module.scss [app-rsc] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "altRows": "Section-module-scss-module__-mlm7q__altRows",
  "compact": "Section-module-scss-module__-mlm7q__compact",
  "content": "Section-module-scss-module__-mlm7q__content",
  "dark": "Section-module-scss-module__-mlm7q__dark",
  "eyebrow": "Section-module-scss-module__-mlm7q__eyebrow",
  "light": "Section-module-scss-module__-mlm7q__light",
  "noPad": "Section-module-scss-module__-mlm7q__noPad",
  "raised": "Section-module-scss-module__-mlm7q__raised",
  "section": "Section-module-scss-module__-mlm7q__section",
  "subtitle": "Section-module-scss-module__-mlm7q__subtitle",
  "title": "Section-module-scss-module__-mlm7q__title",
});
}),
"[project]/components/Section.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// import { ReactNode } from "react";
// import styles from "./Section.module.scss";
// export default function Section({
//   title,
//   subtitle,
//   tone = "default",
//   children,
// }: {
//   title?: string;
//   subtitle?: string;
//   tone?: "default" | "raised";
//   children?: ReactNode;
// }) {
//   return (
//     <section
//       className={`${styles.section} ${tone === "raised" ? styles.raised : ""}`}
//     >
//       <div className="container">
//         {title && <h2 style={{ margin: "0 0 8px" }}>{title}</h2>}
//         {subtitle && (
//           <p className="muted" style={{ margin: "0 0 16px" }}>
//             {subtitle}
//           </p>
//         )}
//         {children}
//       </div>
//     </section>
//   );
// }
__turbopack_context__.s([
    "default",
    ()=>Section
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Section$2e$module$2e$scss__$5b$app$2d$rsc$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/components/Section.module.scss [app-rsc] (css module)");
;
;
function Section({ title, subtitle, tone = "default", variant, children, className = "" }) {
    const classes = [
        __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Section$2e$module$2e$scss__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].section,
        tone === "raised" ? __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Section$2e$module$2e$scss__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].raised : "",
        variant === "light" ? __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Section$2e$module$2e$scss__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].light : "",
        variant === "dark" ? __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Section$2e$module$2e$scss__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].dark : "",
        className
    ].filter(Boolean).join(" ");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: classes,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container",
            children: [
                title && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Section$2e$module$2e$scss__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].title,
                    children: title
                }, void 0, false, {
                    fileName: "[project]/components/Section.tsx",
                    lineNumber: 62,
                    columnNumber: 19
                }, this),
                subtitle && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Section$2e$module$2e$scss__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].subtitle,
                    children: subtitle
                }, void 0, false, {
                    fileName: "[project]/components/Section.tsx",
                    lineNumber: 63,
                    columnNumber: 22
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Section$2e$module$2e$scss__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].content,
                    children: children
                }, void 0, false, {
                    fileName: "[project]/components/Section.tsx",
                    lineNumber: 64,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/Section.tsx",
            lineNumber: 61,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/Section.tsx",
        lineNumber: 60,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/contact/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Page
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Section$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Section.tsx [app-rsc] (ecmascript)");
;
;
function Page() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Section$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
            title: "Contact Us",
            tone: "raised",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: "1219-T, Kalamboli Steel Market, Kalamboli, Panvel, Maharashtra, India – 410218. Email: info@la-sani.com"
            }, void 0, false, {
                fileName: "[project]/app/contact/page.tsx",
                lineNumber: 7,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/contact/page.tsx",
            lineNumber: 6,
            columnNumber: 7
        }, this)
    }, void 0, false);
}
}),
"[project]/app/contact/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/contact/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__38b977c1._.js.map