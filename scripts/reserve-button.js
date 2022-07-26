`use-strict`;

const buttonEl = document.getElementById("reserve");

buttonEl.addEventListener("mousemove", function (e) {
  const target = e.target;
  const rect = target.getBoundingClientRect();

  const x = (e.clientX - rect.left) / 3;
  const y = (e.clientY - rect.top) / 3;

  buttonEl.style.cssText = `--mouse-x: ${x}; --mouse-y: ${y}`;
});

buttonEl.addEventListener("mouseleave", function (e) {
  buttonEl.style.cssText = "";
});
