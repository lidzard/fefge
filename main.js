song1 = "";
song2 = "";
leftx = 0;
lefty = 0;
rightx = 0;
righty = 0;

function preload()
{
    song1 = loadSound("1.mp3");
    song2 = loadSound("09 09.mp3");
}
function setup()
{
    canvas = createCanvas(400, 400);
    canvas.center();
    canvas.position(515, 250);
    cam = createCapture(VIDEO);
    cam.hide();
    posenet = ml5.poseNet(cam, modelLoaded);
    posenet.on('pose', gotposes);
}
function draw()
{
    image(cam, 0, 0, 400, 400);
}
function modelLoaded()
{
    console.log("model is loaded");
}
function gotposes(results)
{
    if(results.length)
    {
        leftx = results[0].pose.leftWrist.x;
        lefty = results[0].pose.leftWrist.y;
        rigthx = results[0].pose.rightWrist.x;
        rigthy = results[0].pose.rightWrist.y;
    }
}