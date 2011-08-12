var menuVisible = false;
var curWebView = null;

function setCurrentWebView(view) {
	curWebView = view;	
}

var menu = Ti.UI.createView({
	width:157,
	height:170,
	borderRadius:10,
	backgroundColor:'gray',
	opacity:0,
	left:30,
	top:30
});

var menuWidth = Ti.Platform.displayCaps.platformWidth - 40;

var sectionView = Ti.UI.createView({
	width:menuWidth-60,
	height:160,
	top:10,
	layout:"horizontal"
});
menu.add(sectionView);

// Change these to the game names (i.e., 'game1'.htm)
var sections = ['Pop the Numbers','Match','Sounds','Animal Choice'];
var sectionLinks = ['pop.htm', 'match.htm', 'sounds.htm', 'choice.htm'];
var sectionViews = [];
var selectedIndex = 0;

for (var c=0;c<sections.length;c++)
{
	var sectionWrap = Ti.UI.createView({
		left:10,
		right:10,
		top:12,
		bottom:12,
		width:144,
		height:126
	});
	sectionViews[c]=sectionWrap;
	sectionView.add(sectionWrap);
	var section = Ti.UI.createView({
		backgroundImage:'KS_nav_ui.png',//"section_picker_"+sections[c]+".png",
		width:131,
		height:110,
	});
	sectionWrap.add(section);
	// create a closure so that we can expose c inside the loop
	(function()
	{
		var index = c;
		var sectionObj = sectionWrap;
		sectionWrap.addEventListener('click',function()
		{
			sectionViews[selectedIndex].backgroundImage=null;
			selectedIndex = index;
			menuVisible = false;
			menu.animate({width:157,opacity:0,top:30,left:30,delay:150,duration:300},function()
			{
				//logo.backgroundImage = 'KS_nav_ui.png';//"section_picker_"+sections[index]+".png";
			});
			
			curWebView.url = '/web/'+sectionLinks[index];
		});
	})();
}

function menuButtonClick() {
	try
	{
		if (menuVisible)
		{
			menu.animate({width:157,opacity:0,top:30,left:30,duration:300});
		}
		else
		{
			var left = (Ti.Platform.displayCaps.platformWidth *.5) - (menuWidth*.5);
			var top = (Ti.Platform.displayCaps.platformHeight * .45) - 60;
			menu.animate({width:menuWidth,opacity:0.8,top:top,left:left,duration:300});
		}
		menuVisible = !menuVisible;
	}
	catch(ex)
	{
		alert(ex);
	}
}