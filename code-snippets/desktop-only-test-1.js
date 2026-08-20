//=========================== METHOD 1
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

// Rest of A/B test code




//=========================== METHOD 2
// This following code is for desktop only test
const desktopQuery = window.matchMedia('(min-width: 1025px)');

if (!desktopQuery.matches) {
	return;
}

function handleViewportChange(event) {
	if (event.matches) {
		window.location.reload();
	} 
	else {
		window.location.reload();
	}
}

desktopQuery.addEventListener('change', handleViewportChange);

// Rest of A/B test code