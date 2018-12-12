"use strict";function appendixesHideAll(){for(var e=0;e<appendixes.length;e++)appendixes[e].classList.remove("active")}function buttonsColorDefault(){for(var e=0;e<overlay.length;e++)overlay[e].classList.remove("active");for(var t=0;t<mainCircle.length;t++)mainCircle[t].classList.remove("active");for(var n=0;n<p_AppButton.length;n++)p_AppButton[n].classList.remove("active")}function hideHeader(){header.classList.remove("active_1"),header.classList.remove("active_2"),unitTableDiv.classList.remove("active"),mainTable.classList.remove("active"),overlayTitleM.classList.remove("active"),overlayTitleL.classList.remove("active"),arrowLine.style.opacity="1",textP_Title.classList.remove("active")}function MenuElements(e,t,n,o,l,i){this.appendix=e,this.circle=t,this.beforeEl=n,this.targetM=o,this.targetL=l,this.targetP=i}function updateMain(){for(var e="",t=fields.length,n=0;n<t;n++){var o;0!==n&&(e+=", "),e+=fields[n].value}return textbox.value=e,!0}function resizable(e,t){var n=document.createElement("div");n.className="buffer",e.parentNode.insertBefore(n,e.nextSibling),e.oninput=function(){this.nextElementSibling.innerHTML=this.value,this.style.width=this.nextElementSibling.clientWidth+t+"px"}}function span12(e){var t=document.createElement("span");t.style.position="relative",t.style.display="inline-block",t.style.whiteSpace="nowrap",t.style.maxWidth="100%";var n=.49*(cloze.textContent.length+1)+"em";t.style.minWidth=n,e.style.width=n,70<cloze.textContent.length?(n="100%",t.style.minWidth="99%"):60<cloze.textContent.length?(n="100%",t.style.minWidth="92%"):50<cloze.textContent.length?(n="100%",t.style.minWidth="87%"):40<cloze.textContent.length&&(n="100%",t.style.minWidth="80%"),t.style.webkitTransition="width 0.25s";var o=document.createElement("span");o.style.position="absolute",o.style.left="1px",e.parentNode.insertBefore(t,e),t.appendChild(e),t.appendChild(o),e.setAttribute("onkeydown","this.nextSibling.nextSibling.style.visibility='hidden';this.style.backgroundColor='default';"),o.style.width="100%",o.style.height="1.5em",e.style.backgroundColor="transparent !important",e.style.fontStyle="italic",e.style.fontSize="1em",e.style.textAlign="center",e.style.minWidth=n,resizable(e,7),o.style.overflow="hidden",o.style.textOverflow="ellipsis",e.style.textAlign="center",o.style.textAlign="center",o.innerHTML=cloze.innerHTML.slice(1,-1),o.style.zIndex="-1",o.setAttribute("title"," "+cloze.innerHTML.slice(1,-1)+" ")}function appendixesChangeName(e){if(e.matches){p_AppButton[0].textContent="1. Active and passive",p_AppButton[1].textContent="2. List of irregular verbs (~ Unit 24)",p_AppButton[2].textContent="3. Irregular verbs in groups",p_AppButton[3].textContent="4. Short forms (he’s / I’d / don’t etc.)",p_AppButton[4].textContent="5. Spelling",p_AppButton[5].textContent="6. Phrasal verbs (take off / give up etc.)",p_AppButton[6].textContent="7. Phrasal verbs+object (put out a fire/give up your job etc.)";for(var t=0;t<headingTable.length;t++)headingTable[t].style.display="none"}else{p_AppButton[0].textContent="1",p_AppButton[1].textContent="2",p_AppButton[2].textContent="3",p_AppButton[3].textContent="4",p_AppButton[4].textContent="5",p_AppButton[5].textContent="6",p_AppButton[6].textContent="7";for(var n=0;n<headingTable.length;n++)headingTable[n].style.display="block"}}var question=document.querySelector(".question"),exampleAnswerHide=document.querySelector(".img_example"),el=question,questionAudio=document.getElementById("question-audio"),body=document.getElementById(body),buttons=document.getElementsByClassName("circle"),buttonsFirst=document.getElementsByClassName("circle"),mainCircle=document.getElementsByClassName("mainCircle"),overlay=document.getElementsByClassName("overlay"),p_AppButton=document.getElementsByClassName("p_app_button"),gridPad=document.getElementsByClassName("grid-pad"),appendixes=document.getElementsByClassName("appendixes"),headingTable=document.getElementsByClassName("heading"),buttonsClass=document.querySelector(".buttons"),buttonAllClose=document.querySelector(".header-close"),bodyCard=document.querySelector(".card"),overlayTitleM=document.querySelector("#overlay_title"),overlayTitleL=document.querySelector(".mainCircle_title"),header=document.querySelector(".header"),textP_Title=document.getElementById("p_button"),arrowLine=document.querySelector(".arrow_06B13_line"),circlePositionerTitle=document.querySelector(".circlePositioner_title"),hamburgerMain=document.querySelector(".hamburger--arrowalt-r");document.querySelector(".arrow_06B13_line_back")&&(arrowLine=document.querySelector(".arrow_06B13_line_back"),window.scrollTo(0,0)),document.querySelector(".circlePositioner_title_back")&&(circlePositionerTitle=document.querySelector(".circlePositioner_title_back")),document.querySelector(".hamburger--arrowalt")&&(hamburgerMain=document.querySelector(".hamburger--arrowalt"));var unitTableDiv=document.querySelector(".unit_table"),mainTable=document.querySelector(".main_table"),modalButton=document.querySelector(".myButt"),modalWrap=document.querySelector(".modal__wrap"),materialIcons=document.querySelector(".material-icons"),modalOverlay=document.querySelector(".modal__overlay"),buttonGambur=document.querySelector(".gamb-wrap");document.querySelector(".gamb-wrap-back")&&(buttonGambur=document.querySelector(".gamb-wrap-back"));var addWordsBox2=document.querySelector("div.add_words2"),unitNumber=document.querySelector(".th_1"),layerButton=document.querySelector(".layer"),highlight=document.querySelector("div.highlight"),hr=document.getElementsByTagName("hr"),hint=document.querySelectorAll(".hint");MenuElements.prototype.app=function(){function e(e){window.innerWidth<769&&buttonsClass.insertBefore(e,buttonsClass.firstChild)}function t(e,t){window.innerWidth<769&&buttonsClass.insertBefore(e,t)}function n(e){window.innerWidth<769&&buttonsClass.appendChild(e)}function o(){window.innerWidth<769&&(buttonsFirst[0].style.paddingBottom="0")}function l(){window.innerWidth<769&&(buttonsFirst[0].style.paddingBottom="2em")}function i(e){for(var t=0;t<appendixes.length;t++)appendixes[t].classList.remove("active"),e.classList.add("active")}function a(e,t,n){for(var o=0;o<overlay.length;o++)overlay[o].classList.remove("active"),e.classList.add("active");for(var l=0;l<mainCircle.length;l++)mainCircle[l].classList.remove("active"),t.classList.add("active");for(var i=0;i<p_AppButton.length;i++)p_AppButton[i].classList.remove("active"),n.classList.add("active")}if("appendixes active"===this.appendix.className)this.appendix.classList.toggle("active"),this.targetM.classList.toggle("active"),this.targetL.classList.toggle("active"),this.targetP.classList.toggle("active"),header.classList.remove("active_2"),buttonAllClose.classList.remove("active"),bodyCard.style.position=null,bodyCard.style["overflow-y"]="auto",arrowLine.style.opacity="1",o(),circlePositionerTitle.classList.remove("active"),t(this.circle,this.beforeEl),this.circle===buttons[6]&&n(this.circle);else{for(var s=this.appendix.scrollTop=0;s<gridPad.length;s++)gridPad[s].scrollTop=0;e(this.circle,this.beforeEl),header.classList.add("active_2"),bodyCard.style.position="fixed",bodyCard.scrollTop=0,bodyCard.style["overflow-y"]="hidden",bodyCard.scrollTop=0,unitTableDiv.classList.remove("active"),i(this.appendix),a(this.targetM,this.targetL,this.targetP),buttonAllClose.classList.add("active"),l(),circlePositionerTitle.classList.add("active"),arrowLine.style.opacity="0"}var r=this.circle,c=this.beforeEl;buttonAllClose.onclick=function(){o(),t(r,c),this.circle===buttons[6]&&n(this.circle),appendixesHideAll(),buttonsColorDefault(),hideHeader(),circlePositionerTitle.classList.remove("active"),bodyCard.style.position=null,buttonAllClose.classList.remove("active"),bodyCard.style["overflow-y"]="auto"}};var button_1=new MenuElements(appendixes[0],buttons[0],buttons[1],overlay[0],mainCircle[0],p_AppButton[0]),button_2=new MenuElements(appendixes[1],buttons[1],buttons[2],overlay[1],mainCircle[1],p_AppButton[1]),button_3=new MenuElements(appendixes[2],buttons[2],buttons[3],overlay[2],mainCircle[2],p_AppButton[2]),button_4=new MenuElements(appendixes[3],buttons[3],buttons[4],overlay[3],mainCircle[3],p_AppButton[3]),button_5=new MenuElements(appendixes[4],buttons[4],buttons[5],overlay[4],mainCircle[4],p_AppButton[4]),button_6=new MenuElements(appendixes[5],buttons[5],buttons[6],overlay[5],mainCircle[5],p_AppButton[5]),button_7=new MenuElements(appendixes[6],buttons[6],buttons[7],overlay[6],mainCircle[6],p_AppButton[6]),menuElements=[button_1,button_2,button_3,button_4,button_5,button_6,button_7];button_1.circle.onclick=function(){menuElements[0].app()},button_2.circle.onclick=function(){menuElements[1].app()},button_3.circle.onclick=function(){menuElements[2].app()},button_4.circle.onclick=function(){menuElements[3].app()},button_5.circle.onclick=function(){menuElements[4].app()},button_6.circle.onclick=function(){menuElements[5].app()},button_7.circle.onclick=function(){menuElements[6].app()},modalButton.onclick=function(){"header base active_1"===header.className&&hamburgerMain&&hamburgerMain.classList.toggle("is-active"),modalOverlay.style.display="block",modalOverlay.style.zIndex="800",setTimeout(function(){modalOverlay.classList.toggle("active"),hideHeader(),bodyCard.style.position="fixed",modalOverlay.scrollTop=0,modalWrap.scrollTop=0,modalWrap.scrollLeft=0},300),setTimeout(function(){materialIcons.classList.toggle("active")},550)},materialIcons.onclick=function(){modalOverlay.classList.toggle("active"),bodyCard.style.position=null,setTimeout(function(){modalOverlay.style.display=null,modalOverlay.style.zIndex=null},1e3),setTimeout(function(){materialIcons.classList.toggle("active")},100)},buttonGambur.onclick=function(){"500px"===header.style.maxHeight?(hideHeader(),bodyCard.style.position=null):(header.classList.toggle("active_1"),"header base active_1"===header.className?unitTableDiv.classList.toggle("active"):unitTableDiv.classList.remove("active"),mainTable.classList.toggle("active"),overlayTitleM.classList.toggle("active"),overlayTitleL.classList.toggle("active"),textP_Title.classList.toggle("active"),circlePositionerTitle.classList.remove("active"))};var box1None,box2None=!0;if(document.querySelector("div.add_words1")){var addWordsBox1=document.querySelector("div.add_words1");""===addWordsBox1.textContent&&(box1None=!1,addWordsBox1.style.display="none"),""===addWordsBox2.textContent&&(box2None=!1,addWordsBox2.style.display="none"),!0===box1None&&!0===box2None&&(addWordsBox1.style.width="47%",addWordsBox2.style.width="47%")}if(document.getElementById("question-audio")&&""===questionAudio.innerHTML&&(questionAudio.style.display="none"),""===modalWrap.innerHTML&&(modalButton.style.display="none",hr[0].style.marginTop="50px"),""===exampleAnswerHide.innerHTML&&(exampleAnswerHide.style.display="none"),""===highlight.innerHTML?highlight.style.display="none":modalButton.style.display="block",""===unitNumber.innerHTML&&(unitNumber.innerHTML="»»»» ♨"),""===layerButton.innerHTML&&(layerButton.innerHTML="YEAH"),0<hint.length){hint[0].innerHTML="Hint";for(var id=hint[1].getAttribute("id"),choices=hint[1].innerHTML,boxes=choices.split(" | "),list="",j=0;j<boxes.length;j++){var arr=boxes[j].split(";");0!==j&&(list+='<p class="choices-box-delimiter"></p>'),list+="<ul>";for(var i=0;i<arr.length;i++)list=list+"<li>"+arr[i]+"</li>";list+="</ul>"}document.getElementById(id).innerHTML=list,document.getElementById("choices").className="choices_words",document.querySelector("a.hint").style.display="none",document.querySelector("div.hint").style.display="block"}el&&(el.onclick=function(e){""!==e.target.textContent&&"Replay"!==e.target.textContent&&exampleAnswerHide.classList.toggle("active")});var audioInModalW=document.querySelector(".sound_front");audioInModalW.innerHTML=audioInModalW.innerHTML.replace(/\<\/div([^<]*)\>/gm,""),audioInModalW.innerHTML=audioInModalW.innerHTML.replace(/\<div([^<]*)\>/gm,"<br /><br />"),bodyCard.style.position=null,circlePositionerTitle.onclick=function(){"500px"===header.style.maxHeight?(buttonsColorDefault(),hideHeader(),textP_Title.textContent="A",bodyCard.style.position=null):(header.classList.toggle("active_1"),"header base active_1"===header.className?unitTableDiv.classList.toggle("active"):unitTableDiv.classList.remove("active"),mainTable.classList.toggle("active"),overlayTitleM.classList.toggle("active"),overlayTitleL.classList.toggle("active"),textP_Title.classList.toggle("active"),buttonAllClose.classList.remove("active"))};var cloze=document.querySelectorAll(".cloze");if(document.querySelector(".arrow_06B13_line_back"))for(var z=0;z<cloze.length;z++)cloze[z].textContent=cloze[z].textContent.replace(/^([^|]*).*$/,"$1"),cloze[z].textContent=cloze[z].textContent.replace(/^([^/]*).*$/,"$1");var textbox=document.getElementById("typeans"),clozes=document.getElementsByClassName("cloze"),skips=document.getElementsByClassName("cloze"),fields=[];cloze=clozes[0];var mungeCloze=function e(){if(0!==clozes.length)if(null!==textbox){var t=1<clozes.length;if(fields=[],t){for(var n=clozes.length,o=textbox,l=0;l<n;l++)if(null!==(cloze=clozes[l])){var i=o.cloneNode(!0),a;i.id="typeans"+(l+1),i.setAttribute("class","typeans"),i.onkeyup=updateMain,i.setAttribute("title"," "+cloze.innerHTML.slice(1,-1)+" "),cloze.parentNode.insertBefore(i,cloze),span12(i),fields.push(i)}for(;0<clozes.length;){var s;(cloze=clozes[0]).parentNode.removeChild(cloze)}o.style.display="none",document.getElementById("typeans1").focus()}else if(null!==cloze){textbox.removeAttribute("class");var r=cloze.parentNode;r.insertBefore(textbox,cloze),r.removeChild(cloze),textbox.style.display="",textbox.setAttribute("class","typeans"),textbox.setAttribute("title"," "+cloze.innerHTML.slice(1,-1)+" "),span12(textbox)}}else for(var c=0;c<skips.length;c++)skips[c].innerHTML=skips[c].innerHTML.slice(1,-1)};if(mungeCloze(),matchMedia){var mqiPad=window.matchMedia("(max-width: 768px)");mqiPad.addListener(appendixesChangeName),appendixesChangeName(mqiPad)}$(window).bind("keydown",function(e){var t;switch(e.keyCode?e.keyCode:e.which){case 38:"block"===modalOverlay.style.display?(modalOverlay.classList.toggle("active"),bodyCard.style.position=null,setTimeout(function(){modalOverlay.style.display=null,modalOverlay.style.zIndex=null},1e3),setTimeout(function(){materialIcons.classList.toggle("active")},100)):modalButton.onclick();break;case 39:exampleAnswerHide.classList.toggle("active");break;case 40:e.preventDefault(),circlePositionerTitle.onclick();break}if(e.ctrlKey||e.metaKey)switch(String.fromCharCode(e.which).toLowerCase()){case"1":e.preventDefault(),button_1.circle.onclick();break;case"2":e.preventDefault(),button_2.circle.onclick();break;case"3":e.preventDefault(),button_3.circle.onclick();break;case"4":e.preventDefault(),button_4.circle.onclick();break;case"5":e.preventDefault(),button_5.circle.onclick();break;case"6":e.preventDefault(),button_6.circle.onclick();break;case"7":e.preventDefault(),button_7.circle.onclick();break}});