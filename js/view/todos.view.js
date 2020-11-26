(function (app) {
	'use strict';

	app.view.TodosView = TodosView;

	function TodosView() {
    	let selector = '.todo-list';
    	
    	let el;

    	let template = function (todo) { // Шаблон
	    	/*${todo.editing ? ' class="editing"' : ''}*/
	    	return `
	        	<li id='li' ${todo.complete ? ' class="completed"' : ''}> 
	            	<div class="view">
	                	<input class="toggle" type="checkbox"${todo.complete ? ' checked' : ''}>
	                	<label data-id='${todo.id}'>${todo.value}</label>
	                	<button class="destroy" data-id="${todo.id}"></button>
	            	</div>
	            	<input data-id='${todo.id}' class="edit" value="${todo.value}">
	        	</li>`;
    	}

    	activate();

	    return {
	      render: render // Отрисовка
	    }

	    function activate() {
	    	el = document.querySelector(selector);
	    	
	    	attachEvents();
	    }

	    function attachEvents() { // Attach - прикреплять, присоединять
	      // Делегирование событий на .todo-list
	    	el.addEventListener('click', function (event) {
	    		let target = event.target;

	    		if (target.className === 'destroy') {
	    			let todoId = target.getAttribute('data-id');
	    			app.controller.appController.deleteListItem(todoId);
	    		}
	    	});	
	    	el.addEventListener('dblclick', function (event) {
	    		let target = event.target;

	    		if (target.tagName === 'LABEL') {
	    			// let todoId = target.nextElementSibling.getAttribute('data-id');
	    			let todoId = target.getAttribute('data-id');
	    			console.log('Id элемента, по которому кликнули 2 раза, - ' + todoId);
	    			
	    			app.controller.appController.editListItem(todoId);
	    		}
	    	});
	    	el.addEventListener('keydown', function (event) {
	    		let target = event.target;

	    		if (event.code === 'Enter' && target.value) {
	    			
	    			// let todoId = target.previousElementSibling.children[2].getAttribute('data-id');

	    			let todoId = target.getAttribute('data-id');
	    			let newValue = target.value;
	    				    			
	    			app.controller.appController.updateListItem(todoId, newValue);	
	    		}
	    		
	    	});
	    	
	    }

	    function render(todos) {
	    	el.innerHTML = todos.getItems().map(todo => template(todo)).join('');
	    }

	    /*function render(todos) {
	    	let items;
	      	
	    	todos.getItems().forEach(todo => {

	        	items = items + template(todo);
	        		
	     	});	
	      
	    	el.innerHTML = items;
	    
    	}*/
  	}
})(window.app);