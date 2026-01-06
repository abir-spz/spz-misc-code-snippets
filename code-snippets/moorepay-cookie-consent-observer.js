// Function to initialize the observer
function observeCookieConsent() {
  const target = document.querySelector('.cky-consent-container.cky-popup-center');
  
  if (!target) {
    console.warn('Target element not found');
    return;
  }

  // Check immediately if the element already has the class
  if (target.classList.contains('cky-hide')) {
    console.log('Cookie consent hidden');
    return;
  }

  // Create the observer
  const observer = new MutationObserver((mutationsList) => {
    for (const mutation of mutationsList) {
      if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
        if (target.classList.contains('cky-hide')) {
          console.log('Cookie consent hidden');
          observer.disconnect();
          break;
        }
      }
    }
  });

  // Start observing the target element for attribute changes
  observer.observe(target, { attributes: true });
}

// Run the observer setup
observeCookieConsent();
