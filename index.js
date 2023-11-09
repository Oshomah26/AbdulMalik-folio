const global = {
    currentPage: window.location.pathname
}

alert("Bing!")

document.querySelectorAll("carousel").forEach(carousel => {
    const items = carousel.querySelectorAll(".carousel_item");
    const buttonsHtml = Array.from(items, () => {
        return `<span class="carousel_button"> </span>`;
    });

    console.log(buttonsHtml);
})



//Init App 
// function init() {
//     switch (global.currentPage) {
//         case '/':

//     }
// }

// document.addEventListener('DOMContentLoaded', init);

