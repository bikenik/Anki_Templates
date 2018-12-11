/* jshint browser: true */
/*--------------------Variables-------------------------*/
function updateMain(){for(var e="",t=fields.length,l=0
// var previous = "";
;l<t;l++){
//add the comma beforehand instead of afterwards,
//this avoids the need to explicitly handle consolidating
//two consecutive fields with the same value.
// var addComma = (i !== 0 && toAdd !== previous);
var n;0!==l&&(e+=", "),
// if(toAdd === previous) {continue;} //do nothing if the same data is consecutive.
e+=fields[l].value}return textbox.value=e,!0}
/*--------------------Dynamic Resizable Typeans-------------------------*/function resizable(e,t){function l(){e.style.width=(e.value.length+1)*n+"em"}var n=Number(t)||7.7,s="keyup,keypress,focus,blur,change,onresize".split(",");for(var i in s)e.addEventListener(s[i],l,!1);l()}
//textbox.addEventListener('keypress', function() {
//    this.style.width = ((this.value.length + 1) * 20) + 'px';
//    });
/*--------------------span1 and span2 function-------------------------*/function span12(e){var t=document.createElement("span");t.style.position="relative",t.style.display="inline-block",t.style.whiteSpace="nowrap",t.style.maxWidth="100%";var l=.49*(cloze.textContent.length+1)+"em";// change it for different fonts
t.style.minWidth=l,e.style.width=l,70<cloze.textContent.length?(l="100%",t.style.minWidth="99%"):60<cloze.textContent.length?(l="100%",t.style.minWidth="92%"):50<cloze.textContent.length?(l="100%",t.style.minWidth="87%"):40<cloze.textContent.length&&(l="100%",t.style.minWidth="80%"),t.style.webkitTransition="width 0.25s";var n=document.createElement("span");n.style.position="absolute",n.style.left="1px",e.parentNode.insertBefore(t,e),t.appendChild(e),t.appendChild(n),e.setAttribute("onkeydown","this.nextSibling.style.visibility='hidden';this.style.backgroundColor='default';"),n.style.width="100%",n.style.height="1.5em",e.style.backgroundColor="transparent !important",e.style.fontStyle="italic",e.style.fontSize="1em",e.style.textAlign="center",e.style.minWidth=l,resizable(e,.49),// change it for different fonts
n.style.overflow="hidden",n.style.textOverflow="ellipsis",e.style.textAlign="center",n.style.textAlign="center",// 'left';
n.innerHTML=cloze.innerHTML.slice(1,-1),n.style.zIndex="-1",n.setAttribute("title"," "+cloze.innerHTML.slice(1,-1)+" ")}/* End span1 and span2 function*/
/*----------------------Main function---------------------*/var textbox=document.getElementById("typeans"),clozes=document.getElementsByClassName("cloze"),skips=document.getElementsByClassName("cloze"),textbox=document.getElementById("typeans"),fields=[],cloze=clozes[0],mungeCloze=function(){if(0!==clozes.length)if(null!==textbox){var e=1<clozes.length;if(fields=[],e){for(
//instead of inserting, we should clone the textbox and insert that into the deletions.
var t=clozes.length,l=textbox,n=0;n<t;n++)if(null!==(cloze=clozes[n])){var s=l.cloneNode(!0),i;s.id="typeans"+(n+1),s.setAttribute("class","typeans"),s.onkeyup=updateMain,
// textboxToReplace.setAttribute("placeholder", cloze.innerHTML.slice(1,-1));
s.setAttribute("title"," "+cloze.innerHTML.slice(1,-1)+" "),cloze.parentNode.insertBefore(s,cloze),span12(s),fields.push(s)}for(;0<clozes.length;){var o;(cloze=clozes[0]).parentNode.removeChild(cloze)}l.style.display="none",
// -- focus after all these tricks is on a hidden field
// -- Enter the first field from the keyboard - by pressing Tab
document.getElementById("typeans1").focus()}else if(null!==cloze){textbox.removeAttribute("class");var r=cloze.parentNode;r.insertBefore(textbox,cloze),r.removeChild(cloze),textbox.style.display="",//make visible.
textbox.setAttribute("class","typeans"),
// textbox.setAttribute("placeholder", cloze.innerHTML.slice(1,-1));
textbox.setAttribute("title"," "+cloze.innerHTML.slice(1,-1)+" "),span12(textbox)}}else// remove square brackets, if there is no type: on this side of the card
for(var a=0;a<skips.length;a++)skips[a].innerHTML=skips[a].innerHTML.slice(1,-1)};// End of mungeCloze
mungeCloze();