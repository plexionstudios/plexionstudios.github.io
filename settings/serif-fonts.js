(function() {
    let onpageLoad = localStorage.getItem("serif") || "";
    let element = document.body;
    element.classList.add(onpageLoad);
})();

    function toggleSerifFonts() {
        let element = document.body;
        element.classList.toggle("serif");

        let serif = localStorage.getItem("serif");
        if (serif && serif === "serif") {
            localStorage.setItem("serif", "");
        } else {
            localStorage.setItem("serif", "serif");
        }
}