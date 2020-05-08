import React from 'react';
import './App.css';
import PostList from './components/PostList';
import Post from './components/Post';

const RC = React.Component;

function Title(props)
{
  return (
  <h1>{props.title}</h1>
  )
}

function App() {
  return (
    <div className="page">
      <Title title="My Blog Page" />
      <PostList />
    </div>
  );
}
export default App;