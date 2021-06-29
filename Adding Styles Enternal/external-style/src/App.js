import React from 'react';
import './external.css'

function App() {
  return (
    <div className="App">
     <div className='blog'>
    <h1 className='heading'>paragraph</h1>
    <p >This a paragraph to explain about react internal styling, You can style it by using style as object and apply to the needed element whereas in HTML we use style as string here we use it as key value pair</p>
    </div>
    <div className='blog'>
    <h1 className='heading'>paragraph</h1>
    <p>This a paragraph to explain about react internal styling, You can style it by using style as object and apply to the needed element whereas in HTML we use style as string here we use it as key value pair</p>
    </div>
    <div>
    <h1>paragraph</h1>
    <p>This a paragraph to explain about react internal styling, You can style it by using style as object and apply to the needed element whereas in HTML we use style as string here we use it as key value pair</p>
    </div>
    </div>
  );
}

export default App;
