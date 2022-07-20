throwDiv = () => {
  random1 = Math.floor(Math.random() * (500 - 0) + 0);
  random2 = Math.floor(Math.random() * (1400 - 0) + 0);
  document.getElementById("divdiv").style.top = `${random1}px`;
  document.getElementById("divdiv").style.left = `${random2}px`;
};
document.getElementById("divdiv").addEventListener("mouseover", throwDiv);
