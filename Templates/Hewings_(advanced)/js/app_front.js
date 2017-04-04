/* jshint browser: true */

/*--------------------Hide example question-------------------------*/
var question = document.querySelector('.question_front'); // change for back side - ".question"
var exampleAnswerHide = document.querySelector('.img_example');
var hideExample = function () {
exampleAnswerHide.style.maxHeight = '600px';
exampleAnswerHide.style.opacity = '1';
exampleAnswerHide.style.padding = '.5em';
exampleAnswerHide.style.marginTop = '.3em';
};
var showExample = function () {
		exampleAnswerHide.style.maxHeight = null;
		exampleAnswerHide.style.opacity 	= null;
		exampleAnswerHide.style.padding 	= null;
		exampleAnswerHide.style.marginTop = null;
};
var el = question;
if(el) {
el.addEventListener('click', function() {

if (exampleAnswerHide.style.maxHeight === '600px' && exampleAnswerHide.style.opacity === '1') {
showExample();
} else {
hideExample();
}
});
}

var textboxPlace = document.querySelectorAll('.question input');
for (var i=0; i < textboxPlace.length; i++) {
textboxPlace[i].addEventListener('click', hideExample);
}
var elAhref = document.querySelectorAll('.question a');
for (var x=0; x < elAhref.length; x++) {
elAhref[x].addEventListener('click', hideExample);
}

var questionAudio = document.getElementById('question-audio');

/*--------------------variables-------------------------*/
var header = document.querySelector('.header');
var buttons  			= document.getElementsByClassName('circle'),
buttonsFirst 			= document.getElementsByClassName('circle'),
mainCircle 	 			= document.getElementsByClassName('mainCircle'),
overlay 		 			= document.getElementsByClassName('overlay'),
p_AppButton  			= document.getElementsByClassName('p_app_button'),
appendixes 	 			= document.getElementsByClassName('appendixes'),
circlePositioner	= document.getElementsByClassName('circlePositioner');

var buttonsClass 			= document.querySelector('.buttons'),
buttonAllClose 				= document.querySelector('.header-close'),
bodyCard 							= document.querySelector('.card'),
circlePositionerTitle = document.querySelector('.circlePositioner_title'),
arrowLine 						= document.querySelector('.arrow_06B13_line'),
overlayTitleM 				= document.querySelector('#overlay_title'),
//cols 									= document.querySelector('.col-1-2'),
overlayTitleL 				= document.querySelector('.mainCircle_title');

var textP_Title = document.getElementById('p_button');
var hamburger = document.querySelector('.hamburger--arrowalt-r');

/*--------------------Media Query responsive-------------------------*/
// media query change 737
function hideCircleTitle(mq) {
  if (mq.matches) {
   circlePositionerTitle.style.display = 'none'; // window width is less than 737px
  } else {
   circlePositionerTitle.style.display = 'block'; // window width is at least 737px 
  }
}
if (matchMedia) {
  var mq = window.matchMedia("(max-width: 737px)");
  mq.addListener(hideCircleTitle);
  hideCircleTitle(mq);
}

// media query change 438
function changeHeaderWidth(mqNarrow) {
	var unitTableDiv = document.querySelector('.unit_table'); 
  if (mqNarrow.matches) {
		header.style.width = '90%'; // window width is less than 438px
		unitTableDiv.style.display = 'none';
  } else {
		if (mq.matches) {
   header.style.width = '80%'; // window width is less than 768px 
		unitTableDiv.style.display = null;
		} else {
			header.style.width = '70%';
		}
  }
}
if (matchMedia) {
  var mqNarrow = window.matchMedia("(max-width: 438px)");
  mqNarrow.addListener(changeHeaderWidth);
  changeHeaderWidth(mqNarrow);
}

/*--------------------Common Reset to Default-------------------------*/
var appendixesHideAll = function(){	 
	for (var i=0; i < appendixes.length; i++) 
	{
	appendixes[i].style.maxHeight = '0';
	appendixes[i].style.webkitTransform = 'scale(0.5)';
	appendixes[i].style.transform = 'scale(0.5)';
	}
};

