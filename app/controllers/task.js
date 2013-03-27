
var task = null;

var setupTask = function(e){
  createNavButtons();
}

var createNavButtons = function(){
  Ti.API.info("Creating Done Button");
  var doneButton = createNavButton("Done", doneClick);
  Ti.API.info("Creating Cancel Button");
  var cancelButton = createNavButton("Cancel", cancelClick)
  
  $.taskWin.rightNavButton = doneButton;
  $.taskWin.leftNavButton = cancelButton;
  
}

var createNavButton = function(title, clickAction){
  var button = Ti.UI.createButton({ 
         title: title
  });
  button.addEventListener('click', clickAction);
  return button;
}

var cancelClick = function(e){
  $.getView().close({animated: true});
}

var doneClick = function(e){
  alert("Done was clicked");
}