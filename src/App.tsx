import { Suspense } from 'react';
import logo from './logo.svg';
import './App.css';
import DataView from './DataView'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Suspense fallback={<p>Loading...</p>}>
          <DataView />
        </Suspense>
      </header>
    </div>
  );
}

export default App;
