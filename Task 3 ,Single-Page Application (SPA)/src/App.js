import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import axios from 'axios';
import CharacterDetails from './CharacterDetails';
import './App.css';

function App() {
  const [characters, setCharacters] = useState([]);
  const [filteredCharacters, setFilteredCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/character')
      .then(response => {
        setCharacters(response.data.results);
        setFilteredCharacters(response.data.results);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    setFilteredCharacters(
      characters.filter(character =>
        character.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm, characters]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Router>
      <div className="App">
        <h1>Rick and Morty Characters</h1>
        <nav>
          <Link to="/">Home</Link>
        </nav>
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <input
                  type="text"
                  placeholder="Search characters..."
                  value={searchTerm}
                  onChange={e => setSearchTerm(e.target.value)}
                  className="search-bar"
                />
                <ul className="character-list">
                  {filteredCharacters.map(character => (
                    <li key={character.id} className="character-item">
                      <h3>{character.name}</h3>
                      <p>Species: {character.species}</p>
                      <img src={character.image} alt={character.name} width="100" />
                      <Link to={`/character/${character.id}`} className="details-link">
                        View Details
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            }
          />
          <Route path="/character/:id" element={<CharacterDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;