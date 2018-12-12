/* -----------------------------
Conditions for Responsive drop down appendixes
------------------------------- */
MenuElements.prototype.app = function () {
	function responsiveCirclePosition(targetCircle) {
		if (window.innerWidth < 769) {
			buttonsClass.insertBefore(targetCircle, buttonsClass.firstChild);
		}
	}

	function responsiveCirclePositionRef(targetCircle, beforeEl) {
		if (window.innerWidth < 769) {
			buttonsClass.insertBefore(targetCircle, beforeEl);
		}
	}

	function responsiveCirclePositionLast(targetCircle) {
		if (window.innerWidth < 769) {
			buttonsClass.appendChild(targetCircle);
		}
	}

	function circlePaddingNone() {
		if (window.innerWidth < 769) {
			buttonsFirst[0].style.paddingBottom = "0";
		}
	}

	function circlePaddingDone() {
		if (window.innerWidth < 769) {
			buttonsFirst[0].style.paddingBottom = "2em";
		}
	}
	/*--------------------Reset with Exceptions-------------------------*/
	function appendixesHide(except) {
		for (let i = 0; i < appendixes.length; i++) {
			appendixes[i].classList.remove("active");
			except.classList.add("active");
		}
	}
	function buttonsColorHide(exceptOverlay, exceptMainCircle, exceptP) {
		//  ,exceptC
		for (let i = 0; i < overlay.length; i++) {
			overlay[i].classList.remove("active");
			exceptOverlay.classList.add("active");
		}
		for (let z = 0; z < mainCircle.length; z++) {
			mainCircle[z].classList.remove("active");
			exceptMainCircle.classList.add("active");
		}
		for (let y = 0; y < p_AppButton.length; y++) {
			p_AppButton[y].classList.remove("active");
			exceptP.classList.add("active");
		}
	}
	/*--------------------Conditions-------------------------*/
	if (this.appendix.className === "appendixes active") {
		this.appendix.classList.toggle("active");
		this.targetM.classList.toggle("active");
		this.targetL.classList.toggle("active");
		this.targetP.classList.toggle("active");
		//      spinning.classList.toggle('active');

		// if (bodyCardMobile) {
		// 	bodyCardMobile.classList.remove("active");
		// }

		header.classList.remove("active_2");
		buttonAllClose.classList.remove("active");
		bodyCard.style.position = null;
		bodyCard.style["overflow-y"] = "auto";
		arrowLine.style.opacity = "1";
		circlePaddingNone();
		circlePositionerTitle.classList.remove("active");
		responsiveCirclePositionRef(this.circle, this.beforeEl);
		if (this.circle === buttons[6]) {
			responsiveCirclePositionLast(this.circle);
		}
	} else {
		this.appendix.scrollTop = 0;
		for (let i = 0; i < gridPad.length; i++) {
			gridPad[i].scrollTop = 0;
		}
		responsiveCirclePosition(this.circle, this.beforeEl);
		header.classList.add("active_2");
		bodyCard.style.position = "fixed";
		bodyCard.scrollTop = 0;
		bodyCard.style["overflow-y"] = "hidden";
		bodyCard.scrollTop = 0;
		// if (bodyCardMobile) {
		// 	bodyCardMobile.classList.add("active");
		// 	bodyCard.style["overflow-y"] = "hidden"
		// 	document.querySelector(".mobile").style.overflow = "hidden"
		// 	bodyCardMobile.scrollTop = 0;
		// }
		unitTableDiv.classList.remove("active");
		appendixesHide(this.appendix);
		buttonsColorHide(this.targetM, this.targetL, this.targetP); // spinning
		buttonAllClose.classList.add("active");
		circlePaddingDone();
		circlePositionerTitle.classList.add("active");
		arrowLine.style.opacity = "0";
	}
	/*--------------------Reset button-------------------------*/
	const circle = this.circle;
	const beforeEl = this.beforeEl;
	buttonAllClose.onclick = function () {
		circlePaddingNone();
		responsiveCirclePositionRef(circle, beforeEl);
		if (this.circle === buttons[6]) {
			responsiveCirclePositionLast(this.circle);
		}
		appendixesHideAll();
		buttonsColorDefault();
		hideHeader();
		//      if (window.innerWidth > 768) {
		circlePositionerTitle.classList.remove("active");
		//      }
		bodyCard.style.position = null;
		buttonAllClose.classList.remove("active");
		bodyCard.style["overflow-y"] = "auto";
		// if (bodyCardMobile) {
		// 	bodyCardMobile.classList.remove("active");
		// }
	};
};