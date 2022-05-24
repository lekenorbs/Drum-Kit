// document.querySelector(".w").addEventListener("click", function(){
//   alert("W got clicked");
// });
//checking for button pressed
var numOfDrums = document.querySelectorAll(".drum").length;
for (var i = 0; i < numOfDrums; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
      var letterType = this.innerHTML;
      playSound(letterType);
      keyAnimation(letterType);
    });
  }
//kEYPRESS CHECK
  document.addEventListener("keypress", function(event){
    playSound(event.key);
    keyAnimation(event.key);
  });

  // checking for key pressed
  function playSound(key) {
    switch (key) {
      case "w":
        var audio = new Audio("sounds/crash.mp3");
        audio.play();
        break;
      case "a":
        var audio = new Audio("sounds/kick-bass.mp3");
        audio.play();
        break;
      case "s":
        var audio = new Audio("sounds/snare.mp3");
        audio.play();
        break;
      case "d":
        var audio = new Audio("sounds/tom-1.mp3");
        audio.play();
        break;
      case "j":
        var audio = new Audio("sounds/tom-2.mp3");
        audio.play();
        break;
      case "k":
        var audio = new Audio("sounds/tom-3.mp3");
        audio.play();
        break;
      case "l":
        var audio = new Audio("sounds/tom-4.mp3");
        audio.play();
        break;

      default:
        "nothing";
    }
  }
//Add animation whenevever a key is press.

function keyAnimation(currentkey){
  var activeButton = document.querySelector("."+currentkey);
  activeButton.classList.add("pressed");

  //Setting timeout for each annimation
  setTimeout(function(){
    activeButton.classList.remove("pressed");
  }, 100);

}
