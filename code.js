function preload() {
}
function setup() {
    canvas = createCanvas(300,300);
    canvas.center();
  video = createCapture(VIDEO);
  video.size(300,300);  
 video.hide();
 poseNet = ml5.poseNet(video,moduelloaded);
 poseNet.on('pose', gotPoses);
}
function moduelloaded() {
    console.log("post net initialized");
}
function gotPoses(results) {
if(results.length > 0)
{
    console.log(results);
}
}
function draw() {
 image(video, 0,0,300,300);
}
function take_snapshot() {
    save('Barathclown.png');
}