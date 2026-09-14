document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener('click', () => {
    const id = link.getAttribute('href');
    if (id && id.length > 1) history.replaceState(null, '', id);
  });
});

const lightbox = document.querySelector('#image-lightbox');
const lightboxImage = lightbox?.querySelector('img');
const lightboxTitle = lightbox?.querySelector('#lightbox-title');
const lightboxClose = lightbox?.querySelector('.lightbox-close');

document.querySelectorAll('[data-lightbox-src]').forEach((button) => {
  button.addEventListener('click', () => {
    if (!lightbox || !lightboxImage || !lightboxTitle) return;
    const title = button.dataset.lightboxTitle || '图片预览';
    lightboxImage.src = button.dataset.lightboxSrc || '';
    lightboxImage.alt = title;
    lightboxTitle.textContent = title;
    lightbox.showModal();
    lightboxClose?.focus();
  });
});

lightboxClose?.addEventListener('click', () => lightbox?.close());
lightbox?.addEventListener('click', (event) => {
  if (event.target === lightbox) lightbox.close();
});
