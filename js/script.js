const menutoggle = document.getElementById('menutoggle');
const MenuItems = document.getElementById("MenuItems");

const menutoggle = document.addEventListener('click');

MenuItems.style.maxHeight= "0px";

function menutoggle(){
    if(MenuItems.style.maxHeight == "0px"){
        MenuItems.style.maxHeight = "200px";
    } else {
        MenuItems.style.maxHeight = "0px";
    }
}