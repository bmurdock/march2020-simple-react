import React from 'react';
import './App.css';
import PostList from './components/PostList';

const RC = React.Component;

function Title(props)
{
  return (
  <h1>{props.title}</h1>
  )
}
function Dave(props)
{
  return (
  <div className="dave">
    {props.children}
  </div>
  )
}
class CharacterList extends RC {
  constructor(props)
  {
    super(props);
    this.state = {
      characters: [],
    }
  }

  async componentDidMount()
  {
    console.log('a different console log');
    const chars = await fetch('http://localhost:3333/api/characters')
    .then((response) =>
    {
      return response.json();
    })
    .catch((err) =>
    {
      console.log('get a fetch error: ', err);
    });
    this.setState({
      characters: chars.map((char, i) =>
      {
        return <li key={`char_${i}`}>{char.name}</li>
      }),
    })
  }
  render()
  {
    return (
      <ul>
        {this.state.characters}
      </ul>
    )
  }
}
function App() {
  return (
    <div className="page">
      <Title title="My Blog Page" />
      <PostList />
      <CharacterList />
    </div>
  );
}
export default App;