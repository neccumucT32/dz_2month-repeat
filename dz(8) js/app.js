const colorLeft = document.getElementById("changeBackgroundLeft");
const colorRight = document.getElementById("changeBackgroundRigth");

colorLeft.addEventListener("input", () => {
  document.querySelector(".half-right").style.backgroundColor = colorLeft.value;
});

colorRight.addEventListener("input", () => {
  document.querySelector(".half-left").style.backgroundColor = colorRight.value;
});
