
objects = [];
ans = "";


function setup() {
  canvas = createCanvas(280, 280);
  canvas.position(570,120);
  video = createCapture(VIDEO);
  video.size(260,260);
  video.hide();
}

function modelLoaded() {
  console.log("Model Loaded!")
  ans = true;
}

function play()
{
  objectDetector = ml5.objectDetector('cocossd', modelLoaded);
  document.getElementById("ans").innerHTML = "Status : Detecting Objects";
  object_name = document.getElementById("object_name").value;
}

function gotResult(error, results) {
  if (error) {
    console.log(error);
  }else{
  console.log(results);
  objects = results;
}
}

function draw() {
  image(video, 0, 0, 280, 280);
     
}