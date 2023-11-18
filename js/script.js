//Images 


const filterItem = document.querySelector(".items");
const filterImg = document.querySelectorAll(".img");

window.onload = ()=> { 

    filterItem.onclick = (selectedItem)=>{
        if(selectedItem.target.classList.contains("item")){
            filterItem.querySelector(".active").classList.remove("active");
            selectedItem.target.classList.add("active");
            let filterName = selectedItem.target.getAttribute("data-name");
            filterImg.forEach((image)=>{
                let filterImg = image.getAttribute("data-name");
                if((filterImg == filterName) || filterName == "all"){
                    image.classList.add("show");
                }else{
                    image.classList.add("hide");
                    image.classList.remove("show");
                }
            });

        }
    }
}


//Navbar

let openHam = document.querySelector('#open');
let closeHam = document.querySelector('#close');
let navigationItems = document.querySelector('nav');

const hamburgerEvent = (navigation, close, open) => {
    navigationItems.style.display = navigation;
    closeHam.style.display = close;
    openHam.style.display = open;
};

openHam.addEventListener('click', () => hamburgerEvent("flex", "block", "none"));
closeHam.addEventListener('click', () => hamburgerEvent("none", "none", "block"));