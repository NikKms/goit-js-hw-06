const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const galleryListRef = document.querySelector(".gallery");
galleryListRef.style.display = "flex";
galleryListRef.style.flexWrap = "wrap";
galleryListRef.style.gap = "20px";
galleryListRef.style.alignItems = "center";
galleryListRef.style.listStyle = "none";

const galleryItem = (arr) =>
  arr.map(
    ({ url, alt }) => `<li><img src="${url}" alt="${alt}" width="300"/></li>`
  );

function makeGalleryList(ref, arr) {
  ref.insertAdjacentHTML("beforeend", galleryItem(arr));
}

makeGalleryList(galleryListRef, images);
