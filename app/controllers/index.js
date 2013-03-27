var setupTaskList = function(){
  Ti.API.info("Loading setup Task List")
  createAddButton();
  
}

var createAddButton = function(){
  Ti.API.info("Creating Add Button");
  var addButton = Ti.UI.createButton({ 
      title: "Add"
  });
  addButton.addEventListener('click', addClick);
  
  $.home.rightNavButton = addButton;
}

var addClick = function(e){
  //alert("Ready to Add Task");
  
  var tc = Alloy.createController("task");
  
  tc.getView().open({animated:true});
}

$.index.open();
