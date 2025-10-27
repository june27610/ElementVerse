function search_element() {
  let search_item = document.getElementById("searchID").value.toLowerCase().trim();
  let cards = document.getElementsByClassName("info-card");

  for (let i = 0; i < cards.length; i++) {
    if (cards[i].innerHTML.toLowerCase().includes(search_item)) {
      cards[i].style.display = "block";
    } else {
      cards[i].style.display = "none";
    }
  }
}