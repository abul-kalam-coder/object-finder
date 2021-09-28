var state="";
var obj; 
function setup(){
    var canvas =  createCanvas(540,400);
    canvas.center();
    canvas.parent('canvas');
    video = createCapture(VIDEO);
    video.size(540, 400);
    video.hide();
}

function find(){
    obj=document.getElementById("object_input").value;
    object_detector=ml5.objectDetector("cocossd",model_loaded());
    document.getElementById("status").innerHTML="status : Finding Ojects";
}
function model_loaded(){
console.log(obj);
state="true";
}

function draw(){
image(video,0,0,540,400 );
}