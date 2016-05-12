function init_Desktop() {
	if ( rcdObj.view != 'Desktop' ) return;
	if( is.min ){
		var titleMgr = getTitleMgrHandle()
		if( titleMgr ) {
		  if( !titleMgr.loadTest( '_tobj190', 'test190', 'course_test_1_math.html' )) {
		    var gotoPage = titleMgr.cancelTest( 'test190' )
		    if( gotoPage ) trivExitPage( gotoPage, false )
		  }
		}
		trivPageTracking.InitPageTracking();
		if( parent.document != document) parent.document.title=document.title
		preload(rcdObj['preload_'+rcdObj.view]);
		trivCenterPage = true;
		trivCenter();
		window.trivBgndAudio = new jsBgSound();
		trivBgndAudio.attach(false);
		attachObjs();

		og22.cwObj={};
		og22.cwObj.arChld=[
    ];
		var valVarmath2 = Varmath2.getValue();
		if(valVarmath2 != '~~~null~~~') entry303.dCon.value=valVarmath2;
		var valVarmath1 = Varmath1.getValue();
		if(valVarmath1 != '~~~null~~~') entry295.dCon.value=valVarmath1;
		trivPage.issueShowActions(arWnds);
		trivArExec(arWnds,function(wnd){ wnd.issueActions(11); });
		if ( trivPageTracking.GetRangeStatus(287) == 'notstarted' ) trivPageTracking.SetRangeStatus(287,2);
	}
}
function defineFuncs_Desktop() {
	if ( rcdObj.view != 'Desktop' ) return;
	try{
		if (window.initGEV)
		{
		 initGEV(0,swipeLeft,swipeRight);

		}
		} catch(e) { if (window.console) window.console.log(e); }	pageClick = n;
	pageRClick = n;
	pageKey = n;
}
og22.rcdData.att_Desktop = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	htmlId:		"og22",
	bInsAnc:	undefined,
	objData:	{"a":[0,32,0,[]]}
};
image23.rcdData.att_Desktop = 
{
	innerHtml:	"<img src=\"images/header.png\" style=\"position: absolute; left: 0px; top: 0px; width: 1009px; height: 110px; border-style: none;\">",
	cssText:	"visibility: inherit; position: absolute; left: 0px; top: 0px; width: 1009px; height: 110px; z-index: 0;",
	cssClasses:	"",
	htmlId:		"tobj23",
	bInsAnc:	0,
	objData:	{"a":[0,928,0,[0,0,1009,110]]}
};
image24.rcdData.att_Desktop = 
{
	innerHtml:	"<img src=\"images/footer.png\" style=\"position: absolute; left: 0px; top: 0px; width: 1009px; height: 95px; border-style: none;\">",
	cssText:	"visibility: inherit; position: absolute; left: 0px; top: 578px; width: 1009px; height: 95px; z-index: 1;",
	cssClasses:	"",
	htmlId:		"tobj24",
	bInsAnc:	0,
	objData:	{"a":[0,5024,0,[0,578,1009,95]]}
};
image25.rcdData.att_Desktop = 
{
	innerHtml:	"<img src=\"images/next-disabled.png\" style=\"position: absolute; left: 0px; top: 0px; width: 48px; height: 48px; border-style: none;\">",
	cssText:	"visibility: inherit; position: absolute; left: 941px; top: 598px; width: 48px; height: 48px; z-index: 2;",
	cssClasses:	"",
	htmlId:		"tobj25",
	bInsAnc:	0,
	objData:	{"a":[0,7072,0,[941,598,48,48]]}
};
image26.rcdData.att_Desktop = 
{
	innerHtml:	"<img src=\"images/back-disabled.png\" style=\"position: absolute; left: 0px; top: 0px; width: 48px; height: 48px; border-style: none;\">",
	cssText:	"visibility: inherit; position: absolute; left: 861px; top: 598px; width: 48px; height: 48px; z-index: 3;",
	cssClasses:	"",
	htmlId:		"tobj26",
	bInsAnc:	0,
	objData:	{"a":[0,7072,0,[861,598,48,48]]}
};
button15.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj15Img\" src=\"images/exit-normal.png\" style=\"position: absolute; left: 0px; top: 0px; width: 26px; height: 30px; border-style: none;\">",
	cssText:	"visibility: inherit; position: absolute; left: 954px; top: 17px; width: 26px; height: 30px; z-index: 12; cursor: pointer;",
	cssClasses:	"",
	htmlId:		"tobj15",
	bInsAnc:	1,
	cwObj:		{
				"arChld":
	[
		{type:6,on:2,delay:0, actItem:function(){ {trivScormQuit(false, 'example_lesson.html', true);} 
    if(typeof pF == 'function') pF(); }}
	]
			},
	objData:	{"a":[4,2272,0,[954,17,26,30]],"res":"images/exit-normal.png","resClick":"images/exit-click.png","resOver":"images/exit-over.png"}
};
image53.rcdData.att_Desktop = 
{
	innerHtml:	"<img src=\"images/white%20logo.png\" style=\"position: absolute; left: 0px; top: 0px; width: 325px; height: 69px; border-style: none;\">",
	cssText:	"visibility: inherit; position: absolute; left: 0px; top: 0px; width: 325px; height: 69px; z-index: 4;",
	cssClasses:	"",
	htmlId:		"tobj53",
	bInsAnc:	0,
	objData:	{"a":[0,288,0,[0,0,325,69]]}
};
button12.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj12Img\" src=\"images/left-normal.png\" style=\"position: absolute; left: 0px; top: 0px; width: 48px; height: 48px; border-style: none;\">",
	cssText:	"visibility: inherit; position: absolute; left: 861px; top: 598px; width: 48px; height: 48px; z-index: 13; cursor: pointer;",
	cssClasses:	"",
	htmlId:		"tobj12",
	bInsAnc:	1,
	cwObj:		{
				"arChld":
	[
		{type:6,on:2,delay:0, actItem:function(){ trivExitPage('course_test_1_kitties_page.html',false);
    if(typeof pF == 'function') pF(); }},
		{type:6,on:11,delay:0, actItem:function(){ if(VarPageInTitle.equals('1'))button12.hide(); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }}
	]
			},
	objData:	{"a":[4,6624,0,[861,598,48,48]],"res":"images/left-normal.png","resClick":"images/left-click.png","resOver":"images/left-over.png"}
};
button9.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj9Img\" src=\"images/right-normal.png\" style=\"position: absolute; left: 0px; top: 0px; width: 48px; height: 48px; border-style: none;\">",
	cssText:	"visibility: inherit; position: absolute; left: 941px; top: 598px; width: 48px; height: 48px; z-index: 14; cursor: pointer;",
	cssClasses:	"",
	htmlId:		"tobj9",
	bInsAnc:	1,
	cwObj:		{
				"arChld":
	[
		{type:6,on:2,delay:0, actItem:function(){ trivExitPage('course_test_1_last_test_page.html',true);
    if(typeof pF == 'function') pF(); }},
		{type:6,on:11,delay:0, actItem:function(){ if(VarPageInTitle.equals(VarPagesInTitle.getValue()))button9.hide(); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }}
	]
			},
	objData:	{"a":[4,6624,0,[941,598,48,48]],"res":"images/right-normal.png","resClick":"images/right-click.png","resOver":"images/right-over.png"}
};
text7.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 981px; min-height: 23px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 981px; min-height: 23px;\"><p style=\"margin-left:0px;text-indent:0px;margin-top:0px;margin-bottom:0px;\" align=\"left\"><span style=\" font-size:12pt; font-family:\'Arial\', sans-serif; color:#000000; \"><strong>Welcome to the Example Lesson</strong></span></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 9px; top: 119px; width: 981px; height: 23px; z-index: 5;",
	cssClasses:	"",
	htmlId:		"tobj7",
	bInsAnc:	0,
	cwObj:		{
				"arChld":
	[
		{type:6,on:11,delay:0, actItem:function(){ text7.changeContents(VarCurrentPageName.getValue()); 
    if(typeof pF == 'function') pF(); }}
	]
			},
	objData:	{"a":[0,160,0,[9,119,981,23]],"dwTextFlags":0,"borderSize":0,"marginSize":0}
};
text6.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 987px; min-height: 22px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 987px; min-height: 22px;\"><p style=\"margin-left:0px;text-indent:0px;margin-top:0px;margin-bottom:0px;\" align=\"left\"><span style=\" font-size:13pt; font-family:\'Arial\', sans-serif; color:#ffffff; \"><strong>Example Lesson</strong></span></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 9px; top: 78px; width: 987px; height: 22px; z-index: 6;",
	cssClasses:	"",
	htmlId:		"tobj6",
	bInsAnc:	0,
	objData:	{"a":[0,160,0,[9,78,987,22]],"dwTextFlags":0,"borderSize":0,"marginSize":0}
};
text191.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 110px; min-height: 18px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 110px; min-height: 18px;\"><p align=\"left\"><span style=\"font-family:\'Arial\',sans serif;color:#000000;font-size:12pt;\">Page</span></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 832px; top: 143px; width: 110px; height: 18px; z-index: 7;",
	cssClasses:	"",
	htmlId:		"tobj191",
	bInsAnc:	0,
	cwObj:		{
				"arChld":
	[
		{type:6,on:11,delay:0, actItem:function(){ text191.changeContents( "Page " +  VarPageInChapter.getValueForDisplay() + " of " +  VarPagesInChapter.getValueForDisplay() + "" ); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:11,delay:0, actItem:function(){ text191.show(); 
    if(typeof pF == 'function') pF(); }}
	]
			},
	objData:	{"a":[0,2080,0,[832,143,110,18]],"dwTextFlags":0,"borderSize":0,"marginSize":0}
};
button199.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj199Img\" src=\"images/std_qt__Cancel_normal.gif\" style=\"position: absolute; left: 0px; top: 0px; width: 77px; height: 29px; border-style: none;\">",
	cssText:	"visibility: inherit; position: absolute; left: 51px; top: 523px; width: 77px; height: 29px; z-index: 15; cursor: pointer;",
	cssClasses:	"",
	htmlId:		"tobj199",
	bInsAnc:	1,
	cwObj:		{
				"arChld":
	[
		{type:6,on:2,delay:0, actItem:function(){ cancelTest();
    if(typeof pF == 'function') pF(); }}
	]
			},
	objData:	{"a":[4,4192,0,[51,523,77,29]],"res":"images/std_qt__Cancel_normal.gif","resClick":"images/std_qt__Cancel_clicked.gif","resOver":"images/std_qt__Cancel_over.gif"}
};
button200.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj200Img\" src=\"images/std_qt__Back_normal.gif\" style=\"position: absolute; left: 0px; top: 0px; width: 60px; height: 29px; border-style: none;\">",
	cssText:	"visibility: inherit; position: absolute; left: 823px; top: 536px; width: 60px; height: 29px; z-index: 16; cursor: pointer;",
	cssClasses:	"",
	htmlId:		"tobj200",
	bInsAnc:	1,
	cwObj:		{
				"arChld":
	[
		{type:6,on:2,delay:0, actItem:function(){ trivExitPage('course_test_1_kitties_page.html',false);
    if(typeof pF == 'function') pF(); }}
	]
			},
	objData:	{"a":[4,6240,0,[823,536,60,29]],"res":"images/std_qt__Back_normal.gif","resClick":"images/std_qt__Back_clicked.gif","resOver":"images/std_qt__Back_over.gif"}
};
button201.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj201Img\" src=\"images/std_qt__Next_normal.gif\" style=\"position: absolute; left: 0px; top: 0px; width: 60px; height: 29px; border-style: none;\">",
	cssText:	"visibility: inherit; position: absolute; left: 890px; top: 536px; width: 60px; height: 29px; z-index: 17; cursor: pointer;",
	cssClasses:	"",
	htmlId:		"tobj201",
	bInsAnc:	1,
	cwObj:		{
				"arChld":
	[
		{type:6,on:2,delay:0, actItem:function(){ trivExitPage('course_test_1_last_test_page.html',true);
    if(typeof pF == 'function') pF(); }}
	]
			},
	objData:	{"a":[4,6240,0,[890,536,60,29]],"res":"images/std_qt__Next_normal.gif","resClick":"images/std_qt__Next_clicked.gif","resOver":"images/std_qt__Next_over.gif"}
};
qu296.rcdData.att_Desktop = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	htmlId:		"qu296",
	bInsAnc:	undefined,
	cwObj:		{
				"crLineColor":	"",
				"questType":	13,
				"dwQuestFlags":	8388608,
				"doImmFeedback":	0,
				"maxAllowedAttempts":	0,
				"arrAns":	[],
				"correctFeedbackFunc":	0,
				"incorrectFeedbackFunc":	0,
				"attemptsFeedbackFunc":	0,
				"numberEntryFunc":	function(){ return ( Varmath2.equalsNE('\u0036\u0030')); },
				"varQuest":	Varmath2
			},
	objData:	{"a":[0,32,0,[]]}
};
text302.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 81px; min-height: 36px;\"><legend><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 81px; min-height: 36px;\"><label for=\"frmobj303\" style=\"cursor:default\"><p align=\"left\"><span style=\"font-family:\'Arial\',sans serif;color:#000000;font-size:12pt;\">10 + 50 =</span></p></label></div></legend></div>",
	cssText:	"visibility: inherit; position: absolute; left: 486px; top: 300px; width: 81px; height: 36px; z-index: 8;",
	cssClasses:	"",
	htmlId:		"tobj302",
	bInsAnc:	0,
	fieldsetId:	'fset296',
	objData:	{"a":[0,32,0,[486,300,81,36]],"dwTextFlags":0,"borderSize":0,"marginSize":0}
};
entry303.rcdData.att_Desktop = 
{
	innerHtml:	"<input type=\"text\" maxlength=\"4\" name=\"Entry field\" id=\"frmobj303\" title=\"Entry field\" onkeypress=\"entry303.numberOnlyKeyPressedHandler(event);\" onpropertychange=\"if( !Varmath2.equals(this.value) ) {qu296.hasBeenProcessed=false;Varmath2.set(this.value);}\" onchange=\"if( !Varmath2.equals(this.value) ) {qu296.hasBeenProcessed=false;Varmath2.set(this.value);}\" onkeyup=\"if( !Varmath2.equals(this.value) ) {qu296.hasBeenProcessed=false;Varmath2.set(this.value);}\" onblur=\"if (!qu296.hasBeenProcessed) qu296.questionUpdated()\" style=\"font-size: 12pt; font-family: Arial, \'sans serif\'; margin: 0px; padding: 0px; color: rgb(0, 0, 0); position: absolute; left: 0px; top: 0px; width: 160px; height: 24px; background-color: rgb(255, 255, 255);\">",
	cssText:	"visibility: inherit; position: absolute; left: 486px; top: 340px; width: 160px; height: 24px; z-index: 9;",
	cssClasses:	"",
	htmlId:		"tobj303",
	bInsAnc:	0,
	fieldsetId:	'fset296',
	objData:	{"a":[0,32,0,[486,340,160,24]],"formType":2,"dwFormFlags":2048,"iNumChars":4}
};
qu288.rcdData.att_Desktop = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	htmlId:		"qu288",
	bInsAnc:	undefined,
	cwObj:		{
				"crLineColor":	"",
				"questType":	13,
				"dwQuestFlags":	8388608,
				"doImmFeedback":	0,
				"maxAllowedAttempts":	0,
				"arrAns":	[],
				"correctFeedbackFunc":	0,
				"incorrectFeedbackFunc":	0,
				"attemptsFeedbackFunc":	0,
				"numberEntryFunc":	function(){ return ( Varmath1.equalsNE('\u0034')); },
				"varQuest":	Varmath1
			},
	objData:	{"a":[0,32,0,[]]}
};
text294.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 51px; min-height: 20px;\"><legend><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 51px; min-height: 20px;\"><label for=\"frmobj295\" style=\"cursor:default\"><p align=\"left\"><span style=\"font-family:\'Arial\',sans serif;color:#000000;font-size:12pt;\">2 + 2 = </span></p></label></div></legend></div>",
	cssText:	"visibility: inherit; position: absolute; left: 144px; top: 299px; width: 51px; height: 20px; z-index: 10;",
	cssClasses:	"",
	htmlId:		"tobj294",
	bInsAnc:	0,
	fieldsetId:	'fset288',
	objData:	{"a":[0,32,0,[144,299,51,20]],"dwTextFlags":0,"borderSize":0,"marginSize":0}
};
entry295.rcdData.att_Desktop = 
{
	innerHtml:	"<input type=\"text\" maxlength=\"4\" name=\"Entry field\" id=\"frmobj295\" title=\"Entry field\" onkeypress=\"entry295.numberOnlyKeyPressedHandler(event);\" onpropertychange=\"if( !Varmath1.equals(this.value) ) {qu288.hasBeenProcessed=false;Varmath1.set(this.value);}\" onchange=\"if( !Varmath1.equals(this.value) ) {qu288.hasBeenProcessed=false;Varmath1.set(this.value);}\" onkeyup=\"if( !Varmath1.equals(this.value) ) {qu288.hasBeenProcessed=false;Varmath1.set(this.value);}\" onblur=\"if (!qu288.hasBeenProcessed) qu288.questionUpdated()\" style=\"font-size: 12pt; font-family: Arial, \'sans serif\'; margin: 0px; padding: 0px; color: rgb(0, 0, 0); position: absolute; left: 0px; top: 0px; width: 160px; height: 24px; background-color: rgb(255, 255, 255);\">",
	cssText:	"visibility: inherit; position: absolute; left: 144px; top: 339px; width: 160px; height: 24px; z-index: 11;",
	cssClasses:	"",
	htmlId:		"tobj295",
	bInsAnc:	0,
	fieldsetId:	'fset288',
	objData:	{"a":[0,32,0,[144,339,160,24]],"formType":2,"dwFormFlags":2048,"iNumChars":4}
};
rcdObj.pgWidth_Desktop = pgWidth_desktop;
rcdObj.preload_Desktop = ["images/background.png","images/right-normal.png","images/right-over.png","images/right-click.png","images/left-normal.png","images/left-over.png","images/left-click.png","images/exit-normal.png","images/exit-over.png","images/exit-click.png","images/header.png","images/footer.png","images/next-disabled.png","images/back-disabled.png","images/white%20logo.png","images/std_qt__Cancel_normal.gif","images/std_qt__Cancel_over.gif","images/std_qt__Cancel_clicked.gif","images/std_qt__Back_normal.gif","images/std_qt__Back_over.gif","images/std_qt__Back_clicked.gif","images/std_qt__Next_normal.gif","images/std_qt__Next_over.gif","images/std_qt__Next_clicked.gif"];
rcdObj.pgStyle_Desktop = 'position: absolute; left: 50%; top: 0px; width: 1009px; height: 662px; overflow: hidden; margin-left: -504.5px; background-image: url("images/background.png"); background-size: auto;'
rcdObj.backgrd_Desktop = ["#CCCCCC","url(images/background.png)",1009,2,1];
