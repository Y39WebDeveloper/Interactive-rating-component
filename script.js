const rating = document.querySelectorAll("#rating li input[type='radio']")
const btn = document.getElementById("btn")
const thankSection = document.getElementById("thankSection")
const rateSection = document.getElementById("rateSection")
const rate = document.getElementById("rate")

btn.addEventListener("click", () => {
    for(let i = 0; i < rating.length; i++){
        if (rating[i].checked) {
            rate.innerHTML = rating[i].value;
            break;
        }
    }
    rateSection.classList.remove("active");
    thankSection.classList.add("active");
})