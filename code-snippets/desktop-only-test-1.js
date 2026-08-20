// This following code is for desktop only test
const DESKTOP_BREAKPOINT = 1025;

function isDesktop() {
	console.log('isDesktop: ', (window.innerWidth >= DESKTOP_BREAKPOINT));
	return window.innerWidth >= DESKTOP_BREAKPOINT;
}

let wasDesktop = isDesktop();

window.addEventListener('resize', () => {
	const nowDesktop = isDesktop();

	// Reload only when crossing the desktop/mobile breakpoint
	if (nowDesktop !== wasDesktop) {
		wasDesktop = nowDesktop;
		window.location.reload();
	}
});

// Don't run the test below 1025px
if (!isDesktop()) return;