const planSelect = document.getElementById("planSelect");
const extras = document.querySelectorAll(".extra");
const totalDisplay = document.getElementById("total");

// Function to calculate total price
function calculateTotal() {

    // Get selected plan price
    let total = Number(planSelect.value);

    // Add checked extras
    extras.forEach(extra => {
        if (extra.checked) {
            total += Number(extra.value);
        }
    });

    // Update total display
    totalDisplay.textContent = total;
}

// Event listener for plan change
planSelect.addEventListener("change", calculateTotal);

// Event listeners for extras
extras.forEach(extra => {
    extra.addEventListener("change", calculateTotal);
});

// Initial calculation
calculateTotal();