modalButton.onclick = function () {
	if (header.className === "header base active_1" && hamburgerMain) {
		hamburgerMain.classList.toggle("is-active");
	}
	modalOverlay.style.display = "block";
	modalOverlay.style.zIndex = "800";
	setTimeout(function () {
		modalOverlay.classList.toggle("active");
		hideHeader();
		bodyCard.style.position = "fixed";
		modalOverlay.scrollTop = 0;
		modalWrap.scrollTop = 0;
		modalWrap.scrollLeft = 0;
	}, 300);
	setTimeout(function () {
		materialIcons.classList.toggle("active");
	}, 550);
};

materialIcons.onclick = function () {
	modalOverlay.classList.toggle("active");
	bodyCard.style.position = null;
	setTimeout(function () {
		modalOverlay.style.display = null;
		modalOverlay.style.zIndex = null;
	}, 1000);
	setTimeout(function () {
		materialIcons.classList.toggle("active");
	}, 100);
};