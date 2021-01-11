const imageContainer = document.querySelectorAll(".product-image-container");
const popup = document.querySelector(".popup");
const popupClose = document.querySelector(".popup-close");
let counterUpdate = document.querySelector(".number");
let positive = document.querySelector(".positive"), positiveCount = 1;
let negative = document.querySelector(".negative");
const like = document.querySelector(".favourite");
const unlike = document.querySelector(".heart");
const favouriteBtn = document.querySelector(".favourite-btn");
const favIcon = document.querySelector(".fav-icon");


//Popup
imageContainer.forEach((e) => {
    e.addEventListener('click', () => {
        popup.classList.add("popup-open");
    })
});

popupClose.addEventListener("click", () => {
    popup.classList.remove("popup-open");
});

//Popup favourite icon

like.addEventListener("click", () => {
    like.classList.toggle("liked");
    unlike.classList.toggle("change");
});


//Counter
positive.addEventListener("click", () => {
    positiveCount += 1;
    counterUpdate.innerHTML = positiveCount;
});

negative.addEventListener("click", () => {
    negativeCount = positiveCount;
    positiveCount -= 1;
    counterUpdate.innerHTML = negativeCount;
});

//Favourite icon

// favouriteBtn.forEach((e) => {
//     e.addEventListener('click', () => {
//         favIcon.classList.add("liked");
//     })
// });

favouriteBtn.addEventListener("click", () => {
    favIcon.classList.add("liked");
});



