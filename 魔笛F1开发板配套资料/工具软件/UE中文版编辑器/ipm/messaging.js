//---------------------------------------------------//
// Variables 
//---------------------------------------------------//

var BuyUE = "ue_register.html";
var UpgradeUE = "ue_paid_upgrade.html";
var BuyUEUCBundle = "ueuc_bundle_register.html";
var UpgradeUE2UEUCBundle = "ue2ueuc_bundle_upgrade.html";
var application = "UltraEdit";
var urlPrefix = "http://www.ultraedit.com/redirects/registration/";

var gaStr = "?utm_source="+application+"&utm_medium=ipm&utm_campaign=";


//---------------------------------------------------//
// Dialog display order
//---------------------------------------------------//
// entry: [content], [headline], [template (side_by_side|sidebar)]
var contentArray = [];
contentArray[0]  = new Array(benefitsContent, strExpiredTopHeadline, 'side_by_side'); // offer (expired)
contentArray[1]  = new Array(benefitsContent, strHurryTopHeadline, 'side_by_side');  // offer 
contentArray[2]  = new Array(benefitsContent, strHurryTopHeadline, 'side_by_side');  // offer 
contentArray[3]  = new Array(benefitsContent, strHurryTopHeadline, 'side_by_side');  // offer 
contentArray[4]  = new Array(benefitsContent, strHurryTopHeadline, 'side_by_side');  // offer 
contentArray[5]  = new Array(benefitsContent, strHurryTopHeadline, 'side_by_side');  // offer 
contentArray[6]  = new Array(benefitsContent, strHurryTopHeadline, 'side_by_side');  // offer 
contentArray[7]  = new Array(benefitsContent, strHurryTopHeadline, 'side_by_side');  // offer 
contentArray[8]  = new Array(benefitsContent, strStdTopHeadline, 'sidebar');  
contentArray[9]  = new Array(keyboardShortcutContent, strStdTopHeadline, 'sidebar'); 
contentArray[10] = new Array(spellCheckerContent, strStdTopHeadline, 'sidebar'); 
contentArray[11] = new Array(benefitsContent, strHurryTopHeadline, 'side_by_side');  // offer
contentArray[12] = new Array(benefitsContent, strStdTopHeadline, 'sidebar'); 
contentArray[13] = new Array(macroContent, strStdTopHeadline, 'sidebar'); 
contentArray[14] = new Array(searchFavoritesContent, strStdTopHeadline, 'sidebar'); 
contentArray[15] = new Array(sshTelnetContent, strStdTopHeadline, 'sidebar'); 
contentArray[16] = new Array(benefitsContent, strStdTopHeadline, 'side_by_side');  // offer
contentArray[17] = new Array(benefitsContent, strStdTopHeadline, 'sidebar'); 
contentArray[18] = new Array(encryptDecryptContent, strStdTopHeadline, 'sidebar'); 
contentArray[19] = new Array(templatesContent, strStdTopHeadline, 'sidebar'); 
contentArray[20] = new Array(scriptingContent, strStdTopHeadline, 'sidebar'); 
contentArray[21] = new Array(benefitsContent, strStdTopHeadline, 'side_by_side');  // offer 
contentArray[22] = new Array(benefitsContent, strStdTopHeadline, 'sidebar');  
contentArray[23] = new Array(ftpSftpContent, strStdTopHeadline, 'sidebar'); 
contentArray[24] = new Array(linkLocalAndRemoteContent, strStdTopHeadline, 'sidebar'); 
contentArray[25] = new Array(sortContent, strStdTopHeadline, 'sidebar'); 
contentArray[26] = new Array(benefitsContent, strStdTopHeadline, 'side_by_side');  // offer 
contentArray[27] = new Array(benefitsContent, strStdTopHeadline, 'sidebar'); 
contentArray[28] = new Array(findAndReplaceInFilesContent, strStdTopHeadline, 'sidebar'); 
contentArray[29] = new Array(mergeDifferencesContent, strStdTopHeadline, 'sidebar'); 
contentArray[30] = new Array(welcomeContent, strStdTopHeadline, 'sidebar'); 
contentArray[31] = new Array(benefitsContent, strStdTopHeadline, 'side_by_side');  // offer 
contentArray[32] = new Array(benefitsContent, strStdTopHeadline, 'sidebar');  
contentArray[33] = new Array(cssStyleBuilderContent, strStdTopHeadline, 'sidebar'); 
contentArray[34] = new Array(environmentsContent, strStdTopHeadline, 'sidebar'); 
contentArray[35] = new Array(htmlPreviewContent, strStdTopHeadline, 'sidebar'); 
contentArray[36] = new Array(benefitsContent, strStdTopHeadline, 'side_by_side');  // offer 
contentArray[37] = new Array(benefitsContent, strStdTopHeadline, 'sidebar'); 
contentArray[38] = new Array(addWordfileContent, strStdTopHeadline, 'sidebar'); 
contentArray[39] = new Array(bookmarksContent, strStdTopHeadline, 'sidebar'); 
contentArray[40] = new Array(columnModeContent, strStdTopHeadline, 'sidebar');  
contentArray[41] = new Array(benefitsContent, strStdTopHeadline, 'side_by_side');  //offer
contentArray[42] = new Array(diffFilesAndFoldersContent, strStdTopHeadline, 'sidebar'); 
contentArray[43] = new Array(projectsContent, strStdTopHeadline, 'sidebar'); 
contentArray[44] = new Array(findAndReplaceContent, strStdTopHeadline, 'sidebar'); 
contentArray[45] = new Array(welcomeContent, strStdTopHeadline, 'sidebar'); 


