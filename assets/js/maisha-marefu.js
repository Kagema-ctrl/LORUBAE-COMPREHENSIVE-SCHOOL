// Maisha Marefu page: CSP-safe enhancements (no inline handlers)

// Google Analytics bootstrap (external script required for CSP)
window.dataLayer = window.dataLayer || [];

function gtag() {
  window.dataLayer.push(arguments);
}

gtag('js', new Date());
gtag('config', '[GA_MEASUREMENT_ID]', { anonymize_ip: true });

