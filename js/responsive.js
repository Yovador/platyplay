if (window.visualViewport.height > window.visualViewport.width) {
    let desktops = document.querySelectorAll(".desktop")
    desktops.forEach(div => {
        div.setAttribute("hidden", "hidden")
    });
    let mobiles = document.querySelectorAll(".mobile")
    mobiles.forEach(div => {
        div.removeAttribute("hidden");
    });
}