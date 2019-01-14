let table = $('#todolist tbody');

let generateTr = (todo, i) => {
	let html = '';
	let checked = todo.completed === true ? 'checked' : '';

	html +=
		'<tr id="' +
		i +
		'"><td><input ' +
		checked +
		' class="delete-check" type="checkbox" value="' +
		i +
		'"></td><td>' +
		todo.todo +
		'</td><td><span class="icon-delete">[X]</span></td></tr>';
	return html;
};

deleteTodo = (i, todos) => {
	todos.splice(i, 1);
	localStorage.setItem('todos', JSON.stringify(todos));
	displayTodos(todos);
};

displayTodos = (todos) => {
	let contentTable = '';
	if (todos.length > 0) {
		todos.map((todo, i) => {
			contentTable += generateTr(todo, i);
			$('#delete-selected-todo').removeClass('hide');
			$('#check-all-todo').removeClass('hide');
		});
	} else {
		$('#delete-selected-todo').addClass('hide');
		$('#check-all-todo').addClass('hide');
		contentTable += '<tr id="no-todos"><td colspan="3">There is no todo</td></tr>';
	}
	table.html(contentTable);
};

addTodo = (todos, todo) => {
	let objTodo = {
		todo: todo,
		completed: false
	};

	todos.push(objTodo);
	localStorage.setItem('todos', JSON.stringify(todos));
	if ($('#no-todos').length > 0) {
		$('#no-todos').remove();
	}
	$('#input-todo').val('');
	return objTodo;
};

appendTodo = (todo) => {
	let i = localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')).length - 1 : 0;
	table.append(generateTr(todo, i));
	let element = $('#delete-selected-todo');
	let checkAll = $('#check-all-todo');
	if (element.hasClass('hide')) {
		element.removeClass('hide');
	}
	if (checkAll.hasClass('hide')) {
		checkAll.removeClass('hide');
	}
	$('#todolist #check-all-todo').prop('checked', false);
};

$(function() {
	let todos = localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : [];
	displayTodos(todos);

	$('#input-todo').on('keypress', function(e) {
		let keycode = e.keyCode || e.which;
		if (keycode == '13') {
			let inputTodo = $(this).val();
			const obj = addTodo(todos, inputTodo);
			appendTodo(obj);
		}
	});

	$('#submit-todo').on('click', function(e) {
		e.preventDefault();
		let inputTodo = $('#input-todo').val();
		const obj = addTodo(todos, inputTodo);
		appendTodo(obj);
	});

	$('#todolist').on('click', '.icon-delete', function(e) {
		let id = $(this).closest('tr').attr('id');
		e.preventDefault();
		deleteTodo(id, todos);
	});

	$('#todolist').on('change', '.delete-check', function() {
		let index = parseInt($(this).val());
		if ($(this).is(':checked')) {
			todos[index].completed = true;
		} else {
			todos[index].completed = false;
		}
		todos.splice(index, 1, todos[index]);
		localStorage.setItem('todos', JSON.stringify(todos));
	});

	$('#todolist').on('change', '#check-all-todo', function() {
		if ($(this).is(':checked')) {
			todos.map((todo) => (todo.completed = true));
			$('#todolist .delete-check').prop('checked', true);
		} else {
			todos.map((todo) => (todo.completed = false));
			$('#todolist .delete-check').prop('checked', false);
		}
		localStorage.setItem('todos', JSON.stringify(todos));
	});

	$('.todolist__delete-selected').on('click', '#delete-selected-todo', function(e) {
		e.preventDefault();

		for (let i = todos.length - 1; i > -1; i--) {
			if (todos[i].completed) {
				todos.splice(i, 1);
			}
		}
		localStorage.setItem('todos', JSON.stringify(todos));
		$('#todolist #check-all-todo').prop('checked', false);
		displayTodos(todos);
	});
});
