window.scrollTo(0, 0)
/*--------------------DIVIDE BY ( "|")-------------------------*/
function shuffle(array) {
	var currentIndex = array.length,
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
var sequential

var examples = document.querySelectorAll('#selectbox')[0]
/**
 * REGEX: excludes "[A-Z] at the beginning of each line"
 * @type {[type]}
 */
var match = examples.innerHTML
match = match.replace(
	/([A-Z])(<span\sclass="Apple-tab-span"\sstyle="white-space:pre">\s<\/span>)(.+?)/g,
	' | $3'
)
if (match !== examples.innerHTML) {
	match = match.replace(/\|/m, '')
	examples.innerHTML = match
}

var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')

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
	var re = /\s*\s\|\s\s*/
	var choices = target.innerHTML
	var boxes = choices.split(re)
	boxes = shuffle(boxes)
	sequential = boxes
	var list = ''
	list = list + '<ul id="selectable" class="selectable-front">'
	for (var i = 0; i < boxes.length; i++) {
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
var result = []
var arrayNum
var myListArray = document.querySelectorAll('#selectable>li')
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
	for (var i = 0; i < myListArray.length; i++) {
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
			var index = result.indexOf(i)
			if (index > -1) {
				result.splice(index, 1)
			}
			document.getElementsByClassName('abc')[i].classList.remove('active-abc')
		}
	}
	// console.log("result: ", result);
}
