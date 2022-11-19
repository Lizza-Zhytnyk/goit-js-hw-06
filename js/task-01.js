const allCategories = document.querySelectorAll(".item")
console.log("Number of categories:", allCategories.length)

allCategories.forEach(catFunction)

function catFunction(category) {
    const categoryNameEl = category.firstElementChild;
    console.log("Category:", categoryNameEl.textContent);
    const categoryNumberEl = categoryNameEl.nextElementSibling;
    console.log("Elements:", categoryNumberEl.childElementCount);
}