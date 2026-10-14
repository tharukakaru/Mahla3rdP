module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/runtime-reacts.external.js [external] (next/dist/server/runtime-reacts.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/runtime-reacts.external.js", () => require("next/dist/server/runtime-reacts.external.js"));

module.exports = mod;
}),
"[project]/src/components/brand-logo.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BrandLogo",
    ()=>BrandLogo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
function BrandLogo({ emblem = false, className = '' }) {
    // The source files have transparent square canvases. The viewBox frames the
    // supplied artwork without changing or redrawing the original logo.
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: `${emblem ? 'brand-emblem' : 'brand-logo'} ${className}`,
        viewBox: emblem ? '574 562 864 830' : '162 873 1691 269',
        role: "img",
        "aria-label": emblem ? 'Mahla Third Point emblem' : 'mahla3rdpoint',
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("image", {
            href: emblem ? '/art/mahla-emblem.png' : '/art/mahla-wordmark.png',
            width: "2000",
            height: "2000"
        }, void 0, false, {
            fileName: "[project]/src/components/brand-logo.tsx",
            lineNumber: 4,
            columnNumber: 220
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/brand-logo.tsx",
        lineNumber: 4,
        columnNumber: 10
    }, this);
}
}),
"[project]/src/components/motion-clip.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MotionClip",
    ()=>MotionClip,
    "MotionControl",
    ()=>MotionControl
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
function MotionClip({ src, poster, label, controls = false }) {
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [failed, setFailed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const v = ref.current;
        if (!v) return;
        let visible = false;
        const reduce = matchMedia('(prefers-reduced-motion: reduce)');
        const sync = ()=>{
            if (visible && !document.hidden && !reduce.matches && document.documentElement.dataset.motionPaused !== 'true') void v.play().catch(()=>{});
            else v.pause();
        };
        const observer = new IntersectionObserver((e)=>{
            visible = e[0].isIntersecting;
            sync();
        }, {
            threshold: .2
        });
        observer.observe(v);
        reduce.addEventListener('change', sync);
        document.addEventListener('visibilitychange', sync);
        window.addEventListener('mahla-motion', sync);
        return ()=>{
            observer.disconnect();
            v.pause();
            reduce.removeEventListener('change', sync);
            document.removeEventListener('visibilitychange', sync);
            window.removeEventListener('mahla-motion', sync);
        };
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "motion-clip",
        children: failed ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
            src: poster,
            alt: label
        }, void 0, false, {
            fileName: "[project]/src/components/motion-clip.tsx",
            lineNumber: 10,
            columnNumber: 46
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
            ref: ref,
            src: src,
            poster: poster,
            muted: true,
            playsInline: true,
            loop: true,
            preload: "none",
            controls: controls,
            "aria-label": label,
            onError: ()=>setFailed(true)
        }, void 0, false, {
            fileName: "[project]/src/components/motion-clip.tsx",
            lineNumber: 10,
            columnNumber: 78
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/motion-clip.tsx",
        lineNumber: 10,
        columnNumber: 9
    }, this);
}
function MotionControl() {
    const [paused, setPaused] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        className: "motion-control",
        "aria-pressed": paused,
        onClick: ()=>{
            const next = !paused;
            setPaused(next);
            document.documentElement.dataset.motionPaused = String(next);
            window.dispatchEvent(new Event('mahla-motion'));
        },
        children: paused ? 'Play card videos' : 'Pause card videos'
    }, void 0, false, {
        fileName: "[project]/src/components/motion-clip.tsx",
        lineNumber: 12,
        columnNumber: 81
    }, this);
}
}),
"[project]/src/components/navigation.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Navigation",
    ()=>Navigation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/i18n.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/config.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$brand$2d$logo$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/brand-logo.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
