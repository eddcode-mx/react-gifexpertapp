import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["Spider Man"]);

  //   const handleAdd = () => {
  //     setCategories((cats) => [...cats, "HunterXHunter"]);
  //   };

  return (
    <>
      <h2>GifExpertApp</h2>
      {/* Mandamos la referencia de la funcion setCategories para que la pueda usar el componente AddCategory 
      La funcion la podemos ver en los props*/}
      <AddCategory setCategories={setCategories} />
      <hr />
      <ol>
        {categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))}
      </ol>
    </>
  );
};
