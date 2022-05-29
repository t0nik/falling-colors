import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

class Tile extends React.Component {
  redner() {
    return (<div className="tile">a</div>);
  }
}

class TileMap extends React.Component {

  render() {
    return (
    <div>
      <Tile />
      <Tile />
    </div>);
  }
}

class ColorPicker extends React.Component {

}

class App extends React.Component {
  render(){
    return (
      <div className="app">
        <div className="app-tilemap">Map: {/*TileMap*/}</div>
        <div className="app-colorpicker">Color picker: {/*Color picker*/}</div>
      </div>
    )
  };
}

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
