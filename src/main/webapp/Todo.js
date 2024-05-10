function taskAdding(){
    let taskName = document.getElementById("tName").value;
    let taskDate = document.getElementById("tDate");
    let taskTags = document.getElementById("tTag");
    let taskMemo = document.getElementById("tMemo");
    let taskTagList = tagmake(taskTags.value);
    
    let list = document.createElement("li") //追加するタスクを記述していく
    list.className = "task";
    let input = document.createElement("input");
    input.className = "finish";
    input.type = "checkbox";
    list.appendChild(input);
    const listName = document.createTextNode(taskName);
    list.appendChild(listName);
    //リストに追加
    const goingList = document.getElementById("ongoingList");
    goingList.appendChild(list);
}

function tagmake(Tags){
    let tagList = Tags.split(/(?:\s+)|(?:"　")/);
    console.log(tagList);
    return tagList;
}

let addButton = document.getElementById("taskAdd");
addButton.addEventListener("click", taskAdding);