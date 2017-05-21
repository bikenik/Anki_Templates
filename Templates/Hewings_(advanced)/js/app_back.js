/* jshint browser: true */
/*jslint devel: true */
/*--------------------Hide example question-------------------------*/
var question = document.querySelector('.question');
var exampleAnswerHide = document.querySelector('.img_example');
var el = question;
if (el) {
   el.addEventListener('click', function (event) {
      if (event.target.textContent !== '') {
         exampleAnswerHide.classList.toggle('active');
         console.log(event.target);
      }
   });
}

/*--------------------variables-------------------------*/
var header = document.querySelector('.header'); 
var buttons  	  = document.getElementsByClassName('circle'),
buttonsFirst 	  = document.getElementsByClassName('circle'),
mainCircle 	 	  = document.getElementsByClassName('mainCircle'),
overlay 		 	  = document.getElementsByClassName('overlay'),

gridPad = document.getElementsByClassName('grid-pad'),
p_AppButton  	  = document.getElementsByClassName('p_app_button'),
appendixes 	 	  = document.getElementsByClassName('appendixes'),
circlePositioner = document.getElementsByClassName('circlePositioner');

var buttonsClass = document.querySelector('.buttons'),
buttonAllClose   = document.querySelector('.header-close'),
bodyCard 		  = document.querySelector('.card'),
circlePositionerTitle = document.querySelector('.circlePositioner_title_back'), 	//for back side add "_back"
arrowLine 	     = document.querySelector('.arrow_06B13_line_back'), 				//for back side add "_back"
overlayTitleM 	  = document.querySelector('#overlay_title'),
overlayTitleL 	  = document.querySelector('.mainCircle_title');

var textP_Title = document.getElementById('p_button');
var hamburger = document.querySelector('.hamburger--arrowalt');

/*--------------------Common Reset to Default-------------------------*/
var appendixesHideAll = function () {
	for (var i = 0; i < appendixes.length; i++) {
		appendixes[i].classList.remove('active');
	}
};
var buttonsColorDefault = function () {
	for (var i = 0; i < overlay.length; i++) {
		overlay[i].classList.remove('active');
	}
	for (var z = 0; z < mainCircle.length; z++) {
		mainCircle[z].classList.remove('active');
	}
	for (var y = 0; y < p_AppButton.length; y++) {
		p_AppButton[y].classList.remove('active');
	}
};
/*--------------------Hide Header-------------------------*/
var unitTableDiv = document.querySelector('.unit_table');
var mainTable = document.querySelector('.main_table');

