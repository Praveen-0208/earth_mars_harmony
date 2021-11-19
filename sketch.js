var sunRadius = 60
var earthRadius = 30
var marsRadius = 20
var earthOrbitDiameter = 400
var marsOrbitDiameter = 646

var earthInitialPointX 
var earthInitialPointY 
var marsInitialPointX 
var marsInitialPointY 
var centerX
var centerY
var OFFSET = .1


var points = []

var angular_velocity_earth = 0
var angular_velocity_mars = 0

function setup() {
  createCanvas(700,700)
  frameRate(30  )
  centerX = width/2
  centerY = height/2
  earthInitialPointX = ((earthOrbitDiameter/2) * cos(angular_velocity_earth)) + centerX
  earthInitialPointY =  ((earthOrbitDiameter/2) * sin(angular_velocity_earth)) + centerY
  marsInitialPointX = ((marsOrbitDiameter/2) * cos(angular_velocity_mars)) + centerX
  marsInitialPointY = ((marsOrbitDiameter/2) * sin(angular_velocity_mars)) + centerX

}

function draw() {

  let p1 = {
    x: earthInitialPointX, y: earthInitialPointY
  }
  let p2 = {
    x: marsInitialPointX, y: marsInitialPointY
  }
  points.push({p1, p2})
  
  background(5)

  noFill();
  stroke(255);
  circle(centerX,centerY, earthOrbitDiameter);
  circle(centerX,centerY, marsOrbitDiameter);

  stroke(155)
  strokeWeight(.5)
  points.map(pointSet => {
    line(pointSet.p1.x, pointSet.p1.y, pointSet.p2.x, pointSet.p2.y)
  })


  strokeWeight(1)
  fill(242,149,7);
  circle(centerX,centerY,sunRadius);
  fill(7,35,242);
  circle(earthInitialPointX,earthInitialPointY,earthRadius);
  fill(239,72,21);
  circle(marsInitialPointX,marsInitialPointY,marsRadius);

  //  earthInitialPointX+=3 * 10
  // earthInitialPointY+=3 * 10
  // marsInitialPointX+=3 * 10
  // marsInitialPointY+=3 * 10

  angular_velocity_earth += 1.9 * OFFSET
  angular_velocity_mars += 1.0 * OFFSET


  earthInitialPointX = ((earthOrbitDiameter/2) * cos(angular_velocity_earth)) + centerX
  earthInitialPointY =  ((earthOrbitDiameter/2) * sin(angular_velocity_earth)) + centerY
  marsInitialPointX = ((marsOrbitDiameter/2) * cos(angular_velocity_mars)) + centerX
  marsInitialPointY = ((marsOrbitDiameter/2) * sin(angular_velocity_mars)) + centerX


  if(angular_velocity_earth === 360){
    angular_velocity_earth = 0;
  }
  if(angular_velocity_mars === 360){
    angular_velocity_mars = 0;
  }
}