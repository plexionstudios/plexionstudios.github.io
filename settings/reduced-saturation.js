(function() {
    let onpageLoad = localStorage.getItem("reduced-saturation") || "";
    let element = document.body;
    element.classList.add(onpageLoad);
})();

    function toggleReducedSaturation() {
        let element = document.body;
        element.classList.toggle("reduced-saturation");

        let reducedsaturation = localStorage.getItem("reduced-saturation");
        if (reducedsaturation && reducedsaturation === "reduced-saturation") {
            localStorage.setItem("reduced-saturation", "");
        } else {
            localStorage.setItem("reduced-saturation", "reduced-saturation");
        }
}