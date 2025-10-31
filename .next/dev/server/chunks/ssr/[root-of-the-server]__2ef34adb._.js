module.exports = [
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/components/Hero.module.scss [app-rsc] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "actions": "Hero-module-scss-module__mKgCGG__actions",
  "brandDark": "Hero-module-scss-module__mKgCGG__brandDark",
  "center": "Hero-module-scss-module__mKgCGG__center",
  "copy": "Hero-module-scss-module__mKgCGG__copy",
  "dark": "Hero-module-scss-module__mKgCGG__dark",
  "hero": "Hero-module-scss-module__mKgCGG__hero",
  "img": "Hero-module-scss-module__mKgCGG__img",
  "lead": "Hero-module-scss-module__mKgCGG__lead",
  "left": "Hero-module-scss-module__mKgCGG__left",
  "light": "Hero-module-scss-module__mKgCGG__light",
  "media": "Hero-module-scss-module__mKgCGG__media",
  "normal": "Hero-module-scss-module__mKgCGG__normal",
  "tall": "Hero-module-scss-module__mKgCGG__tall",
  "title": "Hero-module-scss-module__mKgCGG__title",
  "withMedia": "Hero-module-scss-module__mKgCGG__withMedia",
  "withMediaLeft": "Hero-module-scss-module__mKgCGG__withMediaLeft",
  "withMediaRight": "Hero-module-scss-module__mKgCGG__withMediaRight",
  "withMediaTop": "Hero-module-scss-module__mKgCGG__withMediaTop",
  "wrap": "Hero-module-scss-module__mKgCGG__wrap",
  "xtall": "Hero-module-scss-module__mKgCGG__xtall",
});
}),
"[project]/components/Hero.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// components/Hero.tsx
__turbopack_context__.s([
    "default",
    ()=>Hero
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Hero$2e$module$2e$scss__$5b$app$2d$rsc$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/components/Hero.module.scss [app-rsc] (css module)");
;
;
;
;
function Hero({ title, subtitle, align = "center", variant = "light", size = "tall", media, mediaPlacement = "right", className, children }) {
    const hasMedia = Boolean(media);
    const isTop = hasMedia && mediaPlacement === "top";
    // Map placement to CSS Module classes
    const placementClass = hasMedia ? mediaPlacement === "top" ? __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Hero$2e$module$2e$scss__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].withMediaTop : mediaPlacement === "left" ? __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Hero$2e$module$2e$scss__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].withMediaLeft : __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Hero$2e$module$2e$scss__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].withMediaRight : undefined;
    const mediaBlock = hasMedia ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Hero$2e$module$2e$scss__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].media,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
            src: media.src,
            alt: media.alt,
            width: media.width ?? 720,
            height: media.height ?? 540,
            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Hero$2e$module$2e$scss__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].img,
            priority: media.priority
        }, void 0, false, {
            fileName: "[project]/components/Hero.tsx",
            lineNumber: 51,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/Hero.tsx",
        lineNumber: 50,
        columnNumber: 5
    }, this) : null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Hero$2e$module$2e$scss__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].hero, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Hero$2e$module$2e$scss__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"][variant], __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Hero$2e$module$2e$scss__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"][size], className),
        "data-align": align,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])("container", __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Hero$2e$module$2e$scss__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].wrap, hasMedia && __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Hero$2e$module$2e$scss__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].withMedia, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Hero$2e$module$2e$scss__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"][align], placementClass),
            children: [
                isTop && mediaBlock,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Hero$2e$module$2e$scss__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].copy,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Hero$2e$module$2e$scss__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].title,
                            children: title
                        }, void 0, false, {
                            fileName: "[project]/components/Hero.tsx",
                            lineNumber: 78,
                            columnNumber: 11
                        }, this),
                        subtitle && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Hero$2e$module$2e$scss__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].lead,
                            children: subtitle
                        }, void 0, false, {
                            fileName: "[project]/components/Hero.tsx",
                            lineNumber: 79,
                            columnNumber: 24
                        }, this),
                        children ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Hero$2e$module$2e$scss__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].actions,
                            children: children
                        }, void 0, false, {
                            fileName: "[project]/components/Hero.tsx",
                            lineNumber: 80,
                            columnNumber: 23
                        }, this) : null
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Hero.tsx",
                    lineNumber: 77,
                    columnNumber: 9
                }, this),
                !isTop && mediaBlock
            ]
        }, void 0, true, {
            fileName: "[project]/components/Hero.tsx",
            lineNumber: 67,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/Hero.tsx",
        lineNumber: 63,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/CategoryRail.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* ----------------------------------------------
   Component
---------------------------------------------- */ __turbopack_context__.s([
    "default",
    ()=>CategoryRail
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
;
function CategoryRail({ data = demoData, title = "A library you’ll want to get lost in.", subtitle = "Browse our products, services, and capabilities.", autoScroll = false, scrollStep = 1.5, scrollInterval = 16 }) {
    const [tab, setTab] = useState("products");
    const railRef = useRef(null);
    const hovering = useRef(false);
    const userScrolled = useRef(false);
    const resetTimer = useRef(null);
    const items = useMemo(()=>data[tab] ?? [], [
        data,
        tab
    ]);
    // after: const items = useMemo(() => data[tab] ?? [], [data, tab]);
    const renderItems = useMemo(()=>[
            ...items,
            ...items
        ], [
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
    useEffect(()=>{
        if (!autoScroll) return;
        const r = railRef.current;
        if (!r) return;
        let id;
        const tick = ()=>{
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
        };
        id = window.setTimeout(tick, scrollInterval ?? 16);
        const onUserStart = ()=>{
            userScrolled.current = true;
            window.clearTimeout(resetTimer.current);
            resetTimer.current = window.setTimeout(()=>userScrolled.current = false, 500);
        };
        r.addEventListener("wheel", onUserStart, {
            passive: true
        });
        r.addEventListener("touchstart", onUserStart, {
            passive: true
        });
        r.addEventListener("mousedown", onUserStart);
        return ()=>{
            window.clearTimeout(id);
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
    ]); //
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: styles.block,
        "aria-labelledby": "cat-rail-title",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: clsx("container", styles.inner),
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                    className: styles.head,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            id: "cat-rail-title",
                            className: styles.title,
                            children: title
                        }, void 0, false, {
                            fileName: "[project]/components/CategoryRail.tsx",
                            lineNumber: 98,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: styles.sub,
                            children: subtitle
                        }, void 0, false, {
                            fileName: "[project]/components/CategoryRail.tsx",
                            lineNumber: 101,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: styles.tabs,
                            role: "tablist",
                            "aria-label": "Category",
                            children: [
                                "products",
                                "services",
                                "capabilities"
                            ].map((key)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    role: "tab",
                                    "aria-selected": tab === key,
                                    className: clsx(styles.tab, tab === key && styles.active),
                                    onClick: ()=>setTab(key),
                                    type: "button",
                                    children: key[0].toUpperCase() + key.slice(1)
                                }, key, false, {
                                    fileName: "[project]/components/CategoryRail.tsx",
                                    lineNumber: 105,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/CategoryRail.tsx",
                            lineNumber: 103,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/CategoryRail.tsx",
                    lineNumber: 97,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: styles.railWrap,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: clsx(styles.arrow, styles.left),
                            "aria-label": "Scroll left",
                            type: "button",
                            onClick: ()=>scrollBy(-360),
                            children: "‹"
                        }, void 0, false, {
                            fileName: "[project]/components/CategoryRail.tsx",
                            lineNumber: 120,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            ref: railRef,
                            className: styles.rail,
                            onMouseEnter: ()=>hovering.current = true,
                            onMouseLeave: ()=>hovering.current = false,
                            onWheel: ()=>userScrolled.current = true,
                            children: renderItems.map((it, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Link, {
                                    href: it.href,
                                    className: styles.card,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: styles.thumb,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                    src: it.img,
                                                    alt: it.title,
                                                    loading: "lazy"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/CategoryRail.tsx",
                                                    lineNumber: 141,
                                                    columnNumber: 19
                                                }, this),
                                                it.tag && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: styles.badge,
                                                    children: it.tag
                                                }, void 0, false, {
                                                    fileName: "[project]/components/CategoryRail.tsx",
                                                    lineNumber: 142,
                                                    columnNumber: 30
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/CategoryRail.tsx",
                                            lineNumber: 138,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: styles.meta,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: styles.cardTitle,
                                                    children: it.title
                                                }, void 0, false, {
                                                    fileName: "[project]/components/CategoryRail.tsx",
                                                    lineNumber: 145,
                                                    columnNumber: 19
                                                }, this),
                                                it.caption && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: styles.caption,
                                                    children: it.caption
                                                }, void 0, false, {
                                                    fileName: "[project]/components/CategoryRail.tsx",
                                                    lineNumber: 147,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/CategoryRail.tsx",
                                            lineNumber: 144,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, `${tab}-${i}`, true, {
                                    fileName: "[project]/components/CategoryRail.tsx",
                                    lineNumber: 137,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/CategoryRail.tsx",
                            lineNumber: 129,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: clsx(styles.arrow, styles.right),
                            "aria-label": "Scroll right",
                            type: "button",
                            onClick: ()=>scrollBy(360),
                            children: "›"
                        }, void 0, false, {
                            fileName: "[project]/components/CategoryRail.tsx",
                            lineNumber: 154,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: clsx(styles.fade, styles.leftFade)
                        }, void 0, false, {
                            fileName: "[project]/components/CategoryRail.tsx",
                            lineNumber: 163,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: clsx(styles.fade, styles.rightFade)
                        }, void 0, false, {
                            fileName: "[project]/components/CategoryRail.tsx",
                            lineNumber: 164,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/CategoryRail.tsx",
                    lineNumber: 119,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/CategoryRail.tsx",
            lineNumber: 96,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/CategoryRail.tsx",
        lineNumber: 95,
        columnNumber: 5
    }, this);
}
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
"[project]/components/FeatureCard.module.scss [app-rsc] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "badge": "FeatureCard-module-scss-module__IQhxVa__badge",
  "card": "FeatureCard-module-scss-module__IQhxVa__card",
  "desc": "FeatureCard-module-scss-module__IQhxVa__desc",
  "icon": "FeatureCard-module-scss-module__IQhxVa__icon",
  "title": "FeatureCard-module-scss-module__IQhxVa__title",
});
}),
"[project]/components/FeatureCard.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FeatureCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$FeatureCard$2e$module$2e$scss__$5b$app$2d$rsc$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/components/FeatureCard.module.scss [app-rsc] (css module)");
;
;
function FeatureCard({ icon, title, badge, children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$FeatureCard$2e$module$2e$scss__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].card,
        children: [
            icon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$FeatureCard$2e$module$2e$scss__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].icon,
                children: icon
            }, void 0, false, {
                fileName: "[project]/components/FeatureCard.tsx",
                lineNumber: 17,
                columnNumber: 16
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$FeatureCard$2e$module$2e$scss__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].title,
                children: title
            }, void 0, false, {
                fileName: "[project]/components/FeatureCard.tsx",
                lineNumber: 18,
                columnNumber: 7
            }, this),
            badge && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$FeatureCard$2e$module$2e$scss__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].badge,
                children: badge
            }, void 0, false, {
                fileName: "[project]/components/FeatureCard.tsx",
                lineNumber: 19,
                columnNumber: 17
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$FeatureCard$2e$module$2e$scss__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].desc,
                children: children
            }, void 0, false, {
                fileName: "[project]/components/FeatureCard.tsx",
                lineNumber: 20,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/FeatureCard.tsx",
        lineNumber: 16,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Page
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Hero$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Hero.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CategoryRail$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/CategoryRail.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Section$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Section.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$FeatureCard$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/FeatureCard.tsx [app-rsc] (ecmascript)");
;
;
;
;
;
;
function Page() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Hero$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                title: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        "Reliability. Commitment. Value.",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 14,
                            columnNumber: 13
                        }, void 0),
                        "Engineered into Every Tube."
                    ]
                }, void 0, true),
                subtitle: "Lasani Fluid Power LLP is India’s OEM partner of choice for over four decades — combining globally sourced materials, in-house precision super-finish machining, and an efficient supply-chain network to deliver unmatched reliability and value across every cylinder tube supply.",
                align: "center",
                variant: "light",
                size: "xtall",
                media: {
                    src: "/images/logo/logodarkBlueTransparent.png",
                    alt: "Lasani logo"
                },
                mediaPlacement: "top",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                        href: "/products",
                        className: "cta primary",
                        children: "Explore products"
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 28,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                        href: "/contact",
                        className: "cta secondary",
                        children: "Speak to an expert"
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 31,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 10,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Section$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                // eyebrow="Why Lasani"
                title: "Why Lasani is the preferred partner for OEMs and MROs",
                subtitle: " At Lasani Fluid Power LLP, our edge lies in the synergy of engineering precision, high-volume inventory, and on-time delivery.   With ISO 9001:2015–certified systems and fully integrated machining expertise, we ensure every project meets uncompromising standards of accuracy, traceability, and performance.",
                tone: "raised",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$FeatureCard$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                            title: "Stock & Scale",
                            badge: "Ready at Dispatch",
                            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                width: "20",
                                height: "20",
                                viewBox: "0 0 24 24",
                                "aria-hidden": "true",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    fill: "currentColor",
                                    d: "M3 7h18v10H3zM3 5h18v2H3zM6 9h5v6H6z"
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 54,
                                    columnNumber: 17
                                }, void 0)
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 48,
                                columnNumber: 15
                            }, void 0),
                            children: "500 MT+ stocking program with rapid dispatch capabilities."
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 44,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$FeatureCard$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                            title: "Engineering Precision",
                            badge: "End-to-End Machining",
                            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                width: "20",
                                height: "20",
                                viewBox: "0 0 24 24",
                                "aria-hidden": "true",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    fill: "currentColor",
                                    d: "M3 12l7-7 4 4-7 7H3v-4zM14 5l5 5-9 9H5v-5z"
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 74,
                                    columnNumber: 17
                                }, void 0)
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 68,
                                columnNumber: 15
                            }, void 0),
                            children: "Deep hole drilling, honing, trepanning, boring, and grinding in one facility."
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 64,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$FeatureCard$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                            title: "Quality Assured",
                            badge: "ISO 9001:2015",
                            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                width: "20",
                                height: "20",
                                viewBox: "0 0 24 24",
                                "aria-hidden": "true",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    fill: "currentColor",
                                    d: "M12 1l3 7h7l-6 4 3 7-7-4-7 4 3-7-6-4h7z"
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 95,
                                    columnNumber: 17
                                }, void 0)
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 89,
                                columnNumber: 15
                            }, void 0),
                            children: "Tier-one sourcing, ISO 9001:2015 aligned QA with full traceability."
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 85,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$FeatureCard$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                            title: "On-Time Delivery",
                            badge: "Logistics Assurance",
                            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                width: "20",
                                height: "20",
                                viewBox: "0 0 24 24",
                                "aria-hidden": "true",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    fill: "currentColor",
                                    d: "M12 8v5l4 2 .9-1.8-3.4-1.7V8zM3 12a9 9 0 1 1 18 0 9 9 0 0 1-18 0z"
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 115,
                                    columnNumber: 17
                                }, void 0)
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 109,
                                columnNumber: 15
                            }, void 0),
                            children: "Pan-India & export logistics with predictable ETAs."
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 105,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 43,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 36,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Section$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                title: "Core offerings",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$FeatureCard$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                            title: "Professional Tube Source",
                            badge: "ISO 9001:2015",
                            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                width: "20",
                                height: "20",
                                viewBox: "0 0 24 24",
                                "aria-hidden": "true",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    fill: "currentColor",
                                    d: "M12 1l3 7h7l-6 4 3 7-7-4-7 4 3-7-6-4h7z"
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 166,
                                    columnNumber: 17
                                }, void 0)
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 160,
                                columnNumber: 15
                            }, void 0),
                            children: "Your one-stop destination for seamless and welded tubes, chrome plated bars, and honed or skived cylinders — sourced, finished, and stocked for rapid availability with ISO 9001:2015 traceability."
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 156,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$FeatureCard$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                            title: "On-Time Delivery",
                            badge: "Logistics Assurance",
                            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                width: "20",
                                height: "20",
                                viewBox: "0 0 24 24",
                                "aria-hidden": "true",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    fill: "currentColor",
                                    d: "M12 8v5l4 2 .9-1.8-3.4-1.7V8zM3 12a9 9 0 1 1 18 0 9 9 0 0 1-18 0z"
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 188,
                                    columnNumber: 17
                                }, void 0)
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 182,
                                columnNumber: 15
                            }, void 0),
                            children: "Comprehensive machining, deep-hole drilling, boring, and repair programs that keep hydraulic systems running with predictable turnaround and strict quality alignment."
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 178,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 155,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 154,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CategoryRail$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                title: "A library you’ll want to get lost in.",
                subtitle: "Browse our products, services, and capabilities.",
                autoScroll: true
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 216,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
}),
"[project]/app/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__2ef34adb._.js.map