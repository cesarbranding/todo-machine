import React from "react";


function useLocalStorage(itemName, initialValue) { // custom hook para manejar el localStorage
    const [error, setError] = React.useState(false);
    const [loading, setLoading] = React.useState(true);
    const [item, setItem] = React.useState(initialValue);
    
    React.useEffect(() => { // useEffect para manejar el localStorage y el estado
      setTimeout(() => { // setTimeout para simular el tiempo de carga de la API
        try {
          const localStorageItem = localStorage.getItem(itemName);
          let parsedItem;
          
          if (!localStorageItem) { // si no hay item en el localStorage se guarda el initialValue
            localStorage.setItem(itemName, JSON.stringify(initialValue)); // se guarda el initialValue en el localStorage
            parsedItem = initialValue;
          } else {
            parsedItem = JSON.parse(localStorageItem); // se parsea el item del localStorage para convertirlo en un objeto
          }
  
          setItem(parsedItem); // se guarda el item en el estado
          setLoading(false);
        } catch(error) {
          setError(error);
        }
      }, 1000);
    });
    
    const saveItem = (newItem) => {
      try {
        const stringifiedItem = JSON.stringify(newItem);
        localStorage.setItem(itemName, stringifiedItem);
        setItem(newItem);
      } catch(error) {
        setError(error);
      }
    };
  
    return {
      item,
      saveItem,
      loading,
      error,
    };
  }

export { useLocalStorage };