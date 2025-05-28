//berger menu 
const menusvg = document.querySelectorAll(".menu-item-svg");
menusvg.forEach((event) =>
  event.addEventListener("click", () => {
    event.nextElementSibling.classList.toggle("active");
    event.classList.toggle("br-b");
    event.lastElementChild.classList.toggle("rotate-180");
  })
);

const logo = document.getElementById("logo");
const closesvg = document.getElementById("close-svg");
const brbox = document.getElementById("berger-box");
const bricon = document.getElementById("br-icon");

//show berger box
bricon.addEventListener("click", () => {
  brbox.classList.remove("hidden");
  bricon.classList.add("hidden");
  logo.classList.add("hidden");

})

// close berger box
closesvg.addEventListener("click", () => {
  brbox.classList.add("hidden");
  bricon.classList.remove("hidden");
  logo.classList.remove("hidden");
})
