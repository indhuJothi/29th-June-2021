import React from 'react';
import './App.css';

function App() {
  const style={
    margin:'10px',
    borderRadius:'5px',
    boxShadow:'1px 2px 5px #ccc'

  }
  return (
    <div className="App">
    <div style={style}>
    <h1>paragraph</h1>
    <p>This a paragraph to explain about react internal styling, You can style it by using style as object and apply to the needed element whereas in HTML we use style as string here we use it as key value pair</p>
    </div>
    <div style={style}>
    <h1>paragraph</h1>
    <p>This a paragraph to explain about react internal styling, You can style it by using style as object and apply to the needed element whereas in HTML we use style as string here we use it as key value pair</p>
    </div>
    <div style={
      {
          margin:'10px',
          borderRadius:'5px',
          boxShadow:'1px 2px 5px #ccc'
          
      }

    }>
    <h1>paragraph</h1>
    <p>This a paragraph to explain about react internal styling, You can style it by using style as object and apply to the needed element whereas in HTML we use style as string here we use it as key value pair</p>
    </div>
     
    </div>
  );
}

export default App;
