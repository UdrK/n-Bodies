function draw() {
    if (universe_age < universe_max_age) {
        actualDraw();
        universe_age += 1
    }
}

// updating objects in here
function updateDisplay(movers) {
    movers.forEach(element => {
        element.update();
        element.display();
    }); 
}

function keepInitialConditions(movers) {
    print(movers)
    new_initial_conditions = []
    movers.forEach(element => {
        new_initial_conditions.push(element.toJSON());
    }); 
    return new_initial_conditions;
}

moversNumber = 8;
moversMassRange = [1, 5];
moversPositionRange = [100, 500];
moversVelocityRange = [0,0.5];
moversColor = [347, 100, 28];   // HSL
movers = [];
universe_max_age = 2000
universe_age = 0

function conditions(randomConditions) {
    if(randomConditions) {
        colors = [];
        for (i=0; i<moversNumber; i+=1) {
            // not really working, colors being now changed in mover.js
            if(i%2==0) {
                colors.push(color('#8f001f'));
            }
        }
        movers = moversBuilder(moversNumber, moversMassRange, moversPositionRange, moversVelocityRange, colors);
        new_initial_conditions = keepInitialConditions(movers);
        save(new_initial_conditions, 'new_initial_conditions.json');
    } else {
        initial_conditions.forEach(element => {
            movers.push(new Mover(null, null, null).fromJSON(element));
        });
    }
    console.log(movers);
}

function setup() {
    //colorMode(HSL, 240);
    randomConditions = false;
    conditions(randomConditions);
    canvas = createCanvas(canvasWidth, canvasWidth, SVG);
    background(backgroundColor);
}

function actualDraw() {
    gravitationalEnvironment(movers);
    updateDisplay(movers);
}
