
document.getElementById("taskBtn").addEventListener("click", getInfo)
var myDataRef = new Firebase("https://dailyfocus.firebaseio.com/")

function getInfo() {
	var task = document.getElementById("task").value

	myDataRef.push({ task: task }, function(error) {
		if(error) {
			alert(error)
		}
	})

}

myDataRef.on('child_added', function(snapshot) {
	var message = snapshot.val() // store all current tasks from firebase data snapshot
	var list = []
	var text = document.createTextNode(message.task) // create text node from task value
	var newItem = document.createElement("li") //create new LI tag
	newItem.className="list-group-item"
	var check = document.createElement("input")
	check.setAttribute("type", "checkbox")
	check.id = "check"
	check.className = "checkbox-inline"
		
	newItem.appendChild(text) // append task data to li
	newItem.appendChild(check)
	
	document.getElementById("toDo").appendChild(newItem) //add to li


	task.value=''
	task.focus() // clear input boxes

})












