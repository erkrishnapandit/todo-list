// Importing nessecray DOM variables
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

// Deining Add Task Function
function addTask(){
    if(inputBox.value === ''){
        alert("You must write something");
    }else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    // Making input felid empty.
    inputBox.value = '';
    // saving data in local storage.
    saveData();
}

// Adding event listener when the task is clicked or remove icon is clicked.
listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false);

// Function to store data in local storage
function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

// Function to get data from the local storage
function showData(){
    listContainer.innerHTML = localStorage.getItem("data");
}

// Calling show data function.
showData();