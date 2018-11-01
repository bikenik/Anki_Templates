let box1None,
	box2None = true;
if (document.querySelector("div.add_words1")) {
	const addWordsBox1 = document.querySelector("div.add_words1");
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
if (
	document.getElementById("question-audio") &&
	questionAudio.innerHTML === ""
) {
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
	const id = hint[1].getAttribute("id");
	const choices = hint[1].innerHTML;
	const boxes = choices.split(" | ");
	let list = "";
	for (let j = 0; j < boxes.length; j++) {
		const arr = boxes[j].split(";");
		if (j !== 0) {
			list = list + '<p class="choices-box-delimiter"></p>';
		}
		list = list + "<ul>";
		for (let i = 0; i < arr.length; i++) {
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
	document.querySelector("a.hint").style.display = "none";
	document.querySelector("div.hint").style.display = "block";
}
