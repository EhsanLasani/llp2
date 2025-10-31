module.exports = [
"[project]/components/CategoryRail.module.scss [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "active": "CategoryRail-module-scss-module__AbTTZG__active",
  "arrow": "CategoryRail-module-scss-module__AbTTZG__arrow",
  "badge": "CategoryRail-module-scss-module__AbTTZG__badge",
  "block": "CategoryRail-module-scss-module__AbTTZG__block",
  "caption": "CategoryRail-module-scss-module__AbTTZG__caption",
  "card": "CategoryRail-module-scss-module__AbTTZG__card",
  "cardTitle": "CategoryRail-module-scss-module__AbTTZG__cardTitle",
  "fade": "CategoryRail-module-scss-module__AbTTZG__fade",
  "head": "CategoryRail-module-scss-module__AbTTZG__head",
  "inner": "CategoryRail-module-scss-module__AbTTZG__inner",
  "left": "CategoryRail-module-scss-module__AbTTZG__left",
  "leftFade": "CategoryRail-module-scss-module__AbTTZG__leftFade",
  "meta": "CategoryRail-module-scss-module__AbTTZG__meta",
  "rail": "CategoryRail-module-scss-module__AbTTZG__rail",
  "railWrap": "CategoryRail-module-scss-module__AbTTZG__railWrap",
  "right": "CategoryRail-module-scss-module__AbTTZG__right",
  "rightFade": "CategoryRail-module-scss-module__AbTTZG__rightFade",
  "sub": "CategoryRail-module-scss-module__AbTTZG__sub",
  "tab": "CategoryRail-module-scss-module__AbTTZG__tab",
  "tabs": "CategoryRail-module-scss-module__AbTTZG__tabs",
  "thumb": "CategoryRail-module-scss-module__AbTTZG__thumb",
  "title": "CategoryRail-module-scss-module__AbTTZG__title",
});
}),
"[project]/lib/products.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// lib/products.ts
__turbopack_context__.s([
    "products",
    ()=>products
]);
const products = {
    "honed-tube": {
        slug: "honed-tube",
        title: "Honed / Burnish Tubes",
        subtitle: "Cold Drawn Seamless – EN10305-1 | DIN2391 ST52 / E355",
        image: "/images/products/honed-tube.jpeg",
        specs: [
            "OD range: 30–350 mm",
            "Length: up to 6 m",
            "Surface: Ra ≤ 0.4 μm",
            "Tolerance: H8/H9"
        ]
    }
};
}),
"[project]/components/CategoryRail.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CategoryRail
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CategoryRail$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/components/CategoryRail.module.scss [app-ssr] (css module)");
// Use your path alias if you have `@/*` in tsconfig. Otherwise: "../lib/products"
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$products$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/products.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
/** Build dataset from a single source of truth (products map) */ const productItems = Object.values(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$products$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["products"]).map((p)=>({
        title: p.title,
        caption: p.subtitle,
        href: `/products/${p.slug}`,
        img: p.image ?? "/images/placeholder.jpg"
    }));
