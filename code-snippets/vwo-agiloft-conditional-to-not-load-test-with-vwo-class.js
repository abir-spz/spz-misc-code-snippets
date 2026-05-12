// remove the set timeout if specific test is also loaded, then do not load this test (for soft launch - remove later)
setTimeout(() => {
	if (!document.head.classList.contains('vwo_loaded_79')) {
		if (document.readyState === 'interactive' || document.readyState === 'complete') {
			waitForElm('main').then(() => {
				load1001();
			});
		} else {
			document.addEventListener('DOMContentLoaded', load1001);
		}
	}
}, 300);
// end set timeout