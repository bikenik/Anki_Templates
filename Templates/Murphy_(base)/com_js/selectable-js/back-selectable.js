/*******************************************
 * values of variables from the front side Selectable:
 * 		sequentian, result, 
 * function from the front side Selectable:
 * 		shuffle()
 *
 * It works only without {{FrontSide}} field on the back template.
 ******************************************/
// var sequential = ["'7'", "<i>7</i>", "Syntax Error", "<i>Nan</i>"]; //to comment for Anki
// var result = [1]; //to comment for Anki
/*=================================================
=            DIVIDE BY ( "|") FOR TEST            =
=================================================*/
// var examples = $("#selectbox")[0];
// var letters = ["A", "B", "C", "D", "E", "F", 'G'];
// //result.length = sequential.length;
// function divide(target) {
// 	var re = /\s*\|\s*/;
// 	var choices = target.innerHTML;
// 	// boxes = choices.split(re); //to uncomment for Anki back side
// 	// boxes = shuffle(boxes);    //to uncomment for Anki back side
// 	boxes = sequential;
// 	var list = "";
// 	list = list + '<ul id="selectable">';
// 	for (var i = 0; i < boxes.length; i++) {
// 		list = list + '<li class="ui-widget-content">' + '<strong class="abc">' + letters[i] + '</strong>' + '<div class="div-content">' + boxes[i] + '</div>'+ '</li>';
// 	}
// 	list = list + "</ul>";
// 	target.innerHTML = list;
// }
// /*=====  End of DIVIDE BY ( "|") FOR TEST  ======*/
var title = document.querySelector('.title');
var rightAnswers = document.querySelector('.right-answers');
var button = document.getElementsByTagName('button')[0];

/*================================================
=            DIVIDE BY ( "|") TO ANKI            = to uncomment for Anki back side
================================================*/
var examples = $("#selectbox")[0];
if (!result) {
	var result = [];
}
var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

function divide(target) {
	var re = /\s*\|\s*/;
	var choices = target.innerHTML;
	var boxes = choices.split(re);
	boxes = shuffle(boxes);
	boxes = sequential;
	var list = "";
	list = list + '<ul id="selectable">';
	for (var i = 0; i < boxes.length; i++) {
		list = list + '<li class="ui-widget-content">' + '<strong class="abc">' + letters[i] + '</strong>' + '<div class="div-content">' + boxes[i] + '</div>' + '</li>';
	}
	list = list + "</ul>";
	target.innerHTML = list;
}
/*=====  End of DIVIDE BY ( "|") TO ANKI  ======*/
divide(examples);
/*----------------------------*/
window.scrollTo(0, 0);
if (result !== undefined) {
	var lengthRe = result.length;
}
var value;
var counter = 0;
var newResult = [];
var ok = true;
for (var z = 0; z < lengthRe; z++) {
	for (i = 0; i < sequential.length; i++, counter++) {
		value = result[z];
		if (value === i) {
			newResult[i] = i;
			console.log("hello");
		}
		else {
			console.log("by");
			if (typeof (newResult[i]) !== "number") {
				newResult[i] = "";
			}
		}
	}
}
divide(examples);
var correctArr = [];
var italic;
var correct = 0;
var selectbox = $("#selectbox.back");
var abcGutter = $(".ui-widget-content");
// var abcGutter = $(".abc");
var rowsOfSelectbox = $("#selectable li");
// var abcGutter = $(".ui-widget-content");
for (var i = 0; i < abcGutter.length; i++) {
	italic = rowsOfSelectbox[i].innerHTML.match(/\<([\/i]*)\>/);
	console.log("count");
	if (italic) {
		correct++;
		console.log("italic");
		correctArr.push(i);
		if (i === newResult[i]) {
			abcGutter[newResult[i]].classList.add("active-right");
			rowsOfSelectbox[newResult[i]].classList.add("active-selecting");
			// rowsOfSelectbox[newResult[i]].style.backgroundColor = "white";
			var m = i;
			ok = false;
		}
	}
	else if (italic === null && abcGutter[newResult[i]] !== undefined) {
		abcGutter[newResult[i]].classList.add("active-wrong");
		rowsOfSelectbox[newResult[i]].classList.add("active-selecting");
		// rowsOfSelectbox[newResult[i]].style.backgroundColor = "white";
	}
}

function sortRightAnwers() {
	for (var i = 0; i < result.length; i++) {
		if (result[i] !== correctArr[i] || result.length !== correct) {
			for (var i = 0; i < result.length; i++) { //ui-widget-content active-right active-selecting active-wrong
				if (abcGutter[result[i]].classList[1] === "active-right") {
					abcGutter[result[i]].classList.remove("active-right");
				}
				rowsOfSelectbox[result[i]].classList.add("active-selecting");
				// rowsOfSelectbox[result[i]].style.backgroundColor = "white";
				abcGutter[result[i]].classList.add("active-wrong");
			}
			ok = true;
		}
	}
}
if (result) {
	sortRightAnwers();
}

if (result && ok) {
	selectbox[0].classList.add('active-selectbox');
	selectbox[0].onclick = function () {
		selectbox[0].style.border = "dashed 0.15em #F39814";
			if (this.className !== "back"){
				this.classList.toggle('active-selectbox');
					for (var i = 0; i < abcGutter.length; i++) {
						// if (rowsOfSelectbox[i].classList[1] === "active-selecting") {
							rowsOfSelectbox[i].classList.remove("active-selecting");
					// }
						// rowsOfSelectbox[i].style.backgroundColor = null;
						abcGutter[i].classList.remove("active-wrong");
				}
					for (var i = 0; i < correctArr.length; i++) {
						rowsOfSelectbox[correctArr[i]].classList.add("active-selecting");
						// rowsOfSelectbox[correctArr[i]].style.backgroundColor = "white";
						abcGutter[correctArr[i]].classList.toggle("active-right");
						abcGutter[correctArr[i]].classList.remove("active-wrong");
				}
		} 
		else{
				for (var i = 0; i < abcGutter.length; i++) {
						rowsOfSelectbox[i].classList.remove("active-selecting");
						// rowsOfSelectbox[i].style.backgroundColor = null;
						abcGutter[i].classList.remove("active-right");
					}
				sortRightAnwers();
				this.classList.toggle('active-selectbox');
		}
	};
}