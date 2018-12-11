/* jshint browser: true */
/*jslint devel: true */
/*--------------------Hide example question-------------------------*/
function hideHeader(){header.classList.remove("active_1"),header.classList.remove("active_2"),unitTableDiv.classList.remove("active"),mainTable.classList.remove("active"),overlayTitleM.classList.remove("active"),overlayTitleL.classList.remove("active"),arrowLine.style.opacity="1",textP_Title.classList.remove("active")}
/*--------------------show Appendix-------------------------*/
function MenuElements(e,t,i,n,o,l,s){this.appendix=e,this.circle=t,this.beforeEl=i,this.targetM=n,this.targetL=o,this.targetP=l,this.circleLayout=s}var question=document.querySelector(".question"),exampleAnswerHide=document.querySelector(".img_example"),el=question;question&&(question.onclick=function(e){""!==e.target.textContent&&exampleAnswerHide.classList.toggle("active")});var questionAudio=document.getElementById("question-audio"),header=document.querySelector(".header"),buttons=document.getElementsByClassName("circle"),buttonsFirst=document.getElementsByClassName("circle"),mainCircle=document.getElementsByClassName("mainCircle"),overlay=document.getElementsByClassName("overlay"),gridPad=document.getElementsByClassName("grid-pad"),p_AppButton=document.getElementsByClassName("p_app_button"),appendixes=document.getElementsByClassName("appendixes"),circlePositioner=document.getElementsByClassName("circlePositioner"),buttonsClass=document.querySelector(".buttons"),buttonAllClose=document.querySelector(".header-close"),bodyCard=document.querySelector(".card"),circlePositionerTitle=document.querySelector(".circlePositioner_title"),arrowLine=document.querySelector(".arrow_06B13_line"),overlayTitleM=document.querySelector("#overlay_title"),overlayTitleL=document.querySelector(".mainCircle_title"),textP_Title=document.getElementById("p_button"),hamburger=document.querySelector(".hamburger--arrowalt-r"),appendixesHideAll=function(){for(var e=0;e<appendixes.length;e++)appendixes[e].classList.remove("active")},buttonsColorDefault=function(){for(var e=0;e<overlay.length;e++)overlay[e].classList.remove("active");for(var t=0;t<mainCircle.length;t++)mainCircle[t].classList.remove("active");for(var i=0;i<p_AppButton.length;i++)p_AppButton[i].classList.remove("active")},unitTableDiv=document.querySelector(".unit_table"),mainTable=document.querySelector(".main_table");
// var questionContent = $(".question>div")[0];
// questionContent.innerHTML = questionContent.innerHTML.replace(/\<\/div([^<]*)\>/gm, "");
// questionContent.innerHTML = questionContent.innerHTML.replace(/\<div([^<]*)\>/gm, "");
/*--------------------variables-------------------------*/circlePositionerTitle.onclick=function(){"500px"===header.style.maxHeight?(buttonsColorDefault(),hideHeader(),textP_Title.textContent="A",bodyCard.style.position=null):(header.classList.toggle("active_1"),"header base active_1"===header.className?unitTableDiv.classList.toggle("active"):unitTableDiv.classList.remove("active"),mainTable.classList.toggle("active"),overlayTitleM.classList.toggle("active"),overlayTitleL.classList.toggle("active"),textP_Title.classList.toggle("active"),buttonAllClose.classList.remove("active"))},MenuElements.prototype.app=function(){
/*--------------------Conditions for Responsive drop down appendixes-------------------------*/
function e(){buttonsFirst[0].style.paddingBottom="0"}function t(){buttonsFirst[0].style.paddingBottom="2em"}
/*--------------------Reset with Exceptions-------------------------*/var i=function(e){for(var t=0;t<appendixes.length;t++)appendixes[t].classList.remove("active"),e.classList.add("active")},n=function(e,t,i){for(var n=0;n<overlay.length;n++)overlay[n].classList.remove("active"),e.classList.add("active");for(var o=0;o<mainCircle.length;o++)mainCircle[o].classList.remove("active"),t.classList.add("active");for(var l=0;l<p_AppButton.length;l++)p_AppButton[l].classList.remove("active"),i.classList.add("active")};
/*--------------------Conditions-------------------------*/
if("appendixes active"===this.appendix.className)this.appendix.classList.toggle("active"),this.targetM.classList.toggle("active"),this.targetL.classList.toggle("active"),this.targetP.classList.toggle("active"),header.classList.remove("active_2"),buttonAllClose.classList.remove("active"),bodyCard.style.position=null,arrowLine.style.opacity="1",e(),buttonsColorDefault(),this.circleLayout.style.width=null,circlePositionerTitle.classList.remove("active"),buttonsClass.insertBefore(this.circle,this.beforeEl),this.circle===buttons[13]&&buttonsClass.appendChild(this.circle);else{for(var o=this.appendix.scrollTop=0;o<gridPad.length;o++)gridPad[o].scrollTop=0;buttonsClass.insertBefore(this.circle,buttonsClass.firstChild),this.circleLayout.style.width="94%",header.classList.add("active_2"),bodyCard.style.position="fixed",unitTableDiv.classList.remove("active"),i(this.appendix),n(this.targetM,this.targetL,this.targetP),buttonAllClose.classList.add("active"),circlePositionerTitle.classList.add("active"),t(),arrowLine.style.opacity="0"}
/*--------------------Reset button-------------------------*/var l=this.circle,s=this.beforeEl,a=this.circleLayout;buttonAllClose.onclick=function(){e(),buttonsClass.insertBefore(l,s),l===buttons[13]&&buttonsClass.appendChild(l),a.style.width=null,appendixesHideAll(),buttonsColorDefault(),hideHeader(),circlePositionerTitle.classList.remove("active"),bodyCard.style.position=null,buttonAllClose.classList.remove("active")}};// End of function app()
/*--------------------Launching app-------------------------*/
var button_1=new MenuElements(appendixes[0],buttons[0],buttons[1],overlay[0],mainCircle[0],p_AppButton[0],circlePositioner[0]),button_2=new MenuElements(appendixes[1],buttons[1],buttons[2],overlay[1],mainCircle[1],p_AppButton[1],circlePositioner[1]),button_3=new MenuElements(appendixes[2],buttons[2],buttons[3],overlay[2],mainCircle[2],p_AppButton[2],circlePositioner[2]),button_4=new MenuElements(appendixes[3],buttons[3],buttons[4],overlay[3],mainCircle[3],p_AppButton[3],circlePositioner[3]),button_5=new MenuElements(appendixes[4],buttons[4],buttons[5],overlay[4],mainCircle[4],p_AppButton[4],circlePositioner[4]),button_6=new MenuElements(appendixes[5],buttons[5],buttons[6],overlay[5],mainCircle[5],p_AppButton[5],circlePositioner[5]),button_7=new MenuElements(appendixes[6],buttons[6],buttons[7],overlay[6],mainCircle[6],p_AppButton[6],circlePositioner[6]),button_8=new MenuElements(appendixes[7],buttons[7],buttons[8],overlay[7],mainCircle[7],p_AppButton[7],circlePositioner[7]),button_9=new MenuElements(appendixes[8],buttons[8],buttons[9],overlay[8],mainCircle[8],p_AppButton[8],circlePositioner[8]),button_10=new MenuElements(appendixes[9],buttons[9],buttons[10],overlay[9],mainCircle[9],p_AppButton[9],circlePositioner[9]),button_11=new MenuElements(appendixes[10],buttons[10],buttons[11],overlay[10],mainCircle[10],p_AppButton[10],circlePositioner[10]),button_12=new MenuElements(appendixes[11],buttons[11],buttons[12],overlay[11],mainCircle[11],p_AppButton[11],circlePositioner[11]),button_13=new MenuElements(appendixes[12],buttons[12],buttons[13],overlay[12],mainCircle[12],p_AppButton[12],circlePositioner[12]),button_14=new MenuElements(appendixes[13],buttons[13],buttons[14],overlay[13],mainCircle[13],p_AppButton[13],circlePositioner[13]),menuElements=[button_1,button_2,button_3,button_4,button_5,button_6,button_7,button_8,button_9,button_10,button_11,button_12,button_13,button_14];button_1.circle.onclick=function(){menuElements[0].app()},button_2.circle.onclick=function(){menuElements[1].app()},button_3.circle.onclick=function(){menuElements[2].app()},button_4.circle.onclick=function(){menuElements[3].app()},button_5.circle.onclick=function(){menuElements[4].app()},button_6.circle.onclick=function(){menuElements[5].app()},button_7.circle.onclick=function(){menuElements[6].app()},button_8.circle.onclick=function(){menuElements[7].app()},button_9.circle.onclick=function(){menuElements[8].app()},button_10.circle.onclick=function(){menuElements[9].app()},button_11.circle.onclick=function(){menuElements[10].app()},button_12.circle.onclick=function(){menuElements[11].app()},button_13.circle.onclick=function(){menuElements[12].app()},button_14.circle.onclick=function(){menuElements[13].app()};
/*--------------------Modal Window-------------------------*/
var modalButton=document.querySelector(".myButt"),materialIcons=document.querySelector(".material-icons"),modalOverlay=document.querySelector(".modal__overlay"),modalWrap=document.querySelector(".modal__wrap");modalButton.onclick=function(){"header base active_1"===header.className&&hamburger.classList.toggle("is-active"),modalOverlay.style.display="block",modalOverlay.style.zIndex="800",setTimeout(function(){modalOverlay.classList.toggle("active"),modalOverlay.scrollTop=0,modalWrap.scrollTop=0,modalWrap.scrollLeft=0,hideHeader()},100),bodyCard.style.position="fixed",setTimeout(function(){materialIcons.style.display="block"},1e3)},materialIcons.onclick=function(){modalOverlay.classList.toggle("active"),bodyCard.style.position=null,setTimeout(function(){modalOverlay.style.display=null,modalOverlay.style.zIndex=null},1e3),setTimeout(function(){materialIcons.style.display="none"},100)};
/*--------------------hamburgers-------------------------*/
var buttonGambur=document.querySelector(".gamb-wrap");// change for back side add "_back"
buttonGambur.onclick=function(){"500px"===header.style.maxHeight?(hideHeader(),bodyCard.style.position=null):(header.classList.toggle("active_1"),"header base active_1"===header.className?unitTableDiv.classList.toggle("active"):unitTableDiv.classList.remove("active"),mainTable.classList.toggle("active"),overlayTitleM.classList.toggle("active"),overlayTitleL.classList.toggle("active"),textP_Title.classList.toggle("active"),circlePositionerTitle.classList.remove("active"))};
/*--------------------Hide Fields-------------------------*/
var addWordsBox1=document.querySelector("div.add_words1"),addWordsBox2=document.querySelector("div.add_words2"),unitNumber=document.querySelector(".th_1"),layerButton=document.querySelector(".layer"),highlight=document.querySelector("div.highlight"),hr=document.getElementsByTagName("hr"),box1None=!0,box2None=!0;""===addWordsBox1.textContent&&(box1None=!1,addWordsBox1.style.display="none"),""===questionAudio.innerHTML&&(questionAudio.style.display="none"),""===addWordsBox2.textContent&&(box2None=!1,addWordsBox2.style.display="none"),!0===box1None&&!0===box2None&&(addWordsBox1.style.width="47%",addWordsBox2.style.width="47%"),""===modalWrap.innerHTML&&(modalButton.style.display="none",hr[0].style.marginTop="50px"),""===exampleAnswerHide.innerHTML&&(exampleAnswerHide.style.display="none"),""===highlight.innerHTML?highlight.style.display="none":modalButton.style.display="block",""===unitNumber.innerHTML&&(unitNumber.innerHTML="»»»» ♨"),""===layerButton.innerHTML&&(layerButton.innerHTML="YEAH")
/*--------------------Choeces Words Fields-------------------------*/;var hint=document.querySelectorAll(".hint");if(0<hint.length){hint[0].innerHTML="Hint";for(var id=hint[1].getAttribute("id"),choices=hint[1].innerHTML,boxes=choices.split(" | "),list="",j=0;j<boxes.length;j++){var arr=boxes[j].split(";");0!==j&&(list+='<p class="choices-box-delimiter"></p>'),list+="<ul>";for(var i=0;i<arr.length;i++)list=list+"<li>"+arr[i]+"</li>";list+="</ul>"}document.getElementById(id).innerHTML=list,
//  if (arr.length < 5 && boxes.length === 1) {
//    document.getElementById("choices").className = "choices_variants";
//  } else {
document.getElementById("choices").className="choices_words",
//  }
// При показе карточки показывать hint раскрытым
document.querySelector("a.hint").style.display="none",document.querySelector("div.hint").style.display="block"}