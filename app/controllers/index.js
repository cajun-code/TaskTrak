var tasks = null;

var setupTaskList = function(){
  Ti.API.info("Loading setup Task List")
  createAddButton();
  tasks = Alloy.createCollection("task")
  tasks.fetch()
  loadTasks();
  tasks.on('change', loadTasks);
}

var loadTasks = function(){
  var data = [];
  tasks.map(function(task){
    var title = task.get("title");
    var row = Ti.UI.createTableViewRow({title: title});
    row.addEventListener('click', rowClick);
    data.push(row);
  });
  $.task_table.setData(data);
  
}

var createAddButton = function(){
  Ti.API.info("Creating Add Button");
  var addButton = Ti.UI.createButton({ 
      title: "Add"
  });
  addButton.addEventListener('click', addClick);
  
  $.home.rightNavButton = addButton;
}
var rowClick = function(e){
  openTask(tasks.at(e.index));
}

var addClick = function(e){
  //alert("Ready to Add Task");
  var task = Alloy.createModel("task");
  tasks.push(task);
  openTask(task);
}

var openTask = function(task){
  var tc = Alloy.createController("task");
  tc.setTask(task);
  tc.getView().open({animated:true});
}


$.index.open();