//---------------------------------------------------//
// CONSTRUCTOR
// function runs when the dialog is called
//---------------------------------------------------//
function Preload() { 
  
  var daysAvailable = getDaysAvailable();         //total days available
  var daysRemaining = getDaysRemaining();         //days remaining
    
  var percent = daysRemaining/daysAvailable;      //percentage used
  
  var imgWidth = 294;                           //background image width for dialog
  
  var percent = daysRemaining/daysAvailable;    //percentage used
  var percentStr = "";
  
  var reminder_overlay_div;                     //reminder_overlay div
  
 
  //--------- Switch Template ---------------//
  switchTemplates(contentArray[daysRemaining][2]);
  
  //--------- Tmplate content ---------------//
  
  //side by side template
  populateSideBySideTemplate();
  
  //sidebar template
  populateSideBarTemplate(daysRemaining);
  
  //--------- set days remaining value ---------------//
  
  // set days remaining value in text
  replaceTemplateText('span', 'days', daysRemaining);
  
  //--------- set progress bar ---------------//
  
  //calculate px
  percentStr = parseInt(imgWidth*percent) + "px";
  
  //get all divs
  var progressBarNodeList = document.getElementsByTagName('div');
  //find "reminder_overlay" divs.
  for (var i=0; i < progressBarNodeList.length; i++) {
    if (progressBarNodeList[i].id == 'progress_bar_overlay') {
      //change style
      progressBarNodeList[i].style.width=percentStr;
    }
  }
  
  //--------- set header ---------------//
  
  // set top_pane header content 
  replaceTemplateText('div', 'headline_subtext', strHeaderSubText);
  replaceTemplateText('h1', 'top_headline', contentArray[daysRemaining][1]);
  
  // set days remaining label 
  replaceTemplateText('span', 'reminder_text', strReminderText);
  
  //--------- set price values (global) ---------------//
  
  // set UE new price value in text
  replaceTemplateText('span', 'ueNewPrice', ueNewPrice);
  
  // set UE upgrade price value in text
  replaceTemplateText('span', 'ueUpgradePrice', ueUpgradePrice);
  
  // set UE/UC bundle price value in text
  replaceTemplateText('span', 'ueUcBundleNewPrice', ueUcBundleNewPrice);
  
  // set UE/UC bundle RETAIL price value in text
  replaceTemplateText('span', 'ueUcBundleRetailPrice', ueUcBundleRetailPrice);
  
  // set UE/UC bundle you save % value in text
  replaceTemplateText('span', 'ueUCBundleYouSavePercentage', ueUCBundleYouSavePercentage);
  
  // set UE/UC bundle you save % value in text
  replaceTemplateText('span', 'ueUpgradeToUeUcBundlePrice', ueUpgradeToUeUcBundlePrice);
  
}


//---------------------------------------------------//
// parse the parameters sent through the dialog.
//---------------------------------------------------//
function queryString(parameter) {
  
  //query string
  //format of parameter in search string is Key=Value, ie: TotalDays=45
  var qStr = location.search.substring(1, location.search.length);
  
  var param_value = 0;
  //parameter is the "key" the "[0-9]+" is the 2 digit numeric value
  var reStr = parameter+"=[0-9]+";
  //match parameter in queryString
  var param_result = qStr.match(reStr);
  if (param_result == null) { //HTML file opened directly with a double click.
   return param_value;        //No additional parameters in the url, match
  }                           //could not find the string to search for.
  param_value = parseInt(param_result[0].substring(parameter.length+1),10);
  return param_value;
}


