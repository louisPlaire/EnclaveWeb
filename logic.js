let homeBtn = document.getElementById("retour")




window.onscroll = function(ev) {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        homeBtn.style.opacity = "1";
    }else{
        homeBtn.style.opacity = "0";
    }
};