import React, {
    Component as RC
} from 'react';
import Post from './Post';
import importedPosts from '../data/posts';

class PostList extends RC {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
        }
    }
    componentDidMount()
    {
        console.log('it mounted!');
        this.setState({
            posts: importedPosts.map((post, index) =>
            {
                console.log('i: ', index);
                return <Post key={`post_${index}`} {...post} />;
            })
        })
    }
    render() {
        return (
            <div className="postList">
                {this.state.posts}
                {this.state.categories}
            </div>
        )
    }
}

export default PostList;