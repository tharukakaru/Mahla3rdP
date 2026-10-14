module.exports = [
"[project]/src/app/[locale]/layout.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LocaleLayout,
    "dynamicParams",
    ()=>dynamicParams,
    "generateStaticParams",
    ()=>generateStaticParams,
    "metadata",
    ()=>metadata
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/i18n.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/config.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$navigation$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/navigation.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$footer$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/footer.tsx [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
;
;
const metadata = {
    metadataBase: new URL(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["siteUrl"]),
    title: {
        default: 'MAHLA — The Third Point',
        template: '%s | MAHLA'
    },
    description: 'Astrology, strategic reflection and sovereign coaching. See the pattern. Change your position. Design your direction.',
    icons: {
        icon: '/favicon.svg'
    },
    robots: {
        index: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["indexable"],
        follow: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["indexable"]
    }
};
const dynamicParams = false;
function generateStaticParams() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["publishedLocales"].map((locale)=>({
            locale: locale.code
        }));
}
async function LocaleLayout({ children, params }) {
    const { locale } = await params;
    const config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getLocale"])(locale);
    if (!config) (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notFound"])();
    const d = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getDictionary"])(locale);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("html", {
        "data-scroll-behavior": "smooth",
        lang: locale,
        dir: config.direction,
        "data-script": config.script,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("body", {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$navigation$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Navigation"], {
                    locale: locale,
                    d: d
                }, void 0, false, {
                    fileName: "[project]/src/app/[locale]/layout.tsx",
                    lineNumber: 25,
                    columnNumber: 117
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                    id: "main",
                    tabIndex: -1,
                    children: children
                }, void 0, false, {
                    fileName: "[project]/src/app/[locale]/layout.tsx",
                    lineNumber: 25,
                    columnNumber: 152
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$footer$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Footer"], {
                    locale: locale,
                    d: d
                }, void 0, false, {
                    fileName: "[project]/src/app/[locale]/layout.tsx",
                    lineNumber: 25,
                    columnNumber: 199
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/[locale]/layout.tsx",
            lineNumber: 25,
            columnNumber: 111
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/[locale]/layout.tsx",
        lineNumber: 25,
        columnNumber: 10
    }, this);
}
}),
"[project]/src/app/[locale]/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/[locale]/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/src/components/brand-logo.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BrandLogo",
    ()=>BrandLogo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
