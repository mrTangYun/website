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
                            id: 'p-crisp2',
                            type: 'image',
                            rect: ['-475px', '0px', '2220px', '1080px', 'auto', 'auto'],
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",im+"bg/p-crisp.jpg",'0px','0px']
                        },
                        {
                            id: 'bg2',
                            type: 'image',
                            rect: ['643px', '255px', '720px', '579px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"p-3/bg.png",'0px','0px']
                        },
                        {
                            id: 'e6',
                            display: 'none',
                            type: 'image',
                            rect: ['890px', '584px', '124px', '97px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"p-3/e6.png",'0px','0px'],
                            userClass: ""
                        },
                        {
                            id: 'e62',
                            display: 'none',
                            type: 'image',
                            rect: ['917px', '549px', '124px', '97px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"p-3/e6.png",'0px','0px'],
                            userClass: "floatCopico",
                            transform: [[],['52']]
                        },
                        {
                            id: 'e4',
                            display: 'none',
                            type: 'image',
                            rect: ['933px', '578px', '120px', '109px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"p-3/e4.png",'0px','0px'],
                            userClass: "floatCopico"
                        },
                        {
                            id: 'e5',
                            display: 'none',
                            type: 'image',
                            rect: ['979px', '614px', '83px', '62px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"p-3/e5.png",'0px','0px'],
                            userClass: "floatCopico"
                        },
                        {
                            id: 'e7',
                            type: 'image',
                            rect: ['661px', '489px', '683px', '479px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"p-3/e7.png",'0px','0px'],
                            userClass: "",
                            transform: [[],[],[],['0.70617','0.70617']]
                        },
                        {
                            id: 'cup',
                            type: 'image',
                            rect: ['667px', '602px', '620px', '552px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"p-3/cup.png",'0px','0px']
                        },
                        {
                            id: 'ad',
                            type: 'image',
                            rect: ['598px', '648px', '625px', '244px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"p-3/ad.png",'0px','0px'],
                            transform: [[],['-7'],[],[],['49.7066%','173.9224%']]
                        },
                        {
                            id: 'e1',
                            type: 'image',
                            rect: ['55px', '337px', '85px', '76px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"p-3/e1.png",'0px','0px'],
                            userClass: "floatCopico",
                            transform: [[],['126']]
                        },
                        {
                            id: 'e2',
                            type: 'image',
                            rect: ['55px', '587px', '119px', '105px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"p-3/e2.png",'0px','0px'],
                            userClass: "floatCopico",
                            transform: [[],['-60'],[],['0.30447','0.30448']]
                        },
                        {
                            id: 'e3',
                            type: 'image',
                            rect: ['363px', '424px', '62px', '47px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"p-3/e3.png",'0px','0px'],
                            userClass: "floatCopico",
                            transform: [[],['-220'],[],['0.68022','0.68022']]
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
                            id: 'logo1',
                            type: 'image',
                            rect: ['208px', '230px', '246px', '126px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"p-3/logo1.png",'0px','0px'],
                            transform: [[],['27'],[],[],['100%','-0.0001%']]
                        },
                        {
                            id: 'logo22',
                            type: 'image',
                            rect: ['240px', '311px', '168px', '105px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"p-3/logo2.png",'0px','0px']
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
                    duration: 1695,
                    autoPlay: true,
                    data: [
                        [
                            "eid87",
                            "top",
                            0,
                            635,
                            "easeOutQuart",
                            "${cup}",
                            '602px',
                            '528px'
                        ],
                        [
                            "eid29",
                            "rotateZ",
                            0,
                            1000,
                            "easeOutBounce",
                            "${logo1}",
                            '27deg',
                            '0deg'
                        ],
                        [
                            "eid62",
                            "left",
                            790,
                            405,
                            "easeOutQuart",
                            "${e5}",
                            '979px',
                            '1322px'
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
                            "eid49",
                            "top",
                            790,
                            405,
                            "easeOutQuart",
                            "${e6}",
                            '584px',
                            '402px'
                        ],
                        [
                            "eid59",
                            "top",
                            575,
                            405,
                            "easeOutQuart",
                            "${e4}",
                            '578px',
                            '431px'
                        ],
                        [
                            "eid64",
                            "top",
                            790,
                            405,
                            "easeOutQuart",
                            "${e5}",
                            '614px',
                            '681px'
                        ],
                        [
                            "eid35",
                            "scaleX",
                            0,
                            1000,
                            "easeInOutQuad",
                            "${e3}",
                            '0.68022',
                            '1'
                        ],
                        [
                            "eid9",
                            "top",
                            0,
                            1000,
                            "linear",
                            "${e1}",
                            '337px',
                            '166px'
                        ],
                        [
                            "eid11",
                            "rotateZ",
                            0,
                            1000,
                            "linear",
                            "${e1}",
                            '126deg',
                            '0deg'
                        ],
                        [
                            "eid17",
                            "rotateZ",
                            0,
                            1000,
                            "easeOutQuart",
                            "${e2}",
                            '-60deg',
                            '0deg'
                        ],
                        [
                            "eid25",
                            "originX",
                            0,
                            1000,
                            "easeOutBounce",
                            "${logo1}",
                            '100%',
                            '50%'
                        ],
                        [
                            "eid85",
                            "left",
                            0,
                            635,
                            "easeOutQuart",
                            "${cup}",
                            '667px',
                            '668px'
                        ],
                        [
                            "eid43",
                            "opacity",
                            180,
                            610,
                            "easeOutQuart",
                            "${e7}",
                            '0',
                            '1'
                        ],
                        [
                            "eid57",
                            "left",
                            575,
                            405,
                            "easeOutQuart",
                            "${e4}",
                            '933px',
                            '1275px'
                        ],
                        [
                            "eid41",
                            "opacity",
                            0,
                            635,
                            "easeOutQuart",
                            "${cup}",
                            '0',
                            '1'
                        ],
                        [
                            "eid75",
                            "rotateZ",
                            955,
                            740,
                            "easeOutElastic",
                            "${ad}",
                            '-7deg',
                            '0deg'
                        ],
                        [
                            "eid31",
                            "top",
                            0,
                            1000,
                            "easeInOutQuad",
                            "${e3}",
                            '424px',
                            '332px'
                        ],
                        [
                            "eid15",
                            "top",
                            0,
                            1000,
                            "easeOutQuart",
                            "${e2}",
                            '587px',
                            '676px'
                        ],
                        [
                            "eid33",
                            "left",
                            0,
                            1000,
                            "easeInOutQuad",
                            "${e3}",
                            '363px',
                            '402px'
                        ],
                        [
                            "eid39",
                            "rotateZ",
                            0,
                            1000,
                            "easeInOutQuad",
                            "${e3}",
                            '-220deg',
                            '0deg'
                        ],
                        [
                            "eid50",
                            "display",
                            790,
                            0,
                            "easeOutQuart",
                            "${e6}",
                            'none',
                            'block'
                        ],
                        [
                            "eid60",
                            "display",
                            575,
                            0,
                            "easeOutQuart",
                            "${e4}",
                            'none',
                            'block'
                        ],
                        [
                            "eid45",
                            "opacity",
                            575,
                            520,
                            "easeOutQuart",
                            "${bg2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid21",
                            "scaleY",
                            0,
                            1000,
                            "easeOutQuart",
                            "${e2}",
                            '0.30448',
                            '1'
                        ],
                        [
                            "eid55",
                            "display",
                            955,
                            0,
                            "easeOutQuart",
                            "${e62}",
                            'none',
                            'block'
                        ],
                        [
                            "eid54",
                            "top",
                            955,
                            405,
                            "easeOutQuart",
                            "${e62}",
                            '549px',
                            '206px'
                        ],
                        [
                            "eid37",
                            "scaleY",
                            0,
                            1000,
                            "easeInOutQuad",
                            "${e3}",
                            '0.68022',
                            '1'
                        ],
                        [
                            "eid13",
                            "left",
                            0,
                            1000,
                            "easeOutQuart",
                            "${e2}",
                            '55px',
                            '-307px'
                        ],
                        [
                            "eid79",
                            "top",
                            180,
                            610,
                            "easeOutQuart",
                            "${e7}",
                            '489px',
                            '375px'
                        ],
                        [
                            "eid4",
                            "top",
                            0,
                            1250,
                            "easeOutElastic",
                            "${logo2}",
                            '-124px',
                            '15px'
                        ],
                        [
                            "eid77",
                            "left",
                            180,
                            610,
                            "easeOutQuart",
                            "${e7}",
                            '661px',
                            '662px'
                        ],
                        [
                            "eid5",
                            "opacity",
                            750,
                            610,
                            "linear",
                            "${bg1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid65",
                            "display",
                            790,
                            0,
                            "easeOutQuart",
                            "${e5}",
                            'none',
                            'block'
                        ],
                        [
                            "eid52",
                            "left",
                            955,
                            405,
                            "easeOutQuart",
                            "${e62}",
                            '917px',
                            '942px'
                        ],
                        [
                            "eid71",
                            "originX",
                            955,
                            740,
                            "easeOutElastic",
                            "${ad}",
                            '49.7066%',
                            '50%'
                        ],
                        [
                            "eid67",
                            "opacity",
                            955,
                            740,
                            "easeOutElastic",
                            "${ad}",
                            '0',
                            '1'
                        ],
                        [
                            "eid27",
                            "originY",
                            0,
                            1000,
                            "easeOutBounce",
                            "${logo1}",
                            '-0.0001%',
                            '50%'
                        ],
                        [
                            "eid83",
                            "scaleY",
                            180,
                            610,
                            "easeOutQuart",
                            "${e7}",
                            '0.70617',
                            '1'
                        ],
                        [
                            "eid19",
                            "scaleX",
                            0,
                            1000,
                            "easeOutQuart",
                            "${e2}",
                            '0.30447',
                            '1'
                        ],
                        [
                            "eid47",
                            "left",
                            790,
                            405,
                            "easeOutQuart",
                            "${e6}",
                            '890px',
                            '679px'
                        ],
                        [
                            "eid73",
                            "originY",
                            955,
                            740,
                            "easeOutElastic",
                            "${ad}",
                            '173.9224%',
                            '50%'
                        ],
                        [
                            "eid7",
                            "left",
                            0,
                            1000,
                            "linear",
                            "${e1}",
                            '55px',
                            '-112px'
                        ],
                        [
                            "eid81",
                            "scaleX",
                            180,
                            610,
                            "easeOutQuart",
                            "${e7}",
                            '0.70617',
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

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("crisp_edgeActions.js");
})("EDGE-1751196");