function Navigation({ locale, d }) {
    const path = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const dialog = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const trigger = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!open) return;
        const node = dialog.current;
        const previous = document.body.style.overflow;
        node?.showModal();
        document.body.style.overflow = 'hidden';
        return ()=>{
            node?.close();
            document.body.style.overflow = previous;
            trigger.current?.focus();
        };
    }, [
        open
    ]);
    function show(kind, button) {
        trigger.current = button;
        setOpen(kind);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                className: "skip-link",
                href: "#main",
                children: d.ui.skip
            }, void 0, false, {
                fileName: "[project]/src/components/navigation.tsx",
                lineNumber: 25,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: `site-header ${path.replace(/\/$/, '') === `/${locale}` ? "on-home" : ""}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["localPath"])(locale),
                        className: "brand",
                        "aria-label": `${d.brand.name} — ${d.brand.line}`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$brand$2d$logo$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BrandLogo"], {}, void 0, false, {
                            fileName: "[project]/src/components/navigation.tsx",
                            lineNumber: 27,
                            columnNumber: 105
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/navigation.tsx",
                        lineNumber: 27,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        className: "desktop-nav",
                        "aria-label": d.ui.menu,
                        children: [
                            [
                                {
                                    label: 'The Path',
                                    hash: 'method'
                                },
                                {
                                    label: 'Services',
                                    hash: 'services'
                                },
                                {
                                    label: 'About',
                                    hash: 'about'
                                },
                                {
                                    label: 'Journal',
                                    hash: 'journal'
                                }
                            ].map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["localPath"])(locale)}#${item.hash}`,
                                    children: item.label
                                }, item.hash, false, {
                                    fileName: "[project]/src/components/navigation.tsx",
                                    lineNumber: 28,
                                    columnNumber: 202
                                }, this)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["localPath"])(locale, '/contact'),
                                children: d.ui.contact
                            }, void 0, false, {
                                fileName: "[project]/src/components/navigation.tsx",
                                lineNumber: 28,
                                columnNumber: 288
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/navigation.tsx",
                        lineNumber: 28,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "header-controls",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["localPath"])(locale, '/sign-in'),
                                className: "portal-link",
                                children: "Sign in"
                            }, void 0, false, {
                                fileName: "[project]/src/components/navigation.tsx",
                                lineNumber: 29,
                                columnNumber: 40
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "language-button",
                                onClick: (event)=>show('language', event.currentTarget),
                                "aria-label": d.ui.language,
                                "aria-haspopup": "dialog",
                                children: [
                                    locale.toUpperCase(),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        "aria-hidden": "true",
                                        children: "⌄"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/navigation.tsx",
                                        lineNumber: 29,
                                        columnNumber: 286
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/navigation.tsx",
                                lineNumber: 29,
                                columnNumber: 121
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "menu-button",
                                onClick: (event)=>show('menu', event.currentTarget),
                                "aria-label": d.ui.openMenu,
                                "aria-haspopup": "dialog",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: d.ui.menu
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/navigation.tsx",
                                        lineNumber: 29,
                                        columnNumber: 463
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "menu-lines",
                                        "aria-hidden": "true",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {}, void 0, false, {
                                                fileName: "[project]/src/components/navigation.tsx",
                                                lineNumber: 29,
                                                columnNumber: 535
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {}, void 0, false, {
                                                fileName: "[project]/src/components/navigation.tsx",
                                                lineNumber: 29,
                                                columnNumber: 539
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/navigation.tsx",
                                        lineNumber: 29,
                                        columnNumber: 487
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/navigation.tsx",
                                lineNumber: 29,
                                columnNumber: 328
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/navigation.tsx",
                        lineNumber: 29,
                        columnNumber: 7
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/navigation.tsx",
                lineNumber: 26,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("noscript", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                    className: "no-script-nav",
                    "aria-label": d.ui.menu,
                    children: [
                        d.nav.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["localPath"])(locale, item.path),
                                children: item.label
                            }, item.path, false, {
                                fileName: "[project]/src/components/navigation.tsx",
                                lineNumber: 31,
                                columnNumber: 88
                            }, this)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["localPath"])(locale, '/contact'),
                            children: d.ui.contact
                        }, void 0, false, {
                            fileName: "[project]/src/components/navigation.tsx",
                            lineNumber: 31,
                            columnNumber: 167
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["localPath"])(locale, '/booking'),
                            children: d.ui.book
                        }, void 0, false, {
                            fileName: "[project]/src/components/navigation.tsx",
                            lineNumber: 31,
                            columnNumber: 231
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/navigation.tsx",
                    lineNumber: 31,
                    columnNumber: 15
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/navigation.tsx",
                lineNumber: 31,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("dialog", {
                ref: dialog,
                className: `nav-dialog ${open === 'language' ? 'language-dialog' : ''}`,
                "aria-labelledby": "dialog-title",
                onCancel: ()=>setOpen(null),
                onClick: (event)=>{
                    if (event.target === event.currentTarget) setOpen(null);
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "dialog-top",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "brand",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$brand$2d$logo$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BrandLogo"], {}, void 0, false, {
                                    fileName: "[project]/src/components/navigation.tsx",
                                    lineNumber: 33,
                                    columnNumber: 59
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/navigation.tsx",
                                lineNumber: 33,
                                columnNumber: 35
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                autoFocus: true,
                                className: "close-button",
                                onClick: ()=>setOpen(null),
                                children: [
                                    d.ui.close,
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        "aria-hidden": "true",
                                        children: "×"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/navigation.tsx",
                                        lineNumber: 33,
                                        columnNumber: 163
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/navigation.tsx",
                                lineNumber: 33,
                                columnNumber: 78
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/navigation.tsx",
                        lineNumber: 33,
                        columnNumber: 7
                    }, this),
                    open === 'menu' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                id: "dialog-title",
                                className: "sr-only",
                                children: d.ui.menu
                            }, void 0, false, {
                                fileName: "[project]/src/components/navigation.tsx",
                                lineNumber: 34,
                                columnNumber: 28
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                                className: "full-nav",
                                "aria-label": d.ui.menu,
                                children: [
                                    ...d.nav,
                                    {
                                        label: 'Sign in',
                                        path: '/sign-in'
                                    },
                                    {
                                        label: d.ui.contact,
                                        path: '/contact'
                                    }
                                ].map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["localPath"])(locale, item.path),
                                        onClick: ()=>setOpen(null),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                children: String(i + 1).padStart(2, '0')
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/navigation.tsx",
                                                lineNumber: 34,
                                                columnNumber: 335
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: item.label
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/navigation.tsx",
                                                lineNumber: 34,
                                                columnNumber: 382
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "nav-arrow",
                                                "aria-hidden": "true",
                                                children: "↗"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/navigation.tsx",
                                                lineNumber: 34,
                                                columnNumber: 407
                                            }, this)
                                        ]
                                    }, item.path, true, {
                                        fileName: "[project]/src/components/navigation.tsx",
                                        lineNumber: 34,
                                        columnNumber: 247
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/navigation.tsx",
                                lineNumber: 34,
                                columnNumber: 86
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "dialog-bottom",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setOpen('language'),
                                        children: [
                                            d.ui.language,
                                            " / ",
                                            locale.toUpperCase()
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/navigation.tsx",
                                        lineNumber: 34,
                                        columnNumber: 508
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["business"].instagram,
                                        children: "Instagram ↗"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/navigation.tsx",
                                        lineNumber: 34,
                                        columnNumber: 601
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["business"].telegram,
                                        children: "Telegram ↗"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/navigation.tsx",
                                        lineNumber: 34,
                                        columnNumber: 645
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/navigation.tsx",
                                lineNumber: 34,
                                columnNumber: 477
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/navigation.tsx",
                        lineNumber: 34,
                        columnNumber: 26
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "language-content",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                id: "dialog-title",
                                children: d.ui.languageTitle
                            }, void 0, false, {
                                fileName: "[project]/src/components/navigation.tsx",
                                lineNumber: 34,
                                columnNumber: 733
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: d.ui.languageNote
                            }, void 0, false, {
                                fileName: "[project]/src/components/navigation.tsx",
                                lineNumber: 34,
                                columnNumber: 780
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["locales"].map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: item.status === 'published' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            href: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["switchLocalePath"])(path, item.code),
                                            lang: item.code,
                                            "aria-current": item.code === locale ? 'true' : undefined,
                                            onClick: ()=>{
                                                try {
                                                    localStorage.setItem('mahla-locale', item.code);
                                                } catch  {}
                                                setOpen(null);
                                            },
                                            children: [
                                                item.name,
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    "aria-hidden": "true",
                                                    children: item.code === locale ? '●' : '↗'
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/navigation.tsx",
                                                    lineNumber: 34,
                                                    columnNumber: 1115
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/navigation.tsx",
                                            lineNumber: 34,
                                            columnNumber: 882
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            lang: item.code,
                                            children: [
                                                item.name,
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                    children: d.ui.soon
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/navigation.tsx",
                                                    lineNumber: 34,
                                                    columnNumber: 1225
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/navigation.tsx",
                                            lineNumber: 34,
                                            columnNumber: 1191
                                        }, this)
                                    }, item.code, false, {
                                        fileName: "[project]/src/components/navigation.tsx",
                                        lineNumber: 34,
                                        columnNumber: 831
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/navigation.tsx",
                                lineNumber: 34,
                                columnNumber: 806
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/navigation.tsx",
                        lineNumber: 34,
                        columnNumber: 699
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/navigation.tsx",
                lineNumber: 32,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/navigation.tsx",
        lineNumber: 24,
        columnNumber: 10
    }, this);
}
}),
"[project]/src/content/en.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "en",
    ()=>en
]);
const en = {
    brand: {
        name: 'MAHLA',
        line: 'THE THIRD POINT',
        disciplines: 'ASTROLOGY · STRATEGY · SOVEREIGNTY'
    },
    nav: [
        {
            label: 'Sovereignty',
            path: '/method'
        },
        {
            label: 'Consultations',
            path: '/work-with-mahla'
        },
        {
            label: 'Classes',
            path: '/academy'
        },
        {
            label: 'Journal',
            path: '/journal'
        },
        {
            label: 'About',
            path: '/about'
        }
    ],
    ui: {
        menu: 'Menu',
        close: 'Close',
        portal: 'Your space',
        language: 'Language',
        skip: 'Skip to content',
        contact: 'Contact',
        book: 'Book a private session',
        explore: 'Explore the method',
        allServices: 'Explore all pathways',
        discover: 'Discover the pathway',
        read: 'Read the story',
        journal: 'Visit the journal',
        home: 'Back to the beginning',
        languageTitle: 'A different language.\nThe same perspective.',
        languageNote: 'English is available now. More languages will follow after editorial review.',
        soon: 'In preparation',
        closeMenu: 'Close navigation',
        openMenu: 'Open navigation',
        pause: 'Pause film',
        play: 'Play film',
        film: 'An architectural study of the Third Point',
        scroll: 'Scroll to change your perspective',
        imageAlt: 'Portrait of Mahla wearing celestial-patterned clothing',
        unavailable: 'This page is not here.',
        unavailableBody: 'A different path may take you where you need to be.',
        error: 'Something interrupted the page.',
        retry: 'Try again',
        errorBody: 'Please try again, or return to the beginning.',
        privacy: 'Privacy',
        terms: 'Terms',
        original: 'Read on the original journal',
        all: 'All notes',
        filter: 'Filter notes by topic'
    },
    hero: {
        label: 'A PERSPECTIVE BEYOND DUALITY',
        lines: [
            'NOT THIS.',
            'NOT THAT.',
            'THE THIRD',
            'POINT.'
        ],
        intro: 'There is another way to see.',
        body: 'Astrology, strategic reflection and sovereign coaching for people ready to see the pattern, change their position and move with clarity.',
        index: '01 — THE THRESHOLD',
        caption: 'Two positions. One new possibility.',
        side: 'CHANGE YOUR POSITION / CHANGE YOUR PERSPECTIVE'
    },
    manifesto: {
        label: 'THE IDEA',
        number: '02',
        title: 'Your map is not your fate.',
        accent: 'It is a language.',
        body: 'A way to recognise patterns, timing, tension and possibility before they become repetition. The Third Point is where observation becomes choice — and choice becomes direction.',
        statement: [
            'Not prediction.',
            'Perspective.'
        ]
    },
    method: {
        label: 'THE THIRD POINT METHOD',
        number: '03',
        title: 'See the system.\nChange your position.',
        intro: 'You do not need another answer inside the same pattern. You need a position from which you can see it.',
        steps: [
            {
                title: 'Decode',
                word: 'SEE THE PATTERN',
                body: 'Reveal the patterns shaping your decisions, relationships, identity and direction.',
                detail: 'Begin with what is repeating. Together, we look at the questions, tensions and choices that brought you here. Astrology offers an interpretive language for that inquiry.'
            },
            {
                title: 'Reframe',
                word: 'CHANGE YOUR POSITION',
                body: 'Move beyond automatic reactions and inherited structures. See the situation from a wider point of view.',
                detail: 'Separate an event from the story around it. Explore another perspective, notice assumptions and make space between a familiar reaction and your next choice.'
            },
            {
                title: 'Architect',
                word: 'DESIGN YOUR DIRECTION',
                body: 'Turn insight into structure: decisions, rituals, boundaries, timing and action.',
                detail: 'Bring the conversation into daily life. Choose practical next steps, identify the support they need and create a rhythm you can return to.'
            }
        ]
    },
    sovereignty: {
        label: '04 / SOVEREIGN ARCHITECTURE',
        title: 'Sovereignty is\nnot control.',
        accent: 'It is the ability to choose from clarity.',
        body: 'The work is not about becoming someone else. It is about recognising the structures that keep repeating — and building a way of living that is more intentional, coherent and yours.',
        fields: [
            {
                title: 'Timing',
                body: 'Understanding cycles, transitions and moments of emphasis.'
            },
            {
                title: 'Structure',
                body: 'Building routines and boundaries that support intention.'
            },
            {
                title: 'Identity',
                body: 'Recognising where inherited identity ends and conscious identity begins.'
            },
            {
                title: 'Strategy',
                body: 'Transforming insight into decisions and practical direction.'
            }
        ]
    },
    work: {
        label: '05 / WORK WITH MAHLA',
        title: 'Choose your depth.',
        body: 'A single question. A recurring pattern. A new chapter. There is a different way into the work for each.',
        detailLabel: 'THE PATHWAY',
        includeLabel: 'WHAT WE EXPLORE',
        fitLabel: 'A SPACE FOR',
        priceNote: 'Current pricing and availability are confirmed through booking.',
        cta: 'Explore this pathway',
        back: 'All pathways'
    },
    about: {
        label: '06 / THE HUMAN BEHIND THE WORK',
        title: 'The voice behind\nthe Third Point.',
        body: 'Mahla brings together astrology, sovereignty coaching and creative inquiry. The Third Point grew from a simple intention: to move beyond duality and make room for a clearer, more conscious way of living.',
        note: 'Astrology as a reflective framework. Strategy as a practice. Sovereignty as a way of being.',
        cta: 'Meet Mahla',
        name: 'Mahla',
        caption: 'THE VOICE OF THE THIRD POINT',
        paragraphs: [
            'The Third Point is a way of stepping outside the immediate pull of two opposing positions. From there, a familiar pattern can become visible — and a different response becomes possible.',
            'Mahla’s work brings astrology into conversation with personal strategy, sovereignty coaching and education. The intention is to create room for reflection and a more deliberate relationship with your choices.',
            'This is an invitation to inquiry. Astrology is used as an interpretive language, not a scientific prediction or a guarantee of what comes next. Your decisions remain yours.'
        ]
    },
    fields: {
        label: '07 / FOUR FIELDS OF PRACTICE',
        title: 'One perspective.\nYour whole life.',
        items: [
            {
                title: 'Self',
                body: 'Identity, self-image and direction.'
            },
            {
                title: 'Work',
                body: 'Creative expression, business, contribution and resources.'
            },
            {
                title: 'Body',
                body: 'Rhythm, ritual, energy and everyday practice.'
            },
            {
                title: 'Relationships',
                body: 'Boundaries, connection and relational patterns.'
            }
        ]
    },
    journal: {
        label: '08 / THE JOURNAL',
        title: 'Notes from\nthe Third Point.',
        body: 'Observations on identity, timing and the patterns that shape a life.',
        archive: 'THE READING ROOM',
        sourceNote: 'These notes introduce themes from Mahla’s existing journal. Follow the original article for the full published text.',
        empty: 'No notes in this field yet.',
        categories: [
            'All notes',
            'Sovereignty',
            'Timing',
            'Identity'
        ]
    },
    threshold: {
        label: 'A DIFFERENT POSITION STARTS HERE',
        title: 'When the pattern\nbecomes visible,\nchoice returns.',
        cta: 'Enter the Third Point'
    },
    footer: {
        statement: 'Not an escape from reality.\nA different position within it.',
        title: [
            'THE THIRD',
            'POINT.'
        ],
        explore: 'EXPLORE',
        connect: 'CONNECT',
        language: 'LANGUAGE',
        copyright: 'MAHLA — THE THIRD POINT',
        note: 'Astrology is a reflective practice, not a guarantee of outcomes.'
    },
    contact: {
        label: 'LET’S BEGIN A CONVERSATION',
        title: 'A question is\na beginning.',
        body: 'For private sessions, collaborations or a question about the work, reach out directly.',
        formTitle: 'Write to Mahla',
        name: 'Your name',
        email: 'Your email',
        subject: 'What brings you here?',
        message: 'Your message',
        subjects: [
            'A private session',
            'The academy',
            'A collaboration',
            'Something else'
        ],
        submit: 'Prepare email',
        busy: 'Preparing your email…',
        note: 'This opens an email draft in your own mail app. Nothing is sent until you send it there.',
        success: 'Your email draft is ready. Complete and send it in your mail app.',
        fallback: 'If your mail app did not open, copy your message and email Mahla directly.',
        copy: 'Copy email text',
        copied: 'Email text copied',
        copyError: 'Copy is unavailable in this browser. Select and copy the preview below.',
        invalid: 'Please enter your name, a valid email and a message of at least 10 characters.',
        consent: 'I understand my message will be prepared in my email app.',
        emailLabel: 'EMAIL',
        telegram: 'TELEGRAM',
        instagram: 'INSTAGRAM',
        direct: 'A direct line',
        required: 'All fields are required.'
    },
    booking: {
        label: 'YOUR NEXT CHAPTER',
        title: 'Begin with\nwhat matters.',
        body: 'Choose the pathway that speaks to where you are now. Continue to Mahla’s booking service for current availability and pricing.',
        choose: '01 / CHOOSE YOUR PATHWAY',
        next: '02 / CONTINUE TO BOOKING',
        selected: 'YOUR SELECTED PATHWAY',
        continue: 'Continue to live booking',
        note: 'You’ll continue on mahla3rdpoint.com. Confirm the service, time, timezone and price there before completing a booking.',
        help: 'Not sure where to begin?',
        helpBody: 'Tell Mahla a little about what you are navigating.',
        helpCta: 'Start a conversation',
        timezone: 'Your timezone',
        timezoneNote: 'Verify the appointment timezone in the live booking service.',
        handoff: 'Your selection is a guide; you will confirm it again in the booking service.'
    },
    academy: {
        label: 'THE ACADEMY',
        title: 'A language\nworth learning.',
        body: 'Structured learning exploring astrology, sovereignty, identity and the Third Point method.',
        statement: 'From recognition\nto understanding.',
        details: 'Explore the ideas behind the practice, deepen your questions and develop a more thoughtful relationship with your own patterns.',
        catalogue: 'Current classes',
        catalogueBody: 'See Mahla’s current class catalogue for course details, dates, availability and enrolment.',
        cta: 'Explore live classes',
        member: 'Already learning with Mahla?',
        memberCta: 'Open your classes',
        subjects: [
            'Astrology as a language',
            'Cycles and timing',
            'Identity and sovereignty',
            'The Third Point in practice'
        ]
    },
    chart: {
        label: 'THE NATAL MAP',
        title: 'A map for\nyour inquiry.',
        body: 'Your birth chart is a starting point for reflection — a language for exploring patterns, timing and possibility.',
        cta: 'Open my birth chart',
        detail: 'Use the existing birth-chart tool to create and manage your saved charts. Your account and saved information stay in your current private space.',
        prepareTitle: 'Before you begin',
        prepare: [
            'Your date of birth',
            'Your birth time, if known',
            'Your place of birth'
        ],
        note: 'An unknown birth time can change what an interpretation can tell you. Share any uncertainty with Mahla.'
    },
    portal: {
        label: 'YOUR PRIVATE SPACE',
        title: 'Return to\nyour practice.',
        body: 'Your charts, sessions and learning, together in your existing account.',
        cta: 'Sign in to your space',
        note: 'Secure sign-in continues on the existing MAHLA website.',
        areas: [
            'Overview & profile',
            'Saved birth charts',
            'Your bookings',
            'Classes',
            'Support',
            'Account settings'
        ]
    },
    legal: {
        privacyTitle: 'A considered approach\nto your privacy.',
        termsTitle: 'Clarity, before\nwe begin.',
        label: 'INFORMATION',
        privacy: [
            {
                title: 'This website',
                body: 'The public redesign does not include advertising trackers, an account database or an automatic contact submission service. Choosing a language may save that preference in your browser.'
            },
            {
                title: 'Contacting Mahla',
                body: 'The contact form prepares an email in your own mail app. The website does not store or send that message. Your email provider handles the message when you choose to send it.'
            },
            {
                title: 'Bookings and your account',
                body: 'Booking, classes and account links lead to the existing MAHLA service. Review the information and policies shown there before sharing personal details or completing a transaction.'
            },
            {
                title: 'Questions',
                body: 'For privacy questions, contact Mahla using the email address on the contact page.'
            }
        ],
        terms: [
            {
                title: 'Reflective practice',
                body: 'Astrology and coaching are presented as reflective and interpretive practices. They do not guarantee personal, relationship, financial or health outcomes and are not a substitute for appropriate professional advice.'
            },
            {
                title: 'Service information',
                body: 'Pathway descriptions introduce the work. Confirm current pricing, availability, service scope and cancellation terms with Mahla or in the existing booking service before booking.'
            },
            {
                title: 'Your choices',
                body: 'You remain responsible for your decisions. Take what is useful, ask questions and seek qualified support where needed.'
            }
        ]
    }
};
}),
"[project]/src/lib/config.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "business",
    ()=>business,
    "indexable",
    ()=>indexable,
    "legacyOrigin",
    ()=>legacyOrigin,
    "siteUrl",
    ()=>siteUrl
]);
const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000').replace(/\/$/, '');
const indexable = process.env.SITE_INDEXABLE === 'true';
const legacyOrigin = (process.env.NEXT_PUBLIC_LEGACY_ORIGIN || 'https://mahla3rdpoint.com').replace(/\/$/, '');
const business = {
    email: 'mahlashahsvn@gmail.com',
    telegram: 'https://t.me/Mahlathe3rdpoint',
    instagram: 'https://www.instagram.com/mahla3rdpoint/',
    booking: `${legacyOrigin}/booking`,
    classes: `${legacyOrigin}/classes`,
    chart: `${legacyOrigin}/dashboard/chart`,
    signIn: `${legacyOrigin}/sign-in`
};
}),
"[project]/src/lib/i18n.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getDictionary",
    ()=>getDictionary,
    "getLocale",
    ()=>getLocale,
    "localPath",
    ()=>localPath,
    "locales",
    ()=>locales,
    "publishedLocales",
    ()=>publishedLocales,
    "switchLocalePath",
    ()=>switchLocalePath
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$en$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/content/en.ts [app-ssr] (ecmascript)");
;
const locales = [
    {
        code: 'en',
        name: 'English',
        direction: 'ltr',
        script: 'latin',
        status: 'published',
        dictionary: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$en$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["en"]
    },
    {
        code: 'fa',
        name: 'فارسی',
        direction: 'rtl',
        script: 'arabic',
        status: 'draft'
    },
    {
        code: 'ar',
        name: 'العربية',
        direction: 'rtl',
        script: 'arabic',
        status: 'missing'
    },
    {
        code: 'fr',
        name: 'Français',
        direction: 'ltr',
        script: 'latin',
        status: 'missing'
    },
    {
        code: 'de',
        name: 'Deutsch',
        direction: 'ltr',
        script: 'latin',
        status: 'missing'
    },
    {
        code: 'es',
        name: 'Español',
        direction: 'ltr',
        script: 'latin',
        status: 'missing'
    }
];
const publishedLocales = locales.filter((locale)=>locale.status === 'published');
const getLocale = (code)=>locales.find((locale)=>locale.code === code && locale.status === 'published');
function mergeFallback(fallback, translation) {
    if (!translation) return fallback;
    const result = {
        ...fallback
    };
    for(const key in translation){
        const value = translation[key];
        if (value === undefined || value === null) continue;
        result[key] = typeof value === 'object' && !Array.isArray(value) ? mergeFallback(fallback[key], value) : value;
    }
    return result;
}
const getDictionary = (code)=>mergeFallback(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$en$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["en"], getLocale(code)?.dictionary);
const localPath = (locale, path = '')=>`/${locale}${path === '/' ? '' : path}`;
function switchLocalePath(path, locale) {
    if (!publishedLocales.some((item)=>item.code === locale)) return path;
    const segments = path.split('/');
    if (locales.some((item)=>item.code === segments[1])) segments[1] = locale;
    else segments.splice(1, 0, locale);
    return segments.join('/') || `/${locale}`;
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__1_evshu._.js.map