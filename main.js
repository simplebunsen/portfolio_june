const sidebarMenuButton = document.querySelector("#nav-symbol .icon");
const sidebarMenuCloseButton = document.querySelector("#nav-content .close-btn")
const sidebarMenuContent = document.querySelector("#nav-content");

const allLinks = document.querySelectorAll("#nav-content nav ul li a");


sidebarMenuButton.addEventListener("click", ()=>{
  sidebarMenuContent.classList.add("unfold");
  document.body.style.overflow="hidden";
});
sidebarMenuCloseButton.addEventListener("click", ()=>{
  closeMenu();
})

allLinks.forEach( link => {
  link.addEventListener("click", ()=>{
    closeMenu();
  })
})

function closeMenu(){
  sidebarMenuContent.classList.remove("unfold");
  document.body.style.overflow="auto";
}