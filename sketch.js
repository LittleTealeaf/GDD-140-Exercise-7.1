/// <reference path="./node_modules/@types/p5/global.d.ts" />

var img;

function preload() {
    img = loadImage('assets/lisa.jpg');
}

function setup() {
    createCanvas(600,600);
    background(220);
    image(img,0,0);
}