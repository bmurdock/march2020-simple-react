import React, {
    Component as RC
} from 'react';
import Post from './Post';
import posts from '../data/posts';

class PostList extends RC {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
        }
    }
    render() {
        return (
            <div>
                {this.state.posts}
            </div>
        )
    }
}

export default PostList;