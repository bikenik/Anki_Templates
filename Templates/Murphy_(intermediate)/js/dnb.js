$(function() {
  $("#sortable").sortable();
  $("#sortable").disableSelection();
});

$("#sortable").on("sortstop", function() {
  $("#count").html(countWordsInCorrectPlace());
  renderWordShadows();
});

function countWordsInCorrectPlace() {
  var total = $("#sortable > li").length;
  $("#total").html(total);
  var count = $("#sortable").children();
  return count = jQuery.makeArray(count)
    .reduce(function(sum, curr, index) {
      if (+curr.dataset.rank === index) {
        return sum + 1;
      } else {
        return sum;
      }
    }, 0);
}
function renderWordShadows(){
  $("#sortable > li").each(function(index){
    if(index === +$(this).data("rank")){
      //console.log(index + " is green")
      $(this).removeClass("red-shadow")
             .addClass("green-shadow");
    }
    else {
      //console.log(index + " is red");
      $(this).removeClass("green-shadow")
             .addClass("red-shadow");      
    }
  });
  
}
var countMe = document.getElementById('count').textContent
var theAnswer = countMe
    .split(" ")
    .map(function(word, index){
      return {text: word, trueIndex: index}
    });


function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex ;

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

var myWords = shuffle(theAnswer);

function renderWords(array){
  array.forEach(function(item, index){
    $("#sortable").append("<li data-rank='"+(item.trueIndex)+"'>"+item.text+"</li>")
  });
  $("#sortable > li").addClass("ui-state-default");
}

renderWords(myWords);
renderWordShadows();
$("#count").html(countWordsInCorrectPlace());