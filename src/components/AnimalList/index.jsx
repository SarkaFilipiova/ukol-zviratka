import React from 'react';

import Animal from '../Animal';



const AnimalList = ({ animal, list, changeAnimal }) => {
  

  return (
    <>
      <div className="animal-list">
        {list.map((animal) => (
          <Animal
            id={animal.id}
            name={animal.nazev}
            latin={animal.nazevLatinsky}
            changeAnimal={changeAnimal}
            image={animal.foto}
          />
        ))}
      </div>
    </>
  );
};



export default AnimalList;