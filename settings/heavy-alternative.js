(function() {
    let onpageLoad = localStorage.getItem("heavy-alternative") || "";
    let element = document.body;
    element.classList.add(onpageLoad);
})();

    function toggleHeavyAlternative() {
        let element = document.body;
        element.classList.toggle("heavy-alternative");

        let heavy = localStorage.getItem("heavy-alternative");
        if (heavy && heavy === "heavy-alternative") {
            localStorage.setItem("heavy-alternative", "");
        } else {
            localStorage.setItem("heavy-alternative", "heavy-alternative");
        }
}