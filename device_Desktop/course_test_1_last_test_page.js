function init_Desktop() {
	if ( rcdObj.view != 'Desktop' ) return;
	if( is.min ){
		var titleMgr = getTitleMgrHandle()
		if( titleMgr ) {
		  if( !titleMgr.loadTest( '_tobj190', 'test190', 'course_test_1_last_test_page.html' )) {
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
		trivPage.issueShowActions(arWnds);
		trivArExec(arWnds,function(wnd){ wnd.issueActions(11); });
		if ( trivPageTracking.GetRangeStatus(198) == 'notstarted' ) trivPageTracking.SetRangeStatus(198,2);
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
	cssText:	"visibility: inherit; position: absolute; left: 954px; top: 17px; width: 26px; height: 30px; z-index: 9; cursor: pointer;",
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
	cssText:	"visibility: inherit; position: absolute; left: 861px; top: 598px; width: 48px; height: 48px; z-index: 10; cursor: pointer;",
	cssClasses:	"",
	htmlId:		"tobj12",
	bInsAnc:	1,
	cwObj:		{
				"arChld":
	[
		{type:6,on:2,delay:0, actItem:function(){ trivExitPage('course_test_1_math.html',false);
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
	cssText:	"visibility: inherit; position: absolute; left: 941px; top: 598px; width: 48px; height: 48px; z-index: 11; cursor: pointer;",
	cssClasses:	"",
	htmlId:		"tobj9",
	bInsAnc:	1,
	cwObj:		{
				"arChld":
	[
		{type:6,on:2,delay:0, actItem:function(){ trivExitPage('course_test_1_pass.html',true);
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
	cssText:	"visibility: inherit; position: absolute; left: 51px; top: 523px; width: 77px; height: 29px; z-index: 12; cursor: pointer;",
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
	cssText:	"visibility: inherit; position: absolute; left: 823px; top: 536px; width: 60px; height: 29px; z-index: 13; cursor: pointer;",
	cssClasses:	"",
	htmlId:		"tobj200",
	bInsAnc:	1,
	cwObj:		{
				"arChld":
	[
		{type:6,on:2,delay:0, actItem:function(){ trivExitPage('course_test_1_math.html',false);
    if(typeof pF == 'function') pF(); }}
	]
			},
	objData:	{"a":[4,6240,0,[823,536,60,29]],"res":"images/std_qt__Back_normal.gif","resClick":"images/std_qt__Back_clicked.gif","resOver":"images/std_qt__Back_over.gif"}
};
text306.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 560px; min-height: 142px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 560px; min-height: 142px;\"><p style=\"text-align:left\"><span style=\"font-size: 16pt; color: rgb(0, 0, 0); font-family: Arial, \'sans serif\';\">You completed the test! Hit done to submit your answers!</span></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 232px; top: 300px; width: 560px; height: 142px; z-index: 8;",
	cssClasses:	"",
	htmlId:		"tobj306",
	bInsAnc:	0,
	objData:	{"a":[0,32,0,[232,300,560,142]],"dwTextFlags":0,"borderSize":0,"marginSize":0}
};
button202.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj202Img\" src=\"images/std_qt__Done_normal.gif\" style=\"position: absolute; left: 0px; top: 0px; width: 67px; height: 29px; border-style: none;\">",
	cssText:	"visibility: inherit; position: absolute; left: 907px; top: 533px; width: 67px; height: 29px; z-index: 14; cursor: pointer;",
	cssClasses:	"",
	htmlId:		"tobj202",
	bInsAnc:	1,
	cwObj:		{
				"arChld":
	[
		{type:6,on:2,delay:0, actItem:function(){ processTest(1);
    if(typeof pF == 'function') pF(); }}
	]
			},
	objData:	{"a":[4,6240,0,[907,533,67,29]],"res":"images/std_qt__Done_normal.gif","resClick":"images/std_qt__Done_clicked.gif","resOver":"images/std_qt__Done_over.gif"}
};
rcdObj.pgWidth_Desktop = pgWidth_desktop;
rcdObj.preload_Desktop = ["images/background.png","images/right-normal.png","images/right-over.png","images/right-click.png","images/left-normal.png","images/left-over.png","images/left-click.png","images/exit-normal.png","images/exit-over.png","images/exit-click.png","images/header.png","images/footer.png","images/next-disabled.png","images/back-disabled.png","images/white%20logo.png","images/std_qt__Cancel_normal.gif","images/std_qt__Cancel_over.gif","images/std_qt__Cancel_clicked.gif","images/std_qt__Back_normal.gif","images/std_qt__Back_over.gif","images/std_qt__Back_clicked.gif","images/std_qt__Done_normal.gif","images/std_qt__Done_over.gif","images/std_qt__Done_clicked.gif"];
rcdObj.pgStyle_Desktop = 'position: absolute; left: 50%; top: 0px; width: 1009px; height: 662px; overflow: hidden; margin-left: -504.5px; background-image: url("images/background.png"); background-size: auto;'
rcdObj.backgrd_Desktop = ["#CCCCCC","url(images/background.png)",1009,2,1];
