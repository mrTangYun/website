/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
            '微软雅黑': ''        },
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
                            id: 'p1-big-4',
                            type: 'image',
                            rect: ['560px', '481px', '215px', '118px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"elems/p1-big-4.png",'0px','0px'],
                            userClass: "floatCopico"
                        },
                        {
                            id: 'bg2',
                            type: 'image',
                            rect: ['306px', '259px', '706px', '401px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"p-1/bg.png",'0px','0px']
                        },
                        {
                            id: 'p1-0',
                            type: 'image',
                            rect: ['616px', '491px', '53px', '28px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"elems/p1-0.png",'0px','0px'],
                            userClass: "floatCopico"
                        },
                        {
                            id: 'p0-tdp-1',
                            type: 'image',
                            rect: ['598px', '479px', '82px', '79px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"elems/p0-tdp-1.png",'0px','0px'],
                            userClass: "floatCopico"
                        },
                        {
                            id: 'p1-big-2',
                            type: 'image',
                            rect: ['482px', '395px', '361px', '299px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"elems/p1-big-2.png",'0px','0px'],
                            userClass: "floatCopico"
                        },
                        {
                            id: 'p1-big-3',
                            type: 'image',
                            rect: ['523px', '325px', '293px', '356px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"elems/p1-big-3.png",'0px','0px'],
                            userClass: "floatCopico"
                        },
                        {
                            id: 'p1-3',
                            type: 'image',
                            rect: ['613px', '518px', '123px', '66px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"elems/p1-3.png",'0px','0px'],
                            userClass: "floatCopico"
                        },
                        {
                            id: 'p1-big-12',
                            type: 'image',
                            rect: ['537px', '474px', '231px', '143px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"elems/p1-big-1.png",'0px','0px'],
                            userClass: "floatCopico"
                        },
                        {
                            id: 'p1-2',
                            type: 'image',
                            rect: ['613px', '540px', '60px', '39px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"elems/p1-2.png",'0px','0px'],
                            userClass: "floatCopico"
                        },
                        {
                            id: 'p1-big-1',
                            type: 'image',
                            rect: ['487px', '487px', '231px', '143px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"elems/p1-big-1.png",'0px','0px'],
                            userClass: "floatCopico"
                        },
                        {
                            id: 'p0-st-0',
                            type: 'image',
                            rect: ['508px', '432px', '225px', '194px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"elems/p0-st-0.png",'0px','0px'],
                            userClass: "floatCopico",
                            transform: [[],['8'],[],['0.8606','0.8606']]
                        },
                        {
                            id: 'yuanquan',
                            type: 'image',
                            rect: ['378px', '285px', '525px', '523px', 'auto', 'auto'],
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",im+"p-1/yuanquan.png",'0px','0px'],
                            userClass: "zhuanquan",
                            transform: [[],[],[],['0.53','0.53']]
                        },
                        {
                            id: 'slogn-bg',
                            type: 'image',
                            rect: ['378px', '592px', '593px', '249px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"p-1/slogn-bg.png",'0px','0px']
                        },
                        {
                            id: 'slogn2',
                            type: 'image',
                            rect: ['433px', '584px', '504px', '224px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"p-1/slogn.png",'0px','0px']
                        },
                        {
                            id: 'wenzi',
                            type: 'image',
                            rect: ['412px', '371px', '455px', '233px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"p-1/wenzi.png",'0px','0px'],
                            filter: [0, 0, 1, 1, 0, 0, 0, 0, "rgba(0,0,0,0)", 0, 0, 0]
                        },
                        {
                            id: 'p1-1',
                            type: 'image',
                            rect: ['580px', '615px', '117px', '104px', 'auto', 'auto'],
                            opacity: '0.26016260162602',
                            fill: ["rgba(0,0,0,0)",im+"elems/p1-1.png",'0px','0px'],
                            userClass: "floatCopico",
                            transform: [[],[],[],['0.34','0.34']]
                        },
                        {
                            id: 'p1-big-0',
                            type: 'image',
                            rect: ['240px', '507px', '344px', '176px', 'auto', 'auto'],
                            opacity: '0.53658536585366',
                            fill: ["rgba(0,0,0,0)",im+"elems/p1-big-0.png",'0px','0px'],
                            userClass: "floatCopico",
                            transform: [[],[],[],['0.5','0.5']]
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
                            fill: ["rgba(255,255,255,0)"]
                        }
                    }
                },
                timeline: {
                    duration: 1500,
                    autoPlay: true,
                    data: [
                        [
                            "eid58",
                            "top",
                            440,
                            511,
                            "linear",
                            "${p1-0}",
                            '491px',
                            '325px'
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
                            "eid22",
                            "top",
                            0,
                            1223,
                            "linear",
                            "${p1-big-4}",
                            '481px',
                            '459px'
                        ],
                        [
                            "eid18",
                            "top",
                            0,
                            1000,
                            "linear",
                            "${p1-big-12}",
                            '474px',
                            '624px'
                        ],
                        [
                            "eid40",
                            "left",
                            660,
                            664,
                            "linear",
                            "${p1-big-2}",
                            '482px',
                            '306px'
                        ],
                        [
                            "eid46",
                            "top",
                            0,
                            1000,
                            "linear",
                            "${p0-tdp-1}",
                            '479px',
                            '306px'
                        ],
                        [
                            "eid106",
                            "scaleY",
                            0,
                            660,
                            "linear",
                            "${yuanquan}",
                            '0.53',
                            '1'
                        ],
                        [
                            "eid32",
                            "left",
                            0,
                            1000,
                            "linear",
                            "${p1-big-0}",
                            '240px',
                            '77px'
                        ],
                        [
                            "eid80",
                            "top",
                            0,
                            660,
                            "easeOutCubic",
                            "${p1-1}",
                            '615px',
                            '767px'
                        ],
                        [
                            "eid20",
                            "left",
                            0,
                            1223,
                            "linear",
                            "${p1-big-4}",
                            '560px',
                            '937px'
                        ],
                        [
                            "eid50",
                            "top",
                            0,
                            1000,
                            "linear",
                            "${p0-st-0}",
                            '432px',
                            '626px'
                        ],
                        [
                            "eid28",
                            "left",
                            0,
                            1000,
                            "linear",
                            "${p1-2}",
                            '613px',
                            '930px'
                        ],
                        [
                            "eid26",
                            "left",
                            0,
                            1000,
                            "linear",
                            "${p1-3}",
                            '613px',
                            '1116px'
                        ],
                        [
                            "eid42",
                            "top",
                            660,
                            664,
                            "linear",
                            "${p1-big-2}",
                            '395px',
                            '346px'
                        ],
                        [
                            "eid56",
                            "left",
                            440,
                            511,
                            "linear",
                            "${p1-0}",
                            '616px',
                            '937px'
                        ],
                        [
                            "eid66",
                            "opacity",
                            868,
                            632,
                            "linear",
                            "${bg2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid72",
                            "scaleY",
                            0,
                            1000,
                            "linear",
                            "${p1-big-0}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid34",
                            "top",
                            0,
                            1000,
                            "linear",
                            "${p1-big-0}",
                            '507px',
                            '547px'
                        ],
                        [
                            "eid30",
                            "top",
                            0,
                            1000,
                            "linear",
                            "${p1-2}",
                            '540px',
                            '789px'
                        ],
                        [
                            "eid74",
                            "opacity",
                            562,
                            660,
                            "linear",
                            "${slogn2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid44",
                            "left",
                            0,
                            1000,
                            "linear",
                            "${p0-tdp-1}",
                            '598px',
                            '239px'
                        ],
                        [
                            "eid38",
                            "top",
                            0,
                            1000,
                            "linear",
                            "${p1-big-1}",
                            '487px',
                            '404px'
                        ],
                        [
                            "eid54",
                            "top",
                            384,
                            866,
                            "linear",
                            "${p1-big-3}",
                            '325px',
                            '275px'
                        ],
                        [
                            "eid76",
                            "opacity",
                            562,
                            660,
                            "linear",
                            "${slogn-bg}",
                            '0',
                            '1'
                        ],
                        [
                            "eid78",
                            "left",
                            0,
                            660,
                            "easeOutCubic",
                            "${p1-1}",
                            '580px',
                            '465px'
                        ],
                        [
                            "eid102",
                            "scaleY",
                            0,
                            660,
                            "linear",
                            "${p1-1}",
                            '0.34',
                            '1'
                        ],
                        [
                            "eid104",
                            "scaleX",
                            0,
                            660,
                            "linear",
                            "${yuanquan}",
                            '0.53',
                            '1'
                        ],
                        [
                            "eid70",
                            "scaleX",
                            0,
                            1000,
                            "linear",
                            "${p1-big-0}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid24",
                            "top",
                            0,
                            1000,
                            "linear",
                            "${p1-3}",
                            '518px',
                            '838px'
                        ],
                        [
                            "eid108",
                            "opacity",
                            750,
                            750,
                            "linear",
                            "${bg1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid36",
                            "left",
                            0,
                            1000,
                            "linear",
                            "${p1-big-1}",
                            '487px',
                            '254px'
                        ],
                        [
                            "eid94",
                            "opacity",
                            0,
                            1000,
                            "linear",
                            "${p1-big-0}",
                            '0.5365849733352661',
                            '1'
                        ],
                        [
                            "eid52",
                            "left",
                            384,
                            866,
                            "linear",
                            "${p1-big-3}",
                            '523px',
                            '697px'
                        ],
                        [
                            "eid64",
                            "opacity",
                            562,
                            438,
                            "linear",
                            "${wenzi}",
                            '0',
                            '1'
                        ],
                        [
                            "eid16",
                            "left",
                            0,
                            1000,
                            "linear",
                            "${p1-big-12}",
                            '537px',
                            '1079px'
                        ],
                        [
                            "eid100",
                            "opacity",
                            0,
                            660,
                            "linear",
                            "${p1-1}",
                            '0.26016300916671753',
                            '1'
                        ],
                        [
                            "eid118",
                            "top",
                            0,
                            1410,
                            "easeOutElastic",
                            "${logo2}",
                            '-111px',
                            '15px'
                        ],
                        [
                            "eid48",
                            "left",
                            0,
                            1000,
                            "linear",
                            "${p0-st-0}",
                            '508px',
                            '184px'
                        ],
                        [
                            "eid101",
                            "scaleX",
                            0,
                            660,
                            "linear",
                            "${p1-1}",
                            '0.34',
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

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("homepage_edgeActions.js");
})("EDGE-32078184");
