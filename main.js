status="";
text="";

function setup(){
    canvas=createCanvas(600,500);
    canvas.center();
 
    video=createCapture(VIDEO);
    video.hide();
}

function start(){
    objectDetector=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="Status : Detecting objects!";
    text=("input");
}

function modelLoaded(){
    console.log("Model has been Loaded !");
    status=true;
}
function draw(){
    image (video,0,0,480,380);
}