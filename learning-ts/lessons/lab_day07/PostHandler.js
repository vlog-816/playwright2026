import { Post } from "./Post.js";

export class PostHandler {

    constructor(url) {
        this._url = url;
    }

    async printTargetPost(userId, postId) {
        const body = await fetchUrl(this._url);
        const user = new Post(userId, postId);

        for (const data of body) {

            if (user._userId === data.userId && user._id === data.id) {
                user._title = data.title;
                user._body = data.body;

                return user;
            }
        }
        
        return `UserId: ${userId} or PostId: ${postId} does not match`;
    }

    async _getAllPosts() {

        const body = await fetchUrl(this._url);
        const listAPI = [];

        for (const data of body) {
            const postAPI = new Post();
            postAPI._userId = data.userId;
            postAPI._id = data.id;
            postAPI._title = data.title;
            postAPI._body = data.body;

            listAPI.push(postAPI);
        }

        return listAPI;
    }
}

async function fetchUrl(url) {
    const res = await fetch(url);
    const bodyData = await res.json();
    return bodyData;
}