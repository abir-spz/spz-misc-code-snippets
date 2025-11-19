// video autoplay on hover logic (with wait for element)
waitForElm('.some-card-selector').then((card) => {
	// select all anchor elements inside the cards
	const cards = document.querySelectorAll('.spz_1012_v .spz-thank-you__card.has-video');

	// loop through each card
	cards.forEach(card => {
		// get the video element inside the current card
		const video = card.querySelector('video');

		// if no video found, skip this card
		if (!video) return;

		// when the mouse enters (hover starts)
		card.addEventListener('mouseenter', () => {
			// reset video to start (time 0)
			video.currentTime = 0;

			// start playing the video
			video.play().catch(err => {
				// some browsers block autoplay without user interaction
				console.warn('Autoplay prevented:', err);
			});
		});

		// when the mouse leaves (hover ends)
		card.addEventListener('mouseleave', () => {
			// pause the video
			video.pause();

			// reset video back to start position
			video.currentTime = 0;
		});
	});
});