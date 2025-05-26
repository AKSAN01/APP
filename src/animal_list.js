
import React, { useEffect, useState } from 'react';
import Animal from './animal.js';
import './animal.css';
import './animal_list.css'

const AnimalList = () => {
  const [animales, setAnimales] = useState([]);

  useEffect(() => {
    fetch('https://gist.githubusercontent.com/josejbocanegra/829a853c6c68880477697acd0490cecc/raw/4eb2d8431a0253f764dad867decc592038e80cac/mascotas.json')
      .then(response => response.json())
      .then(data => setAnimales(data))
      .catch(error => console.error('Error al cargar los datos:', error));
  }, []);

  return (
    <div className='animal-list'>
        <>
        <h1> Lista de animales </h1>
        </>
      {animales.map((animal) => (
        <Animal
          key={animal.id}
          id={animal.id} // PASAR id
          nombre={animal.nombre}
          especie={animal.especie}
          raza={animal.raza}
          foto={animal.foto}
          descripcion={animal.descripcion}
        />
      ))}
    </div>
  );
};

export default AnimalList;
