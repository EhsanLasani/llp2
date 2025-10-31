(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/CategoryRail.module.scss [app-client] (css module)", ((__turbopack_context__) => {

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
"[project]/components/CategoryRail.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CategoryRail
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CategoryRail$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/components/CategoryRail.module.scss [app-client] (css module)");
(()=>{
    const e = new Error("Cannot find module '../../lib/products'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
// helper for typed routes (optional)
const R = (p)=>p;
_c = R;
// Build products array from the map — single source of truth
const productItems = Object.values(products).map((p)=>({
        title: p.title,
        caption: p.subtitle,
        href: R(`/products/${p.slug}`),
        img: p.image ?? "/images/placeholder.jpg"
    }));
const data = {
    products: productItems,
    services: [
        // keep or point temporarily to /services until you add /services/[slug]
        {
            title: "Deep Hole Drilling",
            caption: "Up to 6m",
            href: R("/services"),
            img: "/images/services/deep-hole-drilling.jpeg"
        }
    ],
    capabilities: [
        {
            title: "ISO 9001:2015",
            caption: "QA discipline",
            href: R("/about#quality"),
            img: "/images/demo/cap-iso.jpg"
        }
    ]
};
function CategoryRail({ data = Data, title = "A library you’ll want to get lost in.", subtitle = "Browse our products, services, and capabilities.", autoScroll = false, scrollStep = 1.5, scrollInterval = 16 }) {
    _s();
    const [tab, setTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("products");
    const railRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const hovering = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const userScrolled = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const resetTimer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const items = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "CategoryRail.useMemo[items]": ()=>data[tab] ?? []
    }["CategoryRail.useMemo[items]"], [
        data,
        tab
    ]);
    // after: const items = useMemo(() => data[tab] ?? [], [data, tab]);
    const renderItems = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "CategoryRail.useMemo[renderItems]": ()=>[
                ...items,
                ...items
            ]
    }["CategoryRail.useMemo[renderItems]"], [
        items
    ]);
    const scrollBy = (dx)=>{
        const el = railRef.current;
        if (!el) return;
        el.scrollBy({
            left: dx,
            behavior: "smooth"
        });
        userScrolled.current = true;
        if (resetTimer.current) window.clearTimeout(resetTimer.current);
        resetTimer.current = window.setTimeout(()=>userScrolled.current = false, 600);
    };
    // Auto-scroll engine
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CategoryRail.useEffect": ()=>{
            if (!autoScroll) return;
            const r = railRef.current;
            if (!r) return;
            let id;
            const tick = {
                "CategoryRail.useEffect.tick": ()=>{
                    if (!railRef.current) return;
                    if (hovering.current || userScrolled.current) {
                        id = window.setTimeout(tick, scrollInterval ?? 16);
                        return;
                    }
                    // amount to move each tick
                    const step = scrollStep ?? 1.5;
                    // total width of the duplicated list
                    const total = r.scrollWidth;
                    // we only want to “play” across the first half (original list)
                    const half = total / 2;
                    // if we've scrolled past half, wrap back by half without a visual jump
                    if (r.scrollLeft >= half) {
                        r.scrollLeft = r.scrollLeft - half;
                    } else {
                        r.scrollLeft = r.scrollLeft + step;
                    }
                    id = window.setTimeout(tick, scrollInterval ?? 16);
                }
            }["CategoryRail.useEffect.tick"];
            id = window.setTimeout(tick, scrollInterval ?? 16);
            const onUserStart = {
                "CategoryRail.useEffect.onUserStart": ()=>{
                    userScrolled.current = true;
                    window.clearTimeout(resetTimer.current);
                    resetTimer.current = window.setTimeout({
                        "CategoryRail.useEffect.onUserStart": ()=>userScrolled.current = false
                    }["CategoryRail.useEffect.onUserStart"], 500);
                }
            }["CategoryRail.useEffect.onUserStart"];
            r.addEventListener("wheel", onUserStart, {
                passive: true
            });
            r.addEventListener("touchstart", onUserStart, {
                passive: true
            });
            r.addEventListener("mousedown", onUserStart);
            return ({
                "CategoryRail.useEffect": ()=>{
                    window.clearTimeout(id);
                    r.removeEventListener("wheel", onUserStart);
                    r.removeEventListener("touchstart", onUserStart);
                    r.removeEventListener("mousedown", onUserStart);
                }
            })["CategoryRail.useEffect"];
        }
    }["CategoryRail.useEffect"], [
        autoScroll,
        scrollStep,
        scrollInterval,
        tab,
        items
    ]); //
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CategoryRail$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].block,
        "aria-labelledby": "cat-rail-title",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("container", __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CategoryRail$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].inner),
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CategoryRail$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].head,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            id: "cat-rail-title",
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CategoryRail$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].title,
                            children: title
                        }, void 0, false, {
                            fileName: "[project]/components/CategoryRail.tsx",
                            lineNumber: 149,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CategoryRail$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sub,
                            children: subtitle
                        }, void 0, false, {
                            fileName: "[project]/components/CategoryRail.tsx",
                            lineNumber: 152,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CategoryRail$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].tabs,
                            role: "tablist",
                            "aria-label": "Category",
                            children: [
                                "products",
                                "services",
                                "capabilities"
                            ].map((key)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    role: "tab",
                                    "aria-selected": tab === key,
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CategoryRail$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].tab, tab === key && __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CategoryRail$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].active),
                                    onClick: ()=>setTab(key),
                                    type: "button",
                                    children: key[0].toUpperCase() + key.slice(1)
                                }, key, false, {
                                    fileName: "[project]/components/CategoryRail.tsx",
                                    lineNumber: 156,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/CategoryRail.tsx",
                            lineNumber: 154,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/CategoryRail.tsx",
                    lineNumber: 148,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CategoryRail$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].railWrap,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CategoryRail$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].arrow, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CategoryRail$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].left),
                            "aria-label": "Scroll left",
                            type: "button",
                            onClick: ()=>scrollBy(-360),
                            children: "‹"
                        }, void 0, false, {
                            fileName: "[project]/components/CategoryRail.tsx",
                            lineNumber: 171,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            ref: railRef,
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CategoryRail$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].rail,
                            onMouseEnter: ()=>hovering.current = true,
                            onMouseLeave: ()=>hovering.current = false,
                            onWheel: ()=>userScrolled.current = true,
                            children: renderItems.map((it, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: it.href,
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CategoryRail$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].card,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CategoryRail$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].thumb,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                    src: it.img,
                                                    alt: it.title,
                                                    loading: "lazy"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/CategoryRail.tsx",
                                                    lineNumber: 192,
                                                    columnNumber: 19
                                                }, this),
                                                it.tag && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CategoryRail$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].badge,
                                                    children: it.tag
                                                }, void 0, false, {
                                                    fileName: "[project]/components/CategoryRail.tsx",
                                                    lineNumber: 193,
                                                    columnNumber: 30
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/CategoryRail.tsx",
                                            lineNumber: 189,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CategoryRail$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].meta,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CategoryRail$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardTitle,
                                                    children: it.title
                                                }, void 0, false, {
                                                    fileName: "[project]/components/CategoryRail.tsx",
                                                    lineNumber: 196,
                                                    columnNumber: 19
                                                }, this),
                                                it.caption && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CategoryRail$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].caption,
                                                    children: it.caption
                                                }, void 0, false, {
                                                    fileName: "[project]/components/CategoryRail.tsx",
                                                    lineNumber: 198,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/CategoryRail.tsx",
                                            lineNumber: 195,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, `${tab}-${i}`, true, {
                                    fileName: "[project]/components/CategoryRail.tsx",
                                    lineNumber: 188,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/CategoryRail.tsx",
                            lineNumber: 180,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CategoryRail$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].arrow, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CategoryRail$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].right),
                            "aria-label": "Scroll right",
                            type: "button",
                            onClick: ()=>scrollBy(360),
                            children: "›"
                        }, void 0, false, {
                            fileName: "[project]/components/CategoryRail.tsx",
                            lineNumber: 205,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CategoryRail$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].fade, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CategoryRail$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].leftFade)
                        }, void 0, false, {
                            fileName: "[project]/components/CategoryRail.tsx",
                            lineNumber: 214,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CategoryRail$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].fade, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CategoryRail$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].rightFade)
                        }, void 0, false, {
                            fileName: "[project]/components/CategoryRail.tsx",
                            lineNumber: 215,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/CategoryRail.tsx",
                    lineNumber: 170,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/CategoryRail.tsx",
            lineNumber: 147,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/CategoryRail.tsx",
        lineNumber: 146,
        columnNumber: 5
    }, this);
}
_s(CategoryRail, "MNXDdq/VsMDKj3zh7OxSn4kDrEg=");
_c1 = CategoryRail;
var _c, _c1;
__turbopack_context__.k.register(_c, "R");
__turbopack_context__.k.register(_c1, "CategoryRail");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=components_627a81b8._.js.map