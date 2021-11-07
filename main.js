function start(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classify = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/WJIEikhw7/model.json",modelReady);

}

function modelReady(){
    classify.classify(gotResults);
}

function gotResults(error,results){
    console.log("Result");
}