function init_Desktop() {
	if ( rcdObj.view != 'Desktop' ) return;
	if( is.min ){
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
		og333.cwObj={};
		og333.cwObj.arChld=[
    {type:6,on:12,delay:0, actItem:function(){
        grpAction0for333();
    }}];
		rg334.cwObj={};
		rg334.cwObj.arChld=[
    ];
		rg334.cwObj.formVar=VarRadioGroup_334;
		rg334.pubRGUpdate();
		trivPage.issueShowActions(arWnds);
		trivArExec(arWnds,function(wnd){ wnd.issueActions(11); });
		if ( trivPageTracking.GetRangeStatus(58) == 'notstarted' ) trivPageTracking.SetRangeStatus(58,2);
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
	cssText:	"visibility: inherit; position: absolute; left: 954px; top: 17px; width: 26px; height: 30px; z-index: 20; cursor: pointer;",
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
	cssText:	"visibility: inherit; position: absolute; left: 861px; top: 598px; width: 48px; height: 48px; z-index: 21; cursor: pointer;",
	cssClasses:	"",
	htmlId:		"tobj12",
	bInsAnc:	1,
	cwObj:		{
				"arChld":
	[
		{type:6,on:2,delay:0, actItem:function(){ trivExitPage('course_welcome_page.html',false);
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
	cssText:	"visibility: inherit; position: absolute; left: 941px; top: 598px; width: 48px; height: 48px; z-index: 22; cursor: pointer;",
	cssClasses:	"",
	htmlId:		"tobj9",
	bInsAnc:	1,
	cwObj:		{
				"arChld":
	[
		{type:6,on:2,delay:0, actItem:function(){ trivExitPage('course_page_3.html',true);
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
og333.rcdData.att_Desktop = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	htmlId:		"og333",
	bInsAnc:	undefined,
	objData:	{"a":[0,32,0,[]]}
};
rg334.rcdData.att_Desktop = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	htmlId:		"rg334",
	bInsAnc:	undefined,
	objData:	{"a":[0,32,0,[]]}
};
radio355.rcdData.att_Desktop = 
{
	innerHtml:	"<div style=\"white-space: nowrap; position: absolute; left: 0px; top: 0px; width: 69px; height: 28px;\"><input type=\"radio\" id=\"rad355\" name=\"rad334\" value=\"Black\" onclick=\"VarRadioGroup_334.set(this.value);rg334.pubRGUpdate();rg334.issueActions(12);og333.issueActions(12);\"><label for=\"rad355\" style=\"font-size: 12pt; font-family: Arial, \'sans serif\'; color: rgb(0, 0, 0);\">Black</label></div>",
	cssText:	"visibility: inherit; position: absolute; left: 250px; top: 336px; width: 69px; height: 28px; z-index: 7;",
	cssClasses:	"",
	htmlId:		"tobj355",
	bInsAnc:	0,
	fieldsetId:	'fset333',
	objData:	{"a":[0,32,0,[250,336,69,28]],"formType":1,"dwFormFlags":0}
};
radio356.rcdData.att_Desktop = 
{
	innerHtml:	"<div style=\"white-space: nowrap; position: absolute; left: 0px; top: 0px; width: 71px; height: 28px;\"><input type=\"radio\" id=\"rad356\" name=\"rad334\" value=\"White\" onclick=\"VarRadioGroup_334.set(this.value);rg334.pubRGUpdate();rg334.issueActions(12);og333.issueActions(12);\"><label for=\"rad356\" style=\"font-size: 12pt; font-family: Arial, \'sans serif\'; color: rgb(0, 0, 0);\">White</label></div>",
	cssText:	"visibility: inherit; position: absolute; left: 250px; top: 384px; width: 71px; height: 28px; z-index: 8;",
	cssClasses:	"",
	htmlId:		"tobj356",
	bInsAnc:	0,
	fieldsetId:	'fset333',
	objData:	{"a":[0,32,0,[250,384,71,28]],"formType":1,"dwFormFlags":0}
};
radio357.rcdData.att_Desktop = 
{
	innerHtml:	"<div style=\"white-space: nowrap; position: absolute; left: 0px; top: 0px; width: 101px; height: 28px;\"><input type=\"radio\" id=\"rad357\" name=\"rad334\" value=\"Rainbow\" onclick=\"VarRadioGroup_334.set(this.value);rg334.pubRGUpdate();rg334.issueActions(12);og333.issueActions(12);\"><label for=\"rad357\" style=\"font-size: 12pt; font-family: Arial, \'sans serif\'; color: rgb(0, 0, 0);\">Rainbow!!</label></div>",
	cssText:	"visibility: inherit; position: absolute; left: 250px; top: 432px; width: 101px; height: 28px; z-index: 9;",
	cssClasses:	"",
	htmlId:		"tobj357",
	bInsAnc:	0,
	fieldsetId:	'fset333',
	objData:	{"a":[0,32,0,[250,432,101,28]],"formType":1,"dwFormFlags":0}
};
radio347.rcdData.att_Desktop = 
{
	innerHtml:	"<div style=\"white-space: nowrap; position: absolute; left: 0px; top: 0px; width: 74px; height: 28px;\"><input type=\"radio\" id=\"rad347\" name=\"rad334\" value=\"Indigo\" onclick=\"VarRadioGroup_334.set(this.value);rg334.pubRGUpdate();rg334.issueActions(12);og333.issueActions(12);\"><label for=\"rad347\" style=\"font-size: 12pt; font-family: Arial, \'sans serif\'; color: rgb(0, 0, 0);\">Indigo</label></div>",
	cssText:	"visibility: inherit; position: absolute; left: 250px; top: 240px; width: 74px; height: 28px; z-index: 10;",
	cssClasses:	"",
	htmlId:		"tobj347",
	bInsAnc:	0,
	fieldsetId:	'fset333',
	objData:	{"a":[0,32,0,[250,240,74,28]],"formType":1,"dwFormFlags":0}
};
radio348.rcdData.att_Desktop = 
{
	innerHtml:	"<div style=\"white-space: nowrap; position: absolute; left: 0px; top: 0px; width: 70px; height: 28px;\"><input type=\"radio\" id=\"rad348\" name=\"rad334\" value=\"Violet\" onclick=\"VarRadioGroup_334.set(this.value);rg334.pubRGUpdate();rg334.issueActions(12);og333.issueActions(12);\"><label for=\"rad348\" style=\"font-size: 12pt; font-family: Arial, \'sans serif\'; color: rgb(0, 0, 0);\">Violet</label></div>",
	cssText:	"visibility: inherit; position: absolute; left: 250px; top: 288px; width: 70px; height: 28px; z-index: 11;",
	cssClasses:	"",
	htmlId:		"tobj348",
	bInsAnc:	0,
	fieldsetId:	'fset333',
	objData:	{"a":[0,32,0,[250,288,70,28]],"formType":1,"dwFormFlags":0}
};
radio341.rcdData.att_Desktop = 
{
	innerHtml:	"<div style=\"white-space: nowrap; position: absolute; left: 0px; top: 0px; width: 62px; height: 28px;\"><input type=\"radio\" id=\"rad341\" name=\"rad334\" value=\"Blue\" onclick=\"VarRadioGroup_334.set(this.value);rg334.pubRGUpdate();rg334.issueActions(12);og333.issueActions(12);\"><label for=\"rad341\" style=\"font-size: 12pt; font-family: Arial, \'sans serif\'; color: rgb(0, 0, 0);\">Blue</label></div>",
	cssText:	"visibility: inherit; position: absolute; left: 66px; top: 438px; width: 62px; height: 28px; z-index: 12;",
	cssClasses:	"",
	htmlId:		"tobj341",
	bInsAnc:	0,
	fieldsetId:	'fset333',
	objData:	{"a":[0,32,0,[66,438,62,28]],"formType":1,"dwFormFlags":0}
};
radio342.rcdData.att_Desktop = 
{
	innerHtml:	"<div style=\"white-space: nowrap; position: absolute; left: 0px; top: 0px; width: 74px; height: 28px;\"><input type=\"radio\" id=\"rad342\" name=\"rad334\" value=\"Green\" onclick=\"VarRadioGroup_334.set(this.value);rg334.pubRGUpdate();rg334.issueActions(12);og333.issueActions(12);\"><label for=\"rad342\" style=\"font-size: 12pt; font-family: Arial, \'sans serif\'; color: rgb(0, 0, 0);\">Green</label></div>",
	cssText:	"visibility: inherit; position: absolute; left: 66px; top: 390px; width: 74px; height: 28px; z-index: 13;",
	cssClasses:	"",
	htmlId:		"tobj342",
	bInsAnc:	0,
	fieldsetId:	'fset333',
	objData:	{"a":[0,32,0,[66,390,74,28]],"formType":1,"dwFormFlags":0}
};
radio343.rcdData.att_Desktop = 
{
	innerHtml:	"<div style=\"white-space: nowrap; position: absolute; left: 0px; top: 0px; width: 83px; height: 28px;\"><input type=\"radio\" id=\"rad343\" name=\"rad334\" value=\"Orange\" onclick=\"VarRadioGroup_334.set(this.value);rg334.pubRGUpdate();rg334.issueActions(12);og333.issueActions(12);\"><label for=\"rad343\" style=\"font-size: 12pt; font-family: Arial, \'sans serif\'; color: rgb(0, 0, 0);\">Orange</label></div>",
	cssText:	"visibility: inherit; position: absolute; left: 66px; top: 294px; width: 83px; height: 28px; z-index: 14;",
	cssClasses:	"",
	htmlId:		"tobj343",
	bInsAnc:	0,
	fieldsetId:	'fset333',
	objData:	{"a":[0,32,0,[66,294,83,28]],"formType":1,"dwFormFlags":0}
};
radio337.rcdData.att_Desktop = 
{
	innerHtml:	"<div style=\"white-space: nowrap; position: absolute; left: 0px; top: 0px; width: 77px; height: 28px;\"><input type=\"radio\" id=\"rad337\" name=\"rad334\" value=\"Yellow\" onclick=\"VarRadioGroup_334.set(this.value);rg334.pubRGUpdate();rg334.issueActions(12);og333.issueActions(12);\"><label for=\"rad337\" style=\"font-size: 12pt; font-family: Arial, \'sans serif\'; color: rgb(0, 0, 0);\">Yellow</label></div>",
	cssText:	"visibility: inherit; position: absolute; left: 66px; top: 342px; width: 77px; height: 28px; z-index: 15;",
	cssClasses:	"",
	htmlId:		"tobj337",
	bInsAnc:	0,
	fieldsetId:	'fset333',
	objData:	{"a":[0,32,0,[66,342,77,28]],"formType":1,"dwFormFlags":0}
};
radio339.rcdData.att_Desktop = 
{
	innerHtml:	"<div style=\"white-space: nowrap; position: absolute; left: 0px; top: 0px; width: 59px; height: 28px;\"><input type=\"radio\" id=\"rad339\" name=\"rad334\" value=\"Red\" onclick=\"VarRadioGroup_334.set(this.value);rg334.pubRGUpdate();rg334.issueActions(12);og333.issueActions(12);\"><label for=\"rad339\" style=\"font-size: 12pt; font-family: Arial, \'sans serif\'; color: rgb(0, 0, 0);\">Red</label></div>",
	cssText:	"visibility: inherit; position: absolute; left: 66px; top: 246px; width: 59px; height: 28px; z-index: 16;",
	cssClasses:	"",
	htmlId:		"tobj339",
	bInsAnc:	0,
	fieldsetId:	'fset333',
	objData:	{"a":[0,32,0,[66,246,59,28]],"formType":1,"dwFormFlags":0}
};
button380.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj380Img\" src=\"images/Submit_380_normal.gif\" style=\"position: absolute; left: 0px; top: 0px; width: 75px; height: 27px; border-style: none;\">",
	cssText:	"visibility: inherit; position: absolute; left: 164px; top: 498px; width: 75px; height: 27px; z-index: 23; cursor: pointer;",
	cssClasses:	"",
	htmlId:		"tobj380",
	bInsAnc:	1,
	cwObj:		{
				"arChld":
	[
		{type:6,on:2,delay:0, actItem:function(){ LMSTinCanStatement( 'submitted', '' +  VarRadioGroup_334.getValueForDisplay() + '')

    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0, actItem:function(){ trivAlert('384','example lesson','Nice Choice!', function(){}); }}
	]
			},
	objData:	{"a":[4,8288,0,[164,498,75,27]],"res":"images/Submit_380_normal.gif","resClick":"images/Submit_380_clicked.gif","resOver":"images/Submit_380_over.gif"}
};
text318.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 200px; min-height: 27px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 200px; min-height: 27px;\"><p style=\"text-align:left\"><span style=\"font-family:\'Arial\',sans serif;font-size:12pt;color:#000000\">Click the arrow to continue.</span></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 776px; top: 553px; width: 200px; height: 27px; z-index: 17;",
	cssClasses:	"",
	htmlId:		"tobj318",
	bInsAnc:	0,
	objData:	{"a":[0,32,0,[776,553,200,27]],"dwTextFlags":0,"borderSize":0,"marginSize":0}
};
image176.rcdData.att_Desktop = 
{
	innerHtml:	"<img src=\"images/paint.gif\" style=\"position: absolute; left: 0px; top: 0px; width: 362px; height: 357px; border-style: none;\">",
	cssText:	"visibility: inherit; position: absolute; left: 565px; top: 175px; width: 362px; height: 357px; z-index: 18;",
	cssClasses:	"",
	htmlId:		"tobj176",
	bInsAnc:	0,
	objData:	{"a":[0,288,0,[565,175,362,357]]}
};
text174.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 343px; min-height: 36px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 343px; min-height: 36px;\"><p style=\"text-align:left\"><span style=\"font-size: 16pt; color: rgb(0, 0, 0); font-family: Arial, \'sans serif\';\">What is your favorite color?</span></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 29px; top: 171px; width: 343px; height: 36px; z-index: 19;",
	cssClasses:	"",
	htmlId:		"tobj174",
	bInsAnc:	0,
	objData:	{"a":[0,32,0,[29,171,343,36]],"dwTextFlags":0,"borderSize":0,"marginSize":0}
};
rcdObj.pgWidth_Desktop = pgWidth_desktop;
rcdObj.preload_Desktop = ["images/background.png","images/right-normal.png","images/right-over.png","images/right-click.png","images/left-normal.png","images/left-over.png","images/left-click.png","images/exit-normal.png","images/exit-over.png","images/exit-click.png","images/header.png","images/footer.png","images/next-disabled.png","images/back-disabled.png","images/white%20logo.png","images/paint.gif","images/Submit_380_normal.gif","images/Submit_380_over.gif","images/Submit_380_clicked.gif"];
rcdObj.pgStyle_Desktop = 'position: absolute; left: 50%; top: 0px; width: 1009px; height: 662px; overflow: hidden; margin-left: -504.5px; background-image: url("images/background.png"); background-size: auto;'
rcdObj.backgrd_Desktop = ["#CCCCCC","url(images/background.png)",1009,2,1];
