/* -----------------------------
Prepend to this file:

variablels.js
menu.js
launch.js
modal-window.js
humburger.js
fields.js
------------------------------- */

/* -----------------------------
Hide example question
------------------------------- */
if (el) {
	el.onclick = function (event) {
		if (
			event.target.textContent !== "" &&
			event.target.textContent !== "Replay"
		) {
			exampleAnswerHide.classList.toggle("active");
			// console.log(event.target);
		}
	};
}
const audioInModalW = document.querySelector(".sound_front");
audioInModalW.innerHTML = audioInModalW.innerHTML.replace(
	/\<\/div([^<]*)\>/gm,
	""
);
audioInModalW.innerHTML = audioInModalW.innerHTML.replace(
	/\<div([^<]*)\>/gm,
	"<br /><br />"
);

/* -----------------------------
Common Reset to Default
------------------------------- */
bodyCard.style.position = null;
function appendixesHideAll() {
	for (let i = 0; i < appendixes.length; i++) {
		appendixes[i].classList.remove("active");
	}
}
function buttonsColorDefault() {
	for (let i = 0; i < overlay.length; i++) {
		overlay[i].classList.remove("active");
	}
	for (let z = 0; z < mainCircle.length; z++) {
		mainCircle[z].classList.remove("active");
	}
	for (let y = 0; y < p_AppButton.length; y++) {
		p_AppButton[y].classList.remove("active");
	}
	//  for (let f = 0; f < spinningContainer.length; f++) {
	//    spinningContainer[f].classList.remove('active');
	//  }
}

/* -----------------------------
Hide Header
------------------------------- */
function hideHeader() {
	header.classList.remove("active_1");
	header.classList.remove("active_2");
	unitTableDiv.classList.remove("active");
	mainTable.classList.remove("active");
	overlayTitleM.classList.remove("active");
	overlayTitleL.classList.remove("active");
	arrowLine.style.opacity = "1";
	textP_Title.classList.remove("active");
}
circlePositionerTitle.onclick = function () {
	if (header.style.maxHeight === "500px") {
		buttonsColorDefault();
		hideHeader();
		textP_Title.textContent = "A";
		bodyCard.style.position = null;
		//    unitTableDiv.classList.remove('active');
	} else {
		header.classList.toggle("active_1");
		if (header.className === "header base active_1") {
			unitTableDiv.classList.toggle("active");
		} else {
			unitTableDiv.classList.remove("active");
		}
		mainTable.classList.toggle("active");
		overlayTitleM.classList.toggle("active");
		overlayTitleL.classList.toggle("active");
		textP_Title.classList.toggle("active");
		buttonAllClose.classList.remove("active");
	}
};

/* -----------------------------
show Appendix
------------------------------- */
function MenuElements(appendix, circle, beforeEl, targetM, targetL, targetP) {
	// spinning
	this.appendix = appendix;
	this.circle = circle;
	this.beforeEl = beforeEl;
	this.targetM = targetM;
	this.targetL = targetL;
	this.targetP = targetP;
} 