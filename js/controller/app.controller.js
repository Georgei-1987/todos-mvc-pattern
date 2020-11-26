(function (app) {
 	'use strict';

 	// Добавляем функцию AppController (после знака "равно") в качестве метода в объект controller
 	app.controller.AppController = AppController;

	function AppController() {
	    let todos;
	    let todosView;

	    activate();
	    
	    return {
	    	addListItem: addListItem,
	    	deleteListItem: deleteListItem,
	    	editListItem: editListItem,
	    	updateListItem: updateListItem,
	    	focus: focus
	    }

	    function activate() {
	    	todos = new app.model.Todos();

	    	new app.view.NewTodoView();
	    	todosView = new app.view.TodosView();

	     	todosView.render(todos);
	    }

	    function addListItem(newTodo) { //newTodo === введённое значение
	    	todos.addItem(newTodo);
	    	todosView.render(todos);
	    }

	    function deleteListItem (todoId) {
	    	todos.deleteItem(todoId);
	    	todosView.render(todos);
	    }

	    function editListItem (todoId) {
	    	todos.editItem(todoId);
	    	todosView.render(todos);
	    	// todos.focus(todoId);
	    }

	    function updateListItem (todoId, newValue) {
	    	todos.updateItem(todoId, newValue);
	    	todosView.render(todos);
	    }
	}
// Add a comment to this line
})(window.app);

// (function (app) {} )(window.app)