(function (app) {
 	'use strict';

 	app.controller.AppController = AppController;

	function AppController() {
	    let todos;
	    let todosView;

    activate();

    return {
      addListItem: addListItem
    }

    function activate() {
    	todos = new app.model.Todos();
    	todosView = new app.view.TodosView();

     	todosView.render(todos);
    }

    function addListItem(newTodo) {
    	todos.addItem(newTodo);
    	todosView.render(todos);
    }
  }
// Add a comment to this line
})(window.app);