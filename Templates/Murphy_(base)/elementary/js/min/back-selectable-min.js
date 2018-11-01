"use strict";

/*******************************************
 * values of variables from the front side Selectable:
 * 		sequentian, result,
 * function from the front side Selectable:
 * 		shuffle()
 *
 * ! These variables is available only without "{FrontSide}" tag. on the Back template!
 * ! Don't care about of this message in edit mode:
 * "Invalid HTML on card: ReferenceError: shuffle is not defined"
 * it happens because the variable "shuffle" defined on the front side of the card. And is only available after displaying the front side.

!!!! These rules not been tested on the AnkiDroid !!!!
 ******************************************/

/* global sequential shuffle result:true */

/*global sequential */

/*================================================
=            DIVIDE BY ( "|") TO ANKI            = 
================================================*/
function divide(target) {
  target.innerHTML = target.innerHTML.replace(/(\s*\/<span class="Apple-tab-span" style="white-space:pre"> <\/span>\s*)/g, '');
  target.innerHTML = target.innerHTML.replace(/(>\|<)/g, '> | <');
  target.innerHTML = target.innerHTML.replace(/(&nbsp;\|&nbsp;)/g, ' | ');
  target.innerHTML = target.innerHTML.replace(/(>\|&nbsp;)/g, '> | ');
  target.innerHTML = target.innerHTML.replace(/(>\|\s)/g, '> | ');
  target.innerHTML = target.innerHTML.replace(/(>&nbsp;\|\s)/g, '> | ');
  target.innerHTML = target.innerHTML.replace(/(\s*\s\|\s\s*)/g, '</div> | ');
  target.innerHTML = target.innerHTML.replace(/\s*<\/div>\|\/<\/div>s*/g, '</div> | ');
  var re = /\s*\s\|\s\s*/,
      choices = target.innerHTML;
  var boxes = choices.split(re);
  boxes = shuffle(boxes), boxes = sequential;
  var list = '';
  list += '<ul id="selectable">';

  for (var r = 0; r < boxes.length; r++) {
    list = list + '<li class="ui-widget-content"><strong class="abc">' + alphabet[r].toUpperCase() + '</strong><div class="div-content">' + boxes[r] + '</div></li>';
  }

  list += '</ul>';
  target.innerHTML = list;
}

var examples = document.getElementById('selectbox');
/**
 * REGEX: excludes "[A-Z] at the beginning of each line for copy from teamtreehouse.com"
 */

var match = examples.innerHTML;
match = match.replace(/([A-Z])(<span\sclass="Apple-tab-span"\sstyle="white-space:pre">\s<\/span>)(.+?)/g, ' | $3');

if (match !== examples.innerHTML) {
  match = match.replace(/\|/m, '');
  examples.innerHTML = match;
}
/*----------  end  ----------*/


var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
divide(examples);
/*=====  End of DIVIDE BY ( "|") TO ANKI  ======*/

window.scrollTo(0, 0);
/*================================================
=            Processing of the relult           =
================================================*/
// let idTrue = document.getElementById('true'),
// idFalse = document.getElementById('false')

var ok = true;
divide(examples);
var correct = [],
    selectbox = document.querySelectorAll('#selectbox.back'),
    abcGutter = document.getElementsByClassName('ui-widget-content'),
    rowsOfSelectbox = document.querySelectorAll('#selectable li');

function clearClassName(el) {
  el.classList.remove('active-right');
  el.classList.remove('active-wrong');
}

for (var i = 0; i < rowsOfSelectbox.length; i++) {
  var anchor = rowsOfSelectbox[i].innerHTML.match(/\<([\/i]*)\>/);

  if (anchor !== null) {
    correct.push(i);
  }

  for (var z = 0; z < result.length; z++) {
    if (anchor !== null && anchor[1] === 'i' && i === result[z]) {
      abcGutter[i].classList.add('active-right'); // console.log('right index: ', i)
    }

    if (anchor === null && i === result[z]) {
      abcGutter[i].classList.add('active-wrong');
      ok = false;
    }
  }
}

if (correct.length !== result.length || result.length === 0) {
  ok = false;
}

