import "./App.css";
import React, { useState } from "react";
import AnimalShow from "./AnimalShow";
function getRandomAnimal() {
  const animals = ["bird", "cat", "cow", "dog", "gator", "horse"];
  const idx = Math.floor(Math.random() * animals.length);
  return animals[idx];
}
function App() {
  const [animals, setAnimals] = useState([]);
  const handleCount = () => setAnimals([...animals, getRandomAnimal()]);
  const renderAnimals = animals.map((animal, idx) => {
    return <AnimalShow type={animal} key={idx} />;
  });
  return (
    <div className="app">
      <button className="app-btn" onClick={handleCount}>
        Add Animals
      </button>
      <div className="app__animals-list">{renderAnimals}</div>
    </div>
  );
}
export default App;
