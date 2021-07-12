import { useRef, Component } from 'react';
import logo from './logo.svg';
import ReactToPrint from 'react-to-print';
import './App.css';

import ContentToPrint from './ContentToPrint';

function App() {
  const content = useRef();
  return (
    <div className='App'>
      <ReactToPrint
        trigger={() => <button className='print'>Print this out!</button>}
        content={() => content.current}
      />
      <ContentToPrint ref={content} text='y' />

      {/* <ContentFunction ref={content} /> */}
    </div>
  );
}

export default App;
