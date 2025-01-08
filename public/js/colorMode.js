document.addEventListener("DOMContentLoaded", function() {
    const darkModeToggle = document.getElementById("darkModeToggleOne");
    const body = document.body;

    function toggleDarkMode() {
        body.classList.toggle("dark-mode");
        const isDarkMode = body.classList.contains("dark-mode");
        localStorage.setItem("darkMode", isDarkMode);

        let link = document.getElementById("darkModeStylesheet");
        if (link.href.includes("dark")) {
            link.href = link.href.replace("style-dark", "style-light");
            darkModeToggle.innerText = "Light"
        } else if (link.href.includes("light")) {
            link.href = link.href.replace("style-light", "style-dark");
            darkModeToggle.innerText = "Dark"
        } else {
            throw new Error("Unknown stylesheet", link.href);
        }
    }

    const savedDarkMode = localStorage.getItem("darkMode") === "true";
    if (savedDarkMode) {
        toggleDarkMode();
    }
    darkModeToggle.addEventListener("click", toggleDarkMode);
    //darkModeToggleTwo.addEventListener("click", toggleDarkMode);
});