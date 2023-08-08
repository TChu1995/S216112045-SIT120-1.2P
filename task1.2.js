let story_1 = document.getElementById("story_1").innerHTML;
let story_2 =
  "Once upon a time, there was a little girl named Emily. She liked to visit the nearby park every day after school. One day, she heard a kitten meowing from a tree. She asked a squirrel for help, and they rescued the kitten. The end.";
const d = new Date();
document.getElementById("display_date").innerHTML = d;

function changename() {
  let name = prompt("What is Your Name");
  document.getElementById("new_story").innerHTML = story_1.replace(
    /Lily/g,
    name
  );
}
function makeupper() {
  document.getElementById("new_story").innerHTML = story_1.toUpperCase();
}
function makelower() {
  document.getElementById("new_story").innerHTML = story_1.toLocaleLowerCase();
}

function get_story_2() {
  document.getElementById("new_story_2").innerHTML = story_2;
}
function combine_story() {
  let story_2nd = document.getElementById("new_story_2").innerHTML;
  let story_3 = story_1.concat("<br> Some Whereelse <br>", story_2nd);
  document.getElementById("new_story").innerHTML = story_3;
}
function get_length() {
  let story_1_lenght = document.getElementById("new_story").innerHTML.length;
  let story_2_length = document.getElementById("new_story_2").innerHTML.length;
  document.getElementById("Story_1_length").innerHTML = story_1_lenght;
  document.getElementById("Story_2_length").innerHTML = story_2_length;
}

function get_character_at() {
  const myArr = story_1.split(".");
  text = "";
  for (let i = 0; i < myArr.length; i++) {
    text = text + myArr[i] + "<br>";
  }
  document.getElementById("new_story_3").innerHTML = text;
}
