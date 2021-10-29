import React from 'react';
import ReactDOM from 'react-dom';
const x ="Started learning React";
const y="it is a sunny day"
ReactDOM.render(
  <div>
  <h2 className="headStyling">To Do List</h2> 
  <h3>Call Directory</h3>
  <p>The Paragraphs module in Drupal provides editors with a component driven architecture for building pages. </p>
  <p>{x}</p>
  <p>29/10/2021</p>
  <p>{new Date().getFullYear()}</p>
  <p>{"Today's weather:"+ y}</p>
  </div> ,
  document.getElementById('root') //kothay dekhate chachchi
);


