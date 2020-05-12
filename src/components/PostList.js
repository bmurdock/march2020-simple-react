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
            markPosts: 0,
        }
        this.secret = "whatever";
        console.log('running constructor');
    }

    shouldComponentUpdate(nextProps, nextState)
    {
        // should this component re-render itself??
        if (this.props.category !== nextProps.category)
        {
            console.log('The category has changed!');
            return true;
        }

        if (this.state.posts !== nextState.posts)
        {
            console.log('The posts have changed so re-render...');
            return true;
        }
        console.log('Category did not change so do not re-render');

        return false;
    }

    componentDidMount()
    {
        console.log('it mounted!');
        this.setState({
            posts: importedPosts.map((post, index) =>
            {
                console.log('i: ', index);
                return <Post key={`post_${index}`} {...post} />;
            }),
            markPosts: 5,
        })
    }

    // returns a snapshop of data to keep track of
    getSnapshotBeforeUpdate(prevProps, prevState)
    {
        const snapshot  = {};

        // if the category has changed, i want to keep track of it
        if (this.props.category !== prevProps.category)
        {
            snapshot.category = prevProps.category;
        }


        // if there are no keys in snapshot, return null
        if (Object.keys(snapshot).length === 0)
        {
            return null;
        }

        // otherwise return snapshot
        return snapshot;

    }

    componentDidUpdate(prevProps, prevState, snapshot)
    {
        console.log('postlist updated');
        console.log('snapshot is: ', snapshot);
        if (snapshot !== null)
        {
            this.setState({
                categoryHistory: snapshot,
            });
        }
    }

    componentWillUnmount()
    {
        // do something
        // remove D3 component?
    }
    render() {
        let count = 0;
        for (let i = 0; i < this.state.posts.length; i++)
        {
            if (this.state.posts[i].author === 'Mark Sanderson')
            {
                count++;
            }
        }
        console.log('postlist is rendering');
        return (
            <div className="postList">
                <p>Mark Posts: {count}</p>
                {this.state.posts}
                {this.state.categories}
            </div>
        )
    }
}

export default PostList;