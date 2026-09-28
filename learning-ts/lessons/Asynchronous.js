const url = "https://jsonplaceholder.typicode.com/todos/1/";

//fetch(url).then(getResponse).then(validateResponse);
executeAPI();

async function executeAPI(){
    const res = await fetchUrl(url);
    const bodyData = await getResponse(res);
    validateResponse(bodyData);
}

function fetchUrl(url){
    return fetch(url);
}

function getResponse(response) {
    //console.log(response);
    return response.json();
}

function validateResponse(todo) {
    console.log(todo);
    if (todo.completed == true) {
        console.log("Task completed!!!");
    } else {
        console.log("Task is in progress...");
    }
}

