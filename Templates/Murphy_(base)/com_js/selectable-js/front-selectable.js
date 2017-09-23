window.scrollTo(0, 0);
/*--------------------DIVIDE BY ( "|")-------------------------*/
	function shuffle(array) {
		var currentIndex = array.length,
        temporaryValue, randomIndex;
		// While there remain elements to shuffle...
		while (0 !== currentIndex) {
			// Pick a remaining element...
			randomIndex = Math.floor(Math.random() * currentIndex);
			currentIndex -= 1;
			// And swap it with the current element.
			temporaryValue = array[currentIndex];
			array[currentIndex] = array[randomIndex];
			array[randomIndex] = temporaryValue;
		}
		return array;
	}
var sequential;

var examples = $("#selectbox")[0];
var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
function divide(target){
	target.innerHTML = target.innerHTML.replace(/(\s*\/<span class="Apple-tab-span" style="white-space:pre"> <\/span>\s*)/g, "");
	target.innerHTML = target.innerHTML.replace(/(\s*\|\s*)/g, "</div>|");
	target.innerHTML = target.innerHTML.replace(/\s*<\/div>\|\/<\/div>s*/g, "</div>|");
	var re = /\s*\|\s*/;
var choices = target.innerHTML;
	var boxes = choices.split(re);
	boxes = shuffle(boxes);
	sequential = boxes;
var list = "";
list = list + '<ul id="selectable">';
			for (var i = 0; i < boxes.length; i++) {
			list = list + '<li class="ui-widget-content"><strong class="abc">' + letters[i] + '</strong><div class="div-content">' + boxes[i] + '</div></li>';
		}
list = list + "</ul>";
target.innerHTML = list;
}

	divide(examples);

/*--------------------SELECTABLE-------------------------*/
	var result;
  var arrayNum;
	$(function () {
		$("a").bind( "mousedown touchstart", function() {
			// e.preventDefault();
			event.stopPropagation();
});
		$("#selectable").bind( "mousedown touchstart", function(e) {
			e.preventDefault();
			e.metaKey = true;
}).selectable({
			filter: "li",
      selecting: function(event,ui) {
      	ui.selecting.classList.toggle("active-selecting");
      },
      unselecting: function(event,ui) {
      	ui.unselecting.classList.toggle("active-selecting");
      },
      selected: function( event, ui ) {
        console.log(ui.selected);
        function whiteLine(){
	      }
	      setTimeout(whiteLine, 10);
        ui.selected.children[0].classList.toggle("active-abc");
        $('.ui-selected').removeClass('ui-selected');
      },
      unselected: function( event, ui ) {
        console.log(ui.unselected);
        ui.unselected.children[0].classList.toggle("active-abc");
      },
      /**
       * [stop description]
       * @return {[result]} [getting value for back side of card]
       */
      stop: function() {
          result = $(".active-abc", this).map(function() {
              return $(".abc").index(this);
              // console.log("result = " + result);
          }).get();
          console.log("result = " + result);
      }
		});
	});