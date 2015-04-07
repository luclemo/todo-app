var taskInput = document.getElementById('new-task'); // new-task
var addButton = document.getElementsByTagName('button')[0]; // first button
var incompleteTaskHolder = document.getElementById('incomplete-tasks') // incomplete-tasks
var completedTaskHolder = document.getElementById('completed-tasks')// completed-tasks

// Add a new task
var addTask = function() {
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
	// When the delete button is pressed
	 // remove the parent li from the ul
}


// Mark task as complete
var taskCompleted = function() {
	// When the checkbox is checked
		// append the task li to the #completed-tasks
}


// Mark task as incomplete
var taskIncomplete = function() {
	// When the checkbox is unchecked
	// append the task li to the #incomplete-tasks
}