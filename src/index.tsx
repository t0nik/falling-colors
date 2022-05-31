import React from 'react';
import ReactDOM from 'react-dom/client';
import { isPropertySignature } from 'typescript';
import './index.css';
import reportWebVitals from './reportWebVitals';

const g_rows = 20; 
const g_cols = 20;
const g_falling_time = 100; // One tile falling time in milliseconds

type Props = {
  onMouseOver : VoidFunction;
  onMouseOut : VoidFunction;
  color : string;
}

type TileMapStates = {
  tiles: Array<string>;
}

class Tile extends React.Component<Props> {
  render() {
    return (
      <div className="tile"
        onMouseOver={() => this.props.onMouseOver()}
        onMouseOut={() => this.props.onMouseOut()}
        style={{ backgroundColor: this.props.color }}
      ></div>
    );
  }
};

class TileMap extends React.Component<{},TileMapStates> {

  constructor(props : any) {
    super(props);

    this.state = {
      tiles: Array(g_rows*g_cols).fill("#C5C5C5"),
    }
  }

  renderTile(i : number) {
    return (
      <Tile onMouseOver={() => this.handleMouseOver(i)}
      onMouseOut={() => this.handleMouseOut(i)}
      color={this.state.tiles[i]}
      />
      );
  }

  handleMouseOver(i : number) {
    let temp_tiles = this.state.tiles;

        temp_tiles[i] = "#FF0000";
        this.setState({tiles: temp_tiles});

      // Draw single, falling tile
      for (let it = g_rows; it < g_rows*g_cols; it += g_rows) {
        setTimeout(() => {
          temp_tiles[i+it-g_rows] = "#C5C5C5"; // Modify previous tile to tilemap backround color.
          temp_tiles[i+it] = "#FF0000";
          this.setState({tiles: temp_tiles});
        }, g_falling_time * (it - 1)/g_rows); // each callback occurs `g_falling_time` ms after the last one
      }
    
    return;
  }

  
  handleMouseOut(i : number) {
    // let temp_tiles = this.state.tiles;
    // for (let it = 0; it < g_rows*g_cols; it += g_rows) {
    //   temp_tiles[i+it] = "#C5C5C5";
    // }
    // this.setState({tiles: temp_tiles});
  }

  render() {
    return (
      <div>
        {[...new Array(g_rows)].map((x, rowIndex) => {
            return (
              <div className="tile-row" key={rowIndex}>
                {[...new Array(g_cols)].map((y, colIndex) => this.renderTile(rowIndex*g_cols + colIndex))}
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
          Current color: <div className="picked-color">#FF00000</div> {}
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
