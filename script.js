//your JS code here. If required.
document.addEventListener("DOMContentLoaded", function () {

const output = document.getElementById("output");
const btn = document.getElementById("download-images-button");

const images = [
  { url: "https://picsum.photos/id/237/200/300" },
  { url: "https://picsum.photos/id/238/200/300" },
  { url: "https://picsum.photos/id/239/200/300" },
];
  btn.addEventListener("click", downloadImages);

  function downloadImages() {
    const promises = images.map((image) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = image.url;
        img.onload = () => resolve(img);
        img.onerror = () => reject(`Failed to load image's URL: ${image.url}`);
      });
    });

    Promise.all(promises)
      .then((loadedImages) => {
        output.innerHTML = "";
        loadedImages.forEach((img) => output.appendChild(img));
      })
      .catch((error) => console.error(error));
  }
});

