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
                            id: 'bg2',
                            type: 'image',
                            rect: ['-112px', '135px', '1506px', '685px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"p-6/bg.png",'0px','0px']
                        },
                        {
                            id: 'line',
                            type: 'image',
                            rect: ['78px', '784px', '1110px', '36px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"p-6/line.png",'0px','0px']
                        },
                        {
                            id: 'video-0',
                            type: 'group',
                            rect: ['86', '356px', '345', '406', 'auto', 'auto'],
                            opacity: '0',
                            c: [
                            {
                                id: 'RoundRectCopy',
                                type: 'rect',
                                rect: ['0px', '194px', '345px', '212px', 'auto', 'auto'],
                                borderRadius: ["0px", "0px", "13px 13px", "10px 10px"],
                                fill: ["rgba(255,249,1,1.00)"],
                                stroke: [0,"rgb(0, 0, 0)","none"]
                            },
                            {
                                id: 'Rectangle2',
                                type: 'rect',
                                rect: ['16px', '180px', '22px', '23px', 'auto', 'auto'],
                                fill: ["rgba(255,216,0,1)"],
                                stroke: [0,"rgb(0, 0, 0)","none"],
                                transform: [[],['-42']]
                            },
                            {
                                id: 'RoundRect',
                                type: 'rect',
                                rect: ['0px', '0px', '345px', '194px', 'auto', 'auto'],
                                fill: ["rgba(255,216,0,1.00)"],
                                stroke: [0,"rgb(0, 0, 0)","none"]
                            },
                            {
                                id: 'videoImg-0',
                                type: 'rect',
                                rect: ['8px', '9px', '328px', '176px', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)"],
                                stroke: [0,"rgb(0, 0, 0)","none"]
                            },
                            {
                                id: 'videoTitle-0',
                                type: 'text',
                                rect: ['11px', '221px', '188px', '23px', 'auto', 'auto'],
                                text: "",
                                font: ['Microsoft Yahei,微软雅黑,MS Serif, New York, serif', [21, "px"], "rgba(148,55,17,1.00)", "700", "none", "", "break-word", "normal"]
                            },
                            {
                                id: 'videoContent-0',
                                type: 'text',
                                rect: ['11px', '249px', '328px', '138px', 'auto', 'auto'],
                                text: "",
                                align: "left",
                                font: ['Microsoft Yahei,微软雅黑,MS Serif, New York, serif', [18, "px"], "rgba(1,1,1,1.00)", "500", "none solid rgb(148, 55, 17)", "normal", "break-word", "normal"]
                            }]
                        },
                        {
                            id: 'video-1',
                            type: 'group',
                            rect: ['468px', '356px', '345', '406', 'auto', 'auto'],
                            opacity: '0',
                            c: [
                            {
                                id: 'RoundRectCopy3',
                                type: 'rect',
                                rect: ['0px', '194px', '345px', '212px', 'auto', 'auto'],
                                borderRadius: ["0px", "0px", "13px 13px", "10px 10px"],
                                fill: ["rgba(255,249,1,1.00)"],
                                stroke: [0,"rgb(0, 0, 0)","none"]
                            },
                            {
                                id: 'Rectangle2Copy',
                                type: 'rect',
                                rect: ['16px', '180px', '22px', '23px', 'auto', 'auto'],
                                fill: ["rgba(255,216,0,1)"],
                                stroke: [0,"rgb(0, 0, 0)","none"],
                                transform: [[],['-42']]
                            },
                            {
                                id: 'RoundRectCopy2',
                                type: 'rect',
                                rect: ['0px', '0px', '345px', '194px', 'auto', 'auto'],
                                fill: ["rgba(255,216,0,1.00)"],
                                stroke: [0,"rgb(0, 0, 0)","none"]
                            },
                            {
                                id: 'videoImg-1',
                                type: 'rect',
                                rect: ['8px', '9px', '328px', '176px', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)"],
                                stroke: [0,"rgb(0, 0, 0)","none"]
                            },
                            {
                                id: 'videoTitle-1',
                                type: 'text',
                                rect: ['11px', '221px', '188px', '23px', 'auto', 'auto'],
                                text: "",
                                font: ['Microsoft Yahei,微软雅黑,MS Serif, New York, serif', [21, "px"], "rgba(148,55,17,1.00)", "700", "none", "", "break-word", "normal"]
                            },
                            {
                                id: 'videoContent-1',
                                type: 'text',
                                rect: ['11px', '249px', '328px', '138px', 'auto', 'auto'],
                                text: "",
                                align: "left",
                                font: ['Microsoft Yahei,微软雅黑,MS Serif, New York, serif', [18, "px"], "rgba(1,1,1,1.00)", "500", "none solid rgb(148, 55, 17)", "normal", "break-word", "normal"]
                            }]
                        },
                        {
                            id: 'video-2',
                            type: 'group',
                            rect: ['843px', '356px', '345', '406', 'auto', 'auto'],
                            opacity: '0',
                            c: [
                            {
                                id: 'RoundRectCopy5',
                                type: 'rect',
                                rect: ['0px', '194px', '345px', '212px', 'auto', 'auto'],
                                borderRadius: ["0px", "0px", "13px 13px", "10px 10px"],
                                fill: ["rgba(255,249,1,1.00)"],
                                stroke: [0,"rgb(0, 0, 0)","none"]
                            },
                            {
                                id: 'Rectangle2Copy2',
                                type: 'rect',
                                rect: ['16px', '180px', '22px', '23px', 'auto', 'auto'],
                                fill: ["rgba(255,216,0,1)"],
                                stroke: [0,"rgb(0, 0, 0)","none"],
                                transform: [[],['-42']]
                            },
                            {
                                id: 'RoundRectCopy4',
                                type: 'rect',
                                rect: ['0px', '0px', '345px', '194px', 'auto', 'auto'],
                                fill: ["rgba(255,216,0,1.00)"],
                                stroke: [0,"rgb(0, 0, 0)","none"]
                            },
                            {
                                id: 'videoImg-2',
                                type: 'rect',
                                rect: ['8px', '9px', '328px', '176px', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)"],
                                stroke: [0,"rgb(0, 0, 0)","none"]
                            },
                            {
                                id: 'videoTitle-2',
                                type: 'text',
                                rect: ['11px', '221px', '188px', '23px', 'auto', 'auto'],
                                text: "",
                                font: ['Microsoft Yahei,微软雅黑,MS Serif, New York, serif', [21, "px"], "rgba(148,55,17,1.00)", "700", "none", "", "break-word", "normal"]
                            },
                            {
                                id: 'videoContent-2',
                                type: 'text',
                                rect: ['11px', '249px', '328px', '138px', 'auto', 'auto'],
                                text: "",
                                align: "left",
                                font: ['Microsoft Yahei,微软雅黑,MS Serif, New York, serif', [18, "px"], "rgba(1,1,1,1.00)", "500", "none solid rgb(148, 55, 17)", "normal", "break-word", "normal"]
                            }]
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
                    duration: 2610,
                    autoPlay: true,
                    data: [
                        [
                            "eid24",
                            "top",
                            1260,
                            640,
                            "linear",
                            "${video-1}",
                            '356px',
                            '301px'
                        ],
                        [
                            "eid26",
                            "top",
                            1510,
                            640,
                            "linear",
                            "${video-2}",
                            '356px',
                            '301px'
                        ],
                        [
                            "eid32",
                            "opacity",
                            1120,
                            640,
                            "linear",
                            "${video-0}",
                            '0',
                            '1'
                        ],
                        [
                            "eid28",
                            "top",
                            1710,
                            640,
                            "linear",
                            "${line}",
                            '784px',
                            '744px'
                        ],
                        [
                            "eid38",
                            "opacity",
                            2110,
                            500,
                            "linear",
                            "${bg2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid15",
                            "top",
                            0,
                            1250,
                            "easeOutElastic",
                            "${top-logo}",
                            '-263px',
                            '-124px'
                        ],
                        [
                            "eid30",
                            "opacity",
                            1710,
                            640,
                            "linear",
                            "${line}",
                            '0',
                            '1'
                        ],
                        [
                            "eid16",
                            "opacity",
                            750,
                            610,
                            "linear",
                            "${bg1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid34",
                            "opacity",
                            1260,
                            640,
                            "linear",
                            "${video-1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid22",
                            "left",
                            1260,
                            640,
                            "linear",
                            "${video-1}",
                            '468px',
                            '465px'
                        ],
                        [
                            "eid36",
                            "opacity",
                            1510,
                            640,
                            "linear",
                            "${video-2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid20",
                            "top",
                            1120,
                            640,
                            "linear",
                            "${video-0}",
                            '356px',
                            '301px'
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
                            type: 'image',
                            id: 'm-4',
                            rect: ['0px', '0px', '119px', '59px', 'auto', 'auto'],
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
                            type: 'image',
                            id: 'm-3',
                            rect: ['0px', '0px', '115px', '54px', 'auto', 'auto'],
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
                            type: 'image',
                            id: 'm-2',
                            rect: ['0px', '0px', '76px', '65px', 'auto', 'auto'],
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
                            type: 'image',
                            id: 'm-1',
                            rect: ['0px', '0px', '88px', '68px', 'auto', 'auto'],
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
                            type: 'image',
                            id: 'm-0',
                            rect: ['0px', '0px', '80px', '60px', 'auto', 'auto'],
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
                            rect: ['0px', '0px', '220px', '102px', 'auto', 'auto'],
                            id: 'slogn',
                            type: 'image',
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

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("chain_edgeActions.js");
})("EDGE-36914966");
