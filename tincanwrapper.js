﻿
		/*
 * Copyright (C) 2007 Trivantis Corporation
 */

	
var finishCalled=false;var autoCommit=false;function MySetValue(A,B) {var C=getTitleMgrHandle();if(C) C.setVariable(A,B,0);LMSSetValue(A,B);};function loadPage(A,B) {var C=readVariable('TrivantisSCORMTimer',0);saveVariable('TrivantisEPS','F');if(C==0) {LMSInitialize(A,B);var D=new String(LMSGetValue("cmi.core.lesson_status"));D=D.toLowerCase();if (D=="not attempted") MySetValue("cmi.core.lesson_status","attempted");startTimer();return true;}else return false;};function startTimer() {var A=new Date().getTime();saveVariable('TrivantisSCORMTimer',A);};function doBack() {MySetValue("cmi.core.exit","suspend");saveVariable('TrivantisEPS','T');finishCalled=true;LMSFinish();saveVariable('TrivantisSCORMTimer',0);};function doContinue(A) {MySetValue("cmi.core.exit","");var B=new String(LMSGetValue("cmi.core.lesson_mode"));B=B.toLowerCase();if (B!="review"&&B!="browse") MySetValue("cmi.core.lesson_status",A);saveVariable('TrivantisEPS','T');finishCalled=true;LMSFinish();saveVariable('TrivantisSCORMTimer',0);};function doQuit(A){saveVariable('TrivantisEPS','T');finishCalled=true;LMSFinish();saveVariable('TrivantisSCORMTimer',0);if(A) parent.top.close();};function unloadPage(A,B){var C=readVariable('TrivantisEPS','F');if (C!='T'){if (window.name.length>0&&window.name.indexOf('Trivantis_')==-1) trivScormQuit(A,B,false);}};var tcAPI=parent.frames['titlemgrframe'];function LMSInitialize(A,B){return tcAPI.LMSInitialize(A,B);};function LMSFinish(){return tcAPI.LMSFinish();};function LMSGetValue(A){return tcAPI.LMSGetValue(A);};function LMSSetValue(A,B){return tcAPI.LMSSetValue(A,B);};function LMSCommit(){return tcAPI.LMSCommit();};function LMSGetLastError(){return tcAPI.LMSGetLastError();};function LMSGetErrorString(A){return tcAPI.LMSGetErrorString(A);};function LMSGetDiagnostic(A){return tcAPI.LMSGetDiagnostic(A);};function LMSGetBookmark(){return tcAPI.LMSGetBookmark();};function LMSSetBookmark(A,B){return tcAPI.LMSSetBookmark(A,B);};function putSCORMInteractions(A,B,C,D,E,F,G,H,I,J){return tcAPI.putSCORMInteractions(A,B,C,D,E,F,G,H,I,J);};function LMSTinCanStatement(A,B,C){return tcAPI.LMSTinCanStatement(A,B,C);}