function hideHeader() {
	header.classList.remove('active_1');
	header.classList.remove('active_2');
	unitTableDiv.classList.remove('active');
	mainTable.classList.remove('active');
	overlayTitleM.classList.remove('active');
	overlayTitleL.classList.remove('active');
	arrowLine.style.opacity = '1';
	textP_Title.classList.remove('active');
}
circlePositionerTitle.addEventListener('click', function () {
	if (header.style.maxHeight === '500px') {
		buttonsColorDefault();
		hideHeader();
		textP_Title.textContent = 'A';
		bodyCard.style.position = null;
		//		unitTableDiv.classList.remove('active');
	}
	else {
		header.classList.toggle('active_1');
		if (header.className === 'header base active_1') {
			unitTableDiv.classList.toggle('active');
		}
		else {
			unitTableDiv.classList.remove('active');
		}
		mainTable.classList.toggle('active');
		overlayTitleM.classList.toggle('active');
		overlayTitleL.classList.toggle('active');
		textP_Title.classList.toggle('active');
		buttonAllClose.classList.remove('active');
	}
});
/*--------------------show Appendix-------------------------*/
function showAppendix(appendix, circle, beforeEl, targetM, targetL, targetP, circleLayout) {
	/*--------------------Conditions for Responsive drop down appendixes-------------------------*/
	function app() {
		function circlePaddingNone() {
			buttonsFirst[0].style.paddingBottom = "0";
		}

		function circlePaddingDone() {
			buttonsFirst[0].style.paddingBottom = "2em";
		}
		/*--------------------Reset with Exceptions-------------------------*/
		var appendixesHide = function (except) {
			for (var i = 0; i < appendixes.length; i++) {
				appendixes[i].classList.remove('active');
				except.classList.add('active');
			}
		};
		var buttonsColorHide = function (exceptOverlay, exceptMainCircle, exceptP) {
			for (var i = 0; i < overlay.length; i++) {
				overlay[i].classList.remove('active');
				exceptOverlay.classList.add('active');
			}
			for (var z = 0; z < mainCircle.length; z++) {
				mainCircle[z].classList.remove('active');
				exceptMainCircle.classList.add('active');
			}
			for (var y = 0; y < p_AppButton.length; y++) {
				p_AppButton[y].classList.remove('active');
				exceptP.classList.add('active');
			}
		};
		/*--------------------Conditions-------------------------*/
		if (appendix.className === 'appendixes active') {
			appendix.classList.toggle('active');
			targetM.classList.toggle('active');
			targetL.classList.toggle('active');
			targetP.classList.toggle('active');
			header.classList.remove('active_2');
			buttonAllClose.classList.remove('active');
			bodyCard.style.position = null;
			arrowLine.style.opacity = '1';
			circlePaddingNone();
			buttonsColorDefault();
			circleLayout.style.width = null;
			circlePositionerTitle.classList.remove('active');
			buttonsClass.insertBefore(circle, beforeEl);
			if (circle === buttons[13]) {
				buttonsClass.appendChild(circle);
			}
		}
		else {
			appendix.scrollTop = 0;
			for (var i = 0; i < gridPad.length; i++) {
				gridPad[i].scrollTop = 0;
			}
			buttonsClass.insertBefore(circle, buttonsClass.firstChild);
			circleLayout.style.width = '94%';
			header.classList.add('active_2');
			bodyCard.style.position = 'fixed';
			unitTableDiv.classList.remove('active');
			appendixesHide(appendix);
			buttonsColorHide(targetM, targetL, targetP);
			buttonAllClose.classList.add('active');
			circlePositionerTitle.classList.add('active');
			circlePaddingDone();
			arrowLine.style.opacity = '0';
		}
		/*--------------------Reset button-------------------------*/
		buttonAllClose.onclick = function () {
			circlePaddingNone();
			buttonsClass.insertBefore(circle, beforeEl);
			if (circle === buttons[13]) {
				buttonsClass.appendChild(circle);
			}
			circleLayout.style.width = null;
			appendixesHideAll();
			buttonsColorDefault();
			hideHeader();
			circlePositionerTitle.classList.remove('active');
			bodyCard.style.position = null;
			buttonAllClose.classList.remove('active');
		};
	}
	circle.addEventListener('click', app);
} // End of function showAppendix(appendix, circle, beforeEl, targetM, targetL, targetP)
/*--------------------Launching app-------------------------*/
showAppendix(appendixes[0], buttons[0], buttons[1], overlay[0], mainCircle[0], p_AppButton[0], circlePositioner[0]);
showAppendix(appendixes[1], buttons[1], buttons[2], overlay[1], mainCircle[1], p_AppButton[1], circlePositioner[1]);
showAppendix(appendixes[2], buttons[2], buttons[3], overlay[2], mainCircle[2], p_AppButton[2], circlePositioner[2]);
showAppendix(appendixes[3], buttons[3], buttons[4], overlay[3], mainCircle[3], p_AppButton[3], circlePositioner[3]);
showAppendix(appendixes[4], buttons[4], buttons[5], overlay[4], mainCircle[4], p_AppButton[4], circlePositioner[4]);
showAppendix(appendixes[5], buttons[5], buttons[6], overlay[5], mainCircle[5], p_AppButton[5], circlePositioner[5]);
showAppendix(appendixes[6], buttons[6], buttons[7], overlay[6], mainCircle[6], p_AppButton[6], circlePositioner[6]);
showAppendix(appendixes[7], buttons[7], buttons[8], overlay[7], mainCircle[7], p_AppButton[7], circlePositioner[7]);
showAppendix(appendixes[8], buttons[8], buttons[9], overlay[8], mainCircle[8], p_AppButton[8], circlePositioner[8]);
showAppendix(appendixes[9], buttons[9], buttons[10], overlay[9], mainCircle[9], p_AppButton[9], circlePositioner[9]);
showAppendix(appendixes[10], buttons[10], buttons[11], overlay[10], mainCircle[10], p_AppButton[10], circlePositioner[10]);
showAppendix(appendixes[11], buttons[11], buttons[12], overlay[11], mainCircle[11], p_AppButton[11], circlePositioner[11]);
showAppendix(appendixes[12], buttons[12], buttons[13], overlay[12], mainCircle[12], p_AppButton[12], circlePositioner[12]);
showAppendix(appendixes[13], buttons[13], buttons[14], overlay[13], mainCircle[13], p_AppButton[13], circlePositioner[13]);
/*--------------------Modal Window-------------------------*/
var modalButton = document.querySelector('.myButt');
var modalWrap = document.querySelector('.modal__wrap');
var materialIcons = document.querySelector('.material-icons');
var modalOverlay = document.querySelector('.modal__overlay');
var unitNumber = document.querySelector('.th_1');
modalButton.addEventListener('click', function () {
	if (header.className === 'header base active_1') {
		hamburger.classList.toggle("is-active");
	}
		modalOverlay.style.display = "block";
		modalOverlay.style.zIndex  = "800";
	setTimeout(function () {
		modalOverlay.classList.toggle('active');
		modalOverlay.scrollTop = 0;
		modalWrap.scrollTop = 0;
		modalWrap.scrollLeft = 0;
		hideHeader();
	}, 100);
	bodyCard.style.position = 'fixed';
	setTimeout(function () {
		materialIcons.style.display = 'block';
	}, 1000);
	modalOverlay.scrollTop = 0;
});
materialIcons.addEventListener('click', function () {
	modalOverlay.classList.toggle('active');
	bodyCard.style.position = null;
	setTimeout(function () {
			modalOverlay.style.display = null;
			modalOverlay.style.zIndex  = null;
	}, 1000);
	setTimeout(function () {
		materialIcons.style.display = 'none';
	}, 100);
});
/*--------------------hamburgers-------------------------*/
var buttonGambur = document.querySelector('.gamb-wrap-back'); // change for back side add "_back"
buttonGambur.addEventListener('click', function () {
	if (header.style.maxHeight === '500px') {
		hideHeader();
		bodyCard.style.position = null;
	}
	else {
		header.classList.toggle('active_1');
		if (header.className === 'header base active_1') {
			unitTableDiv.classList.toggle('active');
		}
		else {
			unitTableDiv.classList.remove('active');
		}
		mainTable.classList.toggle('active');
		overlayTitleM.classList.toggle('active');
		overlayTitleL.classList.toggle('active');
		textP_Title.classList.toggle('active');
		circlePositionerTitle.classList.remove('active');
		//		bodyCard.style.position = 'fixed';
	}
});
/*--------------------Hide Fields-------------------------*/
var modalButton = document.querySelector('.myButt');
var hr = document.getElementsByTagName('hr');
var highlight = document.querySelector('div.highlight');
if (modalWrap.innerHTML === "") {
	modalButton.style.display = 'none';
	hr[0].style.marginTop = '50px';
}
if (exampleAnswerHide.innerHTML === '') {
	exampleAnswerHide.style.display = 'none';
}
if (highlight.innerHTML === '') {
	highlight.style.display = 'none';
}
else {
	modalButton.style.display = 'block';
}
if (unitNumber.innerHTML === '') {
	unitNumber.innerHTML = '»»»» ♨';
}
var layerButton = document.querySelector('.layer');
if (layerButton.innerHTML === '') {
	layerButton.innerHTML = 'YEAH';
}
// Если cloze содержит несколько вариантов ответа, то оставляем только один вариант для лучшей читаемости, остальные и так будут показаны при сравнении введенного на клавиатуре ответа.
var cloze = document.querySelectorAll(".cloze");
for (var i = 0; i < cloze.length; i++) {
	cloze[i].textContent = cloze[i].textContent.replace(/^([^|]*).*$/, "$1");
	cloze[i].textContent = cloze[i].textContent.replace(/^([^/]*).*$/, "$1");
}
window.scrollTo(0, 0);