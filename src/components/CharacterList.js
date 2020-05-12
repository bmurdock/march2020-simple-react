import React from 'react';
const RC = React.Component;
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
      console.log('simple');
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
  export default CharacterList;