var state=false;
obj=[];
objects=""; 
var x;
function setup()
{
    var canvas =  createCanvas(540,400);
    canvas.center();
    canvas.parent('canvas');
    video = createCapture(VIDEO);
    video.size(540, 400);
    video.hide();
   console.log("setup")
x=video;
}


function gotResults(error,results)
{
    if(error)
    {
        console.error(error);
    }else
    {
        console.log(results);
        obj=results;
    }
}


function find()
{
    objects=document.getElementById("object_input").value;
    objectDetector=ml5.objectDetector("cocossd",model_loaded);
    document.getElementById("status").innerHTML="status : Finding Ojects";  
}


function model_loaded()
{
console.log(obj);
state=true;
console.log("model_loaded");
}


 function speak()
{
    var synth=window.speechSynthesis;
     speak_data=objects+"has been detected";
     var utterThis= new SpeechSynthesisUtterance(speak_data);
     synth.speak(utterThis)
}


function draw()
{   
    image(video,0,0,540,400 );
    if(state!=false)
    {
        objectDetector.detect(video,gotResults);
        for(i=0;i<obj.length;i++)
        {
            fill("red");
            percent=floor(obj[i].confidence*100);
            text(obj[i].label+" "+percent+"%",obj[i].x,obj[i].y);
            noFill();
            stroke("red");
            rect(obj[i].x,obj[i].y,obj[i].width,obj[i].height);
            if (obj[i].label==objects)
            {
                x.stop(speak());
            }
       }
    }
    
}
