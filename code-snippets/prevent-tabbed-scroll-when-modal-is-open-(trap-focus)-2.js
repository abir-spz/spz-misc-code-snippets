// This code is taken from Candela 1007 as reference

function trapFocus(element) {
		var focusableEls = element.querySelectorAll('a[href], button, textarea, input:not([type="hidden"]), select, [tabindex]:not([tabindex="-1"])');
		var firstFocusableEl = focusableEls[0];
		var lastFocusableEl = focusableEls[focusableEls.length - 1];
		var KEYCODE_TAB = 9;

		element.addEventListener('keydown', function (e) {
			var isTabPressed = e.key === 'Tab' || e.keyCode === KEYCODE_TAB;
			if (!isTabPressed) return;

			// NEW: Handle cases where the popup container itself is the active element
			if (document.activeElement === element) {
				if (e.shiftKey) {
					lastFocusableEl.focus();
				} else {
					firstFocusableEl.focus();
				}
				e.preventDefault();
				return;
			}

			if (e.shiftKey) {
				/* shift + tab */
				if (document.activeElement === firstFocusableEl) {
					lastFocusableEl.focus();
					e.preventDefault();
				}
			} else {
				/* tab */
				if (document.activeElement === lastFocusableEl) {
					firstFocusableEl.focus();
					e.preventDefault();
				}
			}
		});

		// NEW: Make the container focusable via JS only
		element.setAttribute('tabindex', '-1');

		// Optional: Remove outline so the container doesn't show a focus ring
		element.style.outline = 'none';

		// Focus the container instead of the first element
		element.focus();
	}