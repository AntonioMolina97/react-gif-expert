import { useState } from 'react'

export const AddCategory = ({onNewCategory}) => {


    const [inputValue, setInputValue] = useState('');

    //Para que se pueda escribir en el input
    const onInputChange = ({target}) => { 
        console.log(target.value);
        setInputValue(target.value);
     }

     //Que no acepte input vacio. limpia al dar enter y quita espacios
    const onSubmit = (event) => { 
        // console.log(event);
        event.preventDefault();
        if(inputValue.trim().length <= 1) return;

        // setCategories( categories => [inputValue, ...categories]);
        setInputValue('');
        onNewCategory(inputValue.trim())
     }

  return (

    <form onSubmit={onSubmit}>
        <input 
            type="text" 
            placeholder='Buscar Gifs'
            value={inputValue}
            onChange={onInputChange}
        />
    </form>
  )
}
