function addNewTask() {
  var list = document.getElementById("list");
  var text = document.getElementById("task_name").value;
  var listItem = document.createElement("li");
  listItem.className = "list-item";

  if(text.length === 0) {
    alert("Adiciona uma tarefa");
    return;
  }
  
  const texElement = document.createTextNode(text);
  listItem.appendChild(texElement);
  list.appendChild(listItem);
}