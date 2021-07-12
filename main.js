const sidebarMenuButton = document.querySelector("#nav-symbol .icon");
const sidebarMenuCloseButton = document.querySelector("#nav-content .close-btn")
const sidebarMenuContent = document.querySelector("#nav-content");


sidebarMenuButton.addEventListener("click", ()=>{
  sidebarMenuContent.classList.add("unfold");
});
sidebarMenuCloseButton.addEventListener("click", ()=>{
  sidebarMenuContent.classList.remove("unfold");
})