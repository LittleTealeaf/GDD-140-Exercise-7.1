/// <reference path="./node_modules/@types/p5/global.d.ts" />

var img;

function preload() {
    img = loadImage('assets/lisa.jpg');
}

function setup() {
    //Canvas is only as large as the image is
    createCanvas(200,150);
    background(220);
    image(img,0,0);
}

var x = 0;
var y = 0;
/**
 * How many cycles it should render per frame
 */
const frameCycles = 1000;

const size = 10;

function draw() {
    var cycles = 0;
    noStroke();
    rectMode(CENTER);
    while(cycles < frameCycles && y < 150) {
        while(cycles < frameCycles && x < 500) {
            fill(img.get(x,y));
            ellipse(x,y,size+5,size+5);
            cycles++;
            x+=size;
        }
        if(x >= 500) {
            x = 0;
            y += size;
        }
    }
}