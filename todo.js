// Initial implementation of adding class "completed" when a todo is clicked.
// Fails to work on future todos.

/* var lis = document.getElementsByTagName("li");

for (var i=0; i<lis.length; i++){
	lis[i].addEventListener("click", function(){
		this.classList.toggle("completed");
	})
}*/

// Add class "completed" when a todo is clicked. Uses event capturing for future todos.

document.getElementsByTagName("ul")[0].addEventListener("click", function(event){
	if(event.target.matches("li")){
		event.target.classList.toggle("completed");
	}
	event.stopPropagation();
}, true);


// Add todo item to bottom of list when Enter key is pressed.

var input = document.getElementsByTagName("input");

input[0].addEventListener("keypress", function(event){
	if(event.which === 13){
		// console.log("Enter was pressed!")
		var newTodo = input[0].value;
		input[0].value = ""; // Clear input field.

		var ul = document.getElementsByTagName("ul");
		var newTodoHTML = document.createElement("li");
		newTodoHTML.innerHTML = newTodo + " <span>X</span>";
		ul[0].appendChild(newTodoHTML);
	}
})
