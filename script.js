var themeSwitch = document.getElementById("switch-theme");
var bannerBlob = document.querySelector(".banner-blob");

themeSwitch.onclick = function(){
 document.body.classList.toggle("dark-theme-colors")
    if(document.body.classList.contains("dark-theme-colors")){
        themeSwitch.classList.remove("bx-moon");
        themeSwitch.classList.add("bx-sun");
        bannerBlob.setAttribute("style","display: none;");
    }
    else{
        themeSwitch.classList.remove("bx-sun");
        themeSwitch.classList.add("bx-moon");
        bannerBlob.setAttribute("style","display: initial;");

        // localStorage.clear();
    }
} 