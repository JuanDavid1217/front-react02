//import logo from './logo.svg';
import './index.css';
import './App.css';
import imagenRickMorty from "./img/rick-morty.png";
import credential from "./img/credencial.jpg";
import { useState } from 'react';
import Characters from './components/Characters';

function App() {
  const [characters, setCharacters]=useState(null);
  const reqApi = async () =>{
    const api = await fetch('https://rickandmortyapi.com/api/character');
    const characterApi = await api.json();
    setCharacters(characterApi.results);
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title"> Rick & Morty</h1>
        {characters? (
          <Characters characters={characters} setCharacters={setCharacters}/>
        ):(
          <>
           <img src={imagenRickMorty} alt="Rick & Morty" className="img-home"/>
           <button onClick={reqApi} className="btn-search">
           Buscar personajes
           </button>
          </>
        )
        }
        
        <div className="character-credential">
        <div>
          <img src={credential} alt="Credential" className="img-credential"/>
        </div>
        <div>
          <p>
            <h6 className="text-credential">Realizado por: Juan David Delgado Muñoz</h6>
          </p>
          <p>
            <h6 className="text-credential">Licenciatura en Ingenieria de Software</h6>
          </p>
        </div>
      </div>

      </header>
    </div>
  );
}

export default App;
