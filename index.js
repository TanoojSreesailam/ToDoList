const inputBox = document.getElementById('input_box')
const List = document.getElementById('list')

function addTask(){
    if (inputBox.value === ""){
        alert("You must type something...!")
    }
    else{
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;
        List.appendChild(li);
        let span = document.createElement("span")
        span.innerHTML = "\u00d7";
        li.appendChild(span)
    }
    inputBox.value = "";
    save()
}

List.addEventListener("click", (e) =>{
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("check");
        save()
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        save()
    }
}, false)

function save() {
    localStorage.setItem("data", List.innerHTML)
}

function showTask(){
    List.innerHTML = localStorage.getItem("data")
}
showTask();