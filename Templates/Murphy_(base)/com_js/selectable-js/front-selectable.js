/* exported sequential, arrayNum, shuffle */

window.scrollTo(0, 0)
/*--------------------DIVIDE BY ( "|")-------------------------*/
const shuffle = function (array) {
	let currentIndex = array.length,
		temporaryValue,
		randomIndex
	// While there remain elements to shuffle...
	while (0 !== currentIndex) {
		// Pick a remaining element...
		randomIndex = Math.floor(Math.random() * currentIndex)
		currentIndex -= 1
		// And swap it with the current element.
		temporaryValue = array[currentIndex]
		array[currentIndex] = array[randomIndex]
		array[randomIndex] = temporaryValue
	}
	return array
}
let sequential

const examples = document.querySelectorAll('#selectbox')[0]
/**
 * REGEX: excludes "[A-Z] at the beginning of each line"
 * @type {[type]}
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

const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')

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
	const re = /\s*\s\|\s\s*/
	const choices = target.innerHTML
	let boxes = choices.split(re)
	boxes = shuffle(boxes)
	sequential = boxes
	let list = ''
	list = list + '<ul id="selectable" class="selectable-front">'
	for (let i = 0; i < boxes.length; i++) {
		list =
			list +
			'<li class="ui-widget-content"><strong class="abc">' +
			alphabet[i].toUpperCase() +
			'</strong><div class="div-content">' +
			boxes[i] +
			'</div></li>'
	}
	list = list + '</ul>'
	target.innerHTML = list
}

divide(examples)

/*--------------------SELECTABLE-------------------------*/
const result = []
let arrayNum
const myListArray = document.querySelectorAll('#selectable>li')
document.querySelectorAll('#selectable')[0].onclick = function (e) {
	// e.preventDefault();
	// console.log(e.target);

	/* *****************
  Filter by <li> 
  ******************* */
	switch ('LI') {
		case e.target.tagName:
			e.target.classList.toggle('active-selecting')
			// e.target.classList.setAttribute('shown', 'true');
			break
		case e.target.parentNode.tagName:
			e.target.parentNode.classList.toggle('active-selecting')
			break
		case e.target.parentNode.parentNode.tagName:
			e.target.parentNode.parentNode.classList.toggle('active-selecting')
			break
		case e.target.parentNode.parentNode.parentNode.tagName:
			e.target.parentNode.parentNode.parentNode.classList.toggle(
				'active-selecting'
			)
			break
		case e.target.parentNode.parentNode.parentNode.parentNode.tagName:
			e.target.parentNode.parentNode.parentNode.parentNode.classList.toggle(
				'active-selecting'
			)
			break
	}
	for (let i = 0; i < myListArray.length; i++) {
		if (
			myListArray[i].className === 'ui-widget-content active-selecting' &&
			myListArray[i].getAttribute('shown') !== 'true'
		) {
			myListArray[i].setAttribute('shown', 'true')
			result.push(i)
			document.getElementsByClassName('abc')[i].classList.add('active-abc')
		} else if (
			myListArray[i].className === 'ui-widget-content' &&
			myListArray[i].getAttribute('shown') !== 'false'
		) {
			myListArray[i].setAttribute('shown', 'false')
			const index = result.indexOf(i)
			if (index > -1) {
				result.splice(index, 1)
			}
			document.getElementsByClassName('abc')[i].classList.remove('active-abc')
		}
	}
	// console.log("result: ", result);
}

/* -----------------------------
Show/hide some text by <b></b> or <i></i> for front/back sides of card
------------------------------- */
// var line = document.querySelector(".question_front").innerHTML;
// var cloze = line.match(/<i>(.*?)<\/i>/gi)
// for (var i = 0; i < cloze.length; i++) {
// 	line = line.replace(cloze[i], " ..... ")
// }
// document.querySelector(".question_front").innerHTML = line;
