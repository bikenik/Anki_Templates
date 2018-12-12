const button_1 = new MenuElements(
	appendixes[0],
	buttons[0],
	buttons[1],
	overlay[0],
	mainCircle[0],
	p_AppButton[0]
),
	button_2 = new MenuElements(
		appendixes[1],
		buttons[1],
		buttons[2],
		overlay[1],
		mainCircle[1],
		p_AppButton[1]
	),
	button_3 = new MenuElements(
		appendixes[2],
		buttons[2],
		buttons[3],
		overlay[2],
		mainCircle[2],
		p_AppButton[2]
	),
	button_4 = new MenuElements(
		appendixes[3],
		buttons[3],
		buttons[4],
		overlay[3],
		mainCircle[3],
		p_AppButton[3]
	),
	button_5 = new MenuElements(
		appendixes[4],
		buttons[4],
		buttons[5],
		overlay[4],
		mainCircle[4],
		p_AppButton[4]
	),
	button_6 = new MenuElements(
		appendixes[5],
		buttons[5],
		buttons[6],
		overlay[5],
		mainCircle[5],
		p_AppButton[5]
	),
	button_7 = new MenuElements(
		appendixes[6],
		buttons[6],
		buttons[7],
		overlay[6],
		mainCircle[6],
		p_AppButton[6]
	),
	menuElements = [
		button_1,
		button_2,
		button_3,
		button_4,
		button_5,
		button_6,
		button_7
	];

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