import React from 'react';
import './App.css';
import PostList from './components/PostList';
import History from './components/History';

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
      <History />
    </div>
  );
}
export default App;