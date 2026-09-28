import { RequestHandler } from "./RequestHandler.js";

const url = "https://jsonplaceholder.typicode.com/posts";
const userID = 1;
const postID = 200;

executeLab();

async function executeLab() {

    const resHandler = new RequestHandler(url);
    const targetPost = await resHandler.getTargetPost(userID, postID);
    const postList = await resHandler.getAllPosts(userID);
    
    console.log(`Print UserID: ${userID} and Post ID ${postID}:`)
    if (!targetPost) {
        console.log(`There is no UserID: ${userID} or Post ID ${postID}.`);
        console.log("===============================");
    } else {
        printData(targetPost);
    }
    
    console.log(`Print All post with UserID: ${userID}:`)
    if (postList.length === 0) {
        console.log(`There is no UserID: ${userID}.`);
        console.log("===============================");
    } else {
        for (const post of postList) {
            printData(post);
        }
    }
}

function printData(post) {
    const { _userID, _id, _title, _body } = post;
    console.log(`User id: ${_userID}`);
    console.log(`Post id: ${_id}`);
    console.log(`Title: ${_title}`);
    console.log(`Body: ${_body}`);
    console.log("===============================");

}