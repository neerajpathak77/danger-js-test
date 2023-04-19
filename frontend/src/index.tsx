import React, { FC, ReactElement } from 'react';
import ReactDOM from 'react-dom';
import Home from 'components/pages/Home';

const App: FC = (): ReactElement => <Home />;
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
