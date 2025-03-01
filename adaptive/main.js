let closeMenu = true

let burger = document.getElementById('burger')
let navigation = document.getElementById('navigation')

function openMenu(){
    if (closeMenu == true){
        navigation.style.right = '-100%'
    }
    else{
        navigation.style.right = '0'
    }
    closeMenu = !closeMenu
}

burger.addEventListener("click",openMenu)