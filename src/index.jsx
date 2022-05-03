import React, {useState, useEffect} from 'react';
import { render } from 'react-dom';
import './style.css';

import Animal from './components/Animal/index.jsx';
import AnimalDetail from './components/AnimalDetail/index.jsx';
import AnimalList from './components/AnimalList/index.jsx';

const App = () => {
  const [listOfAnimals, setListOfAnimals] = useState([]);
  useEffect(() => {
    fetch("https://lrolecek.github.io/zviratka-api/zvirata.json")
      .then((response) => response.json())
      .then((data) => {
        setListOfAnimals(data.zvirata);
        setChosenAnimal(data.zvirata[0]);
      });
  }, []);
  
  const [chosenAnimal, setChosenAnimal] = useState();
  const changeAnimal = number => {
    const newAnimal = listOfAnimals.find(animal => animal.id === number);
    setChosenAnimal(newAnimal);
  }

  return (
    <>
      <h1>Zvířátka v ZOO</h1>

      <div className="container">
          <AnimalList
            list={listOfAnimals}
            changeAnimal={changeAnimal}
          /> 
        {chosenAnimal && (
          <AnimalDetail
            photo={chosenAnimal.foto}
            name={chosenAnimal.nazev}
            latin={chosenAnimal.nazevLatinsky}
            desc={chosenAnimal.popis}
            home={chosenAnimal.domovina}
            bio={chosenAnimal.biotop}
            food={chosenAnimal.potrava}
            size={chosenAnimal.velikost}
          />
        )}
      </div>
    </>
  );
}



render(<App />, document.querySelector('#app'));