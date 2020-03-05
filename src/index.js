import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Products from './components/Products/Products';
import Heading from './components/Heading/Heading';
import data from './products.json';

function App() {
  return (
    <div className="App">
      <Heading text = "Список товаров"/>
      <Products data = {data}/>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);