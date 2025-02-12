import { useState } from 'react'

export const AddCategory = () => {


    const [inputValue, setInputValue] = useState('Kaiju no.8 ')

    const onInputChange = ({target}) => { 
        console.log(target.value);
        setInputValue(target.value);
     }
    // const onInputChange = (event) => { 
    //     console.log(event.target.value);
    //     setInputValue(event.target.value);
    //  }

    const onSubmit = (event) => { 
        event.preventDefault();
        console.log(inputValue);
     }

  return (

    <form onSubmit={ (event) => onSubmit(event)}>
        <input 
            type="text" 
            placeholder='Buscar Gifs'
            value={inputValue}
            onChange={onInputChange}
        />
    </form>
  )
}
