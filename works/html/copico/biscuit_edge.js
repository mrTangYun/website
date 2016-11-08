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
                            id: 'p-biscuit2',
                            type: 'image',
                            rect: ['299px', '-7px', '1290px', '1080px', 'auto', 'auto'],
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",im+"bg/p-biscuit2.jpg",'0px','0px']
                        },
                        {
                            id: 'p-biscuit3',
                            type: 'image',
                            rect: ['1092px', '92px', '575px', '191px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"bg/p-biscuit3.png",'0px','0px']
                        },
                        {
                            id: 'e8',
                            type: 'image',
                            rect: ['934px', '654px', '548px', '426px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"p-4/e8.png",'0px','0px']
                        },
                        {
                            id: 'e0',
                            type: 'image',
                            rect: ['-65px', '302px', '80px', '72px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"p-4/e0.png",'0px','0px'],
                            userClass: "floatCopico",
                            transform: [[],['76'],[],['0.49836','0.48611']]
                        },
                        {
                            id: 'e1',
                            type: 'image',
                            rect: ['12px', '752px', '64px', '35px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"p-4/e1.png",'0px','0px'],
                            userClass: "floatCopico",
                            transform: [[],['-56']]
                        },
                        {
                            id: 'e2',
                            type: 'image',
                            rect: ['935px', '383px', '127px', '129px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"p-4/e2.png",'0px','0px'],
                            transform: [[],[],[],['0.5515','0.5515']]
                        },
                        {
                            id: 'e3',
                            type: 'image',
                            rect: ['985px', '417px', '61px', '60px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"p-4/e3.png",'0px','0px'],
                            transform: [[],[],[],['0.43253','0.43253']]
                        },
                        {
                            id: 'e5',
                            type: 'image',
                            rect: ['968px', '406px', '68px', '41px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"p-4/e5.png",'0px','0px'],
                            transform: [[],[],[],['0.39586','0.39586']]
                        },
                        {
                            id: 'logo',
                            type: 'image',
                            rect: ['207px', '215px', '270px', '204px', 'auto', 'auto'],
                            opacity: '0.2520325203252',
                            fill: ["rgba(0,0,0,0)",im+"p-4/logo.png",'0px','0px'],
                            transform: [[],[],[],['0.2647','0.2647']]
                        },
                        {
                            id: 'e7',
                            type: 'image',
                            rect: ['748px', '562px', '419px', '585px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"p-4/e7.png",'0px','0px']
                        },
                        {
                            id: 'e6',
                            type: 'image',
                            rect: ['952px', '379px', '144px', '147px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"p-4/e6.png",'0px','0px'],
                            transform: [[],[],[],['-0.11042','0.11041']]
                        },
                        {
                            id: 'cui',
                            type: 'image',
                            rect: ['778px', '104px', '467px', '559px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"p-4/cui.png",'0px','0px'],
                            transform: [[],[],[],['0.2548','0.25481']]
                        },
                        {
                            id: 'e4',
                            type: 'image',
                            rect: ['952px', '403px', '137px', '71px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"p-4/e4.png",'0px','0px'],
                            transform: [[],[],[],['0.46715','0.46715']]
                        },
                        {
                            id: 'ad',
                            display: 'none',
                            type: 'image',
                            rect: ['599px', '653px', '626px', '245px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"p-4/ad.png",'0px','0px'],
                            transform: [[],['-5'],[],[],['49.8771%','186.3421%']]
                        },
                        {
                            id: 'btn-right',
                            type: 'rect',
                            rect: ['557px', '828px', '56px', '56px', 'auto', 'auto'],
                            fill: ["undefined"],
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
                    duration: 1565,
                    autoPlay: true,
                    data: [
                        [
                            "eid58",
                            "left",
                            950,
                            460,
                            "easeOutQuart",
                            "${e6}",
                            '952px',
                            '1008px'
                        ],
                        [
                            "eid90",
                            "left",
                            1140,
                            360,
                            "easeOutQuart",
                            "${e5}",
                            '968px',
                            '1351px'
                        ],
                        [
                            "eid115",
                            "top",
                            0,
                            1250,
                            "easeOutElastic",
                            "${top-logo}",
                            '-263px',
                            '-124px'
                        ],
                        [
                            "eid52",
                            "left",
                            900,
                            460,
                            "easeOutQuart",
                            "${e2}",
                            '935px',
                            '754px'
                        ],
                        [
                            "eid80",
                            "top",
                            1000,
                            460,
                            "easeOutQuart",
                            "${e4}",
                            '403px',
                            '455px'
                        ],
                        [
                            "eid88",
                            "top",
                            1140,
                            360,
                            "easeOutQuart",
                            "${e5}",
                            '406px',
                            '784px'
                        ],
                        [
                            "eid74",
                            "scaleX",
                            750,
                            560,
                            "easeOutQuart",
                            "${e3}",
                            '0.43253',
                            '1'
                        ],
                        [
                            "eid22",
                            "scaleY",
                            0,
                            1000,
                            "easeOutQuart",
                            "${e0}",
                            '0.48611',
                            '1'
                        ],
                        [
                            "eid16",
                            "top",
                            0,
                            1000,
                            "easeOutQuart",
                            "${e1}",
                            '752px',
                            '866px'
                        ],
                        [
                            "eid18",
                            "rotateZ",
                            0,
                            1000,
                            "easeOutQuart",
                            "${e1}",
                            '-56deg',
                            '0deg'
                        ],
                        [
                            "eid4",
                            "left",
                            0,
                            1000,
                            "linear",
                            "${e0}",
                            '-65px',
                            '-284px'
                        ],
                        [
                            "eid82",
                            "opacity",
                            1000,
                            460,
                            "easeOutQuart",
                            "${e4}",
                            '0',
                            '1'
                        ],
                        [
                            "eid104",
                            "opacity",
                            610,
                            955,
                            "easeOutElastic",
                            "${ad}",
                            '0',
                            '1'
                        ],
                        [
                            "eid62",
                            "scaleX",
                            950,
                            460,
                            "easeOutQuart",
                            "${e6}",
                            '-0.11042',
                            '1'
                        ],
                        [
                            "eid64",
                            "scaleY",
                            950,
                            460,
                            "easeOutQuart",
                            "${e6}",
                            '0.11041',
                            '1'
                        ],
                        [
                            "eid36",
                            "top",
                            0,
                            950,
                            "easeOutQuart",
                            "${e7}",
                            '562px',
                            '495px'
                        ],
                        [
                            "eid66",
                            "opacity",
                            950,
                            460,
                            "easeOutQuart",
                            "${e6}",
                            '0',
                            '1'
                        ],
                        [
                            "eid38",
                            "scaleX",
                            610,
                            955,
                            "easeOutElastic",
                            "${cui}",
                            '0.2548',
                            '1'
                        ],
                        [
                            "eid6",
                            "top",
                            0,
                            1000,
                            "linear",
                            "${e0}",
                            '302px',
                            '164px'
                        ],
                        [
                            "eid54",
                            "top",
                            900,
                            460,
                            "easeOutQuart",
                            "${e2}",
                            '383px',
                            '338px'
                        ],
                        [
                            "eid44",
                            "top",
                            610,
                            955,
                            "easeOutElastic",
                            "${cui}",
                            '104px',
                            '-60px'
                        ],
                        [
                            "eid20",
                            "scaleX",
                            0,
                            1000,
                            "easeOutQuart",
                            "${e0}",
                            '0.49836',
                            '1'
                        ],
                        [
                            "eid28",
                            "opacity",
                            0,
                            1360,
                            "easeOutQuart",
                            "${logo}",
                            '0.2520325203252',
                            '1'
                        ],
                        [
                            "eid102",
                            "rotateZ",
                            610,
                            955,
                            "easeOutElastic",
                            "${ad}",
                            '-5deg',
                            '0deg'
                        ],
                        [
                            "eid8",
                            "rotateZ",
                            0,
                            1000,
                            "linear",
                            "${e0}",
                            '76deg',
                            '0deg'
                        ],
                        [
                            "eid50",
                            "scaleY",
                            900,
                            460,
                            "easeOutQuart",
                            "${e2}",
                            '0.5515',
                            '1'
                        ],
                        [
                            "eid56",
                            "opacity",
                            900,
                            460,
                            "easeOutQuart",
                            "${e2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid98",
                            "originX",
                            610,
                            955,
                            "easeOutElastic",
                            "${ad}",
                            '49.8771%',
                            '50%'
                        ],
                        [
                            "eid40",
                            "scaleY",
                            610,
                            955,
                            "easeOutElastic",
                            "${cui}",
                            '0.25481',
                            '1'
                        ],
                        [
                            "eid105",
                            "display",
                            610,
                            0,
                            "easeOutElastic",
                            "${ad}",
                            'none',
                            'block'
                        ],
                        [
                            "eid32",
                            "opacity",
                            0,
                            1000,
                            "easeOutQuart",
                            "${e8}",
                            '0',
                            '1'
                        ],
                        [
                            "eid96",
                            "scaleY",
                            1140,
                            360,
                            "easeOutQuart",
                            "${e5}",
                            '0.39586',
                            '1'
                        ],
                        [
                            "eid68",
                            "left",
                            750,
                            560,
                            "easeOutQuart",
                            "${e3}",
                            '985px',
                            '1114px'
                        ],
                        [
                            "eid24",
                            "scaleX",
                            0,
                            1360,
                            "easeOutQuart",
                            "${logo}",
                            '0.2647',
                            '1'
                        ],
                        [
                            "eid26",
                            "scaleY",
                            0,
                            1360,
                            "easeOutQuart",
                            "${logo}",
                            '0.2647',
                            '1'
                        ],
                        [
                            "eid78",
                            "left",
                            1000,
                            460,
                            "easeOutQuart",
                            "${e4}",
                            '952px',
                            '1190px'
                        ],
                        [
                            "eid46",
                            "opacity",
                            610,
                            955,
                            "easeOutElastic",
                            "${cui}",
                            '0',
                            '1'
                        ],
                        [
                            "eid70",
                            "top",
                            750,
                            560,
                            "easeOutQuart",
                            "${e3}",
                            '417px',
                            '214px'
                        ],
                        [
                            "eid60",
                            "top",
                            950,
                            460,
                            "easeOutQuart",
                            "${e6}",
                            '379px',
                            '387px'
                        ],
                        [
                            "eid76",
                            "scaleY",
                            750,
                            560,
                            "easeOutQuart",
                            "${e3}",
                            '0.43253',
                            '1'
                        ],
                        [
                            "eid84",
                            "scaleX",
                            1000,
                            460,
                            "easeOutQuart",
                            "${e4}",
                            '0.46715',
                            '1'
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
                            "eid72",
                            "opacity",
                            750,
                            560,
                            "easeOutQuart",
                            "${e3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid86",
                            "scaleY",
                            1000,
                            460,
                            "easeOutQuart",
                            "${e4}",
                            '0.46715',
                            '1'
                        ],
                        [
                            "eid92",
                            "opacity",
                            1140,
                            360,
                            "easeOutQuart",
                            "${e5}",
                            '0',
                            '1'
                        ],
                        [
                            "eid94",
                            "scaleX",
                            1140,
                            360,
                            "easeOutQuart",
                            "${e5}",
                            '0.39586',
                            '1'
                        ],
                        [
                            "eid48",
                            "scaleX",
                            900,
                            460,
                            "easeOutQuart",
                            "${e2}",
                            '0.5515',
                            '1'
                        ],
                        [
                            "eid42",
                            "left",
                            610,
                            955,
                            "easeOutElastic",
                            "${cui}",
                            '778px',
                            '799px'
                        ],
                        [
                            "eid100",
                            "originY",
                            610,
                            955,
                            "easeOutElastic",
                            "${ad}",
                            '186.3421%',
                            '50%'
                        ],
                        [
                            "eid14",
                            "left",
                            0,
                            1000,
                            "easeOutQuart",
                            "${e1}",
                            '12px',
                            '-138px'
                        ],
                        [
                            "eid34",
                            "opacity",
                            0,
                            950,
                            "easeOutQuart",
                            "${e7}",
                            '0',
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
                            rect: ['0px', '139px', '154px', '156px', 'auto', 'auto'],
                            id: 'logo2',
                            transform: [[], [], [], ['1.09', '1.09']],
                            type: 'image',
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
                            isStage: 'true',
                            rect: [undefined, undefined, '220px', '102px']
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

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("biscuit_edgeActions.js");
})("EDGE-26738361");
