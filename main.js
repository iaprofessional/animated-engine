img = ""
img2 = ""
Status = ""
function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting..."
}
function modelLoaded() {
    console.log("ml5 has sucessfully loaded");
    Status = true;
    objectDetector.detect(img, gotResult);
}
function gotResult(error, results) {
 if (error) {
  console.log(error);
 } else {
     console.log(results);
 }
}
function preload() {
    img = loadImage('dog_cat.jpg');
    img2 = loadImage('laptop.jpg');
}
function draw() {
    image(img, 0, 0, 640, 420);
    fill("#FF0000");
    text("Dog", 45, 75);
    noFill();
    stroke("#FF0000");
    rect(30, 60, 450, 350);
    
    fill("#FF0000");
    text("Cat", 320, 120);
    noFill();
    stroke("#FF0000");
    rect(300, 90, 270, 320);
}
