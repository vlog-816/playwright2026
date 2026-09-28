import { PostHandler } from "./PostHandler.js"

execute_lab07();

async function execute_lab07() {
    const url = "https://jsonplaceholder.typicode.com/users/1/posts";
    const userId = 1;
    const postId = 2;
    
    const resquestHandler = new PostHandler(url);
    const user = await resquestHandler.printTargetPost(userId, postId);
    console.log("This is User:", user);
    
    const listAPI = await resquestHandler._getAllPosts();
    console.log("This is list API", listAPI);

}