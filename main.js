function preload(){
}

function setup(){
    canvas = createCanvas(640, 480);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video, 0, 0, 640, 480); 
    
    fill("pink");
    rect(585, 0, 55, 425, 20, 0, 20, 20);

    fill("yellow");
    rect(0, 0, 585, 55, 0, 20, 20, 20);

    fill("yellow");
    rect(55, 425, 585, 55, 20, 20, 0, 20);

    fill("pink");
    rect(0, 55, 55, 425, 20, 0, 20, 20);

}

function take_snapshot(){
    save("my_filter.png");
}