if (!ok) {
  for (var _i = 0; _i < rowsOfSelectbox.length; _i++) {
    if (abcGutter[_i].className === 'ui-widget-content active-right') {
      abcGutter[_i].classList.remove('active-right');

      abcGutter[_i].classList.add('active-wrong');
    }
  } // idFalse.classList.add('active')


  selectbox[0].classList.add('active-selectbox');
  /* Additional Quize by click*/

  selectbox[0].onclick = function () {
    selectbox[0].style.border = 'dashed 0.15em #F39814';

    if (this.className === 'back active-selectbox') {
      // idFalse.classList.remove('active')
      // idTrue.classList.add('active')
      selectbox[0].classList.remove('active-selectbox');

      for (var _i2 = 0; _i2 < abcGutter.length; _i2++) {
        clearClassName(abcGutter[_i2]);

        for (var cor = 0; cor < correct.length; cor++) {
          if (_i2 === correct[cor]) {
            abcGutter[_i2].classList.add('active-right');
          }
        }
      }
    } else {
      selectbox[0].classList.add('active-selectbox'); // idTrue.classList.remove('active')
      // idFalse.classList.add('active')

      for (var _i3 = 0; _i3 < abcGutter.length; _i3++) {
        clearClassName(abcGutter[_i3]);

        for (var res = 0; res < result.length; res++) {
          if (_i3 === result[res]) {
            abcGutter[_i3].classList.add('active-wrong');
          }
        }
      }
    }
  };
}

if (ok) {
  // idTrue.classList.add('active')
  selectbox[0].classList.remove('active-selectbox');
}
/* -----------------------------
Show/hide some text by <b></b> or <i></i> for front/back sides of card
------------------------------- */
// var line = document.querySelector(".question_back").innerHTML;
// var cloze = line.match(/<i>(.*?)<\/i>/gi)
// for (var i = 0; i < cloze.length; i++) {
// 	line = line.replace(cloze[i], "<b>" + cloze[i].replace(/^\[\[|(::[^\]]*)?\]\]$/g, "") + "</b>")
// }
// document.querySelector(".question_back").innerHTML = line;
"use strict";

/* -----------------------------
Hide example question
------------------------------- */
var question = document.querySelector(".question");
var exampleAnswerHide = document.querySelector(".img_example");
var el = question;
/* -----------------------------
Regular variables
------------------------------- */

var questionAudio = document.getElementById("question-audio");
var body = document.getElementById(body); //let hamburgers = document.querySelectorAll(".hamburger");

var buttons = document.getElementsByClassName("circle"),
    buttonsFirst = document.getElementsByClassName("circle"),
    mainCircle = document.getElementsByClassName("mainCircle"),
    overlay = document.getElementsByClassName("overlay"),
    p_AppButton = document.getElementsByClassName("p_app_button"),
    gridPad = document.getElementsByClassName("grid-pad"),
    appendixes = document.getElementsByClassName("appendixes"),
    headingTable = document.getElementsByClassName("heading"); //  spinningContainer = document.getElementsByClassName('spinningContainer');

var buttonsClass = document.querySelector(".buttons"),
    buttonAllClose = document.querySelector(".header-close"),
    bodyCard = document.querySelector(".card"),
    overlayTitleM = document.querySelector("#overlay_title"),
    overlayTitleL = document.querySelector(".mainCircle_title"),
    header = document.querySelector(".header"),
    textP_Title = document.getElementById("p_button");
var arrowLine = document.querySelector(".arrow_06B13_line"); // change for back side add "_back"

var circlePositionerTitle = document.querySelector(".circlePositioner_title"); // change for back side add "_back"

var hamburgerMain = document.querySelector(".hamburger--arrowalt-r");

if (document.querySelector(".arrow_06B13_line_back")) {
  arrowLine = document.querySelector(".arrow_06B13_line_back");
  window.scrollTo(0, 0);
}

if (document.querySelector(".circlePositioner_title_back")) {
  circlePositionerTitle = document.querySelector(".circlePositioner_title_back");
}

if (document.querySelector(".hamburger--arrowalt")) {
  hamburgerMain = document.querySelector(".hamburger--arrowalt");
}
/* -----------------------------
Hide Header
------------------------------- */


var unitTableDiv = document.querySelector(".unit_table");
var mainTable = document.querySelector(".main_table");
/* -----------------------------
Modal Window
------------------------------- */

var modalButton = document.querySelector(".myButt");
var modalWrap = document.querySelector(".modal__wrap");
var materialIcons = document.querySelector(".material-icons");
var modalOverlay = document.querySelector(".modal__overlay");
/* -----------------------------
hamburgers
------------------------------- */

var buttonGambur = document.querySelector(".gamb-wrap"); // change for back side add "_back"

if (document.querySelector(".gamb-wrap-back")) {
  buttonGambur = document.querySelector(".gamb-wrap-back"); // console.log('YEAH');
}
/* -----------------------------
Hide Fields
------------------------------- */


var addWordsBox2 = document.querySelector("div.add_words2");
var unitNumber = document.querySelector(".th_1");
var layerButton = document.querySelector(".layer");
var highlight = document.querySelector("div.highlight");
var hr = document.getElementsByTagName("hr");
/*--------------------choices words field-------------------------*/

