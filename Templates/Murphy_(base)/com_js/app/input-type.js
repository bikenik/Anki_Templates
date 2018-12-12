/* jshint browser: true */

// Если cloze содержит несколько вариантов ответа, то оставляем только один вариант для лучшей читаемости, остальные и так будут показаны при сравнении введенного на клавиатуре ответа.
let cloze = document.querySelectorAll(".cloze");
if (document.querySelector(".arrow_06B13_line_back")) {
	for (let z = 0; z < cloze.length; z++) {
		cloze[z].textContent = cloze[z].textContent.replace(/^([^|]*).*$/, "$1");
		cloze[z].textContent = cloze[z].textContent.replace(/^([^/]*).*$/, "$1");
	}
}
/*--------------------Variables-------------------------*/
const textbox = document.getElementById("typeans");
const clozes = document.getElementsByClassName("cloze");
const skips = document.getElementsByClassName('cloze');

/*--------------------comma place-------------------------*/
let fields = [];
function updateMain() {
	let str = "";
	// let previous = "";
	const maxLength = fields.length;
	for (let i = 0; i < maxLength; i++) {
		//add the comma beforehand instead of afterwards,
		//this avoids the need to explicitly handle consolidating
		//two consecutive fields with the same value.
		// let addComma = (i !== 0 && toAdd !== previous);
		const toAdd = fields[i].value;
		if (i !== 0) {
			str += ", ";
		}

		// if(toAdd === previous) {continue;} //do nothing if the same data is consecutive.
		str += toAdd;
		// previous = toAdd;
	}
	textbox.value = str;
	return true;
}

/*--------------------Dynamic Resizable Typeans-------------------------*/
function resizable(input, factor) {
	const buffer = document.createElement("div");
	buffer.className = "buffer";
	//вставляем скрытый div.buffer
	input.parentNode.insertBefore(buffer, input.nextSibling);
	input.oninput = function () {
		this.nextElementSibling.innerHTML = this.value;
		this.style.width = this.nextElementSibling.clientWidth + factor + "px";
	};
	// input.style.display = "none";
}
//textbox.addEventListener('keypress', function() {
//    this.style.width = ((this.value.length + 1) * 20) + 'px';
//    });

/*--------------------span1 and span2 function-------------------------*/
cloze = clozes[0];

function span12(textbox) {
	const span1 = document.createElement('span');
	span1.style.position = 'relative';
	span1.style.display = 'inline-block';
	span1.style.whiteSpace = 'nowrap';
	span1.style.maxWidth = '100%';
	let typeansWidth = ((cloze.textContent.length + 1) * 0.49) + 'em'; // change it for different fonts
	span1.style.minWidth = typeansWidth;
	textbox.style.width = typeansWidth;
	if (cloze.textContent.length > 70) {
		typeansWidth = '100%';
		span1.style.minWidth = '99%';
	} else if (cloze.textContent.length > 60) {
		typeansWidth = '100%';
		span1.style.minWidth = '92%';
	} else if (cloze.textContent.length > 50) {
		typeansWidth = '100%';
		span1.style.minWidth = '87%';
	} else if (cloze.textContent.length > 40) {
		typeansWidth = '100%';
		span1.style.minWidth = '80%';
	}
	span1.style.webkitTransition = 'width 0.25s';
	const span2 = document.createElement('span');
	span2.style.position = 'absolute';
	span2.style.left = '1px';
	textbox.parentNode.insertBefore(span1, textbox);
	span1.appendChild(textbox);
	span1.appendChild(span2);
	textbox.setAttribute("onkeydown",
		"this.nextSibling.nextSibling.style.visibility='hidden';" +
		"this.style.backgroundColor='default';");
	span2.style.width = '100%';
	span2.style.height = '1.5em';
	textbox.style.backgroundColor = 'transparent !important';
	textbox.style.fontStyle = 'italic';
	textbox.style.fontSize = '1em';
	textbox.style.textAlign = 'center';
	textbox.style.minWidth = typeansWidth;
	resizable(textbox, 7); // change it for different fonts
	span2.style.overflow = 'hidden';
	span2.style.textOverflow = 'ellipsis';
	textbox.style.textAlign = 'center';
	span2.style.textAlign = 'center'; // 'left';
	span2.innerHTML = cloze.innerHTML.slice(1, -1);
	span2.style.zIndex = "-1";
	span2.setAttribute("title", " " + cloze.innerHTML.slice(1, -1) + " ");
}/* End span1 and span2 function*/

/*----------------------Main function---------------------*/
const mungeCloze = function () {
	if (clozes.length === 0) {return;}
	if (textbox === null) { // remove square brackets, if there is no type: on this side of the card
		for (let i = 0; i < skips.length; i++) {
			skips[i].innerHTML = skips[i].innerHTML.slice(1, -1);
		}
		return;
	}
	const needsWork = (clozes.length > 1);
	fields = [];
	if (!needsWork) {
		if (cloze !== null) {
			textbox.removeAttribute("class");
			const container = cloze.parentNode;
			container.insertBefore(textbox, cloze);
			container.removeChild(cloze);
			textbox.style.display = ""; //make visible.
			textbox.setAttribute("class", "typeans");
			// textbox.setAttribute("placeholder", cloze.innerHTML.slice(1,-1));
			textbox.setAttribute("title", " " + cloze.innerHTML.slice(1, -1) + " ");
			span12(textbox);
		}
	} else {
		//instead of inserting, we should clone the textbox and insert that into the deletions.
		const length = clozes.length;
		const originalTextbox = textbox;
		for (let z = 0; z < length; z++) {
			cloze = clozes[z];
			if (cloze === null) {continue;}
			const textboxToReplace = originalTextbox.cloneNode(true);
			textboxToReplace.id = "typeans" + (z + 1);
			textboxToReplace.setAttribute("class", "typeans");
			textboxToReplace.onkeyup = updateMain;
			// textboxToReplace.setAttribute("placeholder", cloze.innerHTML.slice(1,-1));
			textboxToReplace.setAttribute("title", " " + cloze.innerHTML.slice(1, -1) + " ");
			const containerElse = cloze.parentNode;
			containerElse.insertBefore(textboxToReplace, cloze);
			span12(textboxToReplace);
			fields.push(textboxToReplace);
		}
		while (clozes.length > 0) {
			cloze = clozes[0];
			const containerAll = cloze.parentNode;
			containerAll.removeChild(cloze);
		}
		originalTextbox.style.display = "none";
		// -- focus after all these tricks is on a hidden field
		// -- Enter the first field from the keyboard - by pressing Tab
		document.getElementById('typeans1').focus();
		// -- or let the cursor immediately be in this field, but then it is not visible the placeholder=
	}
}; // End of mungeCloze

mungeCloze();