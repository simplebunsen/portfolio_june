const sidebarMenuButton = document.querySelector("#nav-symbol .icon");
const sidebarMenuCloseButton = document.querySelector("#nav-content .close-btn")
const sidebarMenuContent = document.querySelector("#nav-content");


sidebarMenuButton.addEventListener("click", ()=>{
  sidebarMenuContent.classList.add("unfold");
  document.body.style.overflow="hidden";
});
sidebarMenuCloseButton.addEventListener("click", ()=>{
  sidebarMenuContent.classList.remove("unfold");
  document.body.style.overflow="auto";
})