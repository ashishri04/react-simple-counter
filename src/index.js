import React from 'react';
import ReactDOM from 'react-dom/client';
import Counter from './count';

const root = ReactDOM.createRoot(document.getElementById('root'));

const Heading = () => {
  return <h1>Hiiii.. I am Anurag Khare</h1>
}
root.render(
  <React.StrictMode>
    <Heading/>
    <Counter/>
  </React.StrictMode>
)



