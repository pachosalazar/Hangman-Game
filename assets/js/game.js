var sims =[ "Homer","Bart", "Maggie", "Lisa", "March"]
var point =0
var missed=0
var left=0
var underScore=[];
var currentWord = sims [Math.floor(Math.random() * sims.length)];

console.log(currentWord);



var generateUnderScore = () => {
  for (var i = 0; i < currentWord.length; i++){
    underScore.push("_");
  }
    return underScore;
  var Score = "<p>" + underScore + "</p>";
  document.querySelector(".underscore").innerHTML = scores;
}

console.log(generateUnderScore());


document.addEventListener("keypress", (event) => {
var keyword = string.formcharcode(event.keycode);
console.log(keyword);
});


if(currentWord.indexOf(keypress) > -1) {
point.push(keypress);
console.log(poit);

missed.push(keypress);
console.log(left);

if(underScore.join("")==currentWord){
  alert("!!!YOU WIN")
}
}