//---------------------------------------------------//
// replace the innerHTML of a template string
//
// strTagName = html tag, ie: <span id="price">xx</span> -> 'span'
// strIdName = id that is replaced, ie <span id="price">xx</span> -> 'price'
// strVal = new value, ie: <span id="price">xx</span> -> '$50'
//---------------------------------------------------//
function replaceTemplateText(strTagName, strIdName, strVal) {
  
  var nodeList = document.getElementsByTagName(strTagName);
  for (var i=0; i < nodeList.length; i++) {
    if (nodeList[i].id == strIdName) {
      nodeList[i].innerHTML =strVal;
    }
  }
}


//---------------------------------------------------//
//populate the right/left panes for the side by side template
//---------------------------------------------------//
function populateSideBySideTemplate() {
  //--------- set right/left side content ---------------//
  //------- (on side by side template only) -------------//
  
  //right side of template
  if (document.all.right_side_inner_div  != null) {
    document.all.right_side_inner_div.innerHTML=rightSideContent;
  }
  
  //left side of template
  if (document.all.left_side_inner_div  != null) {
    document.all.left_side_inner_div.innerHTML=leftSideContent;
  }
}


//---------------------------------------------------//
//populate the main content area and the sidebar content
//---------------------------------------------------//
function populateSideBarTemplate(daysRemaining) {
  //--------- set center (main) content ---------------//
  // set center content 
  if (document.all.main_inner_div  != null) {
    document.all.main_inner_div.innerHTML=contentArray[daysRemaining][0];
  }
  
  //--------- set block content ---------------//
  // set top right block content 
  if (document.all.top_right_inner_div != null) {
    document.all.top_right_inner_div.innerHTML=strTopRightBlockContent;
  }
  // set bottom right block content 
  if (document.all.bottom_right_inner_div != null) {
    document.all.bottom_right_inner_div.innerHTML=strBottomRightBlockContent;
  }
  // set bottom right block content 
  if (document.all.bottom_right_inner_div != null) {
    document.all.bottom_right_inner_div.innerHTML=strBottomRightBlockContent;
  }
}


//---------------------------------------------------//
//switch between the available templates
//strTemplate = template to use (side_by_side, sidebar)
//---------------------------------------------------//
function switchTemplates(strTemplate) {
  
  var side_by_side_div;
  var sidebar_div;
  
  side_by_side_div = document.getElementById('side_by_side');
  sidebar_div = document.getElementById('sidebar');
  
  switch(strTemplate) {
  case "side_by_side":
    if (side_by_side_div != null) {
      side_by_side_div.style.display='block';
      sidebar_div.style.display='none';
    }
    break;    
  case "side_by_side":
      //don't do anything sidebar div is default
    break;    
  default:
    //don't do anything sidebar div is default
  }
}  


//---------------------------------------------------//
// The total amount of days in the trial
//---------------------------------------------------//
function getDaysAvailable() {
  var daysAvailable = queryString("totaldays"); //total days in trial
  if (daysAvailable == 0) {                     //Avoid division by 0 if parameter could
    daysAvailable = 45;                         //not be found in the url because HTML
  }    
  return daysAvailable;
}


//---------------------------------------------------//
// The amount of days remaining in the trial period
//---------------------------------------------------//
function getDaysRemaining() {
  var daysRemaining = queryString("daysleft");
  return daysRemaining;
}


//---------------------------------------------------//
//opens the purchase links
//---------------------------------------------------//
function purchaseLink(urlConst, langStr) { 
  
  if (langStr == "") {
    langStr == "en";
  }
  //build the URL
  //ex: http://www.ultraedit.com/redirects/registration/en/uc_register.html
  function openURL(urlStr) {
    var daysRemainingVal = getDaysRemaining();
    urlStr = urlPrefix + langStr + "/" + urlStr + gaStr + daysRemainingVal;
    var win = open(urlStr,'window'); 
  }
  
  //check which constant is called
  //run the openURL to open link
  switch(urlConst) {
  case "BuyUE":
    openURL(BuyUE);
    break;    
  case "UpgradeUE":
    openURL(UpgradeUE);
    break;
  case "BuyUEUCBundle":
    openURL(BuyUEUCBundle);
    break;  
  case "UpgradeUE2UEUCBundle":
    openURL(UpgradeUE2UEUCBundle);
    break;  
  default:
    openURL(BuyUE);
  }
}

//---------------------------------------------------//
// tag a link with google analytics, then open the URL
//---------------------------------------------------//
function openLink(urlStr) {
  var daysRemainingVal = getDaysRemaining();
  urlStr = urlStr + gaStr + daysRemainingVal;
  var win = open(urlStr,'window'); 
}
