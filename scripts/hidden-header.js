`use-strict`;

const infoElement = document.getElementById("details");
const hiddenHeader = document.getElementById("hidden-header");
const scrollDistance = 690;
const stickyDiv = document.getElementById("sticker");

window.addEventListener("scroll", ToggleHiddenDiv);

function ToggleHiddenDiv() {
  if (
    window.scrollY > scrollDistance &&
    hiddenHeader.classList.contains("hidden")
  ) {
    hiddenHeader.classList.remove("hidden");
    // stickyDiv.classList.add("sticky");
  }

  if (
    window.scrollY < scrollDistance &&
    !hiddenHeader.classList.contains("hidden")
  ) {
    hiddenHeader.classList.add("hidden");
    // stickyDiv.classList.remove("sticky");
  }
}
