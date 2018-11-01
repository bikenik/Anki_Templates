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
		for (let i = 0; i < headingTable.length; i++) {
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
		//		for (var x = 0; x < headingTable.length; x++) {
		//			headingTable[x].style.display = 'block';
		//		}
	}
}
if (matchMedia) {
	const mqiPad = window.matchMedia("(max-width: 768px)");
	mqiPad.addListener(appendixesChangeName);
	appendixesChangeName(mqiPad);
}