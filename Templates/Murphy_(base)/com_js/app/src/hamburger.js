// if (hamburgers.length > 0) {
// 	hamburgers.forEach(hamburger => {
// 		hamburger.addEventListener("click", function () {
// 			this.classList.toggle("is-active");
// 		}, false);
// 		buttonAllClose.addEventListener("click", function () {
// 			hamburger.classList.toggle("is-active");
// 		}, false);
// 		circlePositionerTitle.addEventListener("click", function () {
// 			hamburger.classList.toggle("is-active");
// 		}, false);
// 	});
// }
const forEach = function (t, o, r) {if ("[object Object]" === Object.prototype.toString.call(t)) for (const c in t) Object.prototype.hasOwnProperty.call(t, c) && o.call(r, t[c], c, t); else for (let e = 0, l = t.length; l > e; e++)o.call(r, t[e], e, t)};

if (hamburgers.length > 0) {
	forEach(hamburgers, function (hamburger) {
		hamburger.addEventListener("click", function () {
			this.classList.toggle("is-active");
		}, false);
		buttonAllClose.addEventListener("click", function () {
			hamburger.classList.toggle("is-active");
		}, false);
		circlePositionerTitle.addEventListener("click", function () {
			hamburger.classList.toggle("is-active");
		}, false);
	});
}

buttonGambur.onclick = function () {
	if (header.style.maxHeight === "500px") {
		hideHeader();
		bodyCard.style.position = null;
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
		circlePositionerTitle.classList.remove("active");
		//    bodyCard.style.position = 'fixed';
	}
};