function taskAdding(){
    let taskName = document.getElementById("tName");
    let taskDate = document.getElementById("tDate");
    let taskTags = document.getElementById("tTag");
    let taskMemo = document.getElementById("tMemo");
    let taskTagList = tagmake(taskTags.value);
    console.log(taskTagList);
}

function tagmake(Tags){
    let tagList = Tags.split(/(\s+| "　")/);
    return tagList;
}

let addButton = document.getElementById("taskAdd");
addButton.addEventListener("click", taskAdding);