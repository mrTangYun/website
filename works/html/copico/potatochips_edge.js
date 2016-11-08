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
                            id: 'TextContent',
                            type: 'rect',
                            rect: ['104px', '471px', '422px', '288px', 'auto', 'auto'],
                            fill: ["rgba(192,192,192,0.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"],
                            userClass: "TextContent"
                        },
                        {
                            id: 'products',
                            type: 'rect',
                            rect: ['104px', '749px', '444px', '219px', 'auto', 'auto'],
                            fill: ["rgba(192,192,192,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            userClass: "swiper-container"
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
                            id: 'btn-right',
                            type: 'rect',
                            rect: ['557px', '828px', '56px', '56px', 'auto', 'auto'],
                            fill: ["rgba(192,192,192,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            userClass: "swiper-button-next"
                        },
                        {
                            id: 'btn-cpmlcx',
                            type: 'image',
                            rect: ['229px', '987px', '179px', '32px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"btn-cpmlcx.png",'0px','0px']
                        },
                        {
                            id: 'logo-l',
                            type: 'image',
                            rect: ['198px', '401px', '153px', '139px', 'auto', 'auto'],
                            opacity: '0.56910569105691',
                            fill: ["rgba(0,0,0,0)",im+"p-2/logo-l.png",'0px','0px'],
                            userClass: "floatCopico",
                            transform: [[],['25'],[],['0.68345','0.68345']]
                        },
                        {
                            id: 'logo-r',
                            type: 'image',
                            rect: ['286px', '375px', '149px', '195px', 'auto', 'auto'],
                            opacity: '0.48780487804878',
                            fill: ["rgba(0,0,0,0)",im+"p-2/logo-r.png",'0px','0px'],
                            userClass: "floatCopico",
                            transform: [[],['-34'],[],['0.65089','0.65089']]
                        },
                        {
                            id: 'logo',
                            type: 'image',
                            rect: ['207px', '271px', '234px', '171px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"p-2/logo.png",'0px','0px']
                        },
                        {
                            id: 'sp-0',
                            type: 'image',
                            rect: ['38px', '319px', '65px', '59px', 'auto', 'auto'],
                            opacity: '0.65853658536585',
                            fill: ["rgba(0,0,0,0)",im+"p-2/sp-0.png",'0px','0px'],
                            userClass: "floatCopico",
                            transform: [[],['101']]
                        },
                        {
                            id: 'sp-1',
                            type: 'image',
                            rect: ['-162px', '484px', '105px', '76px', 'auto', 'auto'],
                            opacity: '0.69105679087523',
                            fill: ["rgba(0,0,0,0)",im+"p-2/sp-1.png",'0px','0px'],
                            userClass: "floatCopico",
                            transform: [[],['26'],[],['0.75281','0.91717']]
                        },
                        {
                            id: 'sp-3',
                            type: 'image',
                            rect: ['703px', '280px', '56px', '42px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"p-2/sp-3.png",'0px','0px'],
                            userClass: "floatCopico",
                            transform: [[],['93']]
                        },
                        {
                            id: 'sp-2',
                            type: 'image',
                            rect: ['101px', '876px', '60px', '55px', 'auto', 'auto'],
                            opacity: '0.69918699186992',
                            fill: ["rgba(0,0,0,0)",im+"p-2/sp-2.png",'0px','0px'],
                            userClass: "floatCopico",
                            transform: [[],['-45'],[],['0.68092','0.54283']]
                        },
                        {
                            id: 'sp-4',
                            display: 'none',
                            type: 'image',
                            rect: ['888px', '348px', '133px', '95px', 'auto', 'auto'],
                            opacity: '0.72357723577236',
                            fill: ["rgba(0,0,0,0)",im+"p-2/sp-4.png",'0px','0px'],
                            userClass: "floatCopico",
                            transform: [[],['-20'],[],['0.77166','0.783']]
                        },
                        {
                            id: 'sp-6',
                            type: 'image',
                            rect: ['655px', '271px', '455px', '642px', 'auto', 'auto'],
                            opacity: '0.43902477549344',
                            fill: ["rgba(0,0,0,0)",im+"p-2/sp-6.png",'0px','0px']
                        },
                        {
                            id: 'sp-5',
                            type: 'image',
                            rect: ['664px', '777px', '409px', '210px', 'auto', 'auto'],
                            opacity: '0.74796793955128',
                            fill: ["rgba(0,0,0,0)",im+"p-2/sp-5.png",'0px','0px']
                        },
                        {
                            id: 'slogin',
                            type: 'image',
                            rect: ['607px', '650px', '625px', '219px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"p-2/slogin.png",'0px','0px'],
                            transform: [[],['-13'],[],[],['48.3826%','188.6837%']]
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
                                rect: ['564px', '-124px', '154', '156', 'auto', 'auto']
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
                    duration: 1830,
                    autoPlay: true,
                    data: [
                        [
                            "eid27",
                            "rotateZ",
                            0,
                            950,
                            "easeOutCubic",
                            "${logo-l}",
                            '25deg',
                            '0deg'
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
                            "eid108",
                            "display",
                            655,
                            0,
                            "easeOutCubic",
                            "${sp-4}",
                            'none',
                            'block'
                        ],
                        [
                            "eid81",
                            "scaleY",
                            0,
                            855,
                            "easeOutCubic",
                            "${sp-1}",
                            '0.91717',
                            '1'
                        ],
                        [
                            "eid53",
                            "scaleX",
                            0,
                            1360,
                            "easeOutCubic",
                            "${sp-2}",
                            '0.68092',
                            '1'
                        ],
                        [
                            "eid75",
                            "top",
                            0,
                            655,
                            "easeOutCubic",
                            "${sp-3}",
                            '280px',
                            '189px'
                        ],
                        [
                            "eid61",
                            "left",
                            655,
                            405,
                            "easeOutCubic",
                            "${sp-4}",
                            '888px',
                            '1071px'
                        ],
                        [
                            "eid114",
                            "rotateZ",
                            855,
                            975,
                            "easeOutElastic",
                            "${slogin}",
                            '-13deg',
                            '0deg'
                        ],
                        [
                            "eid47",
                            "opacity",
                            0,
                            950,
                            "easeOutCubic",
                            "${logo-r}",
                            '0.48780487804878',
                            '1'
                        ],
                        [
                            "eid43",
                            "scaleX",
                            0,
                            950,
                            "easeOutCubic",
                            "${logo-r}",
                            '0.65089',
                            '1'
                        ],
                        [
                            "eid85",
                            "top",
                            0,
                            1135,
                            "easeOutCubic",
                            "${sp-6}",
                            '271px',
                            '308px'
                        ],
                        [
                            "eid29",
                            "scaleX",
                            0,
                            950,
                            "easeOutCubic",
                            "${logo-l}",
                            '0.68345',
                            '1'
                        ],
                        [
                            "eid67",
                            "rotateZ",
                            655,
                            405,
                            "easeOutCubic",
                            "${sp-4}",
                            '-20deg',
                            '0deg'
                        ],
                        [
                            "eid51",
                            "top",
                            0,
                            1360,
                            "easeOutCubic",
                            "${sp-2}",
                            '876px',
                            '941px'
                        ],
                        [
                            "eid93",
                            "opacity",
                            855,
                            975,
                            "easeOutElastic",
                            "${slogin}",
                            '0',
                            '1'
                        ],
                        [
                            "eid65",
                            "opacity",
                            655,
                            405,
                            "easeOutCubic",
                            "${sp-4}",
                            '0.72357723577236',
                            '1'
                        ],
                        [
                            "eid19",
                            "opacity",
                            595,
                            505,
                            "easeOutCubic",
                            "${logo}",
                            '0',
                            '1'
                        ],
                        [
                            "eid87",
                            "left",
                            0,
                            1135,
                            "easeOutCubic",
                            "${sp-5}",
                            '664px',
                            '816px'
                        ],
                        [
                            "eid3",
                            "left",
                            0,
                            855,
                            "linear",
                            "${sp-1}",
                            '-162px',
                            '-261px'
                        ],
                        [
                            "eid13",
                            "top",
                            0,
                            595,
                            "easeOutCubic",
                            "${sp-0}",
                            '319px',
                            '200px'
                        ],
                        [
                            "eid7",
                            "rotateZ",
                            0,
                            855,
                            "linear",
                            "${sp-1}",
                            '26deg',
                            '0deg'
                        ],
                        [
                            "eid57",
                            "rotateZ",
                            0,
                            1360,
                            "easeOutCubic",
                            "${sp-2}",
                            '-45deg',
                            '0deg'
                        ],
                        [
                            "eid33",
                            "opacity",
                            0,
                            950,
                            "easeOutCubic",
                            "${logo-l}",
                            '0.56910569105691',
                            '1'
                        ],
                        [
                            "eid5",
                            "top",
                            0,
                            855,
                            "linear",
                            "${sp-1}",
                            '484px',
                            '426px'
                        ],
                        [
                            "eid9",
                            "opacity",
                            0,
                            855,
                            "easeOutCubic",
                            "${sp-1}",
                            '0.69105679087523',
                            '1'
                        ],
                        [
                            "eid17",
                            "opacity",
                            0,
                            595,
                            "easeOutCubic",
                            "${sp-0}",
                            '0.65853658536585',
                            '1'
                        ],
                        [
                            "eid11",
                            "left",
                            0,
                            595,
                            "easeOutCubic",
                            "${sp-0}",
                            '38px',
                            '-90px'
                        ],
                        [
                            "eid49",
                            "left",
                            0,
                            1360,
                            "easeOutCubic",
                            "${sp-2}",
                            '101px',
                            '-30px'
                        ],
                        [
                            "eid89",
                            "top",
                            0,
                            1135,
                            "easeOutCubic",
                            "${sp-5}",
                            '777px',
                            '826px'
                        ],
                        [
                            "eid63",
                            "top",
                            655,
                            405,
                            "easeOutCubic",
                            "${sp-4}",
                            '348px',
                            '319px'
                        ],
                        [
                            "eid15",
                            "rotateZ",
                            0,
                            595,
                            "easeOutCubic",
                            "${sp-0}",
                            '101deg',
                            '0deg'
                        ],
                        [
                            "eid37",
                            "left",
                            0,
                            950,
                            "easeOutCubic",
                            "${logo-r}",
                            '286px',
                            '394px'
                        ],
                        [
                            "eid79",
                            "scaleX",
                            0,
                            855,
                            "easeOutCubic",
                            "${sp-1}",
                            '0.75281',
                            '1'
                        ],
                        [
                            "eid21",
                            "top",
                            595,
                            505,
                            "easeOutCubic",
                            "${logo}",
                            '271px',
                            '231px'
                        ],
                        [
                            "eid39",
                            "top",
                            0,
                            950,
                            "easeOutCubic",
                            "${logo-r}",
                            '375px',
                            '231px'
                        ],
                        [
                            "eid23",
                            "top",
                            0,
                            950,
                            "easeOutCubic",
                            "${logo-l}",
                            '401px',
                            '292px'
                        ],
                        [
                            "eid71",
                            "scaleY",
                            655,
                            405,
                            "easeOutCubic",
                            "${sp-4}",
                            '0.783',
                            '1'
                        ],
                        [
                            "eid73",
                            "left",
                            0,
                            655,
                            "easeOutCubic",
                            "${sp-3}",
                            '703px',
                            '794px'
                        ],
                        [
                            "eid31",
                            "scaleY",
                            0,
                            950,
                            "easeOutCubic",
                            "${logo-l}",
                            '0.68345',
                            '1'
                        ],
                        [
                            "eid59",
                            "opacity",
                            0,
                            1360,
                            "easeOutCubic",
                            "${sp-2}",
                            '0.69918699186992',
                            '1'
                        ],
                        [
                            "eid112",
                            "originY",
                            855,
                            975,
                            "easeOutElastic",
                            "${slogin}",
                            '188.6837%',
                            '50%'
                        ],
                        [
                            "eid119",
                            "opacity",
                            750,
                            610,
                            "linear",
                            "${bg1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid41",
                            "rotateZ",
                            0,
                            950,
                            "easeOutCubic",
                            "${logo-r}",
                            '-34deg',
                            '0deg'
                        ],
                        [
                            "eid25",
                            "left",
                            0,
                            950,
                            "easeOutCubic",
                            "${logo-l}",
                            '198px',
                            '124px'
                        ],
                        [
                            "eid69",
                            "scaleX",
                            655,
                            405,
                            "easeOutCubic",
                            "${sp-4}",
                            '0.77166',
                            '1'
                        ],
                        [
                            "eid77",
                            "rotateZ",
                            0,
                            655,
                            "easeOutCubic",
                            "${sp-3}",
                            '93deg',
                            '0deg'
                        ],
                        [
                            "eid110",
                            "originX",
                            855,
                            975,
                            "easeOutElastic",
                            "${slogin}",
                            '48.3826%',
                            '50%'
                        ],
                        [
                            "eid45",
                            "scaleY",
                            0,
                            950,
                            "easeOutCubic",
                            "${logo-r}",
                            '0.65089',
                            '1'
                        ],
                        [
                            "eid91",
                            "opacity",
                            0,
                            1135,
                            "easeOutCubic",
                            "${sp-5}",
                            '0.74796793955128',
                            '1'
                        ],
                        [
                            "eid55",
                            "scaleY",
                            0,
                            1360,
                            "easeOutCubic",
                            "${sp-2}",
                            '0.54283',
                            '1'
                        ],
                        [
                            "eid105",
                            "opacity",
                            0,
                            1135,
                            "easeOutCubic",
                            "${sp-6}",
                            '0.43902477549344',
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
                            type: 'image',
                            id: 'logo2',
                            rect: ['0px', '139px', '154px', '156px', 'auto', 'auto'],
                            transform: [[], [], [], ['1.09', '1.09']],
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
                            "eid133",
                            "scaleX",
                            0,
                            250,
                            "easeOutBack",
                            "${m-2}",
                            '1',
                            '1.09'
                        ],
                        [
                            "eid132",
                            "scaleY",
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
                            "eid131",
                            "scaleY",
                            0,
                            250,
                            "easeOutBack",
                            "${m-1}",
                            '1',
                            '1.09'
                        ],
                        [
                            "eid130",
                            "scaleX",
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

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("potatochips_edgeActions.js");
})("EDGE-15988120");
