import React, { useState } from "react";
import PropTypes from "prop-types";

export const AddCategory = ({ setCategories }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Linea para prevenir la carga de toda la pagina al enviar formulario

    // trim: sirve para eliminar los posibles espacios que pueda tener mi valor antes o despues del mi texto
    if (inputValue.trim().length > 2) {
      setCategories((cats) => [inputValue, ...cats]);
      setInputValue("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type='text' value={inputValue} onChange={handleInputChange} />
    </form>
  );
};

// Obligar el requerir de la funcion que se manda por mis props.
AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
};
