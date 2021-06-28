(function() {
    let onpageLoad = localStorage.getItem("dyslexic") || "";
    let element = document.body;
    element.classList.add(onpageLoad);
})();

    function toggleDyslexicFont() {
        let element = document.body;
        element.classList.toggle("dyslexic");

        let dyslexic = localStorage.getItem("dyslexic");
        if (dyslexic && dyslexic === "dyslexic") {
            localStorage.setItem("dyslexic", "");
        } else {
            localStorage.setItem("dyslexic", "dyslexic");
        }
}