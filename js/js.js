document.addEventListener("DOMContentLoaded", function () {
    const menuButton = document.querySelector(".menubutton");
    const sideMenu = document.getElementById("sidemenu");
    const overlay = document.getElementById("overlay");


    menuButton.addEventListener("click", function () {
        sideMenu.classList.add("open");
        overlay.classList.add("active");
    });

    overlay.addEventListener("click", function () {
        sideMenu.classList.remove("open");
        overlay.classList.remove("active");
    });

    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") {
            sideMenu.classList.remove("open");
            overlay.classList.remove("active");
        }
    });

});

