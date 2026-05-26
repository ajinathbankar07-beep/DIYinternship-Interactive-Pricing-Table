const buttons = document.querySelectorAll(".plan-btn");

buttons.forEach(button => {

    button.addEventListener("click", () => {

        alert("Plan Selected Successfully!");

    });

});

console.log("Pricing Table Project Loaded Successfully");