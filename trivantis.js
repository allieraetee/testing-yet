﻿
		/*
 * Copyright (C) 2007 Trivantis Corporation
 */

	
var theApp=new webtoraAppl();var is=theApp.is;var trivDebug=0;var trivAddMsgFunc=null;var trivDebugWnd='';var trivSaveMsg='';var trivWeb20Popups=false;var DEFAULT_VIEW='Desktop';var transformScale=1;function trivLogMsg(A,B){if ((!trivDebug)||(B&&!(trivDebug&B))) return;var C=findTrivLogMsg(window,true);if (C.trivDebug){if (A){if (C.trivSaveMsg.length){C.trivSaveMsg+='<br />';};C.trivSaveMsg+=A;};if (!C.trivDebugWnd&&C.opening==1){setTimeout("trivLogMsg()",200);}else if (!C.trivDebugWnd||C.trivDebugWnd.closed||!C.trivDebugWnd.location){C.opening=1;C.trivDebugWnd=C.open('trivantisdebug.html','TrivantisDebug','width=400,height=400,scrollbars=0,resizable=1,menubar=0,toolbar=0,location=0,status=0');setTimeout("trivLogMsg()",200);}else{if (C.trivAddMsgFunc){A=C.trivSaveMsg;C.trivSaveMsg='';C.trivAddMsgFunc(A);}}}};function findTrivLogMsg(A,B) {if(B&&A.opener&&(!A.parent.SCOPreviewWnd)&&(!A.opener.rbnPubl)&&A.opener.trivLogMsg) {return findTrivLogMsg(A.opener,false);}while(A) {if(A.parent&&A.parent!=A&&(!A.parent.SCOPreviewWnd)&&(!A.parent.rbnPubl)&&A.parent.trivLogMsg) {A=A.parent;}else {break;}};return A;};var winW=screen.width;var winH=screen.height;function findWH() {winW=(is.ns)?window.innerWidth-16:document.body.offsetWidth-20;winH=(is.ns)?window.innerHeight:document.body.offsetHeight;};function ObjLayer(A,B,C) {var D=this;if (!ObjLayer.bInit&&!C) {InitObjLayers();};D.frame=C||self;if (is.ie10orLess){D.ele=D.event=D.frame.document.all[A];D.styObj=D.frame.document.all[A].style;D.doc=document;D.x=D.ele.offsetLeft;D.y=D.ele.offsetTop;D.w=D.ele.offsetWidth;D.h=D.ele.offsetHeight;}else{D.ele=D.event=document.getElementById(A);D.styObj=D.ele.style;D.doc=document;D.x=D.ele.offsetLeft;D.y=D.ele.offsetTop;D.w=D.ele.offsetWidth;D.h=D.ele.offsetHeight;};D.id=A;D.unique=1;D.pref=B;D.hasMoved=false;D.newX=null;D.newY=null;};ObjLayer.arrPref=[];ObjLayer.arrRef=[];ObjLayer.arrRef.i=0;ObjLayer.bInit=false;var p=ObjLayer.prototype;p.actionGoTo=ObjLayerActionGoTo;p.actionGoToNewWindow=ObjLayerActionGoToNewWindow;function ObjLayerActionGoTo(A,B,C,D) {var E=null;var F=D!=null?D:true;if(B) {if(B=="opener") E=parent.opener;else if(B=="_top") E=eval("parent");else if(B=="NewWindow") E=open(A,'NewWindow');else {var G=eval("parent");var H=0;while(H<G.length) {if(G.frames[H].name==B) {E=G.frames[H];break;};H++;};if(C) {H=0;G=E;while(H<G.length) {if(G.frames[H].name==C) {E=G.frames[H];break;};H++;}};try{if(!E.closed&&E.trivExitPage) {E.trivExitPage(A,F);return;}}catch(e){}}};if(!E) E=window;try{if(!E.closed) E.location.href=A;}catch(e){}};function ObjLayerActionGoToNewWindow(A,B,C) {var D;B=B?B.replace(/\s+/g,"_"):B;if ((C.indexOf('left=')==-1)&&(C.indexOf('top=')==-1)) C+=GetNewWindXAndYPos(C);D=window.open(A,B,C,false);if(D) D.focus();return D;};function preload(A) {setTimeout(function(){if (!document.images) return;var B=[];for (var i=0;i<A.length;i++) {B[i]=new Image();B[i].src=A[i];}},100);};p.moveTo=function(x,y) {var A=this;if (x!==null) {A.x=x;if(A.styObj) {A.styObj.left=A.x;}};if (y!==null) {A.y=y;if(A.styObj) {A.styObj.top=A.y;}}};p.moveBy=function(x,y) {this.moveTo(this.x+x,this.y+y);};p.clipInit=function(t,r,b,l){if (arguments.length==4) {this.clipTo(t,r,b,l);}else {this.clipTo(0,this.ele.offsetWidth,this.ele.offsetHeight,0);}};p.clipTo=function(t,r,b,l) {if(this.styObj) this.styObj.clip="rect("+t+"px "+r+"px "+b+"px "+l+"px)";};p.show=function() {if(this.styObj) this.styObj.visibility="inherit";};p.hide=function() {if(this.styObj) this.styObj.visibility="hidden";};p.actionPlay=function(){};p.actionStop=function(){};p.actionShow=function(){this.show();};p.actionHide=function(){this.hide();};p.actionLaunch=function(){};function ObjLayerActionExit(){if(this.frameElement&&this.frameElement.id&&this.frameElement.id.indexOf('DLG_content')==0) trivCloseDialog();else{window.open('','_self','');window.close();setTimeout(function(){if (window&&window.top) window.top.close();},250);}};p.actionExit=ObjLayerActionExit;p.actionChangeContents=function(){};p.actionTogglePlay=function(){};p.isVisible=function() {if(!this.styObj||this.styObj.visibility=="hide"||this.styObj.visibility=="hidden") {return false;}else {return true;}};p.write=function(A) {this.event.innerHTML=A;};function InitObjLayers(A) {var B=document;var C=null;if (!ObjLayer.bInit) {ObjLayer.bInit=true;};if (is.ns) {if (A) {C=eval('document.'+A+'.document');}else {A='';if(is.ns5) {B.layers=B.getElementsByTagName("*");C=B;}else {C=B;}};for (var i=0;i<C.layers.length;i++) {var D;if(is.ns5) {if(C.layers[i]) {D=C.layers[i].tagName;}else {D=null;}}else {D=C.layers[i].name;};if(D) {ObjLayer.arrPref[D]=A;if (!is.ns5&&C.layers[i].doc.layers.length>0) {ObjLayer.arrRef[ObjLayer.arrRef.length]=(A==='')?C.layers[i].name:A+'.document.'+C.layers[i].name;}}};if (ObjLayer.arrRef.i<ObjLayer.arrRef.length) {InitObjLayers(ObjLayer.arrRef[ObjLayer.arrRef.i++]);}};return true;};function buildCSS(A,B,C,D,E,F,G,H,I) {var J=arguments.length;var K=(B!==null&&C!==null)?'#'+A+' {position:absolute; left:'+B+'px; top:'+C+'px;':'#'+A+' {position:relative;';if (J>=4&&D!==null) {K+=' width:'+D+'px;';};if (J>=5&&E!==null) {K+=' height:'+E+'px;';if (J<9||I.indexOf('clip')==-1) {K+=' clip:rect(0px '+D+'px '+E+'px 0px);';}};if (J>=6&&F!==null) {K+=' visibility:'+(F?'inherit':'hidden')+';';};if (J>=7&&G!==null) {K+=' z-index:'+G+';';};if (J>=8&&H!==null) {K+=' background:'+H+';';};if (J==9&&I!==null) {K+=' '+I;};K+='}\n';return K;};function writeStyleSheets(A) {var B='<style type="text/css">\n';B+=A;B+='</style>';document.write(B);};function getHTTP(A,B,C){var D=0,E=0;if (B=='GET'&&C){A+='?'+C;C=null;};trivLogMsg('Issuing '+B+' to '+A+(C?(' for ['+C+']'):''));if (!E&&A.indexOf("http")==0&&(A.indexOf(location.protocol)<0||A.indexOf(location.host)<0)){try{var F=document.getElementsByTagName("body").item(0);var G=document.getElementById("xdomainIframe");if (!G){G=document.createElement("iframe");G.setAttribute("name","xdomainIframe");G.setAttribute("id","xdomainIframe");G.style.display="none";G.style.width="0px";G.style.height="0px";F.appendChild(G);};var H=document.getElementById("xdomainForm");if (!H){H=document.createElement("form");H.setAttribute("id","xdomainForm");H.setAttribute("method",B);H.setAttribute("target","xdomainIframe");G.appendChild(H);};if(C){H.innerHTML='';var I=C.split('&');for (var i=0;i<I.length;i++){var J=I[i].indexOf('=');if (J!=-1){var K=document.createElement("textarea");K.name=I[i].substring(0,J);K.value=unescape(I[i].substring(J+1));H.appendChild(K);}}};H.setAttribute("action",A);H.submit();D={status:0,statusText:"special xdomain processing",reponseText:""};E=true;} catch (e){if (window.console) window.console.error(e);}};try{if (!E&&window.XMLHttpRequest){D=new XMLHttpRequest();D.open(B,A,false);D.onreadystatechange=null;if (B=='POST'){D.setRequestHeader('Content-Type','application/x-www-form-urlencoded;charset=UTF-8');};D.send(C);E=1;}} catch (e){if (window.console) window.console.error(e);};try{if (!E&&window.ActiveXObject){D=new ActiveXObject("Microsoft.XMLHTTP");if (D){D.open(B,A,false);if (B=='POST'){D.setRequestHeader('Content-Type','application/x-www-form-urlencoded;charset=UTF-8');};D.send(C);E=1;};trivLogMsg('ReturnCode = '+D.status+' Received Data ['+D.responseText+']');}} catch (e){if (window.console) window.console.error(e);};try {if (D.status===0) trivLogMsg('Status 0 is returned if posting to a different domain and trying to receive a response (cross-domain is not allowed) or the course is not running on a web server.');} catch (e) {};return D;};function GenRand(A,B){return Math.floor(Math.random()*(B-A+1)+A);};function GetNewWindXAndYPos(A) {var B="\\s*([^,\\s]*)\\s*";var C=new RegExp("width="+B,"i");C.test(A);var D=RegExp.$1;C=new RegExp("height="+B,"i");C.test(A);var E=RegExp.$1;var F=(screen.width-D)/2;var G=(screen.height-E)/2;return ',left='+F+',top='+G;};function Encode(s){if (s==n) return '';return encodeURIComponent(s);};function Decode(s){if (s==n) return '';return decodeURIComponent(s);};function UniUnescape(s){if (s==n) return '';return unescape(String(s).replace(/%5Cu/g,'%u'));};function wndPagePublished(){var A=this;A.rtData1=-1;A.rtData2=-1;var B=document.getElementById("wndPage");A.div=B;A.processed=false;var C=document.body;if (B){C.onmousedown=function(e) { return A.mouseDown(e);};C.onmousemove=function(e) { return A.mouseMove(e);};C.onmouseup=function(e) { return A.mouseUp(e);};C.ondblclick=function(e) { return A.mouseDblClk(e);};C.oncontextmenu=function(e) { return A.contextMenu(e);};C.onclick=function(e) { return A.mouseClick(e);};document.onkeydown=function(e) { return A.keyDown(e);};};A.currMouseObj=0;A.arDelayAct=[];A.arTransInWnds=[];A.arTransOutWnds=[];var D=function(){window.top.onresize=window.onResizeOrig;};if (theApp.is.ie10orLess){window.attachEvent('onbeforeunload',function() { D();});window.attachEvent('onunload',function() { D();});}else{window.addEventListener('unload',function() { D();},t);}};p=wndPagePublished.prototype;p.processMouseAct=function(e,A){if(!e) e=window.event;var B=(e.target?e.target:e.srcElement?e.srcElement:null);var C=this.getDivObj(B);var D=t;switch (A){case 1:if (C) D=C.mouseDown(e);else if(typeof(pageClick)=='function') D=pageClick(e);break;case 2:this.setCurrMouseObj(C);if (C) D=C.mouseMove(e);break;case 3:if (C) D=C.mouseUp(e);this.resetMenus(C);break;case 4:if (C&&C.mouseDblClk) D=C.mouseDblClk(e);break;case 5:if (C&&C.contextMenu) D=C.contextMenu(e);else if(typeof(pageRClick)=='function'){pageRClick(e);return cancelEvent(e);};break;};return D;};p.resetMenus=function(A){for(var i=0,B=arWnds.length;i<B;i++){if(arWnds[i] instanceof jsWndMenu){var C=A&&(A instanceof jsPopMenu)&&(A.isDescendantOf(arWnds[i]));if(arWnds[i]!==A&&!C){hideSubMenus(arWnds[i],A);}}}};p.mouseDown=function(e){if(!e) e=window.event;if(e.which==1||(!e.which&&(e.button==0||e.button==1))) return this.processMouseAct(e,1);return t;};p.mouseMove=function(e){return this.processMouseAct(e,2);};p.mouseUp=function(e){var A=this.processMouseAct(e,3);this.processed=true;return A;};p.mouseDblClk=function(e){if(!e) e=window.event;if(e.which==1||(!e.which&&e.button==1)||theApp.is.ie10orLess) return this.processMouseAct(e,4);return t;};p.mouseClick=function(e){if(!e) e=window.event;var A=this;if(!A.processed){A.mouseDown(e);A.mouseUp(e);};A.processed=false;};p.contextMenu=function(e){return this.processMouseAct(e,5);};p.keyDown=function(e){if (typeof (pageKey)=='function'){if (!e) e=window.event;var A=e.keyCode,B=((e.altKey?1:0)|(e.ctrlKey?2:0)|(e.shiftKey?4:0)),C=pageKey(e,A,B),D=e.target?e.target:(e.srcElement?e.srcElement:n);if (C==f&&(D&&((/input/i.test(D.tagName))||(/textarea/i.test(D.tagName))))) C=t;return C;};return t;};p.setCurrMouseObj=function(A) {var B=this.currMouseObj;if(B!=A){if (theApp.is.mobile==f){if (B&&B.mouseExit) B.mouseExit();this.currMouseObj=A;if (A&&A.mouseEnter) A.mouseEnter();}}};p.getDivObj=function(A){var B=0;while(!B&&A){B=(A.popM?A.popM:(A.tObj?A.tObj:0));A=A.parentNode;};return B;};p.issueShowActions=function(A){trivIssueShowActs(A);};p.doAction=function(A){if (typeof A!='undefined') A();};p.findWndByObj=function (o){return o.wnd;};p.fixA=function(){if (theApp.is.ie10orLess) trivArExec(document.getElementsByTagName("A"),function(o){o.style.cursor='hand';try {if (!o.style.color) o.style.color=o.parentNode.style.color;} catch(e){}});var A=getURLParams();if (A['title']) document.title=A['title'];};p.fixEmbeddedTables=function(){if (theApp.is.ie10orLess) trivArExec(document.getElementsByTagName("TABLE"),function(o){if (o.parentNode&&o.parentNode.getAttribute('name')=='dCon2'){trivArExec(o.getElementsByTagName("TD"),function(A){try{var w=A.style.width;A.style.width=null;A.style.width=w;}catch (e) {}});}});};p.alignEmbObjs=function(){var A=document.getElementsByTagName("img");trivArExec(A,function(F){try {if (F.id.indexOf("ee")!==0) return;var B={ x:F.offsetLeft,y:F.offsetTop };var C=F.parentNode;while (!(C.getAttribute('name')&&C.getAttribute('name').indexOf('dCon2')===0)){if (C.tagName&&(C.tagName.toLowerCase()=="td"||C.tagName.toLowerCase()=="tbody"||C.tagName.toLowerCase()=="table")){B.x+=C.offsetLeft;B.y+=C.offsetTop;};C=C.parentNode;};var D=F.id.substring(2);var E=document.getElementById('tobj'+D);E.style.top=B.y+"px";E.style.left=B.x+"px";} catch(e) {if (window.console) window.console.error(e);}});};p.actionMute=function(A){var B=VarTriMuteAllFLV.getValue();if (A==u&&B!="~~~null~~~") A=B;if (A!=u){var C=A?'actionMute':'actionUnMute';trivArExec(arAudioVideo,function(D){D[C]();});if (window.trivBgndAudio) trivBgndAudio[C]();VarTriMuteAllFLV.set(A);}};function cwObjPub(){this.arChld=[];};p=cwObjPub.prototype;p.getTrans=function(A){var B=this.transData;return (B?(A?B[0]:B[1]):0);};p.getTransSpeed=function(A){var B=this.transData;return (B?(A?B[2]:B[3]):0);};p.getTransDelay=function(A){var B=this.transData;return (B?(A?B[4]:B[5]):0);};p.getTransEffect=function(A){var B=this.transData;return (B?(A?B[8]:B[9]):0);};p.getXPos=function(){return this.rect.x;};p.getYPos=function(){return this.rect.y;};trivGoToPage=null;trivCompleteCnt=1;hasProcessedExitActions=false;trivWndImmFeedback=null;currFeedbackIdx=0;trivPageExited=false;trivNumQuestions=0;trivProcessTest=0;trivActFBCnt=0;function trivCloseDialog(){var A;var B=false;if(this.frameElement&&this.frameElement.parentNode){for(i=0;i<this.frameElement.parentNode.childNodes.length;i++){if(this.frameElement.parentNode.childNodes[i].id=='DLG_hiddenClose'){A=this.frameElement.parentNode.childNodes[i];break;}};if(A&&A.onclick){A.onclick();B=true;}};return B;};var isMobile={Android:function() {return navigator.userAgent.match(/Android/i);},AndroidNonTablet:function() {return isMobile.Android()&&navigator.userAgent.match(/Mobile/i)&&!navigator.userAgent.match(/Kindle/i);},BlackBerry:function() {return navigator.userAgent.match(/BlackBerry/i);},iOS:function() {return navigator.userAgent.match(/iPhone|iPad|iPod/i);},iOSNonTablet:function() {return navigator.userAgent.match(/iPhone|iPod/i);},Opera:function() {return navigator.userAgent.match(/Opera Mini/i);},Windows:function() {return navigator.userAgent.match(/IEMobile/i);},any:function() {return (isMobile.Android()||isMobile.BlackBerry()||isMobile.iOS()||isMobile.Opera()||isMobile.Windows());},anyPhone:function() {return (isMobile.AndroidNonTablet()||isMobile.BlackBerry()||isMobile.iOSNonTablet()||isMobile.Opera()||isMobile.Windows());}};function onPageLoad(){trivPage=new wndPagePublished();setRcdView(t);};function onResize(){setRcdView(f);if (window.onResizeOrig&&typeof onResizeOrig=='function') window.onResizeOrig();};function setRcdView(A){var B=f,C=f,D=rcdObj.view,E=rcdObj.deviceView,F=n,G=f,H=n,I=n;if (!isMobile.any()&&!A&&window.bSingleScrubView) return;if(isMobile.any()) F=getDevice()+getOrientation();else{var J=window.pgWidth_desktop?window.pgWidth_desktop:1009,K=window.pgWidth_tabletPort?window.pgWidth_tabletPort:785,L=window.pgWidth_phonePort?window.pgWidth_phonePort:480,M=getScreenHeight()<document.getElementById("wndPage").clientHeight,w=getScreenWidth();if (!M) w-=18;if(w>=J||(w<L&&J==L)) F='Desktop';else if(w>=1009) F='TabletLandscape';else if(w>=K) F=getOrientation()=='Landscape'?'PhoneLandscape':'TabletPortrait';else F='PhonePortrait';if(w<L) G=t;};rcdObj.deviceView=F;rcdObj.view=F;if (rcdObj['pgWidth_'+rcdObj.view]==u) rcdObj.view=DEFAULT_VIEW;B=D!=rcdObj.view;C=E!=F;if (B||C||A){if (window.VarCurrentView) VarCurrentView.set(F);if (B) updateDivs();if (B||A){var N='preRenderFn_'+rcdObj.view;if (A&&rcdObj[N]&&typeof rcdObj[N]=='function') rcdObj[N](function() { renderObjects(A);});else renderObjects(A);};if (!A){if (window.pageViewChgAction){pageViewChgAction();pageViewChgAction=n;};trivArExec(arWnds,function(Q){ Q.issueActions(15);});}};if(!isMobile.any()){I=(trivPage&&trivPage.div?trivPage.div.style:n);if (window.bRespDesign&&I){H='';if (G){if (M) w-=18;transformScale=w/L;var h=parseInt(I.height),O=Math.round((L-w)/2)-9,P=Math.round((h-h*transformScale)/2);H='translate(-'+O+'px,-'+P+'px) scale('+transformScale+','+transformScale+')';};I.transform=H;};if (window.trivCenterPage) trivCenter();}};function updateDivs(){if (window.rcdObj) {var A=document.getElementById('wndPage');var B=rcdObj['pgStyle_'+rcdObj.view];if (B) A.style.cssText=B;var C=rcdObj['backgrd_'+rcdObj.view];if(C&&document.body.style.backgroundColor!=C[0]) document.body.style.backgroundColor=C[0];if(C&&A.style.backgroundImage!=C[1]) A.style.backgroundImage=C[1];if(C) A.style.backgroundSize=""+Math.round(Number(C[4])*Number(C[2]))+"px "+Math.round(Number(C[4])*Number(C[3]))+"px";};if (arWnds) for (var i=0;i<arWnds.length;i++){if (arWnds[i].rcdData) arWnds[i].updateDiv();}};function renderObjects(A){if (A) init();else attachObjs(t);if(isMobile.any()&&rcdObj.view!='Desktop'){var B=document.getElementById('wndPage');var C=document.documentElement.clientWidth?document.documentElement.clientWidth:document.body.clientWidth;var D=navigator.userAgent;if (theApp.is.iOS&&(D.indexOf('CellCast-iPad')!=-1||D.indexOf('CellCast-iPhone')!=-1)) C=getScreenWidth();var E=rcdObj['pgWidth_'+rcdObj.view];var F=B.clientHeight;if (E){transformScale=C/E;var G=(1-transformScale)/2;var H=-parseInt(E*G);var I=-parseInt(F*G);var J='translate('+H+'px,'+I+'px) scale('+transformScale+')';B.style.transform=J;B.style.MozTransform=J;B.style.msTransform=J;B.style.OTransform=J;B.style.webkitTransform=J;}}};var respViewNames=["Desktop","TabletPortrait","TabletLandscape","PhonePortrait","PhoneLandscape"];function init(){trivArExec(respViewNames,function(A){var A="init_"+A;if (typeof window[A]=='function') window[A]();});};function attachObjs(A){trivArExec(arAttachObj,function(C){if (C.div==u||C.div.outerHTML!='') C.attach(A);});trivArExec(respViewNames,function(B){var B="defineFuncs_"+B;if (typeof window[B]=='function') window[B]();});trivArExec(arAttachObj,function(D){if (D.div==u||D.div.outerHTML!='') D.postAttach(A);});trivPage.fixA();trivPage.fixEmbeddedTables();};function getScreenWidth(){if(isMobile.any()){if(isMobile.iOS()&&getOrientation()=="Landscape") return screen.height;else return screen.width;};if (document.compatMode=='CSS1Compat') return document.body.parentNode.clientWidth;else return document.body.clientWidth;};function getScreenHeight(){if(isMobile.any()){if(isMobile.iOS()&&getOrientation()=="Portrait") return screen.width;else return screen.height;};if (document.compatMode=='CSS1Compat') return document.body.parentNode.clientHeight;else return document.body.clientHeight;};function getOrientation(){return window.top.innerHeight>window.top.innerWidth?"Portrait":"Landscape";};function getDevice(){return isMobile.anyPhone()?"Phone":isMobile.any()?"Tablet":"Desktop";};function loadIncFiles(A,B){window.bRespDesign=!!B;var C="<script type='text/javascript' src='device_##0/"+A+".js'></script>";var D=getDevice();if (!B||['Desktop','Tablet','Phone'].indexOf(D)==-1) D='Desktop';if (D=='Desktop') document.write(getLocStr(C,D));if (B){if (D=='Desktop'||D=='Tablet'){document.write(getLocStr(C,'TabletLandscape'));document.write(getLocStr(C,'TabletPortrait'));};if (D=='Desktop'||D=='Phone'){document.write(getLocStr(C,'PhoneLandscape'));document.write(getLocStr(C,'PhonePortrait'));}}};function trivCenter() {try{var A=trivPage.div.style;var B=window.innerWidth;if (!B) B=document.documentElement.clientWidth?document.documentElement.clientWidth:document.body.clientWidth;if (parseInt(A.width)>=B){A.left='0px';A.marginLeft='';}else{A.left='50%';A.marginLeft='-'+(Math.round((parseInt(A.width)/2)))+'px';}}catch(e){if(window.console) console.log(e);}};function checkLeavePage(){if(trivPageExited) return;if(trivActFBCnt==0){if(trivProcessTest&&(bDoProcessTest||trivGoToPage==null)){bDoProcessTest=false;processTest(1);}else if (trivExitPage.transOutDone&&trivExitPage.transOutDone()==false){setTimeout('checkLeavePage()',100);}else{trivLeavePage();};return;};setTimeout('checkLeavePage()',100);};function trivLeavePage(){trivCompleteCnt--;if (trivCompleteCnt<=0){if (window.saveVariable) saveVariable('TrivantisEPS','T');hasProcessedExitActions=false;var A=0;if (window.transAppearDuration){A=Math.floor(window.transAppearDuration*400/4);FX.fadeOut(wndPageDiv,{duration:A,complete:function(){eval(trivGoToPage);trivGoToPage=null;}});}else{eval(trivGoToPage);trivGoToPage=null;};trivPageExited=true;setTimeout(function(){trivPageExited=false;hasProcessedExitActions=false;},((A?A:0)+750));}};function trivExitPage(A,B){trivExitPage.afterFeedBackCallback=null;if(A.indexOf("ObjLayerAction")>=0||A.indexOf(".action")>=0||A.indexOf("history.back()")>=0) trivGoToPage=A;else trivGoToPage='ObjLayerActionGoTo("'+A+'")';if(!hasProcessedExitActions){findWH();if (trivCheckQuestions(A,B)=="return") return;hasProcessedExitActions=true;if (trivExitPage.trivExitPageItemExits) trivExitPage.trivExitPageItemExits();setTimeout('checkLeavePage()',100);}};function setExitPgAfterFeedbackCB(A,B){trivExitPage.afterFeedBackCallback=function(){trivActFBCnt--;if (A) trivExitPage(A,B);else setTimeout('checkLeavePage()',0);};};function trivCheckQuestions(A,B){if (window.arQuest){if (window.answerAllQuestions&&B){for (var i=0;i<arQuest.length;i++){var C=arQuest[i];if (!C.hasBeenProcessed&&C.cwObj.varQuest.isNullOrEmpty()){window.answerAllQuestions();return "return";}}};var D=!trivExitPage.afterFeedBackCallback;try{for (var i=0;i<arQuest.length;i++){var C=arQuest[i];if (!C.hasBeenProcessed){trivActFBCnt++;if (D) setExitPgAfterFeedbackCB(A,B);if (C.processQuestion(B)==1) return "return";trivActFBCnt--;}}}finally{if (D) trivExitPage.afterFeedBackCallback=null;}}};function getUserInfo(A,B,C,D,E){if(B==null||B==''){for (var i=0;i<E.length;i++){var F=window["Var"+E[i].timerVarName];F.set("pause:0");};var G=new jsDlgPromptBox('u1',A,C,'',function(e,H,I){ if(H==0)B=I;else B=null;userInfoEntered(A,C,D,B,A,E);});G.create();return;};persistUserName(A,B);};function userInfoEntered(A,B,C,D,A,F){if(D==undefined||D==''){for (var i=0;i<F.length;i++){var G=window["Var"+F[i].timerVarName];G.set("pause:0");};if (D==undefined) cancelTest();else{var H=new jsTrivDlgMsgBox('u0',A,C,0,function(e,I){ getUserInfo(A,D,B,C,F);});H.create();};return;};persistUserName(A,D);trivArExec(F,function(J){if (J.autoStart) window["Var"+J.timerVarName].set((parseInt((new Date().getTime()+500)/1000)*1000));});};function persistUserName(A,B){saveVariable('TrivantisUserName',B,null,A);var C=getTitleMgrHandle();if (C) C.setUserInfo(B,null);};function trivAlert(A,B,C,D){if(trivWeb20Popups&&window.jsTrivDlgMsgBox){var E=new jsTrivDlgMsgBox(A,B,C,f,D);E.create();}else{alert(C);if (D) D();}};function trivCloseWnd(){if(this.frameElement&&this.frameElement.id&&this.frameElement.id.indexOf('DLG_content')==0) trivCloseDialog();else window.close();};function trivMailTo(A){window.top.document.location.href='mailto:'+A;};var trivPageTracking={InitPageTracking:function () { return 0;},GetRangeStatus:function () { return 'notstarted';},GetPageStatus:function () { return 0;},SetRangeStatus:function () { return 0;},SetOverride:function () { return 0;},SetPageStatus:function () { return 0;},SavePageTracking:function () { return 0;}};
