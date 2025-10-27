// Keep track of which legend button is currently active
let activeButton = null;

// 'group' is the class of elements to show (e.g., "alkali")
// 'btn' is the button element that was clicked
function filterElements(group, btn) {
    
    // If there is a previously active button, remove its "active" highlight
    if (activeButton) activeButton.classList.remove("active");

    // Highlight the clicked button as active
    btn.classList.add("active");

    // Update the activeButton variable to the newly clicked button
    activeButton = btn;

    // Select all table cells 
    const all = document.querySelectorAll("td");

    // Loop through each cell to apply fade effect
    all.forEach(cell => {

        // If the cell is empty (a placeholder in the table), leave it normal
        if (cell.classList.contains("empty")) {
            cell.classList.remove("fade"); // ensure it is not faded
            return; // skip the rest of this iteration
        }

        // If the cell belongs to the selected group, show it fully
        if (cell.classList.contains(group)) {
            cell.classList.remove("fade");
        } 
        // Otherwise, fade the cell
        else {
            cell.classList.add("fade");
        }
    });
}