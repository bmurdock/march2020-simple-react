import React, {
    Component as RC
} from 'react';

class Post extends RC {
    constructor(props)
    {
      super(props);
    }
    render()
    {
      return (
        <div className="blogPost">
          <h3>{this.props.title}</h3>
          <div className="postContent">
            {this.props.content}
          </div>
          <div style={{color: 'green'}}>Author: {this.props.author}</div>
        </div>
      )
    }
  }
  export default Post;