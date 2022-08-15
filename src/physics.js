// returns force mover2 feels because of mass of mover1
function attraction(mover1, mover2) {
    const force = p5.Vector.sub(mover1.position, mover2.position);
    const distance = constrain(force.mag(), attractionLowerConstrain, attractionUpperConstrain);   // limits how strong gravity can get
    const magnitude = (bigG * mover1.mass * mover2.mass) / (distance * distance);  // GMm/d^2
    force.normalize();
    force.mult(magnitude);
    return force;
}

function gravitationalEnvironment(movers) {
    for (i=0; i<movers.length; i+=1) {
        for (j=i+1; j<movers.length; j+=1) {
            const force = attraction(movers[j], movers[i]);
            const antiforce = force.copy().mult(-1);
            movers[i].applyForce(force);
            movers[j].applyForce(antiforce);
        }
    }
}

function moversBuilder(number, massRange, posRange, velRange, color) {
    movers = [];
    for (i=0; i<number; i+=1) {
        const mass = random(massRange[0], massRange[1]);
        const position = createVector(random(posRange[0], posRange[1]), random(posRange[0], posRange[1]));
        const radius = massToRadiusConst * mass;
        const initialVelocity = createVector(random(velRange[0], velRange[1]), random(velRange[0], velRange[1]));
        const mov = new Mover(position, mass, color, radius, initialVelocity);
        movers.push(mov);
    }
    
    return movers;
}
