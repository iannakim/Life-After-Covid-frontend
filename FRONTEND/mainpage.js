// render main logo here


const initialPage = document.querySelector("#screen1")
let navBar = document.querySelector('div#nav-bar-items')

navBar.addEventListener('click', (event) => {
    initialPage.innerHTML = ""
    initialPage.className = "hide";

    // const mainPage = document.querySelector("div.main-container")

    // let mainBannerDiv = document.createElement('img')
    // mainBannerDiv.className = "banner"
    // mainBannerDiv.alt = "welcome to first-aid box"
    // mainBannerDiv.src = "/Users/anna/Flatiron/Project/Mod3_Project_Js/FRONTEND/image/main_banner.png"
    // mainPage.append(mainBannerDiv)

})



