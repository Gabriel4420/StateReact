import {useState} from 'react';
import logo from './logo.svg';
import './App.css';

const App = (): JSX.Element  =>{
  const [name, setName] = useState('')
  let link:string = 'https://www.einerd.com.br/wp-content/uploads/2021/10/sasuke-uchiha-rinnegan-e1633610180714-890x470.jpg'
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <input type="text" className="App-text" value={name} onChange={(e) => setName(e.target.value)} />
        <h2>Olá, {name} </h2>
        <img className="App-image" src={link}/>
      </header>
    </div>
  );
}

export default App;
