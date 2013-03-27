
var task = null;

var setupTask = function(e){
  createNavButtons();
  loadTask()
}

var createNavButtons = function(){
  Ti.API.info("Creating Done Button");
  var doneButton = createNavButton("Done", doneClick);
  Ti.API.info("Creating Cancel Button");
  var cancelButton = createNavButton("Cancel", cancelClick)
  
  $.taskWin.rightNavButton = doneButton;
  $.taskWin.leftNavButton = cancelButton;
  
}

exports.setTask = function(t){
  task = t;
}

var loadTask = function(){
  $.title.value = task.get("title");
  $.complete.value = task.get("complete");
  $.note.value = task.get("note");
}

var saveTask = function(){
  task.set("title", $.title.value);
  task.set('complete', $.complete.value);
  task.set('note', $.note.value)
  task.save();
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
  //$.distroy();
}

var doneClick = function(e){
  //alert("Done was clicked");
  saveTask();
  cancelClick();
}