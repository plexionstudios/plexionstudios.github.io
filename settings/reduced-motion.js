(function() {
    let onpageLoad = localStorage.getItem("reduced-motion") || "";
    let element = document.body;
    element.classList.add(onpageLoad);
})();

    function toggleReducedMotion() {
        let element = document.body;
        element.classList.toggle("reduced-motion");

        let reducedmotion = localStorage.getItem("reduced-motion");
        if (reducedmotion && reducedmotion === "reduced-motion") {
            localStorage.setItem("reduced-motion", "");
        } else {
            localStorage.setItem("reduced-motion", "reduced-motion");
        }
}