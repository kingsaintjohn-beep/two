// Dark Mode
const darkBtn = document.getElementById("darkBtn");

// Load saved theme
if (localStorage.getItem("theme") == "dark") {

    document.body.classList.add("dark");

    darkBtn.innerHTML = "🌟 Light Mode"
}

darkBtn.addEventListener("click", function() {

    document.body.classList.toggle("dark");
     
    if (document.body.classList.contains("dark")) {

        darkBtn.innerHTML = "🌟 Light Mode";

        localStorage.setItem("theme","dark");
    }else {
        
        darkBtn.innerHTML = "🌙 Dark Mode";
    }
});
