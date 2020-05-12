import React from 'react';
import './History.css';
const RC = React.Component;

class History extends RC {
    constructor(props)
    {
        super(props);
        this.state = {
            colors: ['Red', 'Green', 'Blue', 'Purple', 'Yellow', 'Orange'],
            colorHistory: [],
            selectedColor: '',
        };
    }

    chooseColor = (event) => {
        this.setState({
            selectedColor: event.target.value,
        });
    }

    getSnapshotBeforeUpdate(prevProps, prevState)
    {
        if (prevState.selectedColor !== '' && this.state.selectedColor !== prevState.selectedColor)
        {
            return prevState.selectedColor;
        }
        return null;
    }

    componentDidUpdate(prevProps, prevState, snapshot)
    {
        console.log('component has updated');
        if (snapshot !== null)
        {
            this.setState({
                colorHistory: [...this.state.colorHistory, snapshot],
            });
        }
    }


    render()
    {
        const colorOptions = this.state.colors.map((color) =>
        {
            return <option key={color} value={color}>{color}</option>
        });
        const colorHistory = this.state.colorHistory.map((color, i) =>
        {
            return <span key={`old_${i}`} className="oldColor">{color}</span>
        });

        return (
            <div>
                <select onChange={this.chooseColor}>
                    {colorOptions}
                </select>
                <h3>Current Color: {this.state.selectedColor}</h3>
                <div className="colorHistory">{colorHistory}</div>
            </div>
        )
    }
}

export default History;