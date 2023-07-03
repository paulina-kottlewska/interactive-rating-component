const submit = document.getElementById("submit");
const container1 = document.getElementById("container1");
const container2 = document.getElementById("container2");
const ratingBtns = document.querySelectorAll(".rating");
const submittedRating = document.getElementById("submitted-rating");

// Initialize a variable to store the selected rating.
// When a rating button is clicked, the inner text of the button (the rating) is stored in selectedRating.
let selectedRating = "";

ratingBtns.forEach(ratingBtn => ratingBtn.addEventListener("click", () => {
    selectedRating = ratingBtn.innerText;
}))

// When the submit button is clicked, it checks if a rating was selected. If not, an alert is shown.
// If a rating was selected, the first container is hidden, the second container is shown, 
// and the selected rating is displayed in the 'submitted-rating' element.
submit.addEventListener("click", (e) => {
    e.preventDefault();

    if(selectedRating === "") {
        alert("Please select one of the ratings");
    }
    else {
        container1.style.display = "none";
        container2.style.display = "block";
        submittedRating.innerText = selectedRating;
    }
})