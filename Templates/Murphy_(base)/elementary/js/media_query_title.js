/*--------------------Media Query responsive-------------------------*/
// media query change 769
function appendixesChangeName(mqiPad) { // window width is less than 768px
	if (mqiPad.matches) {
		p_AppButton[0].textContent = '1. Active and passive';
		p_AppButton[1].textContent = '2. List of irregular verbs (~ Unit 24)';
		p_AppButton[2].textContent = '3. Irregular verbs in groups';
		p_AppButton[3].textContent = '4. Short forms (he’s / I’d / don’t etc.)';
		p_AppButton[4].textContent = '5. Spelling';
		p_AppButton[5].textContent = '6. Phrasal verbs (take off / give up etc.)';
		p_AppButton[6].textContent = '7. Phrasal verbs+object (put out a fire/give up your job etc.)';
		for (var i = 0; i < headingTable.length; i++) {
			headingTable[i].style.display = 'none';
		}
	}
	else {
		p_AppButton[0].textContent = '1'; // window width is at least 768px
		p_AppButton[1].textContent = '2';
		p_AppButton[2].textContent = '3';
		p_AppButton[3].textContent = '4';
		p_AppButton[4].textContent = '5';
		p_AppButton[5].textContent = '6';
		p_AppButton[6].textContent = '7';
		for (var x = 0; x < headingTable.length; x++) {
			headingTable[x].style.display = 'block';
		}
	}
}
if (matchMedia) {
	var mqiPad = window.matchMedia("(max-width: 768px)");
	mqiPad.addListener(appendixesChangeName);
	appendixesChangeName(mqiPad);
}