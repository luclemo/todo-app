var taskInput = document.getElementById('new-task'); // new-task
var addButton = document.getElementsByTagName('button')[0]; // first button
var incompleteTaskHolder = document.getElementById('incomplete-tasks') // incomplete-tasks
var completedTaskHolder = document.getElementById('completed-tasks')// completed-tasks

// Add a new task
var addTask = function() {
	console.log('add task');
	// When button is pressed
	// Create new li with text from #new-task:
		// input (checkbox)
		// label
		// input (text)
		// button.edit
		// button.delete
		// each elements, needs to be modified and appended
}

// Edit an existing task
var editTask = function() {
	console.log('edit task');
	// When the edit button is pressed
		// if the class of the parent is .editMode
			// Switch from .editMode
			// lable text becomes the input's value
		// else
			// switch to .editMode
			// input value becomes the label's text

		// toggle .editMode on parent
}


// Delete an existing task
var deleteTask = function() {
	console.log('delete task');
	// When the delete button is pressed
	 // remove the parent li from the ul
}


// Mark task as complete
var taskCompleted = function() {
	console.log('mark task as complete');
	// When the checkbox is checked
		// append the task li to the #completed-tasks
}


// Mark task as incomplete
var taskIncomplete = function() {
	console.log('mark task as incomplete');
	// When the checkbox is unchecked
	// append the task li to the #incomplete-tasks
}

var bindTaskEvents = function(taskListItem, checkBoxEventHandler) {
	console.log('bind list item events');
		// select li's children
		var checkBox = taskListItem.querySelector('input[type=checkbox]');
		var editButton = taskListItem.querySelector('button.edit');
		var deleteButton = taskListItem.querySelector('button.delete');

		// bind editTask to edit button
		editButton.onclick = editTask;

		// bind deleteTask to delete button
		deleteButton.onclick = deleteTask;

		// bind checkBoxEventHandler to the checkbox
		checkBox.onchange = checkBoxEventHandler;
}

// Set the click handler to the addTask function
addButton.onclick = addTask;

// cylcle over incompleteTaskHolder ul li's
for (var i = 0; i < incompleteTaskHolder.children.length; i++) {
	bindTaskEvents(incompleteTaskHolder.children[i], taskCompleted);
};

// cylcle over completedTaskHolder ul li's
for (var i = 0; i < completedTaskHolder.children.length; i++) {
	bindTaskEvents(completedTaskHolder.children[i], taskIncomplete);
};
