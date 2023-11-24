const change = document.querySelector(".oc");
const hidden = document.querySelector("#nav");
const upSearch = document.querySelector(".up-search");
const search = document.querySelector(".search");

change.addEventListener("click", function () {
  hidden.classList.toggle("hidden");
});

search.addEventListener("click", function () {
  upSearch.classList.toggle("hidden");
});
