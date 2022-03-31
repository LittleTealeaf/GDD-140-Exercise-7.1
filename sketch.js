/// <reference path="./node_modules/@types/p5/global.d.ts" />

var img;
const imgScale = 2;

function preload() {
    img = loadImage('assets/lisa.jpg');
}

function setup() {
    //Canvas is only as large as the image is
    createCanvas(200 * imgScale,150 * imgScale);
    background(220);
    image(img,0,0,width,height);
}

var x = 0;
var y = 0;
/**
 * How many cycles it should render per frame
 */
const frameCycles = 1000;

const step = 10;

function draw() {
    var cycles = 0;
    noStroke();
    rectMode(CENTER);
    while(cycles < frameCycles && y < height) {
        while(cycles < frameCycles && x < width) {
            fill(img.get(x / imgScale,y / imgScale));
            ellipse(x,y,step+5,step+5);
            cycles++;
            x+=step;
        }
        if(x >= width) {
            x = 0;
            y += step;
        }
    }
    if(y >= height) {
        noLoop();
    }
}