const goingList = document.getElementById("ongoingList");
const completedList = document.getElementById("completedList");

function taskAdding(){
    let todoName = document.getElementById("tName");
    let todoDate = document.getElementById("tDate");
    let todoTags = document.getElementById("tTag");
    let todoMemo = document.getElementById("tMemo");
    let todoTagList = tagmake(todoTags.value);
    
    let list = document.createElement("li") //追加するタスクを記述していく
    list.className = "task";
    let input = document.createElement("input");
    input.className = "finish";
    input.type = "checkbox";
    let deleatButton = document.createElement("button"); //削除ボタン
    deleatButton.innerText = "削除";
    deleatButton.addEventListener("click", () => {
        const deletecheck = window.confirm("削除しますか？");
        if(deletecheck){
            list.parentElement.removeChild(list);
        }
    });
    let cul = document.createElement("ul");
    let childtaskButton = document.createElement("button"); //子タスク追加ボタン
    childtaskButton.innerText = "+";
    childtaskButton.addEventListener("click", () => {
        let clist = document.createElement("li");
        let ctext = document.createTextNode(prompt("タスクの名前を入力"));
        if(ctext.textContent == "") {return;}
        clist.appendChild(ctext);
        cul.appendChild(clist);
    });
    input.addEventListener("change", () => { //進行中・終了済みのリスト間移動の処理
        if(input.checked){
            completedList.appendChild(goingList.removeChild(list));
        }else{
            goingList.appendChild(completedList.removeChild(list));
        }
    });
    list.appendChild(input);
    list.appendChild(document.createTextNode(todoName.value));
    todoName.value = ""; //入力ボックスの中身を空に
    list.appendChild(childtaskButton);
    list.appendChild(deleatButton);
    if(todoMemo.value != ""){ //listにメモの追加
        let text = document.createElement("p");
        text.innerText = todoMemo.value;
        list.appendChild(text);
        todoMemo.value = "";
    }
    list.appendChild(cul);
    //リストに追加
    goingList.appendChild(list);
}

function tagmake(Tags){
    let tagList = Tags.split(/(?:\s+)|(?:"　")/);
    console.log(tagList);
    return tagList;
}

//タスクを追加する
let addButton = document.getElementById("taskAdd");
addButton.addEventListener("click", taskAdding);