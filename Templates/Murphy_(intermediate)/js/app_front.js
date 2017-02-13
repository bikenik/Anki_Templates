/* jshint browser: true */

/*--------------------Hide example question-------------------------*/
var question = document.querySelector('.question_front'); // change for back side - ".question"
var exampleAnswerHide = document.querySelector('.img_example'); 
var el = question;
if(el) {
el.addEventListener('click', function() {

if (exampleAnswerHide.style.maxHeight === '600px' && exampleAnswerHide.style.opacity === '1') {
		exampleAnswerHide.style.maxHeight = '0';
		exampleAnswerHide.style.opacity = '0';
} else {
exampleAnswerHide.style.maxHeight = '600px';
exampleAnswerHide.style.opacity = '1';
}
});
}

/*--------------------variables-------------------------*/
var buttons  = document.getElementsByClassName('circle'),
buttonsFirst = document.getElementsByClassName('circle'),
mainCircle 	 = document.getElementsByClassName('mainCircle'),
overlay 		 = document.getElementsByClassName('overlay'),
p_AppButton  = document.getElementsByClassName('p_app_button'),
appendixes 	 = document.getElementsByClassName('appendixes');

var buttonsClass 			= document.querySelector('.buttons'),
buttonAllClose 				= document.querySelector('.header-close'),
bodyCardIpad 					= document.querySelector('.card'),
circlePositionerTitle = document.querySelector('.circlePositioner_title'), //change for back side
arrowLine 						= document.querySelector('.arrow_06B13_line'), //change for back side
overlayTitleM 				= document.querySelector('#overlay_title'),
overlayTitleL 				= document.querySelector('.mainCircle_title');

var textP_Title = document.getElementById('p_button');

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
var header = document.querySelector('.header'); 
var unitTableDiv = document.querySelector('.unit_table'); 
var mainTable = document.querySelector('.main_table');

		function hideHeader() {
			header.style.maxHeight = '0';
			header.style.maxWidth = '910px';
			header.style.width = '70%';
			unitTableDiv.style.maxHeight = '0';
			unitTableDiv.style.opacity = '0';
			mainTable.style.margin = '1em auto 0 auto';
			mainTable.style.borderRadius = '4px';
			overlayTitleM.style.backgroundColor = '#2e528d';
			overlayTitleL.style.backgroundColor = 'transparent';
			arrowLine.style.opacity = '1';
			textP_Title.style.color = 'bisque';		
		}

circlePositionerTitle.addEventListener('click', function() {

	if (header.style.maxHeight === '500px'){

		buttonsColorDefault();
		hideHeader();
		textP_Title.textContent = 'A';
		bodyCardIpad.style.position = 'absolute';

	} else {
		header.style.maxHeight = '500px';
		unitTableDiv.style.maxHeight = '300px';
		unitTableDiv.style.opacity = '1';
		mainTable.style.margin = '0 auto';
		mainTable.style.borderRadius = '0 0 4px 4px';
		overlayTitleM.style.backgroundColor = '#77A7C4';
		overlayTitleL.style.backgroundColor = 'white';
		textP_Title.style.color = 'white';
		buttonAllClose.style.display = 'none';
		}
});

