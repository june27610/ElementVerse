let activeButton = null;

function filterElements(group, btn) {
    if (activeButton) activeButton.classList.remove("active");

    btn.classList.add("active");

    activeButton = btn;

    const all = document.querySelectorAll("td");

    all.forEach(cell => {

        if (cell.classList.contains("empty")) {
            cell.classList.remove("fade"); 
            return; 
        }

        if (cell.classList.contains(group)) {
            cell.classList.remove("fade");
        } 
        else {
            cell.classList.add("fade");
        }
    });
}