var buttonsColorDefault = function(){	 
	for (var i=0; i < overlay.length; i++) 
	{
	overlay[i].style.backgroundColor = null;
	}
	for (var z=0; z < mainCircle.length; z++) 
	{
	mainCircle[z].style.backgroundColor = null;
	}
	for (var y=0; y < p_AppButton.length; y++) 
	{
	p_AppButton[y].style.color = null;
	}
};

/*--------------------Hide Header-------------------------*/
var unitTableDiv = document.querySelector('.unit_table');
var mainTable = document.querySelector('.main_table');

		function hideHeader() {
			header.style.maxHeight = '0';
			header.style.maxWidth = '910px';
//			header.style.width = '70%';
				if (mq.matches) {
				 circlePositionerTitle.style.display = 'none'; // window width is less than 737px
					header.style.width = '80%';
				} else {
				 circlePositionerTitle.style.display = 'block'; // window width is at least 737px 
					header.style.width = '70%';
				}
			unitTableDiv.style.maxHeight = '0';
			unitTableDiv.style.opacity = '0';
			mainTable.style.margin = null;
			mainTable.style.width = null;
			mainTable.style.borderRadius = null;
			overlayTitleM.style.backgroundColor = '#077a09';
			overlayTitleL.style.backgroundColor = 'transparent';
			arrowLine.style.opacity = '1';
			textP_Title.style.color = 'bisque';
		}

circlePositionerTitle.addEventListener('click', function() {

	if (header.style.maxHeight === '500px'){

		buttonsColorDefault();
		hideHeader();
		textP_Title.textContent = 'A';
		bodyCard.style.position = null;

	} else {
		header.style.maxHeight = '500px';
		unitTableDiv.style.maxHeight = '300px';
		unitTableDiv.style.opacity = '1';
		mainTable.style.margin = '0 auto';
		mainTable.style.borderRadius = '0 0 4px 4px';
		overlayTitleM.style.backgroundColor = '#1dd16e';
		overlayTitleL.style.backgroundColor = 'white';
		textP_Title.style.color = 'white';
		buttonAllClose.style.display = 'none';
		}
});

