/***************************************************************************
 * Helper Function - safe waiting function for DOM elements to load
 *
 * If a global waitForElmLoad already exists on the page we use it. Otherwise we
 * provide a small fallback that resolves when the selector appears
 * in the DOM (or after a short timeout).
 *
 * Returns a Promise that resolves with the found element (first match).
 ***************************************************************************/
var waitForElmLoad = window.waitForElmLoad || function (selector) {
	return new Promise(function (resolve) {
		var el = document.querySelector(selector);
		if (el) {
			resolve(el);
			return;  
		}
		var observer = new MutationObserver(function (mutations, obs) {
			var found = document.querySelector(selector);
			if (found) {
				obs.disconnect();
				resolve(found);
			}
		});
		observer.observe(document.documentElement, { childList: true, subtree: true });

		// Safety fallback: resolve after 10s if element never appears (prevents hanging)
		setTimeout(function () {
			observer.disconnect();
			resolve(false);
		}, 10000);
	});
};