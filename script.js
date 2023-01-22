const imageContainer= document.getElementById('image-container');
const loader = document.getElementById('loader')

let photosArray = [];

//UnSplash API
const count = 10;
const apiKey = '6qMW1FsYy-lunN35Ky9nJAhS2U-uYAXZ_FI_cR1Y16c';
const apiURL = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

//Helper Function
function setAttributes(element,attributes){
    for (const key in attributes){
        element.setAttribute(key,attributes[key]);
    }
}
//Create Elements for Links and Photos, Add to DOM
function displayPhotos() {
    photosArray.forEach((photo) => {
        //Create <a> to link to Unsplash
        const item = document.createElement('a');
        setAttributes(item, {
            href: photo.links.html,
            target: '_blank',
        });
        // Create <img> for photo
        const img = document.createElement('img');
        setAttributes(img, {
            src: photo.urls.regular,
            alt: photo.alt_description,
            title: photo.alt_description,
        });
        item.appendChild(img);
        imageContainer.appendChild(item);
    });
}

//Get photos from Unsplash API
async function getPhotos() {
    try {
        const response = await fetch(apiURL);
        photosArray = await response.json();
        displayPhotos();
    } catch (error) {
        //Catch Error Here
    }

}
// Check to see if scrolling near bottom of page
window.addEventListener('scroll', () => {
    console.log('scrolled');
});

getPhotos();