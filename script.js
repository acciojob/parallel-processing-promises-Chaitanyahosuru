//your JS code here. If required.
const imageUrls = [
    'https://via.placeholder.com/150/92c952',
    'https://via.placeholder.com/150/771796',
    'https://via.placeholder.com/150/24f355',
    'https://via.placeholder.com/150/d32776',
    'https://via.placeholder.com/150/f66b20'
];

document.getElementById('download-images-button').addEventListener('click', downloadImages);

function downloadImages() {
    const promises = imageUrls.map(url => fetchImage(url));

    Promise.all(promises)
        .then(images => {
            displayImages(images);
        })
        .catch(error => {
            console.error(error);
        });
}

function fetchImage(url) {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = url;

        img.onload = () => resolve(img);
        img.onerror = () => reject(`Failed to load image's URL: ${url}`);
    });
}

function displayImages(images) {
    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = ''; // Clear any previous images

    images.forEach(img => {
        outputDiv.appendChild(img);
    });
}
