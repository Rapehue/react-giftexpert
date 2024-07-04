import { useState } from "react";
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {

  const [ categories, setCategories ] = useState([ 'One Punch' ]);

  // console.log(categories);

  const onAddCategory = ( newCategory ) => {
      // categories.push('Valorant'); => No funciona
      if ( categories.includes(newCategory) ) return;

      setCategories([ ...categories , newCategory ]);
      //setCategories( cat => [ ...cat, 'Valorant' ] );
      
  };

  return (
    <>
        { /* Título */ }
        <h1>GifExpertApp</h1>

        { /* Input */ }
      <AddCategory 
        //setCategories= { setCategories }
        onNewCategory= { (event) => onAddCategory(event) }
      />

        { /* Listado de GIF */ }
        { /* <button onClick={ onAddCategory }>Agregar</button> */ }

        { 
          categories.map( ( category ) => (
              <GifGrid 
                key={ category }
                category={ category } 
              />
            ))
        }

        { /* GIF Item */ }
    </>
  )
}
