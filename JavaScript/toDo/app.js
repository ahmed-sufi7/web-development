let todo = [];

let req = prompt("Enter your request");

while (true) {
    if (req == "quit"){
        console.log("Quitting");
        break;
        
    } else if (req == "list"){
        console.log("------------");
        for(i=0;i<todo.length;i++){
            console.log(i, todo[i])
        }
        console.log("------------");
    } else if (req == "add"){
        let add = prompt("enter the item to add");
        todo.push(add);
        console.log("Item Added");
    } else if (req == "delete"){
        let idx = prompt("Enter the index you want to delete");
        todo.splice(idx,1);
        console.log("Item removed");
    } else {
        console.log("Invalid request")
    }

    req = prompt("Enter your request");
}