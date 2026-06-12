const darkModeBtn = document.getElementById("darkModeBtn");
const orderBtns = document.querySelectorAll(".orderBtn");
const orderCount = document.getElementById("orderCount");

let count = 0;

darkModeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");

    if(document.body.classList.contains("dark-mode")){
        darkModeBtn.textContent = "☀️ Light Mode";
    }else{
        darkModeBtn.textContent = "🌙 Dark Mode";
    }

});

orderBtns.forEach(button => {

    button.addEventListener("click", () => {

        count++;

        orderCount.textContent = count;

        alert("Order Added Successfully!");

    });

});