// ------------------------------------------------------------------------
// PHYSICS CONSTANTS                                                      |
// ------------------------------------------------------------------------ 

// influences strenght of gravity (higher values result in faster dynamics)
var bigG = 2;

// limits strength of gravity, particularly when objects are close
var attractionLowerConstrain = 5.0;
var attractionUpperConstrain = 200.0;

// limits strength of drag, particularly when objects are close
var dragLowerConstrain = 5.0;
var dragUpperConstrain = 20.0;

var massToRadiusConst = 5;
var velocityToRadiusConst = 5;

// ------------------------------------------------------------------------
// SKETCH CONSTANTS                                                       |
// ------------------------------------------------------------------------ 

// how many milliseconds before recording ends
var maxMillis = 16000;
var eventMillis = 4000;

// sketch size, color
var canvasWidth = 1000;
var canvasHeight = 1000;
var backgroundColor = 0;

var moversNumber = 5;
var moversMassRange = [1, 10];
var moversPositionRange = [300, 1620];
var moversVelocityRange = [0,0];
var moversColor = [143, 90, 142];   // HSL 

var hueChangeConstant = 0;
var hueChangeMultiplicator = 1;

var initial_conditions = [
  {
    "id": 0,
    "position": [
      416.5887784290223,
      118.87585408215342
    ],
    "color": [
      null,
      null,
      null
    ],
    "mass": 3.4919572789089504,
    "radius": 17.45978639454475,
    "velocity": [
      0.18270341190722317,
      0.45984826864037187
    ],
    "acceleration": [
      0,
      0
    ]
  },
  {
    "id": 1,
    "position": [
      110.22431837026545,
      125.30791834325221
    ],
    "color": [
      null,
      null,
      null
    ],
    "mass": 3.292822905406447,
    "radius": 16.464114527032233,
    "velocity": [
      0.451992210425357,
      0.3526590624444167
    ],
    "acceleration": [
      0,
      0
    ]
  },
  {
    "id": 2,
    "position": [
      157.29179536610704,
      442.19309832508065
    ],
    "color": [
      null,
      null,
      null
    ],
    "mass": 3.381676576169103,
    "radius": 16.908382880845515,
    "velocity": [
      0.21581408796650015,
      0.2249356970035974
    ],
    "acceleration": [
      0,
      0
    ]
  },
  {
    "id": 3,
    "position": [
      117.11208709017234,
      252.017708196668
    ],
    "color": [
      null,
      null,
      null
    ],
    "mass": 1.0603433224118284,
    "radius": 5.301716612059142,
    "velocity": [
      0.027208411679819577,
      0.05312642259333211
    ],
    "acceleration": [
      0,
      0
    ]
  },
  {
    "id": 4,
    "position": [
      178.99465712240445,
      444.01845019846877
    ],
    "color": [
      null,
      null,
      null
    ],
    "mass": 1.5255623897536204,
    "radius": 7.627811948768102,
    "velocity": [
      0.28003861796312945,
      0.4972871946725075
    ],
    "acceleration": [
      0,
      0
    ]
  },
  {
    "id": 5,
    "position": [
      143.39213953901444,
      319.8627675750887
    ],
    "color": [
      null,
      null,
      null
    ],
    "mass": 4.908125184271406,
    "radius": 24.54062592135703,
    "velocity": [
      0.22672938634660056,
      0.19074252830882577
    ],
    "acceleration": [
      0,
      0
    ]
  },
  {
    "id": 6,
    "position": [
      161.93921260522615,
      113.69648109267052
    ],
    "color": [
      null,
      null,
      null
    ],
    "mass": 1.649677388664835,
    "radius": 8.248386943324174,
    "velocity": [
      0.06201322018769062,
      0.3452548775249462
    ],
    "acceleration": [
      0,
      0
    ]
  },
  {
    "id": 7,
    "position": [
      146.03316450608412,
      369.81532321139963
    ],
    "color": [
      null,
      null,
      null
    ],
    "mass": 4.057136738072425,
    "radius": 20.285683690362127,
    "velocity": [
      0.09655228273873451,
      0.40800072558790235
    ],
    "acceleration": [
      0,
      0
    ]
  }
]
