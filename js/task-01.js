const categoriesListRef = document.getElementById("categories");
const categoriesItemsRef = categoriesListRef.querySelectorAll(".item");

console.log(`в списке  ${categoriesItemsRef.length} категории`);

categoriesItemsRef.forEach((category) => {
  const categoryName = category.querySelector("h2").textContent;
  const categoryElements = category.querySelectorAll("li").length;

  console.log(
    `категория ${categoryName} : количество элементов ${categoryElements}`
  );
});
