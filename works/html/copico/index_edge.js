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
                            id: 'p0-tdp-11',
                            type: 'image',
                            rect: ['421px', '969px', '1232px', '156px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"elems/p0-tdp-11.png",'0px','0px']
                        },
                        {
                            id: 'p0-tdp-34',
                            type: 'image',
                            rect: ['838px', '497px', '256px', '207px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"elems/p0-tdp-3.png",'0px','0px'],
                            transform: [[],['36']]
                        },
                        {
                            id: 'p0-st-0',
                            type: 'image',
                            rect: ['853px', '499px', '225px', '194px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"elems/p0-st-0.png",'0px','0px']
                        },
                        {
                            id: 'p0-st-1',
                            type: 'image',
                            rect: ['882px', '535px', '156px', '129px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"elems/p0-st-1.png",'0px','0px']
                        },
                        {
                            id: 'p0-st-3',
                            type: 'image',
                            rect: ['850px', '512px', '254px', '176px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"elems/p0-st-3.png",'0px','0px']
                        },
                        {
                            id: 'p0-st-2',
                            type: 'image',
                            rect: ['819px', '476px', '253px', '271px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"elems/p0-st-2.png",'0px','0px']
                        },
                        {
                            id: 'p0-sp-0',
                            type: 'image',
                            rect: ['928px', '554px', '107px', '84px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"elems/p0-sp-0.png",'0px','0px']
                        },
                        {
                            id: 'p0-sp-1',
                            type: 'image',
                            rect: ['913px', '535px', '105px', '91px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"elems/p0-sp-1.png",'0px','0px']
                        },
                        {
                            id: 'p0-tdp-22',
                            type: 'image',
                            rect: ['917px', '554px', '86px', '66px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"elems/p0-tdp-2.png",'0px','0px']
                        },
                        {
                            id: 'p0-tdp-33',
                            type: 'image',
                            rect: ['854px', '497px', '256px', '207px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"elems/p0-tdp-3.png",'0px','0px'],
                            transform: [[],['38']]
                        },
                        {
                            id: 'p0-tdp-0',
                            type: 'image',
                            rect: ['862px', '535px', '176px', '113px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"elems/p0-tdp-0.png",'0px','0px']
                        },
                        {
                            id: 'p0-tdp-03',
                            type: 'image',
                            rect: ['868px', '533px', '176px', '113px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"elems/p0-tdp-0.png",'0px','0px']
                        },
                        {
                            id: 'p0-tdp-1',
                            type: 'image',
                            rect: ['941px', '532px', '82px', '79px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"elems/p0-tdp-1.png",'0px','0px']
                        },
                        {
                            id: 'p0-tdp-2',
                            type: 'image',
                            rect: ['917px', '539px', '86px', '66px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"elems/p0-tdp-2.png",'0px','0px']
                        },
                        {
                            id: 'p0-tdp-35',
                            type: 'image',
                            rect: ['993px', '857px', '256px', '207px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"elems/p0-tdp-3.png",'0px','0px'],
                            transform: [[],['-21'],[],['0.82607','0.82608']]
                        },
                        {
                            id: 'p0-tdp-3',
                            type: 'image',
                            rect: ['849px', '477px', '256px', '207px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"elems/p0-tdp-3.png",'0px','0px']
                        },
                        {
                            id: 'p0-tdp-5',
                            type: 'image',
                            rect: ['880px', '489px', '159px', '141px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"elems/p0-tdp-5.png",'0px','0px']
                        },
                        {
                            id: 'p0-tdp-6',
                            type: 'image',
                            rect: ['960px', '529px', '51px', '62px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"elems/p0-tdp-6.png",'0px','0px']
                        },
                        {
                            id: 'p0-tdp-12',
                            type: 'image',
                            rect: ['930px', '528px', '82px', '79px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"elems/p0-tdp-1.png",'0px','0px'],
                            transform: [[],['-54']]
                        },
                        {
                            id: 'p0-tdp-7',
                            type: 'image',
                            rect: ['927px', '568px', '46px', '37px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"elems/p0-tdp-7.png",'0px','0px']
                        },
                        {
                            id: 'p0-tdp-8',
                            type: 'image',
                            rect: ['953px', '532px', '99px', '79px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"elems/p0-tdp-8.png",'0px','0px']
                        },
                        {
                            id: 'p0-tdp-82',
                            type: 'image',
                            rect: ['945px', '511px', '99px', '79px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"elems/p0-tdp-8.png",'0px','0px']
                        },
                        {
                            id: 'p0-tdp-38',
                            type: 'image',
                            rect: ['854px', '496px', '256px', '207px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"elems/p0-tdp-3.png",'0px','0px'],
                            transform: [[],['84'],[],['0.38671','0.38671']]
                        },
                        {
                            id: 'p0-tdp-10',
                            type: 'image',
                            rect: ['937px', '569px', '98px', '55px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"elems/p0-tdp-10.png",'0px','0px']
                        },
                        {
                            id: 'p0-big-3',
                            type: 'image',
                            rect: ['862px', '461px', '221px', '213px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"elems/p0-big-3.png",'0px','0px']
                        },
                        {
                            id: 'p0-tdp-13',
                            type: 'image',
                            rect: ['893px', '499px', '179px', '141px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"elems/p0-tdp-13.png",'0px','0px']
                        },
                        {
                            id: 'slogn',
                            type: 'image',
                            rect: ['76px', '74px', '552px', '248px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"slogn.png",'0px','0px'],
                            transform: [[],[],[],['0.54','0.54']]
                        },
                        {
                            id: 'logo',
                            type: 'image',
                            rect: ['692px', '290px', '547px', '553px', 'auto', 'auto'],
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",im+"logo.png",'0px','0px'],
                            userClass: "pointer",
                            filter: [0, 0, 1, 1, 0, 0, 0, 0, "rgba(0,0,0,0)", 0, 0, 0],
                            transform: [[],['360'],[],['0.85','0.85']]
                        },
                        {
                            id: 'p0-big-2',
                            type: 'image',
                            rect: ['770px', '503px', '282px', '171px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"elems/p0-big-2.png",'0px','0px'],
                            transform: [[],[],[],['0','0']]
                        },
                        {
                            id: 'p0-sp-2',
                            type: 'image',
                            rect: ['878px', '539px', '189px', '92px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"elems/p0-sp-2.png",'0px','0px'],
                            transform: [[],[],[],['0','0']]
                        },
                        {
                            id: 'p0-sp-3',
                            type: 'image',
                            rect: ['701px', '394px', '530px', '355px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"elems/p0-sp-3.png",'0px','0px'],
                            transform: [[],[],[],['0','0']]
                        },
                        {
                            id: 'p0-big-0',
                            type: 'image',
                            rect: ['867px', '451px', '271px', '250px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"elems/p0-big-0.png",'0px','0px'],
                            transform: [[],[],[],['0','0']]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '1920px', '1200px', 'auto', 'auto'],
                            overflow: 'visible',
                            fill: ["none"]
                        }
                    }
                },
                timeline: {
                    duration: 5000,
                    autoPlay: true,
                    data: [
                        [
                            "eid81",
                            "left",
                            0,
                            1136,
                            "easeInQuint",
                            "${p0-tdp-12}",
                            '930px',
                            '1560px'
                        ],
                        [
                            "eid19",
                            "left",
                            0,
                            1208,
                            "easeInQuint",
                            "${p0-st-3}",
                            '850px',
                            '1474px'
                        ],
                        [
                            "eid67",
                            "top",
                            0,
                            1136,
                            "easeInQuint",
                            "${p0-tdp-35}",
                            '456px',
                            '857px'
                        ],
                        [
                            "eid31",
                            "left",
                            0,
                            1136,
                            "easeInQuint",
                            "${p0-sp-1}",
                            '913px',
                            '575px'
                        ],
                        [
                            "eid328",
                            "scaleX",
                            0,
                            1000,
                            "easeInQuint",
                            "${p0-big-0}",
                            '0',
                            '1'
                        ],
                        [
                            "eid17",
                            "top",
                            0,
                            1208,
                            "easeInQuint",
                            "${p0-st-3}",
                            '512px',
                            '164px'
                        ],
                        [
                            "eid27",
                            "top",
                            142,
                            994,
                            "easeInQuint",
                            "${p0-sp-0}",
                            '554px',
                            '415px'
                        ],
                        [
                            "eid23",
                            "top",
                            0,
                            1136,
                            "easeInQuint",
                            "${p0-st-2}",
                            '476px',
                            '144px'
                        ],
                        [
                            "eid43",
                            "top",
                            0,
                            1136,
                            "easeInQuint",
                            "${p0-tdp-0}",
                            '535px',
                            '60px'
                        ],
                        [
                            "eid97",
                            "opacity",
                            142,
                            833,
                            "easeInQuint",
                            "${slogn}",
                            '0',
                            '1'
                        ],
                        [
                            "eid71",
                            "top",
                            0,
                            1136,
                            "easeInQuint",
                            "${p0-tdp-3}",
                            '477px',
                            '768px'
                        ],
                        [
                            "eid332",
                            "scaleX",
                            0,
                            1000,
                            "easeInQuint",
                            "${p0-sp-3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid129",
                            "top",
                            0,
                            1000,
                            "easeInQuint",
                            "${p0-big-0}",
                            '451px',
                            '703px'
                        ],
                        [
                            "eid9",
                            "left",
                            0,
                            1136,
                            "easeInQuint",
                            "${p0-tdp-34}",
                            '838px',
                            '1022px'
                        ],
                        [
                            "eid13",
                            "left",
                            0,
                            1136,
                            "easeInQuint",
                            "${p0-st-0}",
                            '853px',
                            '532px'
                        ],
                        [
                            "eid11",
                            "top",
                            0,
                            1136,
                            "easeInQuint",
                            "${p0-tdp-34}",
                            '497px',
                            '746px'
                        ],
                        [
                            "eid117",
                            "top",
                            0,
                            1136,
                            "easeInQuint",
                            "${p0-big-3}",
                            '461px',
                            '793px'
                        ],
                        [
                            "eid340",
                            "scaleX",
                            0,
                            1000,
                            "easeInQuint",
                            "${p0-sp-2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid57",
                            "left",
                            0,
                            1136,
                            "easeInQuint",
                            "${p0-tdp-1}",
                            '941px',
                            '510px'
                        ],
                        [
                            "eid359",
                            "scaleX",
                            0,
                            1000,
                            "easeInQuart",
                            "${logo}",
                            '0.85',
                            '1'
                        ],
                        [
                            "eid361",
                            "scaleY",
                            0,
                            1000,
                            "easeInQuart",
                            "${logo}",
                            '0.85',
                            '1'
                        ],
                        [
                            "eid115",
                            "left",
                            0,
                            1136,
                            "easeInQuint",
                            "${p0-big-3}",
                            '862px',
                            '1134px'
                        ],
                        [
                            "eid79",
                            "left",
                            0,
                            1136,
                            "easeInQuint",
                            "${p0-tdp-6}",
                            '960px',
                            '1621px'
                        ],
                        [
                            "eid133",
                            "top",
                            0,
                            1136,
                            "easeInQuint",
                            "${p0-tdp-13}",
                            '499px',
                            '300px'
                        ],
                        [
                            "eid55",
                            "top",
                            0,
                            1136,
                            "easeInQuint",
                            "${p0-tdp-03}",
                            '533px',
                            '787px'
                        ],
                        [
                            "eid311",
                            "scaleX",
                            1136,
                            0,
                            "easeOutCubic",
                            "${p0-tdp-35}",
                            '0.82607',
                            '0.82607'
                        ],
                        [
                            "eid3",
                            "left",
                            0,
                            1136,
                            "easeInQuint",
                            "${p0-st-1}",
                            '882px',
                            '1594px'
                        ],
                        [
                            "eid125",
                            "left",
                            0,
                            1000,
                            "easeInQuint",
                            "${p0-big-2}",
                            '770px',
                            '819px'
                        ],
                        [
                            "eid123",
                            "top",
                            0,
                            1000,
                            "easeInQuint",
                            "${p0-big-2}",
                            '503px',
                            '796px'
                        ],
                        [
                            "eid348",
                            "opacity",
                            0,
                            1000,
                            "easeInQuint",
                            "${p0-big-2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid349",
                            "opacity",
                            0,
                            1000,
                            "easeInQuint",
                            "${p0-sp-2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid91",
                            "top",
                            0,
                            1136,
                            "easeInQuint",
                            "${p0-tdp-8}",
                            '532px',
                            '499px'
                        ],
                        [
                            "eid103",
                            "left",
                            0,
                            1000,
                            "easeInQuint",
                            "${p0-sp-3}",
                            '701px',
                            '1046px'
                        ],
                        [
                            "eid65",
                            "left",
                            0,
                            1136,
                            "easeInQuint",
                            "${p0-tdp-35}",
                            '848px',
                            '993px'
                        ],
                        [
                            "eid59",
                            "top",
                            0,
                            1136,
                            "easeInQuint",
                            "${p0-tdp-1}",
                            '532px',
                            '85px'
                        ],
                        [
                            "eid131",
                            "left",
                            0,
                            1136,
                            "easeInQuint",
                            "${p0-tdp-13}",
                            '893px',
                            '523px'
                        ],
                        [
                            "eid21",
                            "left",
                            0,
                            1136,
                            "easeInQuint",
                            "${p0-st-2}",
                            '819px',
                            '1362px'
                        ],
                        [
                            "eid39",
                            "top",
                            0,
                            1136,
                            "easeInQuint",
                            "${p0-tdp-33}",
                            '497px',
                            '235px'
                        ],
                        [
                            "eid29",
                            "top",
                            0,
                            1136,
                            "easeInQuint",
                            "${p0-sp-1}",
                            '535px',
                            '446px'
                        ],
                        [
                            "eid333",
                            "scaleY",
                            0,
                            1000,
                            "easeInQuint",
                            "${p0-sp-3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid312",
                            "scaleY",
                            1136,
                            0,
                            "easeOutCubic",
                            "${p0-tdp-35}",
                            '0.82608',
                            '0.82608'
                        ],
                        [
                            "eid89",
                            "left",
                            0,
                            1136,
                            "easeInQuint",
                            "${p0-tdp-8}",
                            '953px',
                            '400px'
                        ],
                        [
                            "eid85",
                            "left",
                            0,
                            1136,
                            "easeInQuint",
                            "${p0-tdp-7}",
                            '927px',
                            '282px'
                        ],
                        [
                            "eid15",
                            "top",
                            0,
                            1136,
                            "easeInQuint",
                            "${p0-st-0}",
                            '499px',
                            '900px'
                        ],
                        [
                            "eid336",
                            "scaleX",
                            0,
                            1000,
                            "easeInQuint",
                            "${p0-big-2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid127",
                            "left",
                            0,
                            1000,
                            "easeInQuint",
                            "${p0-big-0}",
                            '867px',
                            '532px'
                        ],
                        [
                            "eid25",
                            "left",
                            142,
                            994,
                            "easeInQuint",
                            "${p0-sp-0}",
                            '928px',
                            '1222px'
                        ],
                        [
                            "eid301",
                            "scaleX",
                            142,
                            833,
                            "easeInQuint",
                            "${slogn}",
                            '0.54',
                            '1'
                        ],
                        [
                            "eid75",
                            "top",
                            0,
                            1136,
                            "easeInQuint",
                            "${p0-tdp-5}",
                            '489px',
                            '866px'
                        ],
                        [
                            "eid61",
                            "top",
                            0,
                            1136,
                            "easeInQuint",
                            "${p0-tdp-2}",
                            '539px',
                            '117px'
                        ],
                        [
                            "eid87",
                            "top",
                            0,
                            1136,
                            "easeInQuint",
                            "${p0-tdp-7}",
                            '568px',
                            '457px'
                        ],
                        [
                            "eid101",
                            "top",
                            0,
                            1000,
                            "easeInQuint",
                            "${p0-sp-2}",
                            '539px',
                            '584px'
                        ],
                        [
                            "eid329",
                            "scaleY",
                            0,
                            1000,
                            "easeInQuint",
                            "${p0-big-0}",
                            '0',
                            '1'
                        ],
                        [
                            "eid99",
                            "left",
                            0,
                            1000,
                            "easeInQuint",
                            "${p0-sp-2}",
                            '878px',
                            '540px'
                        ],
                        [
                            "eid351",
                            "opacity",
                            0,
                            1000,
                            "easeInQuint",
                            "${p0-big-0}",
                            '0',
                            '1'
                        ],
                        [
                            "eid109",
                            "top",
                            0,
                            1136,
                            "easeInQuint",
                            "${p0-tdp-38}",
                            '496px',
                            '733px'
                        ],
                        [
                            "eid5",
                            "top",
                            0,
                            1136,
                            "easeInQuint",
                            "${p0-st-1}",
                            '535px',
                            '1036px'
                        ],
                        [
                            "eid53",
                            "left",
                            0,
                            1136,
                            "easeInQuint",
                            "${p0-tdp-03}",
                            '868px',
                            '284px'
                        ],
                        [
                            "eid341",
                            "scaleY",
                            0,
                            1000,
                            "easeInQuint",
                            "${p0-sp-2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid107",
                            "left",
                            0,
                            1136,
                            "easeInQuint",
                            "${p0-tdp-38}",
                            '854px',
                            '1244px'
                        ],
                        [
                            "eid93",
                            "left",
                            0,
                            1136,
                            "easeInQuint",
                            "${p0-tdp-82}",
                            '945px',
                            '1489px'
                        ],
                        [
                            "eid83",
                            "top",
                            0,
                            1136,
                            "easeInQuint",
                            "${p0-tdp-12}",
                            '528px',
                            '-4px'
                        ],
                        [
                            "eid69",
                            "left",
                            0,
                            1136,
                            "easeInQuint",
                            "${p0-tdp-3}",
                            '849px',
                            '722px'
                        ],
                        [
                            "eid7",
                            "opacity",
                            0,
                            1136,
                            "easeInQuint",
                            "${p0-tdp-11}",
                            '0',
                            '1'
                        ],
                        [
                            "eid337",
                            "scaleY",
                            0,
                            1000,
                            "easeInQuint",
                            "${p0-big-2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid73",
                            "left",
                            0,
                            1136,
                            "easeInQuint",
                            "${p0-tdp-5}",
                            '880px',
                            '54px'
                        ],
                        [
                            "eid303",
                            "scaleY",
                            142,
                            833,
                            "easeInQuint",
                            "${slogn}",
                            '0.54',
                            '1'
                        ],
                        [
                            "eid105",
                            "top",
                            0,
                            1000,
                            "easeInQuint",
                            "${p0-sp-3}",
                            '394px',
                            '532px'
                        ],
                        [
                            "eid113",
                            "top",
                            0,
                            1136,
                            "easeInQuint",
                            "${p0-tdp-10}",
                            '569px',
                            '780px'
                        ],
                        [
                            "eid111",
                            "left",
                            0,
                            1136,
                            "easeInQuint",
                            "${p0-tdp-10}",
                            '937px',
                            '1718px'
                        ],
                        [
                            "eid95",
                            "top",
                            0,
                            1136,
                            "easeInQuint",
                            "${p0-tdp-82}",
                            '511px',
                            '768px'
                        ],
                        [
                            "eid77",
                            "top",
                            0,
                            1136,
                            "easeInQuint",
                            "${p0-tdp-6}",
                            '529px',
                            '348px'
                        ],
                        [
                            "eid41",
                            "left",
                            0,
                            1136,
                            "easeInQuint",
                            "${p0-tdp-0}",
                            '862px',
                            '-88px'
                        ],
                        [
                            "eid33",
                            "top",
                            0,
                            1136,
                            "easeInQuint",
                            "${p0-tdp-22}",
                            '554px',
                            '524px'
                        ],
                        [
                            "eid137",
                            "rotateZ",
                            0,
                            1000,
                            "easeInQuart",
                            "${logo}",
                            '360deg',
                            '0deg'
                        ],
                        [
                            "eid37",
                            "left",
                            0,
                            1136,
                            "easeInQuint",
                            "${p0-tdp-33}",
                            '854px',
                            '978px'
                        ],
                        [
                            "eid350",
                            "opacity",
                            0,
                            1000,
                            "easeInQuint",
                            "${p0-sp-3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid63",
                            "left",
                            0,
                            1136,
                            "easeInQuint",
                            "${p0-tdp-2}",
                            '917px',
                            '842px'
                        ],
                        [
                            "eid298",
                            "originX",
                            142,
                            0,
                            "easeOutCubic",
                            "${slogn}",
                            '50%',
                            '50%'
                        ],
                        [
                            "eid299",
                            "originX",
                            975,
                            0,
                            "easeOutCubic",
                            "${slogn}",
                            '50%',
                            '50%'
                        ],
                        [
                            "eid35",
                            "left",
                            0,
                            1136,
                            "easeInQuint",
                            "${p0-tdp-22}",
                            '917px',
                            '649px'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("index_edgeActions.js");
})("EDGE-254492");
