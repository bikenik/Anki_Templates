/* -----------------------------
Hide example question
------------------------------- */
const question = document.querySelector(".question");
const exampleAnswerHide = document.querySelector(".img_example");
const el = question;

/* -----------------------------
Regular variables
------------------------------- */
const questionAudio = document.getElementById("question-audio");
const body = document.getElementById(body);
const hamburgers = document.querySelectorAll(".hamburger");
const buttons = document.getElementsByClassName("circle"),
	buttonsFirst = document.getElementsByClassName("circle"),
	mainCircle = document.getElementsByClassName("mainCircle"),
	overlay = document.getElementsByClassName("overlay"),
	p_AppButton = document.getElementsByClassName("p_app_button"),
	gridPad = document.getElementsByClassName("grid-pad"),
	appendixes = document.getElementsByClassName("appendixes"),
	headingTable = document.getElementsByClassName("heading");
//  spinningContainer = document.getElementsByClassName('spinningContainer');
const buttonsClass = document.querySelector(".buttons"),
	buttonAllClose = document.querySelector(".header-close"),
	bodyCard = document.querySelector(".card"),
	// bodyCardMobile = document.querySelector(".card .card"),
	// bodyCardMobile = document.querySelector(".mobile>body>#qa>.card"),
	overlayTitleM = document.querySelector("#overlay_title"),
	overlayTitleL = document.querySelector(".mainCircle_title"),
	header = document.querySelector(".header"),
	textP_Title = document.getElementById("p_button");
let arrowLine = document.querySelector(".arrow_06B13_line"); // change for back side add "_back"
let circlePositionerTitle = document.querySelector(".circlePositioner_title"); // change for back side add "_back"
let hamburgerMain = document.querySelector(".hamburger--arrowalt-r");

if (document.querySelector(".arrow_06B13_line_back")) {
	arrowLine = document.querySelector(".arrow_06B13_line_back");
	window.scrollTo(0, 0);
}
if (document.querySelector(".circlePositioner_title_back")) {
	circlePositionerTitle = document.querySelector(
		".circlePositioner_title_back"
	);
}
if (document.querySelector(".hamburger--arrowalt")) {
	hamburgerMain = document.querySelector(".hamburger--arrowalt");
}

/* -----------------------------
Hide Header
------------------------------- */
const unitTableDiv = document.querySelector(".unit_table");
const mainTable = document.querySelector(".main_table");

/* -----------------------------
Modal Window
------------------------------- */
const modalButton = document.querySelector(".myButt");
const modalWrap = document.querySelector(".modal__wrap");
const materialIcons = document.querySelector(".material-icons");
const modalOverlay = document.querySelector(".modal__overlay");

/* -----------------------------
hamburgers
------------------------------- */
let buttonGambur = document.querySelector(".gamb-wrap"); // change for back side add "_back"
if (document.querySelector(".gamb-wrap-back")) {
	buttonGambur = document.querySelector(".gamb-wrap-back");
	// console.log('YEAH');
}

/* -----------------------------
Hide Fields
------------------------------- */
const addWordsBox2 = document.querySelector("div.add_words2");
const unitNumber = document.querySelector(".th_1");
const layerButton = document.querySelector(".layer");
const highlight = document.querySelector("div.highlight");
const hr = document.getElementsByTagName("hr");
/*--------------------choices words field-------------------------*/
const hint = document.querySelectorAll(".hint");