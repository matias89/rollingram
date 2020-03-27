import React from 'react';
import { render } from 'react-dom';

// Views
import Test from './pages/test';

const App = () => {
  return (
    <>
      <Test />
    </>
  );
};

render(<App />, document.getElementById('app'));