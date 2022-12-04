const container = document.querySelector(".container");
const collapse = document.querySelector(".collapse");
const collapseToggle = collapse.querySelector('.bx');
const root = document.querySelector(':root');
const themeToggle = document.querySelector('.toggle span');
const themeIcon = document.querySelector('.change-display i');
const themeName = document.querySelector('.change-display h5');



collapse.addEventListener("click", () => {
  if (container.classList.contains("collapses")) {
    container.classList.remove("collapses");
    collapseToggle.setAttribute('class', 'bx bx-chevron-left');
  } else {
    container.classList.add("collapses");
    collapseToggle.setAttribute('class', 'bx bx-chevron-right');
  }
});



// CHNAGE THE THEME DARK
let themeLight = true;
themeToggle.addEventListener('click', ()=>{
  if(themeLight){
    themeToggle.style.marginLeft = '0.9rem';
    root.style.setProperty('--white-color', 'hsl(240, 4%, 25%)');
    themeIcon.setAttribute('class', 'bx bx-sun');
    themeName.innerHTML = "Dark Mode";
    themeLight = false;
  } else if(!themeLight){
    themeToggle.style.marginLeft = '0rem';
    window.location.reload();
    themeName.innerHTML = "Light Mode";
    themeLight = true;
  }
})