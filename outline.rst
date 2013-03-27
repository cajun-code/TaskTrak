TaskTrak 
===========


Creating The Project
-----------------------


	$ titanium create --platforms ios,android,mobileweb --name tasktrak --id com.cajuncode.tasktrak 
	
	$ cd tasktrak
	
	$ alloy new
	
	$ alloy run
	
	$ titanium build -p iphone
	

Laying out the List
--------------------

  <NavigationGroup id="nav" platform="ios">
      <Window id="home" title="Task Trak" >
          
      </Window>
  </NavigationGroup>
  
Lets add the table to window

  <TableView id="task_table" />
  
  $ titanium build -p iphone
  
  
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
    alert("Ready to Add Task");
  }
  
  
  onOpen="setupTaskList"
  
  
Creating the Task Controller
------------------------------
  
  alloy generate controller task
  
  
  
  
Binding to Data
------------------

  alloy generate model task sql title:String note:String complete:Boolean