var hint = document.querySelectorAll(".hint");
"use strict";

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
    for (var i = 0; i < appendixes.length; i++) {
      appendixes[i].classList.remove("active");
      except.classList.add("active");
    }
  }

  function buttonsColorHide(exceptOverlay, exceptMainCircle, exceptP) {
    //  ,exceptC
    for (var i = 0; i < overlay.length; i++) {
      overlay[i].classList.remove("active");
      exceptOverlay.classList.add("active");
    }

    for (var z = 0; z < mainCircle.length; z++) {
      mainCircle[z].classList.remove("active");
      exceptMainCircle.classList.add("active");
    }

    for (var y = 0; y < p_AppButton.length; y++) {
      p_AppButton[y].classList.remove("active");
      exceptP.classList.add("active");
    }
  }
  /*--------------------Conditions-------------------------*/


  if (this.appendix.className === "appendixes active") {
    this.appendix.classList.toggle("active");
    this.targetM.classList.toggle("active");
    this.targetL.classList.toggle("active");
    this.targetP.classList.toggle("active"); //      spinning.classList.toggle('active');

    header.classList.remove("active_2");
    buttonAllClose.classList.remove("active");
    bodyCard.style.position = null;
    arrowLine.style.opacity = "1";
    circlePaddingNone();
    circlePositionerTitle.classList.remove("active");
    responsiveCirclePositionRef(this.circle, this.beforeEl);

    if (this.circle === buttons[6]) {
      responsiveCirclePositionLast(this.circle);
    }
  } else {
    this.appendix.scrollTop = 0;

    for (var i = 0; i < gridPad.length; i++) {
      gridPad[i].scrollTop = 0;
    }

    responsiveCirclePosition(this.circle, this.beforeEl);
    header.classList.add("active_2");
    bodyCard.style.position = "fixed";
    unitTableDiv.classList.remove("active");
    appendixesHide(this.appendix);
    buttonsColorHide(this.targetM, this.targetL, this.targetP); // spinning

    buttonAllClose.classList.add("active");
    circlePaddingDone();
    circlePositionerTitle.classList.add("active");
    arrowLine.style.opacity = "0";
  }
  /*--------------------Reset button-------------------------*/


  var circle = this.circle;
  var beforeEl = this.beforeEl;

  buttonAllClose.onclick = function () {
    circlePaddingNone();
    responsiveCirclePositionRef(circle, beforeEl);

    if (this.circle === buttons[6]) {
      responsiveCirclePositionLast(this.circle);
    }

    appendixesHideAll();
    buttonsColorDefault();
    hideHeader(); //      if (window.innerWidth > 768) {

    circlePositionerTitle.classList.remove("active"); //      }

    bodyCard.style.position = null;
    buttonAllClose.classList.remove("active");
  };
};
"use strict";

var button_1 = new MenuElements(appendixes[0], buttons[0], buttons[1], overlay[0], mainCircle[0], p_AppButton[0]),
    button_2 = new MenuElements(appendixes[1], buttons[1], buttons[2], overlay[1], mainCircle[1], p_AppButton[1]),
    button_3 = new MenuElements(appendixes[2], buttons[2], buttons[3], overlay[2], mainCircle[2], p_AppButton[2]),
    button_4 = new MenuElements(appendixes[3], buttons[3], buttons[4], overlay[3], mainCircle[3], p_AppButton[3]),
    button_5 = new MenuElements(appendixes[4], buttons[4], buttons[5], overlay[4], mainCircle[4], p_AppButton[4]),
    button_6 = new MenuElements(appendixes[5], buttons[5], buttons[6], overlay[5], mainCircle[5], p_AppButton[5]),
    button_7 = new MenuElements(appendixes[6], buttons[6], buttons[7], overlay[6], mainCircle[6], p_AppButton[6]),
    menuElements = [button_1, button_2, button_3, button_4, button_5, button_6, button_7];

button_1.circle.onclick = function () {
  menuElements[0].app();
};

button_2.circle.onclick = function () {
  menuElements[1].app();
};

button_3.circle.onclick = function () {
  menuElements[2].app();
};

button_4.circle.onclick = function () {
  menuElements[3].app();
};

button_5.circle.onclick = function () {
  menuElements[4].app();
};

button_6.circle.onclick = function () {
  menuElements[5].app();
};

button_7.circle.onclick = function () {
  menuElements[6].app();
};
"use strict";

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
"use strict";

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
    circlePositionerTitle.classList.remove("active"); //    bodyCard.style.position = 'fixed';
  }
};
"use strict";

var box1None,
    box2None = true;

if (document.querySelector("div.add_words1")) {
  var addWordsBox1 = document.querySelector("div.add_words1");

  if (addWordsBox1.textContent === "") {
    box1None = false;
    addWordsBox1.style.display = "none";
  }

  if (addWordsBox2.textContent === "") {
    box2None = false;
    addWordsBox2.style.display = "none";
  }

  if (box1None === true && box2None === true) {
    addWordsBox1.style.width = "47%";
    addWordsBox2.style.width = "47%";
  }
}

