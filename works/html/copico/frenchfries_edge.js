/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
        ],
        symbols = {
            "stage": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "both",
                centerStage: "horizontal",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'c0',
                            type: 'image',
                            rect: ['367px', '259px', '187px', '129px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"p-5/c0.png",'0px','0px']
                        },
                        {
                            id: 'c1',
                            type: 'image',
                            rect: ['714px', '161px', '109px', '75px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"p-5/c1.png",'0px','0px'],
                            userClass: "floatCopico"
                        },
                        {
                            id: 'c2',
                            type: 'image',
                            rect: ['1067px', '223px', '80px', '56px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"p-5/c2.png",'0px','0px'],
                            userClass: "floatCopico"
                        },
                        {
                            id: 'c3',
                            type: 'image',
                            rect: ['1107px', '493px', '113px', '78px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"p-5/c3.png",'0px','0px'],
                            userClass: "floatCopico"
                        },
                        {
                            id: 'e0',
                            type: 'image',
                            rect: ['286px', '302px', '76px', '63px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"p-5/e0.png",'0px','0px'],
                            userClass: "floatCopico",
                            transform: [[],[],[],['0.68253','0.68253']]
                        },
                        {
                            id: 'e1',
                            type: 'image',
                            rect: ['55px', '727px', '87px', '43px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"p-5/e1.png",'0px','0px'],
                            userClass: "floatCopico",
                            transform: [[],['56'],[],['0.50575','0.50575']]
                        },
                        {
                            id: 'e2',
                            display: 'none',
                            type: 'image',
                            rect: ['892px', '521px', '73px', '147px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"p-5/e2.png",'0px','0px'],
                            userClass: "floatCopico"
                        },
                        {
                            id: 'e3',
                            display: 'none',
                            type: 'image',
                            rect: ['847px', '532px', '144px', '99px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"p-5/e3.png",'0px','0px'],
                            userClass: "floatCopico"
                        },
                        {
                            id: 'e4',
                            display: 'none',
                            type: 'image',
                            rect: ['897px', '582px', '118px', '45px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"p-5/e4.png",'0px','0px'],
                            userClass: "floatCopico"
                        },
                        {
                            id: 'e5',
                            display: 'none',
                            type: 'image',
                            rect: ['932px', '612px', '89px', '77px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"p-5/e5.png",'0px','0px'],
                            userClass: "floatCopico"
                        },
                        {
                            id: 'logo',
                            type: 'image',
                            rect: ['154px', '241px', '350px', '185px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"p-5/logo.png",'0px','0px'],
                            transform: [[],[],[],['0.58333','0.58333']]
                        },
                        {
                            id: 'pz',
                            type: 'image',
                            rect: ['615px', '365px', '674px', '633px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"p-5/pz.png",'0px','0px']
                        },
                        {
                            id: 'ad',
                            display: 'none',
                            type: 'image',
                            rect: ['598px', '651px', '629px', '244px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"p-5/ad.png",'0px','0px']
                        },
                        {
                            id: 'btn-right',
                            type: 'rect',
                            rect: ['557px', '828px', '56px', '56px', 'auto', 'auto'],
                            fill: ["rgba(192,192,192,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            userClass: "swiper-button-next"
                        },
                        {
                            id: 'btn-left',
                            type: 'rect',
                            rect: ['36px', '827px', '56px', '56px', 'auto', 'auto'],
                            fill: ["rgba(192,192,192,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            userClass: "swiper-button-prev"
                        },
                        {
                            id: 'products',
                            type: 'rect',
                            rect: ['65px', '749px', '483px', '219px', 'auto', 'auto'],
                            fill: ["rgba(192,192,192,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            userClass: "swiper-container"
                        },
                        {
                            id: 'TextContent',
                            type: 'rect',
                            rect: ['104px', '471px', '422px', '288px', 'auto', 'auto'],
                            fill: ["rgba(192,192,192,0.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"],
                            userClass: "TextContent"
                        },
                        {
                            id: 'btn-cpmlcx',
                            type: 'image',
                            rect: ['229px', '987px', '179px', '32px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"btn-cpmlcx.png",'0px','0px']
                        },
                        {
                            id: 'menu',
                            type: 'group',
                            rect: ['0', '0', '1327', '259', 'auto', 'auto'],
                            c: [
                            {
                                id: 'bg',
                                type: 'image',
                                rect: ['0px', '0px', '1327px', '259px', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"menu/bg.png",'0px','0px']
                            },
                            {
                                id: 'bg1',
                                type: 'image',
                                rect: ['324px', '76px', '444px', '73px', 'auto', 'auto'],
                                opacity: '0',
                                fill: ["rgba(0,0,0,0)",im+"menu/bg1.png",'0px','0px']
                            },
                            {
                                id: 'top-potatochips',
                                symbolName: 'top-potatochips',
                                type: 'rect',
                                rect: ['754', '21', '80', '60', 'auto', 'auto']
                            },
                            {
                                id: 'top-crisp',
                                symbolName: 'top-crisp',
                                type: 'rect',
                                rect: ['864', '16', '88', '68', 'auto', 'auto']
                            },
                            {
                                id: 'top-biscuit',
                                symbolName: 'top-biscuit',
                                type: 'rect',
                                rect: ['977', '18', '76', '65', 'auto', 'auto']
                            },
                            {
                                id: 'top-frenchfries',
                                symbolName: 'top-frenchfries',
                                type: 'rect',
                                rect: ['1080', '23', '115', '54', 'auto', 'auto']
                            },
                            {
                                id: 'top-chain',
                                symbolName: 'top-chain',
                                type: 'rect',
                                rect: ['394', '15', '119', '59', 'auto', 'auto']
                            },
                            {
                                id: 'top-homepage',
                                symbolName: 'top-homepage',
                                type: 'rect',
                                rect: ['104', '14', '220', '102', 'auto', 'auto']
                            },
                            {
                                id: 'top-logo',
                                symbolName: 'top-logo',
                                type: 'rect',
                                rect: ['564', '-124', '154', '156', 'auto', 'auto']
                            }]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '1327px', '1080px', 'auto', 'auto'],
                            overflow: 'visible',
                            fill: ["rgba(255,255,255,0.00)"]
                        }
                    }
                },
                timeline: {
                    duration: 1855,
                    autoPlay: true,
                    data: [
                        [
                            "eid20",
                            "scaleX",
                            0,
                            1000,
                            "easeOutQuart",
                            "${e0}",
                            '0.68253',
                            '1'
                        ],
                        [
                            "eid26",
                            "top",
                            0,
                            1000,
                            "easeOutQuart",
                            "${e1}",
                            '727px',
                            '848px'
                        ],
                        [
                            "eid57",
                            "display",
                            805,
                            0,
                            "easeOutQuart",
                            "${e4}",
                            'none',
                            'block'
                        ],
                        [
                            "eid48",
                            "left",
                            805,
                            1000,
                            "easeOutQuart",
                            "${e5}",
                            '932px',
                            '1118px'
                        ],
                        [
                            "eid116",
                            "top",
                            0,
                            1250,
                            "easeOutElastic",
                            "${top-logo}",
                            '-263px',
                            '-124px'
                        ],
                        [
                            "eid36",
                            "left",
                            805,
                            1000,
                            "easeOutQuart",
                            "${e2}",
                            '892px',
                            '834px'
                        ],
                        [
                            "eid44",
                            "top",
                            805,
                            1000,
                            "easeOutQuart",
                            "${e4}",
                            '582px',
                            '580px'
                        ],
                        [
                            "eid32",
                            "scaleY",
                            0,
                            1000,
                            "easeOutQuart",
                            "${e1}",
                            '0.50575',
                            '1'
                        ],
                        [
                            "eid52",
                            "opacity",
                            250,
                            860,
                            "easeOutQuart",
                            "${pz}",
                            '0',
                            '1'
                        ],
                        [
                            "eid50",
                            "top",
                            805,
                            1000,
                            "easeOutQuart",
                            "${e5}",
                            '612px',
                            '814px'
                        ],
                        [
                            "eid24",
                            "left",
                            0,
                            1000,
                            "easeOutQuart",
                            "${e1}",
                            '55px',
                            '-246px'
                        ],
                        [
                            "eid22",
                            "scaleY",
                            0,
                            1000,
                            "easeOutQuart",
                            "${e0}",
                            '0.68253',
                            '1'
                        ],
                        [
                            "eid12",
                            "scaleX",
                            0,
                            1000,
                            "easeOutElastic",
                            "${logo}",
                            '0.58333',
                            '1'
                        ],
                        [
                            "eid14",
                            "scaleY",
                            0,
                            1000,
                            "easeOutElastic",
                            "${logo}",
                            '0.58333',
                            '1'
                        ],
                        [
                            "eid1",
                            "top",
                            0,
                            1250,
                            "easeOutElastic",
                            "${logo2}",
                            '-124px',
                            '15px'
                        ],
                        [
                            "eid16",
                            "left",
                            0,
                            1000,
                            "easeOutQuart",
                            "${e0}",
                            '286px',
                            '65px'
                        ],
                        [
                            "eid28",
                            "rotateZ",
                            0,
                            1000,
                            "easeOutQuart",
                            "${e1}",
                            '56deg',
                            '0deg'
                        ],
                        [
                            "eid56",
                            "display",
                            805,
                            0,
                            "easeOutQuart",
                            "${e5}",
                            'none',
                            'block'
                        ],
                        [
                            "eid2",
                            "opacity",
                            750,
                            610,
                            "linear",
                            "${bg1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid55",
                            "opacity",
                            930,
                            925,
                            "easeOutElastic",
                            "${ad}",
                            '0',
                            '1'
                        ],
                        [
                            "eid42",
                            "left",
                            805,
                            1000,
                            "easeOutQuart",
                            "${e4}",
                            '897px',
                            '1262px'
                        ],
                        [
                            "eid18",
                            "top",
                            0,
                            1000,
                            "easeOutQuart",
                            "${e0}",
                            '302px',
                            '204px'
                        ],
                        [
                            "eid53",
                            "display",
                            930,
                            0,
                            "easeOutElastic",
                            "${ad}",
                            'none',
                            'block'
                        ],
                        [
                            "eid40",
                            "left",
                            805,
                            1000,
                            "easeOutQuart",
                            "${e3}",
                            '847px',
                            '1080px'
                        ],
                        [
                            "eid59",
                            "display",
                            805,
                            0,
                            "easeOutQuart",
                            "${e2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid58",
                            "display",
                            805,
                            0,
                            "easeOutQuart",
                            "${e3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid46",
                            "top",
                            930,
                            925,
                            "easeOutQuart",
                            "${ad}",
                            '651px',
                            '652px'
                        ],
                        [
                            "eid38",
                            "top",
                            805,
                            1000,
                            "easeOutQuart",
                            "${e3}",
                            '532px',
                            '309px'
                        ],
                        [
                            "eid34",
                            "top",
                            805,
                            1000,
                            "easeOutQuart",
                            "${e2}",
                            '521px',
                            '279px'
                        ],
                        [
                            "eid30",
                            "scaleX",
                            0,
                            1000,
                            "easeOutQuart",
                            "${e1}",
                            '0.50575',
                            '1'
                        ]
                    ]
                }
            },
            "top-logo": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            transform: [[], [], [], ['1.09', '1.09']],
                            id: 'logo2',
                            type: 'image',
                            rect: ['0px', '139px', '154px', '156px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/logo_small.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '154px', '156px']
                        }
                    }
                },
                timeline: {
                    duration: 250,
                    autoPlay: true,
                    data: [
                        [
                            "eid121",
                            "scaleY",
                            0,
                            250,
                            "easeOutBack",
                            "${logo2}",
                            '1',
                            '1.09'
                        ],
                        [
                            "eid120",
                            "scaleX",
                            0,
                            250,
                            "easeOutBack",
                            "${logo2}",
                            '1',
                            '1.09'
                        ]
                    ]
                }
            },
            "top-chain": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '119px', '59px', 'auto', 'auto'],
                            id: 'm-4',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/menu/m-4.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '119px', '59px']
                        }
                    }
                },
                timeline: {
                    duration: 250,
                    autoPlay: true,
                    data: [
                        [
                            "eid126",
                            "scaleY",
                            0,
                            250,
                            "easeOutBack",
                            "${m-4}",
                            '1',
                            '1.09'
                        ],
                        [
                            "eid127",
                            "scaleX",
                            0,
                            250,
                            "easeOutBack",
                            "${m-4}",
                            '1',
                            '1.09'
                        ]
                    ]
                }
            },
            "top-frenchfries": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '115px', '54px', 'auto', 'auto'],
                            id: 'm-3',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/menu/m-3.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '115px', '54px']
                        }
                    }
                },
                timeline: {
                    duration: 250,
                    autoPlay: true,
                    data: [
                        [
                            "eid134",
                            "scaleX",
                            0,
                            250,
                            "easeOutBack",
                            "${m-3}",
                            '1',
                            '1.09'
                        ],
                        [
                            "eid135",
                            "scaleY",
                            0,
                            250,
                            "easeOutBack",
                            "${m-3}",
                            '1',
                            '1.09'
                        ]
                    ]
                }
            },
            "top-biscuit": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '76px', '65px', 'auto', 'auto'],
                            id: 'm-2',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/menu/m-2.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '76px', '65px']
                        }
                    }
                },
                timeline: {
                    duration: 250,
                    autoPlay: true,
                    data: [
                        [
                            "eid132",
                            "scaleY",
                            0,
                            250,
                            "easeOutBack",
                            "${m-2}",
                            '1',
                            '1.09'
                        ],
                        [
                            "eid133",
                            "scaleX",
                            0,
                            250,
                            "easeOutBack",
                            "${m-2}",
                            '1',
                            '1.09'
                        ]
                    ]
                }
            },
            "top-crisp": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '88px', '68px', 'auto', 'auto'],
                            id: 'm-1',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/menu/m-1.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '88px', '68px']
                        }
                    }
                },
                timeline: {
                    duration: 250,
                    autoPlay: true,
                    data: [
                        [
                            "eid130",
                            "scaleX",
                            0,
                            250,
                            "easeOutBack",
                            "${m-1}",
                            '1',
                            '1.09'
                        ],
                        [
                            "eid131",
                            "scaleY",
                            0,
                            250,
                            "easeOutBack",
                            "${m-1}",
                            '1',
                            '1.09'
                        ]
                    ]
                }
            },
            "top-potatochips": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '80px', '60px', 'auto', 'auto'],
                            id: 'm-0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/menu/m-0.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '80px', '60px']
                        }
                    }
                },
                timeline: {
                    duration: 250,
                    autoPlay: true,
                    data: [
                        [
                            "eid129",
                            "scaleX",
                            0,
                            250,
                            "easeOutBack",
                            "${m-0}",
                            '1',
                            '1.09'
                        ],
                        [
                            "eid128",
                            "scaleY",
                            0,
                            250,
                            "easeOutBack",
                            "${m-0}",
                            '1',
                            '1.09'
                        ]
                    ]
                }
            },
            "top-homepage": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'slogn',
                            type: 'image',
                            rect: ['0px', '0px', '220px', '102px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/menu/slogn.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '220px', '102px']
                        }
                    }
                },
                timeline: {
                    duration: 250,
                    autoPlay: true,
                    data: [
                        [
                            "eid17",
                            "scaleY",
                            0,
                            250,
                            "easeOutBack",
                            "${slogn}",
                            '1',
                            '1.09'
                        ],
                        [
                            "eid18",
                            "scaleX",
                            0,
                            250,
                            "easeOutBack",
                            "${slogn}",
                            '1',
                            '1.09'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("frenchfries_edgeActions.js");
})("EDGE-31591406");
