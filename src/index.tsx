import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

type Props = {
  onMouseOver : VoidFunction;
}

type States = {
  color : string;
}

class Tile extends React.Component<Props, States> {
  constructor(props : any) {
    super(props);

    this.state = {
      color: "#C5C5C5",
    }
  }

  render() {
    return (
      <div className="tile"
        onMouseOver={() => this.setState({ color: "#FF0000" })}
        onMouseOut={() => this.setState({ color: "#C5C5C5" })}
        style={{ backgroundColor: this.state.color }}
      ></div>
    );
  }
};

class TileMap extends React.Component {

  // TODO: Array of Tiles as a state, values of array are color: string

  renderTile(i : number) {
    return (
      <Tile onMouseOver={() => this.handleMouseOver(i)}/>
      );
  }

  handleMouseOver(i : number) {
    // TODO
  }

  // Add handleMouseOut

  render() {
    const rows = 20; 
    const cols = 20;

    return (
      <div>
        {[...new Array(rows)].map((x, rowIndex) => {
            return (
              <div className="tile-row" key={rowIndex}>
                {[...new Array(cols)].map((y, colIndex) => this.renderTile(rowIndex*cols + colIndex))}
              </div>
            );
          }
        )
        }
      </div>
    );
  }
};

class ColorPicker extends React.Component {

};

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <div className="app-tilemap">
          <div className="desc">Map (put your cursor over the tiles): </div>
          <TileMap />
        </div>
        <div className="app-colorpicker">
          <div className="desc">Color picker: TODO </div>
          Current color: #FF00000 {}
        </div>
      </div>
    )
  };
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