if (document.getElementById("question-audio") && questionAudio.innerHTML === "") {
  questionAudio.style.display = "none";
}

if (modalWrap.innerHTML === "") {
  modalButton.style.display = "none";
  hr[0].style.marginTop = "50px";
}

if (exampleAnswerHide.innerHTML === "") {
  exampleAnswerHide.style.display = "none";
}

if (highlight.innerHTML === "") {
  highlight.style.display = "none";
} else {
  modalButton.style.display = "block";
}

if (unitNumber.innerHTML === "") {
  unitNumber.innerHTML = "»»»» ♨";
}

if (layerButton.innerHTML === "") {
  layerButton.innerHTML = "YEAH";
}
/*--------------------choices words field-------------------------*/


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

  document.getElementById(id).innerHTML = list; //  if (arr.length < 5 && boxes.length === 1) {
  //    document.getElementById("choices").className = "choices_variants";
  //  } else {

  document.getElementById("choices").className = "choices_words"; //  }
  // При показе карточки показывать hint раскрытым

  document.querySelector("a.hint").style.display = "none";
  document.querySelector("div.hint").style.display = "block";
}
"use strict";

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
    if (event.target.textContent !== "" && event.target.textContent !== "Replay") {
      exampleAnswerHide.classList.toggle("active"); // console.log(event.target);
    }
  };
}

var audioInModalW = document.querySelector(".sound_front");
audioInModalW.innerHTML = audioInModalW.innerHTML.replace(/\<\/div([^<]*)\>/gm, "");
audioInModalW.innerHTML = audioInModalW.innerHTML.replace(/\<div([^<]*)\>/gm, "<br /><br />");
/* -----------------------------
Common Reset to Default
------------------------------- */

bodyCard.style.position = null;

function appendixesHideAll() {
  for (var i = 0; i < appendixes.length; i++) {
    appendixes[i].classList.remove("active");
  }
}

function buttonsColorDefault() {
  for (var i = 0; i < overlay.length; i++) {
    overlay[i].classList.remove("active");
  }

  for (var z = 0; z < mainCircle.length; z++) {
    mainCircle[z].classList.remove("active");
  }

  for (var y = 0; y < p_AppButton.length; y++) {
    p_AppButton[y].classList.remove("active");
  } //  for (let f = 0; f < spinningContainer.length; f++) {
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
    bodyCard.style.position = null; //    unitTableDiv.classList.remove('active');
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
"use strict";

/* -----------------------------
Keyboard Navigation
------------------------------- */
$(window).bind('keydown', function (e) {
  var key = e.keyCode ? e.keyCode : e.which;

  switch (key) {
    case 38:
      // arrow up
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
        modalButton.onclick();
      }

      break;

    case 39:
      // arrow right
      exampleAnswerHide.classList.toggle("active");
      break;

    case 40:
      // arrow down
      e.preventDefault();
      circlePositionerTitle.onclick();
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
"use strict";

/* -----------------------------
media query change 769
------------------------------- */
function appendixesChangeName(mqiPad) {
  if (mqiPad.matches) {
    p_AppButton[0].textContent = "1. List of irregular verbs"; // window width is less than 768px

    p_AppButton[1].textContent = "2. Present and Past tenses";
    p_AppButton[2].textContent = "3. The Future";
    p_AppButton[3].textContent = "4. Modal verbs (can/could/will/would etc.)";
    p_AppButton[4].textContent = "5. Short forms (I'm/you've/didn't etc.)";
    p_AppButton[5].textContent = "6. Spelling";
    p_AppButton[6].textContent = "7. American English";

    for (var i = 0; i < headingTable.length; i++) {
      headingTable[i].style.display = 'none';
    }
  } else {
    p_AppButton[0].textContent = '1'; // window width is at least 768px

    p_AppButton[1].textContent = '2';
    p_AppButton[2].textContent = '3';
    p_AppButton[3].textContent = '4';
    p_AppButton[4].textContent = '5';
    p_AppButton[5].textContent = '6';
    p_AppButton[6].textContent = '7'; //		for (var x = 0; x < headingTable.length; x++) {
    //			headingTable[x].style.display = 'block';
    //		}
  }
}

if (matchMedia) {
  var mqiPad = window.matchMedia("(max-width: 768px)");
  mqiPad.addListener(appendixesChangeName);
  appendixesChangeName(mqiPad);
}
// selectable-js/back-selectable.js
// app/index.js
// app/key-navigation.js
// ./intermediat-menu-titles.js
"use strict";

//# sourceMappingURL=back-selectable-min.js.map
