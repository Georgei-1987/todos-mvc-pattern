(function (app) {
'use strict';

app.view.NewTodoView = NewTodoView;

function NewTodoView() {
	let selector = '.new-todo';

	let el;

	activate();

	return {
	}

	function activate() {
		el = document.querySelector(selector);

		attachEvents();
	}

	function attachEvents() {
		el.addEventListener('keydown', function (event) {
			if (event.code === 'Enter' && el.value) {
				app.controller.appController.addListItem(el.value);
				unrender();
			}
		});
	}

	function unrender() {
		el.value = null;
	}
}

// Add a comment to this line
})(window.app);