/*--------------------show Appendix-------------------------*/
function showAppendix(appendix, circle, beforeEl, targetM, targetL, targetP) {
/*--------------------Conditions for Responsive drop down appendixes-------------------------*/
	function app() {
		function responsiveCirclePosition(targetCircle) {
			if (window.innerWidth < 769){
				buttonsClass.insertBefore(targetCircle, buttonsClass.firstChild);
			}
		}
		function responsiveCirclePositionRef(targetCircle, beforeEl){
			if (window.innerWidth < 769){
				buttonsClass.insertBefore(targetCircle, beforeEl);
			}
		}
		function responsiveCirclePositionLast(targetCircle){
			if (window.innerWidth < 769){
				buttonsClass.appendChild(targetCircle);
			}
		}
		function circlePaddingNone (){
			if (window.innerWidth < 769) {
				buttonsFirst[0].style.paddingBottom = "0";
			}
		}
		function circlePaddingDone (){
			if (window.innerWidth < 769) {
				buttonsFirst[0].style.paddingBottom = "2em";
				}
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
		}
	};

	var buttonsColorHide = function(exceptOverlay, exceptMainCircle, exceptP){
		for (var i=0; i < overlay.length; i++) 
		{
			overlay[i].style.backgroundColor = null;
			exceptOverlay.style.backgroundColor = '#77A7C4';
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
	if (appendixValue > 0 && appendix.style.webkitTransform === 'scale(1)') {

			appendix.style.maxHeight = '0';
			appendix.style.webkitTransform = 'scale(0.5)';
			header.style.maxWidth = '910px';
			header.style.width = '70%';
			buttonAllClose.style.display = 'none';
			bodyCardIpad.style.position = 'absolute';
			arrowLine.style.opacity = '1';
			circlePaddingNone ();
			buttonsColorDefault();
			circlePositionerTitle.style.display = 'block';
			responsiveCirclePositionRef(circle, beforeEl);
			if (circle === buttons[6])
			{responsiveCirclePositionLast(circle);}
	} else {
			appendix.style.maxHeight = '100%';
			responsiveCirclePosition(circle);
			appendix.style.webkitTransform = 'scale(1)';
			header.style.maxWidth = '100%';
			header.style.width = '100%';
			bodyCardIpad.style.position = 'fixed';
			unitTableDiv.style.maxHeight = '0';
			unitTableDiv.style.opacity = '0';
			appendixesHide(appendix);
			buttonsColorHide(targetM, targetL, targetP);
			targetM.style.backgroundColor = '#77A7C4';
			targetL.style.backgroundColor = 'white';
			targetP.style.color = 'white';
			buttonAllClose.style.display = 'inline-block';
			circlePaddingDone();
			circlePositionerTitle.style.display = 'none';
			arrowLine.style.opacity = '0';
	} // End of function app()

/*--------------------Reset button-------------------------*/
		buttonAllClose.onclick = function () {
			circlePaddingNone();
			responsiveCirclePositionRef(circle, beforeEl);
			if (circle === buttons[6]) {
				responsiveCirclePositionLast(circle);
				}
			appendixesHideAll();
			buttonsColorDefault();
			hideHeader();
			bodyCardIpad.style.position = 'absolute';
			circlePositionerTitle.style.display = 'block';
		};
}
circle.addEventListener('click', app);
} // End of function showAppendix(appendix, circle, beforeEl, targetM, targetL, targetP)

/*--------------------Launching app-------------------------*/
showAppendix(appendixes[0], buttons[0], buttons[1], overlay[0], mainCircle[0], p_AppButton[0]);
showAppendix(appendixes[1], buttons[1], buttons[2], overlay[1], mainCircle[1], p_AppButton[1]);
showAppendix(appendixes[2], buttons[2], buttons[3], overlay[2], mainCircle[2], p_AppButton[2]);
showAppendix(appendixes[3], buttons[3], buttons[4], overlay[3], mainCircle[3], p_AppButton[3]);
showAppendix(appendixes[4], buttons[4], buttons[5], overlay[4], mainCircle[4], p_AppButton[4]);
showAppendix(appendixes[5], buttons[5], buttons[6], overlay[5], mainCircle[5], p_AppButton[5]);
showAppendix(appendixes[6], buttons[6], buttons[7], overlay[6], mainCircle[6], p_AppButton[6]);

/*--------------------Modal Window-------------------------*/
var modalButton = document.querySelector('.myButt');
var materialIcons = document.querySelector('.material-icons');
var modalOverlay = document.querySelector('.modal__overlay');

modalButton.addEventListener('click', function(){
	hideHeader();
	modalOverlay.style.opacity = '1';
	modalOverlay.style.zIndex = '800';
	modalOverlay.style.height = '100%';
	modalOverlay.style.webkitTransform = 'scale(1)';
	bodyCardIpad.style.position = 'fixed';
});

materialIcons.addEventListener('click', function(){
	modalOverlay.style.opacity = '0';
	modalOverlay.style.zIndex = '-100';
	modalOverlay.style.webkitTransform = 'scale(.5)';
	bodyCardIpad.style.position = 'absolute';
});

/*--------------------Hide Fields-------------------------*/

var addWordsBox1 = document.querySelector('div.add_words1');
var addWordsBox2 = document.querySelector('div.add_words2');
var imgExample = document.querySelector('.img_example');
var unitNumber = document.querySelector('.th_1');

var modalWrap = document.querySelector('.modal__wrap');
var modalButton = document.querySelector('.myButt');
var hr = document.getElementsByTagName('hr');

//var questionAudio = document.getElementById('question-audio');

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

//if (questionAudio.textContent === ""){
//	box1None = false;
//	questionAudio.style.display = 'none';
//}

if (modalWrap.innerHTML === ''){
	modalButton.style.display = 'none';
	hr[0].style.marginTop = '50px';
}
if (imgExample.innerHTML === ''){
	imgExample.style.display = 'none';
}
if (unitNumber.innerHTML === ''){
	unitNumber.innerHTML = '»»»» ♨';
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