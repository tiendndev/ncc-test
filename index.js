let menu = document.querySelector(".menu");
let sidebar = document.querySelector(".sidebar");

menu.onclick = function () {
  sidebar.classList.toggle("displayMenu");
};
