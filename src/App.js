import logo from './logo.svg';
import './App.css';
import Contactcomponent from './components/contact';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Contactcomponent></Contactcomponent>
        
      </header>
    </div>
  );
}

export default App;
