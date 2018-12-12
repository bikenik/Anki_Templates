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
	target.innerHTML = target.innerHTML.replace(
		/(\s*\/<span class="Apple-tab-span" style="white-space:pre"> <\/span>\s*)/g,
		''
	)
	target.innerHTML = target.innerHTML.replace(/(>\|<)/g, '> | <')
	target.innerHTML = target.innerHTML.replace(/(&nbsp;\|&nbsp;)/g, ' | ')
	target.innerHTML = target.innerHTML.replace(/(>\|&nbsp;)/g, '> | ')
	target.innerHTML = target.innerHTML.replace(/(>\|\s)/g, '> | ')
	target.innerHTML = target.innerHTML.replace(/(>&nbsp;\|\s)/g, '> | ')
	target.innerHTML = target.innerHTML.replace(/(\s*\s\|\s\s*)/g, '</div> | ')
	target.innerHTML = target.innerHTML.replace(
		/\s*<\/div>\|\/<\/div>s*/g,
		'</div> | '
	)
	const re = /\s*\s\|\s\s*/,
		choices = target.innerHTML;
	let boxes = choices.split(re);
	(boxes = shuffle(boxes)),
		boxes = sequential;
	let list = '';
	list += '<ul id="selectable">';
	for (let r = 0; r < boxes.length; r++) {
		list =
			list +
			'<li class="ui-widget-content"><strong class="abc">' +
			alphabet[r].toUpperCase() +
			'</strong><div class="div-content">' +
			boxes[r] +
			'</div></li>'
	}
	list += '</ul>'
	target.innerHTML = list
}

const examples = document.getElementById('selectbox')
/**
 * REGEX: excludes "[A-Z] at the beginning of each line for copy from teamtreehouse.com"
 */
let match = examples.innerHTML
match = match.replace(
	/([A-Z])(<span\sclass="Apple-tab-span"\sstyle="white-space:pre">\s<\/span>)(.+?)/g,
	' | $3'
)
if (match !== examples.innerHTML) {
	match = match.replace(/\|/m, '')
	examples.innerHTML = match
}
/*----------  end  ----------*/

const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
divide(examples)
/*=====  End of DIVIDE BY ( "|") TO ANKI  ======*/

window.scrollTo(0, 0)
/*================================================
=            Processing of the relult           =
================================================*/
// let idTrue = document.getElementById('true'),
// idFalse = document.getElementById('false')
let ok = true;

divide(examples)

const correct = [],
	selectbox = document.querySelectorAll('#selectbox.back'),
	abcGutter = document.getElementsByClassName('ui-widget-content'),
	rowsOfSelectbox = document.querySelectorAll('#selectable li');

function clearClassName(el) {
	el.classList.remove('active-right')
	el.classList.remove('active-wrong')
}

for (let i = 0; i < rowsOfSelectbox.length; i++) {
	const anchor = rowsOfSelectbox[i].innerHTML.match(/\<([\/i]*)\>/)
	if (anchor !== null) {
		correct.push(i)
	}
	for (let z = 0; z < result.length; z++) {
		if (anchor !== null && anchor[1] === 'i' && i === result[z]) {
			abcGutter[i].classList.add('active-right')
			// console.log('right index: ', i)
		}
		if (anchor === null && i === result[z]) {
			abcGutter[i].classList.add('active-wrong')
			ok = false
		}
	}
}
if (correct.length !== result.length || result.length === 0) {
	ok = false
}
if (!ok) {
	for (let i = 0; i < rowsOfSelectbox.length; i++) {
		if (abcGutter[i].className === 'ui-widget-content active-right') {
			abcGutter[i].classList.remove('active-right')
			abcGutter[i].classList.add('active-wrong')
		}
	}
	// idFalse.classList.add('active')
	selectbox[0].classList.add('active-selectbox')

	/* Additional Quize by click*/
	selectbox[0].onclick = function () {
		selectbox[0].style.border = 'dashed 0.15em #F39814'
		if (this.className === 'back active-selectbox') {
			// idFalse.classList.remove('active')
			// idTrue.classList.add('active')
			selectbox[0].classList.remove('active-selectbox')
			for (let i = 0; i < abcGutter.length; i++) {
				clearClassName(abcGutter[i])
				for (let cor = 0; cor < correct.length; cor++) {
					if (i === correct[cor]) {
						abcGutter[i].classList.add('active-right')
					}
				}
			}
		} else {
			selectbox[0].classList.add('active-selectbox')
			// idTrue.classList.remove('active')
			// idFalse.classList.add('active')
			for (let i = 0; i < abcGutter.length; i++) {
				clearClassName(abcGutter[i])
				for (let res = 0; res < result.length; res++) {
					if (i === result[res]) {
						abcGutter[i].classList.add('active-wrong')
					}
				}
			}
		}
	}
}

if (ok) {
	// idTrue.classList.add('active')
	selectbox[0].classList.remove('active-selectbox')
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