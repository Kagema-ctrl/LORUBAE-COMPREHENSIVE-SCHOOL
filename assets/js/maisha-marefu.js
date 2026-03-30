// Maisha Marefu page: CSP-safe enhancements (no inline handlers)

// Google Analytics bootstrap (external script required for CSP)
window.dataLayer = window.dataLayer || [];

function gtag() {
  window.dataLayer.push(arguments);
}

gtag('js', new Date());
gtag('config', '[GA_MEASUREMENT_ID]', { anonymize_ip: true });

function hideIfMissing(img) {
  if (!(img instanceof HTMLImageElement)) return;

  img.addEventListener(
    'error',
    () => {
      img.style.display = 'none';
      const parent = img.parentElement;
      if (parent && parent.classList.contains('mm-team-photo-container')) {
        parent.classList.add('img-missing');
      }
    },
    { once: true }
  );
}

document.addEventListener('DOMContentLoaded', () => {
  hideIfMissing(document.querySelector('.mm-hero img'));
  hideIfMissing(document.querySelector('.mm-team-photo-container img'));
});

