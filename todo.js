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
		var newTodo = input[0].value;
		input[0].value = ""; // Clear input field.

		var ul = document.getElementsByTagName("ul");
		var newTodoHTML = document.createElement("li");
		newTodoHTML.innerHTML = newTodo + " <span><i class='fa fa-trash-o fa-lg' aria-hidden='true'></i></span>";
		ul[0].appendChild(newTodoHTML);
	}
})

// Remove todo item when X is pressed. Uses event capturing.

document.getElementsByTagName("ul")[0].addEventListener("click", function(event){
	if(event.target.matches("span")){
		event.target.parentElement.parentElement.removeChild(event.target.parentElement);
	}
	else if(event.target.matches("i")){
		event.target.parentElement.parentElement.parentElement.removeChild(event.target.parentElement.parentElement);
	}
	event.stopPropagation();
}, true);

// Display input box when + is clicked.

document.getElementsByClassName("fa-plus")[0].addEventListener("click", function(event){
	var input = document.getElementById("inputDiv");

	if(input.style.maxHeight !== "0px"){
		input.style.maxHeight = 0 + "px";
		input.style.opacity = 0;
		setTimeout(function(){	/* Hide input after slide completed. */
			input.style.display = "none";
		}, 500);
	}
	else{
		input.style.display = "block";
		input.style.maxHeight = input.scrollHeight + "px";
		input.style.opacity = 1;
	}
});