Ti.include("/globals/menu.js");
Ti.UI.setBackgroundColor('#FFF');

// Window
var win1 = Ti.UI.createWindow({  
    title:'Game 1',
    backgroundColor:'#fff',
    tabBarHidden: true,
    orientationModes: [Titanium.UI.LANDSCAPE_RIGHT, Titanium.UI.LANDSCAPE_LEFT]
});
var webview = Titanium.UI.createWebView({url:'/web/pop.htm'});
setCurrentWebView(webview);
win1.add(webview);

// Menu button
var btnPick = Ti.UI.createButton({ title:'Pick Game' });
btnPick.addEventListener('click',function(){ menuButtonClick(); });
win1.leftNavButton = btnPick;
win1.add(menu);

// Tab group (needed to show title bar)
var tabGroup = Ti.UI.createTabGroup();
var tab = Ti.UI.createTab({ window:win1 });
tabGroup.addTab(tab);
tabGroup.open();