const defaultData = {
    products: productItems,
    services: [
        {
            title: "Deep Hole Drilling",
            caption: "Up to 6m",
            href: "/services",
            img: "/images/services/deep-hole-drilling.jpeg"
        },
        {
            title: "Deep Hole Honing",
            caption: "Mirror finish",
            href: "/services",
            img: "/images/services/deep-hole-honing.jpg"
        },
        {
            title: "Port & End-Cap Welding",
            caption: "Fabrication",
            href: "/services",
            img: "/images/services/port-end-cap-welding.jpg"
        }
    ],
    capabilities: [
        {
            title: "ISO 9001:2015",
            caption: "QA discipline",
            href: "/about#quality",
            img: "/images/demo/cap-iso.jpg"
        },
        {
            title: "Large Inventory",
            caption: "500+ MT",
            href: "/about#scale",
            img: "/images/demo/cap-inventory.jpg"
        }
    ]
};
function CategoryRail({ data = defaultData, title = "A library you’ll want to get lost in.", subtitle = "Browse our products, services, and capabilities.", autoScroll = true, scrollStep = 1.5, scrollInterval = 16 }) {
    const [tab, setTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("products");
    const railRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const hovering = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    const userScrolled = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    const idleReset = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const items = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>data[tab] ?? [], [
        data,
        tab
    ]);
    // duplicate list to enable seamless looping
    const renderItems = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>[
            ...items,
            ...items
        ], [
        items
    ]);
    /** Button helpers — DO NOT call window.scrollBy */ const scrollRailBy = (dx)=>{
        const el = railRef.current;
        if (!el) return;
        el.scrollBy({
            left: dx,
            behavior: "smooth"
        });
    };
    /** Infinite auto-scroll loop that resets when reaching mid-point */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!autoScroll) return;
        const r = railRef.current;
        if (!r) return;
        let timer = null;
        const tick = ()=>{
            if (!railRef.current) return;
            if (hovering.current || userScrolled.current) {
                timer = window.setTimeout(tick, scrollInterval);
                return;
            }
            const half = r.scrollWidth / 2; // because we duplicated the list
            if (r.scrollLeft >= half) {
                r.scrollLeft = r.scrollLeft - half; // snap back to start of first half
            } else {
                r.scrollBy({
                    left: scrollStep,
                    behavior: "auto"
                });
            }
            timer = window.setTimeout(tick, scrollInterval);
        };
        timer = window.setTimeout(tick, scrollInterval);
        const onUserStart = ()=>{
            userScrolled.current = true;
            if (idleReset.current) window.clearTimeout(idleReset.current);
            idleReset.current = window.setTimeout(()=>userScrolled.current = false, 600);
        };
        r.addEventListener("wheel", onUserStart, {
            passive: true
        });
        r.addEventListener("touchstart", onUserStart, {
            passive: true
        });
        r.addEventListener("mousedown", onUserStart);
        return ()=>{
            if (timer) window.clearTimeout(timer);
            r.removeEventListener("wheel", onUserStart);
            r.removeEventListener("touchstart", onUserStart);
            r.removeEventListener("mousedown", onUserStart);
        };
    }, [
        autoScroll,
        scrollStep,
        scrollInterval,
        tab,
        items
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CategoryRail$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].block,
        "aria-labelledby": "cat-rail-title",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("container", __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CategoryRail$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].inner),
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CategoryRail$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].head,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            id: "cat-rail-title",
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CategoryRail$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].title,
                            children: title
                        }, void 0, false, {
                            fileName: "[project]/components/CategoryRail.tsx",
                            lineNumber: 154,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CategoryRail$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].sub,
                            children: subtitle
                        }, void 0, false, {
                            fileName: "[project]/components/CategoryRail.tsx",
                            lineNumber: 157,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CategoryRail$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].tabs,
                            role: "tablist",
                            "aria-label": "Category",
                            children: [
                                "products",
                                "services",
                                "capabilities"
                            ].map((key)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    role: "tab",
                                    "aria-selected": tab === key,
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CategoryRail$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].tab, tab === key && __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CategoryRail$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].active),
                                    onClick: ()=>setTab(key),
                                    type: "button",
                                    children: key[0].toUpperCase() + key.slice(1)
                                }, key, false, {
                                    fileName: "[project]/components/CategoryRail.tsx",
                                    lineNumber: 161,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/CategoryRail.tsx",
                            lineNumber: 159,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/CategoryRail.tsx",
                    lineNumber: 153,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CategoryRail$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].railWrap,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CategoryRail$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].arrow, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CategoryRail$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].left),
                            "aria-label": "Scroll left",
                            type: "button",
                            onClick: ()=>scrollRailBy(-360),
                            children: "‹"
                        }, void 0, false, {
                            fileName: "[project]/components/CategoryRail.tsx",
                            lineNumber: 176,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            ref: railRef,
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CategoryRail$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].rail,
                            onMouseEnter: ()=>hovering.current = true,
                            onMouseLeave: ()=>hovering.current = false,
                            onWheel: ()=>userScrolled.current = true,
                            children: renderItems.map((it, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: it.href,
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CategoryRail$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].card,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CategoryRail$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].thumb,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                    src: it.img,
                                                    alt: it.title,
                                                    loading: "lazy"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/CategoryRail.tsx",
                                                    lineNumber: 195,
                                                    columnNumber: 19
                                                }, this),
                                                it.tag && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CategoryRail$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].badge,
                                                    children: it.tag
                                                }, void 0, false, {
                                                    fileName: "[project]/components/CategoryRail.tsx",
                                                    lineNumber: 196,
                                                    columnNumber: 30
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/CategoryRail.tsx",
                                            lineNumber: 194,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CategoryRail$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].meta,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CategoryRail$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].cardTitle,
                                                    children: it.title
                                                }, void 0, false, {
                                                    fileName: "[project]/components/CategoryRail.tsx",
                                                    lineNumber: 199,
                                                    columnNumber: 19
                                                }, this),
                                                it.caption && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CategoryRail$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].caption,
                                                    children: it.caption
                                                }, void 0, false, {
                                                    fileName: "[project]/components/CategoryRail.tsx",
                                                    lineNumber: 201,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/CategoryRail.tsx",
                                            lineNumber: 198,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, `${tab}-${i}`, true, {
                                    fileName: "[project]/components/CategoryRail.tsx",
                                    lineNumber: 193,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/CategoryRail.tsx",
                            lineNumber: 185,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CategoryRail$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].arrow, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CategoryRail$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].right),
                            "aria-label": "Scroll right",
                            type: "button",
                            onClick: ()=>scrollRailBy(+360),
                            children: "›"
                        }, void 0, false, {
                            fileName: "[project]/components/CategoryRail.tsx",
                            lineNumber: 208,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CategoryRail$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].fade, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CategoryRail$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].leftFade)
                        }, void 0, false, {
                            fileName: "[project]/components/CategoryRail.tsx",
                            lineNumber: 217,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CategoryRail$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].fade, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CategoryRail$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].rightFade)
                        }, void 0, false, {
                            fileName: "[project]/components/CategoryRail.tsx",
                            lineNumber: 218,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/CategoryRail.tsx",
                    lineNumber: 175,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/CategoryRail.tsx",
            lineNumber: 152,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/CategoryRail.tsx",
        lineNumber: 151,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=_f941f590._.js.map