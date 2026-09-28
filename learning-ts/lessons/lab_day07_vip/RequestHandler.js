import { Post } from "./Post.js";

export class RequestHandler {

    constructor(url) {
        this._url = url;
    }

    async getTargetPost(userID, postID) {
        /*
        allPost = getAllPost(userID)
        allPost.filter( by postID) -> return array Post
        if (array Post = null){ return new Post()}
        else { return array Post}
        */
        const dataList = await this._getAllPost(userID);
        const post = dataList.find(function ({ id }) { return id === postID });
        const targetPost = new Post();

        if (post) {
            const { userId, id, title, body } = post;
            targetPost = new Post(userId, id, title, body);

            return targetPost;
        };

        if (targetPost._userID) { return targetPost };

        return undefined;
    }

    async getAllPosts(userIDTarget) {
        const dataList = await this._getAllPost(userIDTarget);
        const postList = [];

        for (const data of dataList) {
            const { userId, id, title, body } = data
            postList.push(new Post(userId, id, title, body));
        }

        return postList;
    }

    async _getAllPost(userIDTarget) {
        /*
        fetch(url) -> return response -> response.json() -> return body[]
        arrayBody.filter( by userID ) -> return arrayPost
        For post of arrayPost  => destructor {....} = post
                 new Post(....)

        arrayResult.push() => return arrayresult
        */

        const response = await fetch(this._url);
        const bodyData = await response.json();
        const allPost = bodyData.filter(function ({ userId }) {
            return userId === userIDTarget;
        })

        return allPost
    }
}