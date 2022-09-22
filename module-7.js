import { galleryItems } from './gallery-items.js';

const gallery = document.querySelector('.gallery');

function createGalleryTemplate(picturesList) {
    return picturesList
        .map(({ preview, original, description }) => {
            return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>
        `;
        })
        .join('');
}

const galleryTemplate = createGalleryTemplate(galleryItems);

gallery.insertAdjacentHTML('afterbegin', galleryTemplate);
gallery.addEventListener('click', handleClick);

let currentModal = null;
let currentIndex = null;

function handleClick(e) {
    if (e.target === e.currentTarget) {
        return;
    }

    e.preventDefault();

    const modal = basicLightbox.create(
        `
    <img src="${e.target.dataset.source}" width="800" height="600">
`,
        {
            onShow: () => window.addEventListener('keydown', onKeyDown),
            onClose: () => window.removeEventListener('keydown', onKeyDown),
        }
    );

    currentModal = modal;
    modal.show();

    currentIndex = findElement(e.target.getAttribute('src'));
}

function createModal(index) {
    const source = galleryItems[index].original;
    const modal = basicLightbox.create(
        `
    <img src="${source}" width="800" height="600">
`,
        {
            onShow: () => window.addEventListener('keydown', onKeyDown),

            onClose: () => window.removeEventListener('keydown', onKeyDown),
        }
    );
    if (currentModal) {
        currentModal.close();
    }

    currentModal = modal;
    currentIndex = index;
    modal.show();
}

function findElement(source) {
    return galleryItems.findIndex((el) => el.preview === source);
}

function toNextIndex() {
    if (currentIndex === galleryItems.length - 1) {
        return 0;
    }

    return ++currentIndex;
}

function toPrevIndex() {
    if (currentIndex === 0) {
        return galleryItems.length - 1;
    }

    return --currentIndex;
}

function onKeyDown(e) {
    if (e.code === 'Escape') {
        currentTarget.close();
    }

    if (e.code === 'ArrowRight') {
        createModal(toNextIndex());
    }

    if (e.code === 'ArrowLeft') {
        createModal(toPrevIndex());
    }
}

// function escapeClose(e) {
//     console.log(e.code);

// }

// const gallery = document.querySelector('.gallery');

// const markup = galleryItems.map(
//     ({
//         original,
//         description,
//         preview,
//     }) => `<div class="gallery__item" href="${original}">
// <img class="gallery__image" src="${preview}" alt="${description}" />
// </div>`
// ).join('');

// gallery.insertAdjacentHTML('afterbegin', markup);
