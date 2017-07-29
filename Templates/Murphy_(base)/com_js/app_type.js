/* jshint browser: true */

/*--------------------Variables-------------------------*/
var textbox = document.getElementById("typeans");
var clozes = document.getElementsByClassName("cloze");
var skips = document.getElementsByClassName('cloze');
var textbox = document.getElementById("typeans");

/*--------------------comma place-------------------------*/
var fields = [];
function updateMain() {
var str = "";
// var previous = "";
var maxLength = fields.length;
for (var i = 0; i < maxLength; i++) {
//add the comma beforehand instead of afterwards,
//this avoids the need to explicitly handle consolidating
//two consecutive fields with the same value.
// var addComma = (i !== 0 && toAdd !== previous);
var toAdd = fields[i].value;
if(i !== 0) {
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
function resizable (el, factor) {
  var int = Number(factor) || 7.7;
  function resize() {
    el.style.width = ((el.value.length+1) * int) + 'em';
  }
  var e = 'keyup,keypress,focus,blur,change,onresize'.split(',');
  for (var i in e) {el.addEventListener(e[i],resize,false);}
  resize(); 
}
//textbox.addEventListener('keypress', function() {
//    this.style.width = ((this.value.length + 1) * 20) + 'px';
//    });

/*--------------------span1 and span2 function-------------------------*/
var cloze = clozes[0];

function span12(textbox) {
var span1 = document.createElement('span');
span1.style.position = 'relative';
span1.style.display = 'inline-block';
span1.style.whiteSpace = 'nowrap';
span1.style.maxWidth = '100%';
var typeansWidth = ((cloze.textContent.length + 1) * 0.42)+ 'em'; // change it for different fonts
span1.style.minWidth = typeansWidth;
textbox.style.width = typeansWidth;
    if      (cloze.textContent.length > 70){
      typeansWidth = '100%';
    span1.style.minWidth = '99%';
  } else if (cloze.textContent.length > 60){
    typeansWidth = '100%';
    span1.style.minWidth = '92%';
  } else if (cloze.textContent.length > 50){
    typeansWidth = '100%';
    span1.style.minWidth = '87%';
  } else if (cloze.textContent.length > 40){
    typeansWidth = '100%';
    span1.style.minWidth = '80%';
  }
span1.style.webkitTransition = 'width 0.25s';
var span2 = document.createElement('span');
span2.style.position = 'absolute';
span2.style.left = '1px';
    textbox.parentNode.insertBefore(span1, textbox);
span1.appendChild(textbox);
span1.appendChild(span2);
    textbox.setAttribute("onkeydown",
     "this.nextSibling.style.visibility='hidden';"+
     "this.style.backgroundColor='default';");
span2.style.width =  '100%';
span2.style.height = '1.5em';
textbox.style.backgroundColor = 'transparent !important';
textbox.style.fontStyle = 'italic';
textbox.style.fontSize = '1em'; 
textbox.style.textAlign = 'center';
textbox.style.minWidth = typeansWidth;
resizable(textbox,0.42); // change it for different fonts
span2.style.overflow = 'hidden';
span2.style.textOverflow = 'ellipsis';
    textbox.style.textAlign = 'center';
span2.style.textAlign = 'center'; // 'left';
span2.innerHTML = cloze.innerHTML.slice(1,-1);
 span2.style.zIndex = "-1";
    span2.setAttribute("title", " "+cloze.innerHTML.slice(1,-1)+" ");
}/* End span1 and span2 function*/

/*----------------------Main function---------------------*/
var mungeCloze = function() {
if(clozes.length === 0)
{return;}
if(textbox === null) { // remove square brackets, if there is no type: on this side of the card
 for ( var i = 0; i < skips.length; i++ ) {
  skips[i].innerHTML = skips[i].innerHTML.slice(1,-1);
 }
return;
}
var needsWork = (clozes.length > 1);
fields = [];
if(!needsWork) {
if(cloze !== null) {
    textbox.removeAttribute("class");
    var container = cloze.parentNode;
    container.insertBefore(textbox, cloze);
    container.removeChild(cloze);
    textbox.style.display = ""; //make visible.
    textbox.setAttribute("class", "typeans");
    // textbox.setAttribute("placeholder", cloze.innerHTML.slice(1,-1));
    textbox.setAttribute("title", " "+cloze.innerHTML.slice(1,-1)+" ");
  span12(textbox);
}
} else {
      //instead of inserting, we should clone the textbox and insert that into the deletions.
      var length = clozes.length;
      var originalTextbox = textbox;
      for (var z = 0; z < length; z++) {
          cloze = clozes[z];
          if(cloze === null)
        {continue;}
          var textboxToReplace = originalTextbox.cloneNode(true);
          textboxToReplace.id = "typeans" + (z+1);
          textboxToReplace.setAttribute("class", "typeans");
          textboxToReplace.onkeyup = updateMain;
          // textboxToReplace.setAttribute("placeholder", cloze.innerHTML.slice(1,-1));
          textboxToReplace.setAttribute("title", " "+cloze.innerHTML.slice(1,-1)+" ");
          var containerElse = cloze.parentNode;
          containerElse.insertBefore(textboxToReplace, cloze);
          span12(textboxToReplace);
          fields.push(textboxToReplace);
      }
      while(clozes.length > 0) {
          cloze = clozes[0];
          var containerAll = cloze.parentNode;
          containerAll.removeChild(cloze);
      }
      originalTextbox.style.display = "none";
      // -- фокус после всех этих хитростей оказывается на скрытом поле
      // -- войти в первое поле с клавиатуры - нажатием Tab
      document.getElementById('typeans1').focus();
      // -- или пусть курсор сразу будет в этом поле, но тогда в нём не виден placeholder=
    }
}; // End of mungeCloze

mungeCloze();