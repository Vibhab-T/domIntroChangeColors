let box = document.querySelector(".box");

box.addEventListener("click", () => {
  let x = Math.floor(Math.random() * 255);
  let y = Math.floor(Math.random() * 255);
  let z = Math.floor(Math.random() * 255);
  box.style.backgroundColor = `rgb(${x}, ${y}, ${z})`;
  box.style.color = `rgb(${y}, ${x}, ${z})`;
});
