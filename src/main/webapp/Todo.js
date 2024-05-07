function taskAdding(){
    let taskName = document.getElementById("tName");
    let taskDate = document.getElementById("tDate");
    let taskTags = document.getElementById("tTag");
    let taskMemo = document.getElementById("tMemo");
    let taskTagList = tagmake(taskTags.value);
    
    const goingListDiv = document.getElementById("ongoingList");
    let list = "" //追加するタスクを記述していく
    list += "<li class=\"task\">" + "<input class=\"finished\" type=\"checkbox\">" + taskName;
}

function tagmake(Tags){
    let tagList = Tags.split(/(?:\s+)|(?:"　")/);
    console.log(tagList);
    return tagList;
}

let addButton = document.getElementById("taskAdd");
addButton.addEventListener("click", taskAdding);