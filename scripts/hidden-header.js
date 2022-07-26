`use-strict`;

const infoElement = document.getElementById("details");
const hiddenHeader = document.getElementById("hidden-header");
const scrollDistance = 690;

window.addEventListener("scroll", ToggleHiddenDiv);

function ToggleHiddenDiv() {
  if (
    window.scrollY > scrollDistance &&
    hiddenHeader.classList.contains("hidden")
  ) {
    hiddenHeader.classList.remove("hidden");
  }

  if (
    window.scrollY < scrollDistance &&
    !hiddenHeader.classList.contains("hidden")
  ) {
    hiddenHeader.classList.add("hidden");
  }
}
