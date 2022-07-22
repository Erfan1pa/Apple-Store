var parent = document.getElementsByClassName("img-phone");
let count = 0;
let scale = document.getElementsByClassName("pickup");
var ColorArraye = ["#394736", "#eff0ea", "#fbeace", "#605f5b", "#96b8d1"];
function changpic(num) {
  scale[count].classList.remove("scale");
  parent[count].classList.remove("show");
  scale[num].classList.add("scale");
  parent[num].classList.add("show");
  count = num;
}
var click = false;

function navshow() {
  let change = document.getElementsByClassName("responsive-bar")[0];
  let changecolor = document.getElementsByClassName("navigation-bar")[0];
  if (click == false) {
    change.classList.add("show");
    changecolor.style.backgroundColor = "rgba(57, 71, 54, 0.3)";
    click = true;
  } else {
    change.classList.remove("show");
    changecolor.style.backgroundColor = "transparent";
    click = false;
  }
}
