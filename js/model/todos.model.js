(function (app) {
	'use strict';

	app.model.Todos = Todos;

	function Todos() {
    	let model;

    	activate();

    	return {
    		addItem: addItem,
    		deleteItem: deleteItem,
    		editItem: editItem,
    		getItems: getItems,
    		updateItem: updateItem,
    		focus: focus
    	}

	    function activate() {
	    	
	      	model = [];

	    	/*model = [
	        	{
	        		id: 1,
	        		value: 'George',
	        		complete: false
	        	}, {
	        		id: 2,
	        		value: 'Igor',
	        		complete: false
	        	}
	      	];*/

	    }

	    function addItem(newTodo) {
	    	model.push( {
	        	id: (model.length + 1),
	        	value: newTodo,
	        	editing: false,
	        	complete: false
	      	} );
	    }

	    function deleteItem(todoId) {
	    	let index;

	    	for (let i = 0; i < model.length; i++) {
	    		if (model[i].id === +todoId) {
	    			index = i;
	    		}
	    	}

	    	model.splice(index, 1);
	    }

	    function editItem(todoId) {
	    	let index;

	    	for (let i = 0; i < model.length; i++) {
	    		if (model[i].id === +todoId) {

	    			index = i;
	    		}
	    	}

	    	model[index].editing = true;
	    	document.getElementById('li').classList.add('editing');
	    }

	    function updateItem (todoId, newValue) {
	    	let index;

	    	for (let i = 0; i < model.length; i++) {
	    		if (model[i].id === +todoId) {

	    			index = i;
	    		}
	    	}	    	
	    	console.log('Было значение - ' + model[index].value)
	    	model[index].value = newValue;
	    	console.log('Стало значение - ' + model[index].value)
	    	model[index].editing = false;
	    }

	    /*function focus(todoId) {
	    	// console.log( document.getElementById(`${todoId}`) );
	    	console.log('Неужели работает?');
	    }*/

	    function getItems() {
	    	return model;
	    }
  	}
})(window.app);