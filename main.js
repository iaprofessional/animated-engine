img = ""
Status = ""
objects = [];
function setup() {
    canvas = createCanvas(380, 380);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    video.size(380, 380);
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting..."
}
function modelLoaded() {
    console.log("ml5 has sucessfully loaded");
    Status = true;
}
function gotResult(error, results) {
 if (error) {
  console.log(error);
 } else {
     console.log(results);
     objects = results;
 }
}
function preload() {
    img = loadImage('dog_cat.jpg');
}
function draw() {
    image(video, 0, 0, 380, 380);
    if(Status != "") {
        r = random(255);
        g = random(255);
        b = random(255);
        objectDetector.detect(video, gotResult);
     for (i = 0; i < objects.length; i++) {
         document.getElementById("status").innerHTML = "Status: We have detected the objects below";
         document.getElementById("number_of_objects").innerHTML = "The number of objects are:"+ objects.length;
         fill(r, g, b);
         percent = floor(objects[i].confidence * 100);
         text(objects[i].label + "" + percent + "%", objects[i].x, objects[i].y);
         noFill();
         stroke(r, g, b);
         rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height,);
     }
    }
}
