/* -----------------------------
Keyboard Navigation
------------------------------- */
$(window).bind('keydown', function (e) {
	const key = e.keyCode ? e.keyCode : e.which;
	switch (key) {
		case 38: // arrow up
			if (modalOverlay.style.display === "block") {
				modalOverlay.classList.toggle("active");
				bodyCard.style.position = null;
				setTimeout(function () {
					modalOverlay.style.display = null;
					modalOverlay.style.zIndex = null;
				}, 1000);
				setTimeout(function () {
					materialIcons.classList.toggle("active");
				}, 100);
			} else {
				modalButton.onclick()
			}
			break;
		case 39: // arrow right
			exampleAnswerHide.classList.toggle("active")
			break;
		case 40: // arrow down
			e.preventDefault();
			circlePositionerTitle.onclick()
			break;
		// case 8: // backspace
		// 	e.preventDefault();
		// 	buttonAllClose.onclick();
		// 	break;
	}
	if (e.ctrlKey || e.metaKey) {
		switch (String.fromCharCode(e.which).toLowerCase()) {
			case '1':
				e.preventDefault();
				button_1.circle.onclick();
				break;
			case '2':
				e.preventDefault();
				button_2.circle.onclick();
				break;
			case '3':
				e.preventDefault();
				button_3.circle.onclick();
				break;
			case '4':
				e.preventDefault();
				button_4.circle.onclick();
				break;
			case '5':
				e.preventDefault();
				button_5.circle.onclick();
				break;
			case '6':
				e.preventDefault();
				button_6.circle.onclick();
				break;
			case '7':
				e.preventDefault();
				button_7.circle.onclick();
				break;
		}
	}
});