;
function BrandLogo({ emblem = false, className = '' }) {
    // The source files have transparent square canvases. The viewBox frames the
    // supplied artwork without changing or redrawing the original logo.
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: `${emblem ? 'brand-emblem' : 'brand-logo'} ${className}`,
        viewBox: emblem ? '574 562 864 830' : '162 873 1691 269',
        role: "img",
        "aria-label": emblem ? 'Mahla Third Point emblem' : 'mahla3rdpoint',
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("image", {
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
"[project]/src/components/footer.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Footer",
    ()=>Footer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$motion$2d$clip$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/motion-clip.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/i18n.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/config.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$brand$2d$logo$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/brand-logo.tsx [app-rsc] (ecmascript)");
;
;
;
;
;
;
function Footer({ locale, d }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        className: "site-footer",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "footer-top",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "footer-statement",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$brand$2d$logo$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["BrandLogo"], {
                                emblem: true
                            }, void 0, false, {
                                fileName: "[project]/src/components/footer.tsx",
                                lineNumber: 8,
                                columnNumber: 104
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: d.footer.statement
                            }, void 0, false, {
                                fileName: "[project]/src/components/footer.tsx",
                                lineNumber: 8,
                                columnNumber: 123
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                children: d.brand.disciplines
                            }, void 0, false, {
                                fileName: "[project]/src/components/footer.tsx",
                                lineNumber: 8,
                                columnNumber: 150
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/footer.tsx",
                        lineNumber: 8,
                        columnNumber: 70
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "eyebrow",
                                children: d.footer.explore
                            }, void 0, false, {
                                fileName: "[project]/src/components/footer.tsx",
                                lineNumber: 8,
                                columnNumber: 197
                            }, this),
                            d.nav.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                    href: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["localPath"])(locale, item.path),
                                    children: item.label
                                }, item.path, false, {
                                    fileName: "[project]/src/components/footer.tsx",
                                    lineNumber: 8,
                                    columnNumber: 261
                                }, this))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/footer.tsx",
                        lineNumber: 8,
                        columnNumber: 192
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "eyebrow",
                                children: d.footer.connect
                            }, void 0, false, {
                                fileName: "[project]/src/components/footer.tsx",
                                lineNumber: 8,
                                columnNumber: 351
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                href: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["localPath"])(locale, '/contact'),
                                children: d.ui.contact
                            }, void 0, false, {
                                fileName: "[project]/src/components/footer.tsx",
                                lineNumber: 8,
                                columnNumber: 396
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["business"].instagram,
                                children: "Instagram ↗"
                            }, void 0, false, {
                                fileName: "[project]/src/components/footer.tsx",
                                lineNumber: 8,
                                columnNumber: 460
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["business"].telegram,
                                children: "Telegram ↗"
                            }, void 0, false, {
                                fileName: "[project]/src/components/footer.tsx",
                                lineNumber: 8,
                                columnNumber: 504
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                href: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["localPath"])(locale, '/portal'),
                                children: d.ui.portal
                            }, void 0, false, {
                                fileName: "[project]/src/components/footer.tsx",
                                lineNumber: 8,
                                columnNumber: 546
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/footer.tsx",
                        lineNumber: 8,
                        columnNumber: 346
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/footer.tsx",
                lineNumber: 8,
                columnNumber: 42
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "footer-logo-wrap",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$brand$2d$logo$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["BrandLogo"], {}, void 0, false, {
                    fileName: "[project]/src/components/footer.tsx",
                    lineNumber: 8,
                    columnNumber: 654
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/footer.tsx",
                lineNumber: 8,
                columnNumber: 620
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "footer-bottom",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                        children: [
                            "© ",
                            new Date().getFullYear(),
                            " ",
                            d.footer.copyright
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/footer.tsx",
                        lineNumber: 8,
                        columnNumber: 703
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                href: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["localPath"])(locale, '/privacy'),
                                children: d.ui.privacy
                            }, void 0, false, {
                                fileName: "[project]/src/components/footer.tsx",
                                lineNumber: 8,
                                columnNumber: 772
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                href: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["localPath"])(locale, '/terms'),
                                children: d.ui.terms
                            }, void 0, false, {
                                fileName: "[project]/src/components/footer.tsx",
                                lineNumber: 8,
                                columnNumber: 836
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                lang: "en",
                                children: "English"
                            }, void 0, false, {
                                fileName: "[project]/src/components/footer.tsx",
                                lineNumber: 8,
                                columnNumber: 896
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/footer.tsx",
                        lineNumber: 8,
                        columnNumber: 767
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/footer.tsx",
                lineNumber: 8,
                columnNumber: 672
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$motion$2d$clip$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MotionControl"], {}, void 0, false, {
                fileName: "[project]/src/components/footer.tsx",
                lineNumber: 8,
                columnNumber: 938
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "footer-note",
                children: d.footer.note
            }, void 0, false, {
                fileName: "[project]/src/components/footer.tsx",
                lineNumber: 8,
                columnNumber: 954
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/footer.tsx",
        lineNumber: 8,
        columnNumber: 10
    }, this);
}
}),
"[project]/src/components/motion-clip.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MotionClip",
    ()=>MotionClip,
    "MotionControl",
    ()=>MotionControl
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const MotionClip = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call MotionClip() from the server but MotionClip is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/motion-clip.tsx", "MotionClip");
const MotionControl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call MotionControl() from the server but MotionControl is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/motion-clip.tsx", "MotionControl");
}),
"[project]/src/components/motion-clip.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MotionClip",
    ()=>MotionClip,
    "MotionControl",
    ()=>MotionControl
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const MotionClip = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call MotionClip() from the server but MotionClip is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/motion-clip.tsx <module evaluation>", "MotionClip");
const MotionControl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call MotionControl() from the server but MotionControl is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/motion-clip.tsx <module evaluation>", "MotionControl");
}),
"[project]/src/components/motion-clip.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$motion$2d$clip$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/components/motion-clip.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$motion$2d$clip$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/src/components/motion-clip.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$motion$2d$clip$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/src/components/navigation.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Navigation",
    ()=>Navigation
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const Navigation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call Navigation() from the server but Navigation is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/navigation.tsx", "Navigation");
}),
"[project]/src/components/navigation.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Navigation",
    ()=>Navigation
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const Navigation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call Navigation() from the server but Navigation is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/navigation.tsx <module evaluation>", "Navigation");
}),
"[project]/src/components/navigation.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$navigation$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/components/navigation.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$navigation$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/src/components/navigation.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$navigation$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/src/content/en.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/src/lib/config.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/src/lib/i18n.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$en$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/content/en.ts [app-rsc] (ecmascript)");
;
const locales = [
    {
        code: 'en',
        name: 'English',
        direction: 'ltr',
        script: 'latin',
        status: 'published',
        dictionary: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$en$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["en"]
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
const getDictionary = (code)=>mergeFallback(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$en$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["en"], getLocale(code)?.dictionary);
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

//# sourceMappingURL=src_0zduevy._.js.map