module.exports = [
"[project]/src/components/booking-flow.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BookingFlow",
    ()=>BookingFlow
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$services$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/content/services.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/config.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$primitives$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/primitives.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
function BookingFlow({ d }) {
    const options = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$services$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["services"].filter((item)=>item.destination === 'booking');
    const [selected, setSelected] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(options[0].slug);
    const [timezone, setTimezone] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const requested = new URLSearchParams(window.location.search).get('service');
        if (requested && options.some((item)=>item.slug === requested)) setSelected(requested);
        setTimezone(Intl.DateTimeFormat().resolvedOptions().timeZone);
    }, []); // eslint-disable-line react-hooks/exhaustive-deps
    const service = options.find((item)=>item.slug === selected) || options[0];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "booking-flow",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("fieldset", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("legend", {
                        className: "eyebrow",
                        children: d.booking.choose
                    }, void 0, false, {
                        fileName: "[project]/src/components/booking-flow.tsx",
                        lineNumber: 13,
                        columnNumber: 50
                    }, this),
                    options.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            className: `booking-option ${item.slug === selected ? 'selected' : ''}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "radio",
                                    name: "pathway",
                                    value: item.slug,
                                    checked: item.slug === selected,
                                    onChange: ()=>setSelected(item.slug)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/booking-flow.tsx",
                                    lineNumber: 13,
                                    columnNumber: 222
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                            children: item.duration
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/booking-flow.tsx",
                                            lineNumber: 13,
                                            columnNumber: 355
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: item.title
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/booking-flow.tsx",
                                            lineNumber: 13,
                                            columnNumber: 385
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: item.description
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/booking-flow.tsx",
                                            lineNumber: 13,
                                            columnNumber: 414
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/booking-flow.tsx",
                                    lineNumber: 13,
                                    columnNumber: 349
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$primitives$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PointMark"], {}, void 0, false, {
                                    fileName: "[project]/src/components/booking-flow.tsx",
                                    lineNumber: 13,
                                    columnNumber: 452
                                }, this)
                            ]
                        }, item.slug, true, {
                            fileName: "[project]/src/components/booking-flow.tsx",
                            lineNumber: 13,
                            columnNumber: 126
                        }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/booking-flow.tsx",
                lineNumber: 13,
                columnNumber: 40
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "booking-summary",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$primitives$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Eyebrow"], {
                        children: d.booking.next
                    }, void 0, false, {
                        fileName: "[project]/src/components/booking-flow.tsx",
                        lineNumber: 13,
                        columnNumber: 518
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        children: service.title
                    }, void 0, false, {
                        fileName: "[project]/src/components/booking-flow.tsx",
                        lineNumber: 13,
                        columnNumber: 553
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: service.detail
                    }, void 0, false, {
                        fileName: "[project]/src/components/booking-flow.tsx",
                        lineNumber: 13,
                        columnNumber: 577
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "eyebrow",
                        children: service.duration
                    }, void 0, false, {
                        fileName: "[project]/src/components/booking-flow.tsx",
                        lineNumber: 13,
                        columnNumber: 600
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "booking-timezone",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                children: d.booking.timezone
                            }, void 0, false, {
                                fileName: "[project]/src/components/booking-flow.tsx",
                                lineNumber: 13,
                                columnNumber: 679
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: timezone || '—'
                            }, void 0, false, {
                                fileName: "[project]/src/components/booking-flow.tsx",
                                lineNumber: 13,
                                columnNumber: 714
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                children: d.booking.timezoneNote
                            }, void 0, false, {
                                fileName: "[project]/src/components/booking-flow.tsx",
                                lineNumber: 13,
                                columnNumber: 738
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/booking-flow.tsx",
                        lineNumber: 13,
                        columnNumber: 645
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$primitives$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Action"], {
                        href: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["business"].booking,
                        children: d.booking.continue
                    }, void 0, false, {
                        fileName: "[project]/src/components/booking-flow.tsx",
                        lineNumber: 13,
                        columnNumber: 783
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "form-note",
                        children: d.booking.note
                    }, void 0, false, {
                        fileName: "[project]/src/components/booking-flow.tsx",
                        lineNumber: 13,
                        columnNumber: 844
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "form-note",
                        children: d.booking.handoff
                    }, void 0, false, {
                        fileName: "[project]/src/components/booking-flow.tsx",
                        lineNumber: 13,
                        columnNumber: 889
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/booking-flow.tsx",
                lineNumber: 13,
                columnNumber: 485
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/booking-flow.tsx",
        lineNumber: 13,
        columnNumber: 10
    }, this);
}
}),
"[project]/src/components/branch-breeze.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BranchBreeze",
    ()=>BranchBreeze
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
// Only three perimeter branch/twig groups move. Every layer is rigid: no mesh,
// skew or time-varying scale. The original image remains the loading fallback.
const groups = [
    {
        points: [
            [
                10,
                655
            ],
            [
                160,
                619
            ],
            [
                270,
                663
            ],
            [
                355,
                722
            ],
            [
                395,
                780
            ],
            [
                350,
                921
            ],
            [
                30,
                965
            ]
        ],
        pivot: [
            354,
            743
        ],
        period: 4.8,
        phase: 0.3,
        angle: 0.060
    },
    {
        points: [
            [
                935,
                410
            ],
            [
                1015,
                301
            ],
            [
                1104,
                262
            ],
            [
                1235,
                303
            ],
            [
                1240,
                524
            ],
            [
                1132,
                580
            ],
            [
                1023,
                528
            ]
        ],
        pivot: [
            965,
            476
        ],
        period: 6.0,
        phase: 2.8,
        angle: 0.055
    },
    {
        points: [
            [
                406,
                0
            ],
            [
                637,
                0
            ],
            [
                640,
                118
            ],
            [
                606,
                184
            ],
            [
                552,
                265
            ],
            [
                508,
                223
            ],
            [
                460,
                158
            ]
        ],
        pivot: [
            555,
            244
        ],
        period: 5.3,
        phase: 4.7,
        angle: 0.053
    }
];
// Small foliage clusters inherit their branch motion, with a lighter flutter
// around their own stem. Rigid rotations preserve the leaf shapes.
const foliage = [
    [
        {
            x: 100,
            y: 740,
            r: 44
        },
        {
            x: 105,
            y: 870,
            r: 46
        }
    ],
    [
        {
            x: 1150,
            y: 360,
            r: 40
        },
        {
            x: 1170,
            y: 480,
            r: 42
        }
    ],
    [
        {
            x: 520,
            y: 90,
            r: 44
        },
        {
            x: 578,
            y: 145,
            r: 30
        }
    ]
];
function BranchBreeze() {
    const canvas = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const target = canvas.current;
        if (!target) return;
        const node = target;
        const ctx = node.getContext('2d');
        const original = node.parentElement?.querySelector('.olive-tree');
        if (!ctx || !original) return;
        const image = original;
        const preference = matchMedia('(prefers-reduced-motion: reduce)');
        let disposed = false, frame = 0, visible = false, elapsed = 0, last = 0;
        const make = ()=>{
            const c = document.createElement('canvas');
            c.width = 1240;
            c.height = 1254;
            return c;
        };
        const base = make();
        const baseCtx = base.getContext('2d');
        const layers = [];
        const leaves = [];
        function path(c, points) {
            c.beginPath();
            points.forEach(([x, y], i)=>i ? c.lineTo(x, y) : c.moveTo(x, y));
            c.closePath();
        }
        function prepare() {
            baseCtx.drawImage(image, 0, 0, 1240, 1254);
            groups.forEach((group, index)=>{
                const layer = make(), lc = layer.getContext('2d'), mask = make(), mc = mask.getContext('2d');
                path(mc, group.points);
                mc.fill();
                lc.drawImage(image, 0, 0, 1240, 1254);
                lc.globalCompositeOperation = 'destination-in';
                lc.drawImage(mask, 0, 0);
                // Keep a narrow stationary overlap at the cut boundary so small rotations
                // don't expose a gap. Unlike a whole-canopy warp, bark proportions stay fixed.
                mc.globalCompositeOperation = 'destination-out';
                mc.lineWidth = 18;
                path(mc, group.points);
                mc.stroke();
                baseCtx.globalCompositeOperation = 'destination-out';
                baseCtx.drawImage(mask, 0, 0);
                lc.globalCompositeOperation = 'source-over';
                leaves.push(foliage[index].map(({ x, y, r })=>{
                    const leaf = document.createElement('canvas');
                    leaf.width = leaf.height = r * 2;
                    const leafCtx = leaf.getContext('2d');
                    leafCtx.beginPath();
                    leafCtx.arc(r, r, r, 0, Math.PI * 2);
                    leafCtx.clip();
                    leafCtx.drawImage(layer, x - r, y - r, r * 2, r * 2, 0, 0, r * 2, r * 2);
                    // Retain a small overlap at the joint, avoiding a moving cut-out gap.
                    lc.globalCompositeOperation = 'destination-out';
                    lc.beginPath();
                    lc.arc(x, y, r - 7, 0, Math.PI * 2);
                    lc.fill();
                    return leaf;
                }));
                layers.push(layer);
            });
            baseCtx.globalCompositeOperation = 'source-over';
        }
        function still() {
            image.style.visibility = '';
            node.hidden = true;
        }
        function draw(now) {
            const dt = last ? Math.min((now - last) / 1000, .05) : 0;
            last = now;
            elapsed += dt;
            const width = image.clientWidth, height = image.clientHeight, ratio = Math.min(devicePixelRatio, 2);
            if (node.width !== Math.round(width * ratio) || node.height !== Math.round(height * ratio)) {
                node.width = Math.round(width * ratio);
                node.height = Math.round(height * ratio);
                node.style.width = width + 'px';
                node.style.height = height + 'px';
            }
            ctx.setTransform(1, 0, 0, 1, 0, 0);
            ctx.clearRect(0, 0, node.width, node.height);
            ctx.setTransform(node.width / 1240, 0, 0, node.height / 1254, 0, 0);
            ctx.drawImage(base, 0, 0);
            groups.forEach((g, i)=>{
                // Maintain visible motion even between gusts; each rigid branch has its
                // own phase and period instead of stretching the canopy in unison.
                const gust = .82 + .18 * Math.pow(.5 + .5 * Math.sin(elapsed * .14 + g.phase), 2);
                const angle = g.angle * gust * Math.sin(elapsed * Math.PI * 2 / g.period + g.phase);
                ctx.save();
                ctx.translate(g.pivot[0], g.pivot[1]);
                ctx.rotate(angle);
                ctx.translate(-g.pivot[0], -g.pivot[1]);
                ctx.drawImage(layers[i], 0, 0);
                foliage[i].forEach(({ x, y, r }, j)=>{
                    const phase = g.phase + j * 2.1;
                    const flutter = .080 * Math.sin(elapsed * Math.PI * 2 / (2.2 + i * .4 + j * .3) + phase) + .015 * Math.sin(elapsed * 2.2 + phase);
                    ctx.save();
                    ctx.translate(x, y + r * .65);
                    ctx.rotate(flutter);
                    ctx.drawImage(leaves[i][j], -r, -r * 1.65);
                    ctx.restore();
                });
                ctx.restore();
            });
            image.style.visibility = 'hidden';
            node.hidden = false;
            frame = requestAnimationFrame(draw);
        }
        function sync() {
            cancelAnimationFrame(frame);
            last = 0;
            if (layers.length === 3 && !preference.matches && visible && !document.hidden) frame = requestAnimationFrame(draw);
            else still();
        }
        const observer = new IntersectionObserver((entries)=>{
            visible = entries[0].isIntersecting;
            sync();
        });
        observer.observe(node.parentElement);
        preference.addEventListener('change', sync);
        document.addEventListener('visibilitychange', sync);
        void image.decode().then(()=>{
            if (!disposed) {
                prepare();
                sync();
            }
        }).catch(still);
        return ()=>{
            disposed = true;
            cancelAnimationFrame(frame);
            observer.disconnect();
            preference.removeEventListener('change', sync);
            document.removeEventListener('visibilitychange', sync);
            still();
        };
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
        ref: canvas,
        className: "branch-breeze",
        "aria-hidden": "true"
    }, void 0, false, {
        fileName: "[project]/src/components/branch-breeze.tsx",
        lineNumber: 95,
        columnNumber: 10
    }, this);
}
}),
"[project]/src/components/cloud-intro.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CloudIntro",
    ()=>CloudIntro
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
function CloudIntro({ children }) {
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    function move(x, y) {
        const el = ref.current;
        if (!el || matchMedia('(prefers-reduced-motion: reduce)').matches) return;
        const r = el.getBoundingClientRect();
        el.style.setProperty('--cloud-x', `${((x - r.left) / r.width - .5) * 22}px`);
        el.style.setProperty('--cloud-y', `${((y - r.top) / r.height - .5) * 12}px`);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        ref: ref,
        className: "quiet-intro section-pad",
        onPointerMove: (e)=>{
            if (e.pointerType === 'mouse') move(e.clientX, e.clientY);
        },
        onPointerLeave: ()=>{
            ref.current?.style.setProperty('--cloud-x', '0px');
            ref.current?.style.setProperty('--cloud-y', '0px');
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/cloud-intro.tsx",
        lineNumber: 6,
        columnNumber: 9
    }, this);
}
}),
"[project]/src/components/contact-form.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ContactForm",
    ()=>ContactForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/config.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$primitives$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/primitives.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
function ContactForm({ d }) {
    const [state, setState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('idle');
    const [draft, setDraft] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [copyStatus, setCopyStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    function submit(event) {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const name = String(data.get('name') || '').trim();
        const email = String(data.get('email') || '').trim();
        const message = String(data.get('message') || '').trim();
        const subject = String(data.get('subject') || '');
        if (!name || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || message.length < 10 || !data.get('consent')) {
            setState('error');
            return;
        }
        setState('loading');
        const body = `${message}\n\n${name}\n${email}`;
        setDraft(body);
        window.location.href = `mailto:${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["business"].email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        setState('ready');
    }
    async function copy() {
        try {
            await navigator.clipboard.writeText(draft);
            setCopyStatus(d.contact.copied);
        } catch  {
            setCopyStatus(d.contact.copyError);
        }
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
        className: "contact-form",
        method: "post",
        action: `mailto:${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["business"].email}`,
        encType: "text/plain",
        onSubmit: submit,
        "aria-label": d.contact.formTitle,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                children: d.contact.formTitle
            }, void 0, false, {
                fileName: "[project]/src/components/contact-form.tsx",
                lineNumber: 26,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "form-note",
                children: d.contact.required
            }, void 0, false, {
                fileName: "[project]/src/components/contact-form.tsx",
                lineNumber: 26,
                columnNumber: 35
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "form-pair",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        children: [
                            d.contact.name,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                name: "name",
                                autoComplete: "name",
                                required: true,
                                maxLength: 100
                            }, void 0, false, {
                                fileName: "[project]/src/components/contact-form.tsx",
                                lineNumber: 27,
                                columnNumber: 55
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/contact-form.tsx",
                        lineNumber: 27,
                        columnNumber: 32
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        children: [
                            d.contact.email,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                name: "email",
                                type: "email",
                                autoComplete: "email",
                                required: true,
                                maxLength: 200
                            }, void 0, false, {
                                fileName: "[project]/src/components/contact-form.tsx",
                                lineNumber: 27,
                                columnNumber: 152
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/contact-form.tsx",
                        lineNumber: 27,
                        columnNumber: 128
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/contact-form.tsx",
                lineNumber: 27,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                children: [
                    d.contact.subject,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                        name: "subject",
                        required: true,
                        children: d.contact.subjects.map((subject)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                children: subject
                            }, subject, false, {
                                fileName: "[project]/src/components/contact-form.tsx",
                                lineNumber: 28,
                                columnNumber: 98
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/contact-form.tsx",
                        lineNumber: 28,
                        columnNumber: 31
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/contact-form.tsx",
                lineNumber: 28,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                children: [
                    d.contact.message,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                        name: "message",
                        rows: 5,
                        minLength: 10,
                        maxLength: 1800,
                        required: true
                    }, void 0, false, {
                        fileName: "[project]/src/components/contact-form.tsx",
                        lineNumber: 29,
                        columnNumber: 31
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/contact-form.tsx",
                lineNumber: 29,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: "checkbox-label",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "checkbox",
                        name: "consent",
                        required: true
                    }, void 0, false, {
                        fileName: "[project]/src/components/contact-form.tsx",
                        lineNumber: 30,
                        columnNumber: 39
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: d.contact.consent
                    }, void 0, false, {
                        fileName: "[project]/src/components/contact-form.tsx",
                        lineNumber: 30,
                        columnNumber: 87
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/contact-form.tsx",
                lineNumber: 30,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "form-note",
                children: d.contact.note
            }, void 0, false, {
                fileName: "[project]/src/components/contact-form.tsx",
                lineNumber: 31,
                columnNumber: 5
            }, this),
            state === 'error' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                role: "alert",
                className: "form-error",
                children: d.contact.invalid
            }, void 0, false, {
                fileName: "[project]/src/components/contact-form.tsx",
                lineNumber: 32,
                columnNumber: 27
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "submit",
                className: "action",
                disabled: state === 'loading',
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: state === 'loading' ? d.contact.busy : d.contact.submit
                    }, void 0, false, {
                        fileName: "[project]/src/components/contact-form.tsx",
                        lineNumber: 33,
                        columnNumber: 77
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$primitives$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PointMark"], {}, void 0, false, {
                        fileName: "[project]/src/components/contact-form.tsx",
                        lineNumber: 33,
                        columnNumber: 147
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/contact-form.tsx",
                lineNumber: 33,
                columnNumber: 5
            }, this),
            state === 'ready' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "form-result",
                role: "status",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: d.contact.success
                    }, void 0, false, {
                        fileName: "[project]/src/components/contact-form.tsx",
                        lineNumber: 34,
                        columnNumber: 70
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: d.contact.fallback
                    }, void 0, false, {
                        fileName: "[project]/src/components/contact-form.tsx",
                        lineNumber: 34,
                        columnNumber: 96
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: `mailto:${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["business"].email}`,
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["business"].email
                    }, void 0, false, {
                        fileName: "[project]/src/components/contact-form.tsx",
                        lineNumber: 34,
                        columnNumber: 123
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                        children: draft
                    }, void 0, false, {
                        fileName: "[project]/src/components/contact-form.tsx",
                        lineNumber: 34,
                        columnNumber: 180
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        className: "text-button",
                        onClick: copy,
                        children: d.contact.copy
                    }, void 0, false, {
                        fileName: "[project]/src/components/contact-form.tsx",
                        lineNumber: 34,
                        columnNumber: 198
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: copyStatus
                    }, void 0, false, {
                        fileName: "[project]/src/components/contact-form.tsx",
                        lineNumber: 34,
                        columnNumber: 284
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/contact-form.tsx",
                lineNumber: 34,
                columnNumber: 27
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/contact-form.tsx",
        lineNumber: 25,
        columnNumber: 10
    }, this);
}
}),
"[project]/src/components/crown.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Crown",
    ()=>Crown
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
function Crown({ className = '' }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: `crown-icon ${className}`,
        viewBox: "0 0 32 32",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "1.3",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        "aria-hidden": "true",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M6 23 3 10l8 6 5-11 5 11 8-6-3 13Z"
            }, void 0, false, {
                fileName: "[project]/src/components/crown.tsx",
                lineNumber: 1,
                columnNumber: 255
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M7 27h18"
            }, void 0, false, {
                fileName: "[project]/src/components/crown.tsx",
                lineNumber: 1,
                columnNumber: 301
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "16",
                cy: "4",
                r: "1.3"
            }, void 0, false, {
                fileName: "[project]/src/components/crown.tsx",
                lineNumber: 1,
                columnNumber: 321
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/crown.tsx",
        lineNumber: 1,
        columnNumber: 76
    }, this);
}
}),
"[project]/src/components/journal-archive.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "JournalArchive",
    ()=>JournalArchive
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$articles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/content/articles.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/i18n.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
function JournalArchive({ locale, d }) {
    const [category, setCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(d.ui.all);
    const filtered = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$articles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["articles"].filter((article)=>category === d.ui.all || article.category === category);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "journal-filters",
                role: "group",
                "aria-label": d.ui.filter,
                children: d.journal.categories.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        "aria-pressed": category === item,
                        onClick: ()=>setCategory(item),
                        children: item
                    }, item, false, {
                        fileName: "[project]/src/components/journal-archive.tsx",
                        lineNumber: 10,
                        columnNumber: 120
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/journal-archive.tsx",
                lineNumber: 10,
                columnNumber: 15
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "journal-archive",
                "aria-live": "polite",
                children: filtered.length ? filtered.map((article)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        className: "archive-row",
                        href: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["localPath"])(locale, `/journal/${article.slug}`),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "eyebrow",
                                children: article.number
                            }, void 0, false, {
                                fileName: "[project]/src/components/journal-archive.tsx",
                                lineNumber: 10,
                                columnNumber: 426
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "archive-image",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: `/media/${article.image}.webp`,
                                    alt: "",
                                    width: "800",
                                    height: "450",
                                    loading: "lazy"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/journal-archive.tsx",
                                    lineNumber: 10,
                                    columnNumber: 506
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/journal-archive.tsx",
                                lineNumber: 10,
                                columnNumber: 475
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "eyebrow",
                                        children: article.category
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/journal-archive.tsx",
                                        lineNumber: 10,
                                        columnNumber: 607
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        children: article.title
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/journal-archive.tsx",
                                        lineNumber: 10,
                                        columnNumber: 652
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: article.excerpt
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/journal-archive.tsx",
                                        lineNumber: 10,
                                        columnNumber: 676
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-link",
                                        children: [
                                            d.ui.read,
                                            " ↗"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/journal-archive.tsx",
                                        lineNumber: 10,
                                        columnNumber: 700
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/journal-archive.tsx",
                                lineNumber: 10,
                                columnNumber: 602
                            }, this)
                        ]
                    }, article.slug, true, {
                        fileName: "[project]/src/components/journal-archive.tsx",
                        lineNumber: 10,
                        columnNumber: 324
                    }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    children: d.journal.empty
                }, void 0, false, {
                    fileName: "[project]/src/components/journal-archive.tsx",
                    lineNumber: 10,
                    columnNumber: 765
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/journal-archive.tsx",
                lineNumber: 10,
                columnNumber: 229
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/journal-archive.tsx",
        lineNumber: 10,
        columnNumber: 10
    }, this);
}
}),
"[project]/src/components/journey-stats.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "JourneyStats",
    ()=>JourneyStats
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$crown$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/crown.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
function JourneyStats() {
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [progress, setProgress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(1);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const el = ref.current;
        if (!el) return;
        const reduce = matchMedia('(prefers-reduced-motion: reduce)');
        let frame = 0, inView = false;
        const finish = ()=>{
            cancelAnimationFrame(frame);
            setProgress(1);
        };
        const start = ()=>{
            cancelAnimationFrame(frame);
            if (reduce.matches) {
                finish();
                return;
            }
            setProgress(0);
            const started = performance.now();
            const tick = (now)=>{
                const t = Math.min(1, (now - started) / 2600);
                setProgress(1 - Math.pow(1 - t, 2));
                if (t < 1) frame = requestAnimationFrame(tick);
            };
            frame = requestAnimationFrame(tick);
        };
        // Replay when the visitor genuinely scrolls away and returns, not just once at hydration.
        const ob = new IntersectionObserver((entries)=>{
            const visible = entries[0].intersectionRatio >= .5;
            if (visible && !inView) start();
            if (!entries[0].isIntersecting) {
                cancelAnimationFrame(frame);
                setProgress(reduce.matches ? 1 : 0);
            }
            inView = visible;
        }, {
            threshold: [
                0,
                .5
            ]
        });
        ob.observe(el);
        const sync = ()=>{
            if (reduce.matches) finish();
        };
        reduce.addEventListener('change', sync);
        return ()=>{
            ob.disconnect();
            cancelAnimationFrame(frame);
            reduce.removeEventListener('change', sync);
        };
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        ref: ref,
        className: "journey-stats is-revealed",
        "aria-label": "Mahla’s experience and community",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "stat-pair",
                children: [
                    {
                        value: 10,
                        label: 'Years of practice'
                    },
                    {
                        value: 2000,
                        label: 'Clients'
                    }
                ].map((stat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "journey-stat",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "sr-only",
                                children: [
                                    stat.value.toLocaleString('en-US'),
                                    "+ ",
                                    stat.label
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/journey-stats.tsx",
                                lineNumber: 11,
                                columnNumber: 265
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "stat-number",
                                "aria-hidden": "true",
                                children: [
                                    Math.floor(stat.value * progress).toLocaleString('en-US'),
                                    "+"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/journey-stats.tsx",
                                lineNumber: 11,
                                columnNumber: 348
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "stat-label",
                                "aria-hidden": "true",
                                children: stat.label
                            }, void 0, false, {
                                fileName: "[project]/src/components/journey-stats.tsx",
                                lineNumber: 11,
                                columnNumber: 460
                            }, this)
                        ]
                    }, stat.label, true, {
                        fileName: "[project]/src/components/journey-stats.tsx",
                        lineNumber: 11,
                        columnNumber: 218
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/journey-stats.tsx",
                lineNumber: 11,
                columnNumber: 112
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "stats-worldwide",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$crown$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Crown"], {}, void 0, false, {
                        fileName: "[project]/src/components/journey-stats.tsx",
                        lineNumber: 11,
                        columnNumber: 572
                    }, this),
                    " A personal connection. Wherever you are.",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "Online worldwide"
                    }, void 0, false, {
                        fileName: "[project]/src/components/journey-stats.tsx",
                        lineNumber: 11,
                        columnNumber: 621
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/journey-stats.tsx",
                lineNumber: 11,
                columnNumber: 541
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/journey-stats.tsx",
        lineNumber: 11,
        columnNumber: 9
    }, this);
}
}),
"[project]/src/components/living-hero.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LivingHero",
    ()=>LivingHero
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$branch$2d$breeze$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/branch-breeze.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
function LivingHero({ locale }) {
    const canvas = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [reduced, setReduced] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const preference = matchMedia('(prefers-reduced-motion: reduce)');
        const sync = ()=>setReduced(preference.matches);
        sync();
        preference.addEventListener('change', sync);
        return ()=>preference.removeEventListener('change', sync);
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const node = canvas.current;
        const ctx = node?.getContext('2d');
        if (!node || !ctx) return;
        let width = 0, height = 0, frame = 0, last = 0, elapsed = 0, visible = true;
        const leaves = Array.from({
            length: 13
        }, (_, index)=>({
                x: 0,
                y: 0,
                vx: 0,
                vy: 0,
                angle: index,
                age: -index * .8,
                life: 9 + index % 4,
                size: 0
            }));
        function reset(leaf) {
            leaf.x = width * (.17 + Math.random() * .66);
            leaf.y = height * (.15 + Math.random() * .32);
            leaf.vx = (Math.random() - .5) * 8;
            leaf.vy = 8 + Math.random() * 12;
            leaf.angle = Math.random() * Math.PI * 2;
            leaf.age = 0;
            leaf.size = Math.max(4, width * (.008 + Math.random() * .004));
        }
        function resize() {
            if (!node || !ctx) return;
            width = node.clientWidth;
            height = node.clientHeight;
            const ratio = Math.min(devicePixelRatio, 2);
            node.width = width * ratio;
            node.height = height * ratio;
            ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
            leaves.forEach((leaf, i)=>{
                reset(leaf);
                leaf.age = -i * .85;
            });
        }
        function draw(time) {
            if (!ctx) return;
            const dt = last ? Math.min((time - last) / 1000, .04) : 0;
            last = time;
            elapsed += dt;
            ctx.clearRect(0, 0, width, height);
            for (const leaf of leaves){
                leaf.age += dt;
                if (leaf.age < 0) continue;
                if (leaf.age > leaf.life || leaf.y > height * .95) reset(leaf);
                const wind = Math.sin(elapsed * .65 + leaf.angle) * 9 + 6;
                leaf.vx += (wind - leaf.vx) * dt * .8;
                leaf.vy += (27 - leaf.vy) * dt * .35;
                leaf.x += leaf.vx * dt;
                leaf.y += leaf.vy * dt;
                leaf.angle += dt * .55;
                ctx.save();
                ctx.globalAlpha = Math.min(1, leaf.age * 2, (leaf.life - leaf.age) * .6) * .85;
                ctx.translate(leaf.x, leaf.y);
                ctx.rotate(leaf.angle + Math.sin(leaf.age * 1.6) * .5);
                ctx.scale(.4 + Math.abs(Math.cos(leaf.age * 1.9)) * .6, 1);
                const fill = ctx.createLinearGradient(-leaf.size, 0, leaf.size, 0);
                fill.addColorStop(0, '#626e4b');
                fill.addColorStop(.5, '#c6ba7d');
                fill.addColorStop(1, '#e2d6a3');
                ctx.fillStyle = fill;
                ctx.beginPath();
                ctx.moveTo(-leaf.size, 0);
                ctx.quadraticCurveTo(0, -leaf.size * .65, leaf.size, 0);
                ctx.quadraticCurveTo(0, leaf.size * .65, -leaf.size, 0);
                ctx.fill();
                ctx.strokeStyle = '#867746';
                ctx.lineWidth = .6;
                ctx.beginPath();
                ctx.moveTo(-leaf.size, 0);
                ctx.lineTo(leaf.size, 0);
                ctx.stroke();
                ctx.restore();
            }
            frame = requestAnimationFrame(draw);
        }
        function sync() {
            cancelAnimationFrame(frame);
            last = 0;
            if (!reduced && !document.hidden && visible) frame = requestAnimationFrame(draw);
            else ctx?.clearRect(0, 0, width, height);
        }
        const observer = new ResizeObserver(resize);
        observer.observe(node);
        resize();
        const intersection = new IntersectionObserver((entries)=>{
            visible = entries[0].isIntersecting;
            sync();
        });
        intersection.observe(node);
        document.addEventListener('visibilitychange', sync);
        sync();
        return ()=>{
            cancelAnimationFrame(frame);
            observer.disconnect();
            intersection.disconnect();
            document.removeEventListener('visibilitychange', sync);
        };
    }, [
        reduced
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "living-hero",
        id: "home",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                className: "sky-scene",
                src: "/art/cloud-sanctuary.png",
                alt: "",
                fetchPriority: "high",
                width: "1536",
                height: "1024"
            }, void 0, false, {
                fileName: "[project]/src/components/living-hero.tsx",
                lineNumber: 77,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "tree-stage",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        className: "olive-tree",
                        src: "/art/olive-tree.png",
                        width: "1240",
                        height: "1254",
                        alt: "A golden olive tree rooted above a sea of clouds",
                        fetchPriority: "high"
                    }, void 0, false, {
                        fileName: "[project]/src/components/living-hero.tsx",
                        lineNumber: 78,
                        columnNumber: 33
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$branch$2d$breeze$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BranchBreeze"], {}, void 0, false, {
                        fileName: "[project]/src/components/living-hero.tsx",
                        lineNumber: 78,
                        columnNumber: 191
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
                        ref: canvas,
                        className: "falling-leaves",
                        "aria-hidden": "true"
                    }, void 0, false, {
                        fileName: "[project]/src/components/living-hero.tsx",
                        lineNumber: 78,
                        columnNumber: 206
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/living-hero.tsx",
                lineNumber: 78,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "hero-mist",
                "aria-hidden": "true"
            }, void 0, false, {
                fileName: "[project]/src/components/living-hero.tsx",
                lineNumber: 79,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "living-copy",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "eyebrow",
                        children: "Astrology · Self-knowledge · Sovereignty"
                    }, void 0, false, {
                        fileName: "[project]/src/components/living-hero.tsx",
                        lineNumber: 80,
                        columnNumber: 34
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        children: [
                            "Rooted in yourself.",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                fileName: "[project]/src/components/living-hero.tsx",
                                lineNumber: 80,
                                columnNumber: 124
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                children: "Open to possibility."
                            }, void 0, false, {
                                fileName: "[project]/src/components/living-hero.tsx",
                                lineNumber: 80,
                                columnNumber: 129
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/living-hero.tsx",
                        lineNumber: 80,
                        columnNumber: 101
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "living-description",
                        children: [
                            "A living space for astrology, reflection and the Sovereignty Path.",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {
                                className: "desktop-break"
                            }, void 0, false, {
                                fileName: "[project]/src/components/living-hero.tsx",
                                lineNumber: 80,
                                columnNumber: 263
                            }, this),
                            " Find the patterns. Choose your direction."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/living-hero.tsx",
                        lineNumber: 80,
                        columnNumber: 163
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hero-actions",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                className: "pill primary",
                                href: `/${locale}/method`,
                                children: [
                                    "Explore the Sovereignty Path ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "↗"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/living-hero.tsx",
                                        lineNumber: 80,
                                        columnNumber: 457
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/living-hero.tsx",
                                lineNumber: 80,
                                columnNumber: 370
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                className: "pill glass",
                                href: `/${locale}/booking`,
                                children: [
                                    "Book a consultation ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "↗"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/living-hero.tsx",
                                        lineNumber: 80,
                                        columnNumber: 555
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/living-hero.tsx",
                                lineNumber: 80,
                                columnNumber: 478
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/living-hero.tsx",
                        lineNumber: 80,
                        columnNumber: 340
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/living-hero.tsx",
                lineNumber: 80,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/living-hero.tsx",
        lineNumber: 76,
        columnNumber: 10
    }, this);
}
}),
"[project]/src/components/primitives.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Action",
    ()=>Action,
    "Display",
    ()=>Display,
    "Eyebrow",
    ()=>Eyebrow,
    "PointMark",
    ()=>PointMark,
    "ThreePoints",
    ()=>ThreePoints
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
;
;
function PointMark({ className = '' }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: `point-mark ${className}`,
        "aria-hidden": "true",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {}, void 0, false, {
                fileName: "[project]/src/components/primitives.tsx",
                lineNumber: 5,
                columnNumber: 73
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {}, void 0, false, {
                fileName: "[project]/src/components/primitives.tsx",
                lineNumber: 5,
                columnNumber: 78
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {}, void 0, false, {
                fileName: "[project]/src/components/primitives.tsx",
                lineNumber: 5,
                columnNumber: 83
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/primitives.tsx",
        lineNumber: 5,
        columnNumber: 10
    }, this);
}
function Action({ href, children, light = false, className = '' }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        className: `action ${light ? 'action-light' : ''} ${className}`,
        href: href,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                children: children
            }, void 0, false, {
                fileName: "[project]/src/components/primitives.tsx",
                lineNumber: 8,
                columnNumber: 93
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(PointMark, {}, void 0, false, {
                fileName: "[project]/src/components/primitives.tsx",
                lineNumber: 8,
                columnNumber: 116
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/primitives.tsx",
        lineNumber: 8,
        columnNumber: 10
    }, this);
}
function Eyebrow({ children, number }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        className: "eyebrow",
        children: [
            number && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "chapter-number",
                children: [
                    number,
                    " / "
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/primitives.tsx",
                lineNumber: 11,
                columnNumber: 44
            }, this),
            children
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/primitives.tsx",
        lineNumber: 11,
        columnNumber: 10
    }, this);
}
function Display({ children, className = '' }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
        className: `display ${className}`,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/primitives.tsx",
        lineNumber: 14,
        columnNumber: 10
    }, this);
}
function ThreePoints({ variant = 0 }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: `three-points variant-${variant}`,
        viewBox: "0 0 360 260",
        fill: "none",
        "aria-hidden": "true",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M60 195L300 195L180 55Z",
                stroke: "currentColor",
                strokeWidth: ".6"
            }, void 0, false, {
                fileName: "[project]/src/components/primitives.tsx",
                lineNumber: 17,
                columnNumber: 114
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M180 55V232M28 195H332",
                stroke: "currentColor",
                strokeWidth: ".6",
                strokeDasharray: "3 6"
            }, void 0, false, {
                fileName: "[project]/src/components/primitives.tsx",
                lineNumber: 17,
                columnNumber: 189
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "60",
                cy: "195",
                r: "9",
                fill: "currentColor"
            }, void 0, false, {
                fileName: "[project]/src/components/primitives.tsx",
                lineNumber: 17,
                columnNumber: 285
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "300",
                cy: "195",
                r: "9",
                fill: "currentColor"
            }, void 0, false, {
                fileName: "[project]/src/components/primitives.tsx",
                lineNumber: 17,
                columnNumber: 337
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                className: "third-coordinate",
                cx: "180",
                cy: "55",
                r: "12",
                fill: "currentColor"
            }, void 0, false, {
                fileName: "[project]/src/components/primitives.tsx",
                lineNumber: 17,
                columnNumber: 390
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "180",
                cy: "55",
                r: "28",
                stroke: "currentColor",
                strokeWidth: ".6"
            }, void 0, false, {
                fileName: "[project]/src/components/primitives.tsx",
                lineNumber: 17,
                columnNumber: 472
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/primitives.tsx",
        lineNumber: 17,
        columnNumber: 10
    }, this);
}
}),
"[project]/src/components/space-preview.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SpacePreview",
    ()=>SpacePreview
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$crown$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/crown.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/config.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
const tabs = [
    'Overview',
    'Birth charts',
    'Bookings',
    'Classes',
    'Support',
    'Settings'
];
function SpacePreview({ locale }) {
    const [active, setActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('Overview');
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "space-preview",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "preview-banner",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "YOUR SPACE · DESIGN PREVIEW"
                    }, void 0, false, {
                        fileName: "[project]/src/components/space-preview.tsx",
                        lineNumber: 10,
                        columnNumber: 77
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "Sign in to the existing member site to access your personal information."
                    }, void 0, false, {
                        fileName: "[project]/src/components/space-preview.tsx",
                        lineNumber: 10,
                        columnNumber: 117
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: `/${locale}/sign-in`,
                        children: "Sign in ↗"
                    }, void 0, false, {
                        fileName: "[project]/src/components/space-preview.tsx",
                        lineNumber: 10,
                        columnNumber: 196
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/space-preview.tsx",
                lineNumber: 10,
                columnNumber: 45
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-layout",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                        className: "space-sidebar",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$crown$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Crown"], {
                                className: "space-emblem"
                            }, void 0, false, {
                                fileName: "[project]/src/components/space-preview.tsx",
                                lineNumber: 10,
                                columnNumber: 315
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: [
                                    "A space to",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/src/components/space-preview.tsx",
                                        lineNumber: 10,
                                        columnNumber: 361
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                        children: "return to yourself."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/space-preview.tsx",
                                        lineNumber: 10,
                                        columnNumber: 366
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/space-preview.tsx",
                                lineNumber: 10,
                                columnNumber: 348
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                                "aria-label": "Member space preview",
                                children: tabs.map((tab, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        "aria-current": active === tab ? 'page' : undefined,
                                        onClick: ()=>setActive(tab),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                "aria-hidden": "true",
                                                children: [
                                                    '⊙',
                                                    '☉',
                                                    '◷',
                                                    '◇',
                                                    '?',
                                                    '⚙'
                                                ][i]
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/space-preview.tsx",
                                                lineNumber: 10,
                                                columnNumber: 558
                                            }, this),
                                            tab,
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "sidebar-arrow",
                                                children: "↗"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/space-preview.tsx",
                                                lineNumber: 10,
                                                columnNumber: 625
                                            }, this)
                                        ]
                                    }, tab, true, {
                                        fileName: "[project]/src/components/space-preview.tsx",
                                        lineNumber: 10,
                                        columnNumber: 458
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/space-preview.tsx",
                                lineNumber: 10,
                                columnNumber: 398
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: `/${locale}`,
                                children: "← Back to the website"
                            }, void 0, false, {
                                fileName: "[project]/src/components/space-preview.tsx",
                                lineNumber: 10,
                                columnNumber: 682
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/space-preview.tsx",
                        lineNumber: 10,
                        columnNumber: 282
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-content",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-heading",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "eyebrow",
                                            children: "YOUR PERSONAL SANCTUARY"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/space-preview.tsx",
                                            lineNumber: 10,
                                            columnNumber: 811
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                            children: active === 'Overview' ? 'Your next chapter starts within.' : active
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/space-preview.tsx",
                                            lineNumber: 10,
                                            columnNumber: 867
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/space-preview.tsx",
                                    lineNumber: 10,
                                    columnNumber: 806
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/space-preview.tsx",
                                lineNumber: 10,
                                columnNumber: 775
                            }, this),
                            active === 'Overview' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "dashboard-welcome",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "eyebrow",
                                                        children: "A MOMENT FOR YOU"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/space-preview.tsx",
                                                        lineNumber: 11,
                                                        columnNumber: 72
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                        children: [
                                                            "Pause. Listen.",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                                fileName: "[project]/src/components/space-preview.tsx",
                                                                lineNumber: 11,
                                                                columnNumber: 139
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                                                children: "Find your own rhythm."
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/space-preview.tsx",
                                                                lineNumber: 11,
                                                                columnNumber: 144
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/space-preview.tsx",
                                                        lineNumber: 11,
                                                        columnNumber: 121
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                        className: "pill primary",
                                                        href: `/${locale}/sign-in`,
                                                        children: "Continue your journey ↗"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/space-preview.tsx",
                                                        lineNumber: 11,
                                                        columnNumber: 179
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/space-preview.tsx",
                                                lineNumber: 11,
                                                columnNumber: 67
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "dashboard-orbits",
                                                "aria-hidden": "true",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {}, void 0, false, {
                                                        fileName: "[project]/src/components/space-preview.tsx",
                                                        lineNumber: 11,
                                                        columnNumber: 327
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {}, void 0, false, {
                                                        fileName: "[project]/src/components/space-preview.tsx",
                                                        lineNumber: 11,
                                                        columnNumber: 331
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {}, void 0, false, {
                                                        fileName: "[project]/src/components/space-preview.tsx",
                                                        lineNumber: 11,
                                                        columnNumber: 335
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$crown$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Crown"], {}, void 0, false, {
                                                        fileName: "[project]/src/components/space-preview.tsx",
                                                        lineNumber: 11,
                                                        columnNumber: 339
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/space-preview.tsx",
                                                lineNumber: 11,
                                                columnNumber: 274
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/space-preview.tsx",
                                        lineNumber: 11,
                                        columnNumber: 32
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "dashboard-grid",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "dashboard-card chart-tile",
                                                onClick: ()=>setActive('Birth charts'),
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "eyebrow",
                                                        children: "SELF-KNOWLEDGE"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/space-preview.tsx",
                                                        lineNumber: 11,
                                                        columnNumber: 479
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        children: "Your natal map"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/space-preview.tsx",
                                                        lineNumber: 11,
                                                        columnNumber: 526
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        children: "Explore the patterns written in your birth chart."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/space-preview.tsx",
                                                        lineNumber: 11,
                                                        columnNumber: 549
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "tile-link",
                                                        children: "Open your charts ↗"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/space-preview.tsx",
                                                        lineNumber: 11,
                                                        columnNumber: 605
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/space-preview.tsx",
                                                lineNumber: 11,
                                                columnNumber: 391
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "dashboard-card",
                                                onClick: ()=>setActive('Bookings'),
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "eyebrow",
                                                        children: "CONNECTION"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/space-preview.tsx",
                                                        lineNumber: 11,
                                                        columnNumber: 740
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        children: "Your consultations"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/space-preview.tsx",
                                                        lineNumber: 11,
                                                        columnNumber: 783
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        children: "Sign in to see your appointments and session details."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/space-preview.tsx",
                                                        lineNumber: 11,
                                                        columnNumber: 810
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "tile-link",
                                                        children: "View your bookings ↗"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/space-preview.tsx",
                                                        lineNumber: 11,
                                                        columnNumber: 870
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/space-preview.tsx",
                                                lineNumber: 11,
                                                columnNumber: 667
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "dashboard-card",
                                                onClick: ()=>setActive('Classes'),
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "eyebrow",
                                                        children: "GROWTH"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/space-preview.tsx",
                                                        lineNumber: 11,
                                                        columnNumber: 1006
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        children: "Continue learning"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/space-preview.tsx",
                                                        lineNumber: 11,
                                                        columnNumber: 1045
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        children: "Return to your classes and deepen your practice."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/space-preview.tsx",
                                                        lineNumber: 11,
                                                        columnNumber: 1071
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "tile-link",
                                                        children: "Explore your learning ↗"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/space-preview.tsx",
                                                        lineNumber: 11,
                                                        columnNumber: 1126
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/space-preview.tsx",
                                                lineNumber: 11,
                                                columnNumber: 934
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/space-preview.tsx",
                                        lineNumber: 11,
                                        columnNumber: 359
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "reflection-note",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$crown$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Crown"], {}, void 0, false, {
                                                fileName: "[project]/src/components/space-preview.tsx",
                                                lineNumber: 11,
                                                columnNumber: 1232
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "eyebrow",
                                                        children: "A QUESTION TO CARRY"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/space-preview.tsx",
                                                        lineNumber: 11,
                                                        columnNumber: 1245
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        children: "What becomes possible when you choose a different perspective?"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/space-preview.tsx",
                                                        lineNumber: 11,
                                                        columnNumber: 1297
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/space-preview.tsx",
                                                lineNumber: 11,
                                                columnNumber: 1240
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/space-preview.tsx",
                                        lineNumber: 11,
                                        columnNumber: 1199
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/space-preview.tsx",
                                lineNumber: 11,
                                columnNumber: 30
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-empty",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        "aria-hidden": "true",
                                        children: active === 'Birth charts' ? '☉' : active === 'Bookings' ? '◷' : '✧'
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/space-preview.tsx",
                                        lineNumber: 11,
                                        columnNumber: 1413
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        children: active === 'Support' ? 'A little guidance, when you need it.' : active === 'Settings' ? 'Your details. Your preferences.' : `A home for your ${active.toLowerCase()}.`
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/space-preview.tsx",
                                        lineNumber: 11,
                                        columnNumber: 1514
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: active === 'Support' ? 'Contact Mahla for help with your classes, appointments or account.' : 'This preview contains no personal account data. Sign in to the existing member site to continue.'
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/space-preview.tsx",
                                        lineNumber: 11,
                                        columnNumber: 1691
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        className: "pill primary",
                                        href: active === 'Support' ? `/${locale}/contact` : `/${locale}/sign-in`,
                                        children: [
                                            active === 'Support' ? 'Contact Mahla' : 'Sign in to continue',
                                            " ↗"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/space-preview.tsx",
                                        lineNumber: 11,
                                        columnNumber: 1892
                                    }, this),
                                    active === 'Classes' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        className: "text-link",
                                        href: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["business"].classes,
                                        children: "Browse available classes"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/space-preview.tsx",
                                        lineNumber: 11,
                                        columnNumber: 2095
                                    }, this),
                                    active === 'Bookings' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        className: "text-link",
                                        href: `/${locale}/booking`,
                                        children: "Explore consultations"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/space-preview.tsx",
                                        lineNumber: 11,
                                        columnNumber: 2199
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/space-preview.tsx",
                                lineNumber: 11,
                                columnNumber: 1384
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/space-preview.tsx",
                        lineNumber: 10,
                        columnNumber: 744
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/space-preview.tsx",
                lineNumber: 10,
                columnNumber: 252
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/space-preview.tsx",
        lineNumber: 10,
        columnNumber: 10
    }, this);
}
}),
"[project]/src/components/transparent-motion.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TransparentMotion",
    ()=>TransparentMotion
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
function TransparentMotion() {
    const canvas = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const node = canvas.current;
        if (!node) return;
        const ctx = node.getContext('2d', {
            willReadFrequently: true
        });
        if (!ctx) return;
        const video = document.createElement('video');
        video.muted = true;
        video.loop = true;
        video.playsInline = true;
        video.preload = 'none';
        video.src = '/media/review/closing-pin.mp4';
        const reduce = matchMedia('(prefers-reduced-motion: reduce)');
        let visible = false, frame = 0, last = 0, disposed = false;
        function paint(now) {
            if (disposed) return;
            if (video.readyState >= 2 && now - last >= 42) {
                last = now;
                const w = node.width, h = node.height;
                const scale = Math.max(w / video.videoWidth, h / video.videoHeight);
                ctx.clearRect(0, 0, w, h);
                ctx.drawImage(video, (w - video.videoWidth * scale) / 2, (h - video.videoHeight * scale) / 2, video.videoWidth * scale, video.videoHeight * scale);
                const pixels = ctx.getImageData(0, 0, w, h);
                for(let i = 0; i < pixels.data.length; i += 4){
                    const light = .2126 * pixels.data[i] + .7152 * pixels.data[i + 1] + .0722 * pixels.data[i + 2];
                    const t = Math.max(0, Math.min(1, (light - 38) / 105));
                    pixels.data[i + 3] = Math.round(255 * t * t * (3 - 2 * t));
                }
                ctx.putImageData(pixels, 0, 0);
            }
            frame = requestAnimationFrame(paint);
        }
        function sync() {
            cancelAnimationFrame(frame);
            if (visible && !document.hidden && !reduce.matches && document.documentElement.dataset.motionPaused !== 'true') {
                void video.play().catch(()=>{});
                frame = requestAnimationFrame(paint);
            } else {
                video.pause();
                if (reduce.matches) ctx.clearRect(0, 0, node.width, node.height);
            }
        }
        const observer = new IntersectionObserver((entries)=>{
            visible = entries[0].isIntersecting;
            sync();
        });
        observer.observe(node);
        reduce.addEventListener('change', sync);
        document.addEventListener('visibilitychange', sync);
        window.addEventListener('mahla-motion', sync);
        return ()=>{
            disposed = true;
            cancelAnimationFrame(frame);
            observer.disconnect();
            reduce.removeEventListener('change', sync);
            document.removeEventListener('visibilitychange', sync);
            window.removeEventListener('mahla-motion', sync);
            video.pause();
            video.removeAttribute('src');
            video.load();
        };
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
        ref: canvas,
        width: "384",
        height: "420",
        className: "transparent-motion",
        "aria-hidden": "true"
    }, void 0, false, {
        fileName: "[project]/src/components/transparent-motion.tsx",
        lineNumber: 57,
        columnNumber: 10
    }, this);
}
}),
"[project]/src/components/video-library.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "VideoLibrary",
    ()=>VideoLibrary
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$videos$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/content/videos.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
function VideoLibrary() {
    const [selected, setSelected] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const dialog = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const opener = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (selected === null) return;
        const modal = dialog.current;
        const previous = document.body.style.overflow;
        modal?.showModal();
        document.body.style.overflow = 'hidden';
        return ()=>{
            modal?.close();
            document.body.style.overflow = previous;
            opener.current?.focus();
        };
    }, [
        selected
    ]);
    const video = selected === null ? null : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$videos$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["videos"][selected];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "video-library",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "video-library-intro",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "eyebrow",
                                children: "SELECTED FROM MAHLA’S CHANNEL"
                            }, void 0, false, {
                                fileName: "[project]/src/components/video-library.tsx",
                                lineNumber: 18,
                                columnNumber: 73
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "Astrology, lunar cycles and a different perspective. Videos in Persian, with English title summaries."
                            }, void 0, false, {
                                fileName: "[project]/src/components/video-library.tsx",
                                lineNumber: 18,
                                columnNumber: 135
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/video-library.tsx",
                        lineNumber: 18,
                        columnNumber: 36
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "video-grid",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$videos$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["videos"].map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                className: "video-tile",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "video-cover",
                                        "aria-label": `Play ${item.englishTitle}`,
                                        onClick: (event)=>{
                                            opener.current = event.currentTarget;
                                            setSelected(i);
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: item.thumbnail,
                                                alt: "",
                                                width: "480",
                                                height: "360",
                                                loading: "lazy"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/video-library.tsx",
                                                lineNumber: 18,
                                                columnNumber: 497
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "video-play",
                                                "aria-hidden": "true",
                                                children: "▷"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/video-library.tsx",
                                                lineNumber: 18,
                                                columnNumber: 571
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "video-language",
                                                children: "فارسی · PERSIAN"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/video-library.tsx",
                                                lineNumber: 18,
                                                columnNumber: 627
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/video-library.tsx",
                                        lineNumber: 18,
                                        columnNumber: 347
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "video-tile-copy",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "eyebrow",
                                                children: item.category
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/video-library.tsx",
                                                lineNumber: 18,
                                                columnNumber: 724
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                children: item.englishTitle
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/video-library.tsx",
                                                lineNumber: 18,
                                                columnNumber: 766
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "video-original-title",
                                                dir: "rtl",
                                                lang: "fa",
                                                children: item.title
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/video-library.tsx",
                                                lineNumber: 18,
                                                columnNumber: 794
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: `https://www.youtube.com/watch?v=${item.id}`,
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                                children: [
                                                    "Watch on YouTube ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        "aria-hidden": "true",
                                                        children: "↗"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/video-library.tsx",
                                                        lineNumber: 18,
                                                        columnNumber: 980
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/video-library.tsx",
                                                lineNumber: 18,
                                                columnNumber: 866
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/video-library.tsx",
                                        lineNumber: 18,
                                        columnNumber: 691
                                    }, this)
                                ]
                            }, item.id, true, {
                                fileName: "[project]/src/components/video-library.tsx",
                                lineNumber: 18,
                                columnNumber: 301
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/video-library.tsx",
                        lineNumber: 18,
                        columnNumber: 249
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        className: "pill glass video-all",
                        href: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$videos$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["channelUrl"],
                        target: "_blank",
                        rel: "noopener noreferrer",
                        children: [
                            "Explore all videos ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                "aria-hidden": "true",
                                children: "↗"
                            }, void 0, false, {
                                fileName: "[project]/src/components/video-library.tsx",
                                lineNumber: 18,
                                columnNumber: 1156
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/video-library.tsx",
                        lineNumber: 18,
                        columnNumber: 1041
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/video-library.tsx",
                lineNumber: 18,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("dialog", {
                ref: dialog,
                className: "video-dialog",
                "aria-labelledby": "video-dialog-title",
                onCancel: ()=>setSelected(null),
                onClick: (event)=>{
                    if (event.target === event.currentTarget) setSelected(null);
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "video-modal-panel",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "video-modal-top",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "eyebrow",
                                    children: "MAHLA / THE VOICE OF THE THIRD POINT"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/video-library.tsx",
                                    lineNumber: 19,
                                    columnNumber: 275
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    autoFocus: true,
                                    onClick: ()=>setSelected(null),
                                    "aria-label": "Close video",
                                    children: [
                                        "Close ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            "aria-hidden": "true",
                                            children: "×"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/video-library.tsx",
                                            lineNumber: 19,
                                            columnNumber: 427
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/video-library.tsx",
                                    lineNumber: 19,
                                    columnNumber: 344
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/video-library.tsx",
                            lineNumber: 19,
                            columnNumber: 242
                        }, this),
                        video && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "video-player",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("iframe", {
                                        src: `https://www.youtube-nocookie.com/embed/${video.id}?autoplay=1&rel=0`,
                                        title: video.englishTitle,
                                        allow: "autoplay; encrypted-media; picture-in-picture; fullscreen",
                                        referrerPolicy: "strict-origin-when-cross-origin",
                                        allowFullScreen: true
                                    }, video.id, false, {
                                        fileName: "[project]/src/components/video-library.tsx",
                                        lineNumber: 19,
                                        columnNumber: 517
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/video-library.tsx",
                                    lineNumber: 19,
                                    columnNumber: 487
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "video-modal-caption",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            id: "video-dialog-title",
                                            children: video.englishTitle
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/video-library.tsx",
                                            lineNumber: 19,
                                            columnNumber: 818
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: `https://www.youtube.com/watch?v=${video.id}`,
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            children: "Watch on YouTube ↗"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/video-library.tsx",
                                            lineNumber: 19,
                                            columnNumber: 871
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/video-library.tsx",
                                    lineNumber: 19,
                                    columnNumber: 781
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/video-library.tsx",
                            lineNumber: 19,
                            columnNumber: 485
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/video-library.tsx",
                    lineNumber: 19,
                    columnNumber: 207
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/video-library.tsx",
                lineNumber: 19,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/video-library.tsx",
        lineNumber: 17,
        columnNumber: 10
    }, this);
}
}),
"[project]/src/content/articles.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "articles",
    ()=>articles
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/config.ts [app-ssr] (ecmascript)");
;
const articles = [
    {
        slug: 'a-position-beyond-duality',
        number: '01',
        title: 'A position beyond duality.',
        category: 'Sovereignty',
        excerpt: 'What becomes possible when you stop choosing between two familiar reactions?',
        image: 'threshold-desktop',
        source: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["legacyOrigin"]}/articles/what-is-the-3rd-point`,
        paragraphs: [
            'Between one position and its opposite, it is easy to feel that there are only two possible responses. The Third Point begins by questioning that assumption.',
            'Observation creates a little distance. From that distance, a pattern can become visible: the same reaction, a familiar story, a decision made before the question has been fully understood.',
            'The invitation is to see the structure more clearly before choosing your next step. Clarity does not promise certainty. It gives you a different relationship with the choice.'
        ]
    },
    {
        slug: 'a-different-relationship-with-timing',
        number: '02',
        title: 'A different relationship with timing.',
        category: 'Timing',
        excerpt: 'Cycles can offer a rhythm for reflection, without deciding your future for you.',
        image: 'material-desktop',
        source: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["legacyOrigin"]}/articles/quantum-scheduling-lunar-cycles`,
        paragraphs: [
            'Timing is part of every decision. There are moments to begin, moments to observe and moments to reconsider the direction you have chosen.',
            'Astrological cycles can be used as prompts for reflection. They are not a guarantee that a particular action will produce a particular result.',
            'The useful question is practical: what deserves your attention now, and what would a deliberate next step look like?'
        ]
    },
    {
        slug: 'recognising-the-pattern',
        number: '03',
        title: 'Recognising the pattern is a beginning.',
        category: 'Identity',
        excerpt: 'Where an inherited way of being ends, a more conscious choice can begin.',
        image: 'threshold-mobile',
        source: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["legacyOrigin"]}/articles/what-is-the-matrix`,
        paragraphs: [
            'A familiar pattern can feel like an identity. It can become difficult to separate what you have learned to do from who you are.',
            'Reflection begins by noticing the structures around that pattern: expectations, routines, boundaries and assumptions. Noticing them does not require an immediate dramatic change.',
            'A small, deliberate choice can be a starting point. The work is to bring insight into practice, with room to question, adjust and return.'
        ]
    }
];
}),
"[project]/src/content/services.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "services",
    ()=>services
]);
const services = [
    {
        slug: 'strategic-deep-dive',
        number: '01',
        title: 'Strategic Deep Dive',
        duration: '120 MINUTES',
        description: 'One question. A wider perspective.',
        detail: 'A focused private session for a decision, transition, pattern or question that requires a deeper perspective.',
        explores: [
            'The question beneath the question',
            'Patterns shaping the present',
            'A clearer position from which to act'
        ],
        fit: 'A decision, transition or recurring question you want to explore in depth.',
        price: null,
        destination: 'booking'
    },
    {
        slug: 'matrix-audit',
        number: '02',
        title: 'Matrix Audit',
        duration: '10 DAYS',
        description: 'Understand the structures holding you in place.',
        detail: 'An intensive examination of the structures currently shaping your life and work. Identify recurring patterns, conflicting priorities and the places where attention and energy are being lost.',
        explores: [
            'Recurring patterns and assumptions',
            'Competing priorities and boundaries',
            'The structures that support your next chapter'
        ],
        fit: 'A pattern that keeps repeating across different parts of your life.',
        price: null,
        destination: 'booking'
    },
    {
        slug: 'sovereign-flow',
        number: '03',
        title: 'Sovereign Flow',
        duration: '30 DAYS',
        description: 'Bring insight into the way you live.',
        detail: 'A private advisory and coaching container designed to move insight into daily practice. For people navigating significant personal, creative or professional transitions.',
        explores: [
            'Intention translated into daily practice',
            'Routines, boundaries and decisions',
            'Reflection through a period of transition'
        ],
        fit: 'A personal, creative or professional transition that calls for sustained reflection.',
        price: null,
        destination: 'booking'
    },
    {
        slug: 'natal-map',
        number: '04',
        title: 'The Natal Map',
        duration: 'PERSONAL INTERPRETATION',
        description: 'Your patterns, in a different language.',
        detail: 'A personal birth-chart interpretation designed as a map for self-reflection, timing and pattern recognition.',
        explores: [
            'Your birth chart as an interpretive map',
            'Patterns, cycles and questions',
            'A language for deeper personal inquiry'
        ],
        fit: 'Curiosity about the patterns and possibilities reflected in your natal chart.',
        price: null,
        destination: 'birth-chart'
    },
    {
        slug: 'the-academy',
        number: '05',
        title: 'The Academy',
        duration: 'STRUCTURED LEARNING',
        description: 'Deepen the inquiry. Develop your practice.',
        detail: 'Structured learning exploring astrology, sovereignty, identity and the Third Point method.',
        explores: [
            'Astrology as an interpretive language',
            'Identity and sovereignty',
            'Applying the Third Point perspective'
        ],
        fit: 'A desire to understand the ideas behind the work and explore them through learning.',
        price: null,
        destination: 'academy'
    }
];
}),
"[project]/src/content/videos.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Titles and channel ownership verified against YouTube oEmbed, October 8, 2026.
__turbopack_context__.s([
    "channelUrl",
    ()=>channelUrl,
    "videos",
    ()=>videos
]);
const channelUrl = "https://www.youtube.com/@the3rdpoint";
const videos = [
    {
        "id": "vnGT5LLe2BU",
        "title": "پیام خورشید گرفتگی لئو",
        "englishTitle": "The message of the Leo solar eclipse",
        "category": "Eclipses",
        "thumbnail": "https://i.ytimg.com/vi/vnGT5LLe2BU/hqdefault.jpg"
    },
    {
        "id": "8Tq1sXOwqxQ",
        "title": "تاثیر ۲۰ ساله پلوتو در اکواریوس بر ۱۲ نشان زودیاک",
        "englishTitle": "Pluto in Aquarius: a 20-year chapter",
        "category": "Planetary cycles",
        "thumbnail": "https://i.ytimg.com/vi/8Tq1sXOwqxQ/hqdefault.jpg"
    },
    {
        "id": "wFiu96i51y8",
        "title": "خروج از سیرک وحشت راه حل در نقطه سوم",
        "englishTitle": "A way through fear: the Third Point",
        "category": "The Third Point",
        "thumbnail": "https://i.ytimg.com/vi/wFiu96i51y8/hqdefault.jpg"
    },
    {
        "id": "w6XuPZRfURg",
        "title": "ماه کامل سجتریوس حقیقتت را فریاد بزن، روحت را آزاد کن",
        "englishTitle": "Sagittarius full moon: speak your truth",
        "category": "Lunar cycles",
        "thumbnail": "https://i.ytimg.com/vi/w6XuPZRfURg/hqdefault.jpg"
    },
    {
        "id": "R8Md8qOnlTY",
        "title": "ماه نو کماندار حقیقتی که مسیرت را عوض میکند",
        "englishTitle": "Sagittarius new moon: a new direction",
        "category": "Lunar cycles",
        "thumbnail": "https://i.ytimg.com/vi/R8Md8qOnlTY/hqdefault.jpg"
    },
    {
        "id": "9VBVS86ORBM",
        "title": "هروسکوپ سال ۲۰۲۶ برای اکواریوس (بهمن)",
        "englishTitle": "Aquarius: the 2026 horoscope",
        "category": "Zodiac",
        "thumbnail": "https://i.ytimg.com/vi/9VBVS86ORBM/hqdefault.jpg"
    }
];
}),
];

//# sourceMappingURL=src_1jha8s6._.js.map