/*--------------------show Appendix-------------------------*/
function showAppendix(appendix, circle, beforeEl, targetM, targetL, targetP, circleLayout) {
/*--------------------Conditions for Responsive drop down appendixes-------------------------*/
	
	function app() {

		function circlePaddingNone (){
				buttonsFirst[0].style.paddingBottom = "0";
		}
		function circlePaddingDone (){
				buttonsFirst[0].style.paddingBottom = "2em";
		}

/*--------------------Reset with Exceptions-------------------------*/
	var appendixesHide = function(except){
		for (var i=0; i < appendixes.length; i++) 
		{
			appendixes[i].style.maxHeight = '0';
			appendixes[i].style.webkitTransform = 'scale(0.5)';
			appendixes[i].style.transform = 'scale(0.5)';
			except.style.maxHeight = '100%';
			except.style.webkitTransform = 'scale(1)';
			except.style.transform = 'scale(1)';
		}
	};

	var buttonsColorHide = function(exceptOverlay, exceptMainCircle, exceptP){
		for (var i=0; i < overlay.length; i++) 
		{
			overlay[i].style.backgroundColor = null;
			exceptOverlay.style.backgroundColor = '#1dd16e';
		}
		for (var z=0; z < mainCircle.length; z++) 
		{
			mainCircle[z].style.backgroundColor = null;
			exceptMainCircle.style.backgroundColor = 'white';
		}
		for (var y=0; y < p_AppButton.length; y++) 
		{
			p_AppButton[y].style.color = null;
			exceptP.style.color = 'white';
		}
	};
/*--------------------Conditions-------------------------*/
	var appendixValue = appendix.style.maxHeight = Number(true);
	if (appendixValue > 0 && appendix.style.webkitTransform === 'scale(1)' ||
		appendixValue > 0 && appendix.style.transform === 'scale(1)') {

			appendix.style.maxHeight = '0';
			appendix.style.webkitTransform = 'scale(0.5)';
			appendix.style.transform = 'scale(0.5)';
			header.style.maxWidth = '910px';
			if (mq.matches) {
			 circlePositionerTitle.style.display = 'none'; // window width is less than 737px
				header.style.width = '80%';
			} else {
			 circlePositionerTitle.style.display = 'block'; // window width is at least 737px 
				header.style.width = '70%';
			}
			changeHeaderWidth(mqNarrow);
			buttonAllClose.style.display = 'none';
			bodyCard.style.position = null;
			arrowLine.style.opacity = '1';
			circlePaddingNone ();
			buttonsColorDefault();
			circleLayout.style.width = null;
			if (window.innerWidth > 768) {
				circlePositionerTitle.style.display = 'block';}
			buttonsClass.insertBefore(circle, beforeEl);
			if (circle === buttons[13])
			{buttonsClass.appendChild(circle);}
	} else {
			appendix.style.maxHeight = '100%';
			appendix.scrollTop=0;
			buttonsClass.insertBefore(circle, buttonsClass.firstChild);
			circleLayout.style.width = '94%';
			appendix.style.webkitTransform = 'scale(1)';
			appendix.style.transform = 'scale(1)';
			header.style.maxWidth = '100%';
			header.style.width = '100%';
			bodyCard.style.position = 'fixed';
			unitTableDiv.style.maxHeight = '0';
			unitTableDiv.style.opacity = '0';
			appendixesHide(appendix);
			buttonsColorHide(targetM, targetL, targetP);
			buttonAllClose.style.display = 'inline-block';
			targetM.style.backgroundColor = '#1dd16e';
			targetL.style.backgroundColor = 'white';
			targetP.style.color = 'white';
			circlePaddingDone();
			circlePositionerTitle.style.display = 'none';
			arrowLine.style.opacity = '0';
	} // End of function app()

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
			if (window.innerWidth > 768) {
			circlePositionerTitle.style.display = 'block';}
			bodyCard.style.position = null;
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
showAppendix(appendixes[7], buttons [7],buttons[8], overlay[7], mainCircle[7], p_AppButton[7], circlePositioner[7]);
showAppendix(appendixes[8], buttons [8],buttons[9], overlay[8], mainCircle[8], p_AppButton[8], circlePositioner[8]);
showAppendix(appendixes[9], buttons [9],buttons[10],overlay[9], mainCircle[9], p_AppButton[9], circlePositioner[9]);
showAppendix(appendixes[10],buttons[10],buttons[11],overlay[10],mainCircle[10],p_AppButton[10],circlePositioner[10]);
showAppendix(appendixes[11],buttons[11],buttons[12],overlay[11],mainCircle[11],p_AppButton[11],circlePositioner[11]);
showAppendix(appendixes[12],buttons[12],buttons[13],overlay[12],mainCircle[12],p_AppButton[12],circlePositioner[12]);
showAppendix(appendixes[13],buttons[13],buttons[14],overlay[13],mainCircle[13],p_AppButton[13],circlePositioner[13]);

/*--------------------Modal Window-------------------------*/
var modalButton = document.querySelector('.myButt');
var materialIcons = document.querySelector('.material-icons');
var modalOverlay = document.querySelector('.modal__overlay');

modalButton.addEventListener('click', function(){
	if (header.style.maxHeight === '500px'){
	hamburger.classList.toggle("is-active");
	}
	hideHeader();
	modalOverlay.style.opacity = '1';
	modalOverlay.style.zIndex = '800';
	modalOverlay.style.height = '100%';
	modalOverlay.style.webkitTransform = 'scale(1)';
	modalOverlay.style.transform = 'scale(1)';
	bodyCard.style.position = 'fixed';
});

materialIcons.addEventListener('click', function(){
	modalOverlay.style.opacity = '0';
	modalOverlay.style.zIndex = '-100';
	modalOverlay.style.webkitTransform = 'scale(.5)';
	modalOverlay.style.transform = 'scale(.5)';
	bodyCard.style.position = null;
});

/*--------------------hamburgers-------------------------*/
var buttonGambur = document.querySelector('.gamb-wrap'); 	// change for back side add "_back"
buttonGambur.addEventListener('click', function() {

	if (header.style.maxHeight === '500px'){

		hideHeader();
		bodyCard.style.position = null;

	} else {
		header.style.maxHeight = '500px';
		unitTableDiv.style.maxHeight = '300px';
		unitTableDiv.style.opacity = '1';
		mainTable.style.margin = '0 auto';
//		mainTable.style.width = '70%';
					if (mq.matches) {
				 circlePositionerTitle.style.display = 'none'; // window width is less than 737px
					header.style.width = '80%';
				} else {
				 circlePositionerTitle.style.display = 'block'; // window width is at least 737px 
					header.style.width = '70%';
				}
		changeHeaderWidth(mqNarrow);
		mainTable.style.borderRadius = '0 0 4px 4px';
		overlayTitleM.style.backgroundColor = '#1dd16e';
		textP_Title.style.color = 'white';
		overlayTitleL.style.backgroundColor = 'white';
//		bodyCard.style.position = 'fixed';
		buttonAllClose.style.display = 'none';
		}
});

/*--------------------Hide Fields-------------------------*/

var addWordsBox1 = document.querySelector('div.add_words1');
var addWordsBox2 = document.querySelector('div.add_words2');
var imgExample = document.querySelector('.img_example');
var unitNumber = document.querySelector('.th_1');

var modalWrap = document.querySelector('.modal__wrap');
var modalButton = document.querySelector('.myButt');
var hr = document.getElementsByTagName('hr');

var box1None = true, box2None = true;
if (addWordsBox1.textContent === ''){
	box1None = false;
	addWordsBox1.style.display = 'none';
}
if (addWordsBox2.textContent === ''){
	box2None = false;
	addWordsBox2.style.display = 'none';
}
if (box1None === true && box2None === true){
	addWordsBox1.style.width = '47%';
	addWordsBox2.style.width = '47%';
}

if (modalWrap.innerHTML === ''){
	modalButton.style.display = 'none';
	hr[0].style.marginTop = '50px';
}
if (imgExample.innerHTML === ''){
	imgExample.style.display = 'none';
}
if (questionAudio.innerHTML === ''){
	questionAudio.style.display = 'none';
}
if (unitNumber.innerHTML === ''){
	unitNumber.innerHTML = '»»»» ♨';
}
var layerButton = document.querySelector('.layer');
if (layerButton.innerHTML === ''){
	layerButton.innerHTML = 'YEAH';
}
/*--------------------Choeces Words Fields-------------------------*/
var hint = document.querySelectorAll(".hint");
if (hint.length > 0) {
  hint[0].innerHTML = "Hint";

  var id = hint[1].getAttribute("id");
  var choices = hint[1].innerHTML;
  var boxes = choices.split(" | ");

  var list = "";
  for (var j = 0; j < boxes.length; j++) {
    var arr = boxes[j].split(";");
    if (j !== 0) {
      list = list + '<p class="choices-box-delimiter"></p>';
    }
    list = list + "<ul>";
    for (var i = 0; i < arr.length; i++) {
      list = list + "<li>" + arr[i] + "</li>";
    }
    list = list + "</ul>";
  }

  document.getElementById(id).innerHTML = list;

//  if (arr.length < 5 && boxes.length === 1) {
//    document.getElementById("choices").className = "choices_variants";
//  } else {
    document.getElementById("choices").className = "choices_words";
//  }

  // При показе карточки показывать hint раскрытым
  document.querySelector("a.hint").style.display = 'none';
  document.querySelector("div.hint").style.display = 'block';
} 