import { useState } from "react"

export const GifExpertApp = () => {

  const [categories, setCategories] = useState("Frieren anime");

  const onAddCategory = () => {
    categories.push('OVerwatch');
    console.log(categories);
  }

  return (
    <>
        <h1>GifExpertApp</h1>

        <button onClick={onAddCategory}>Agregar Categoria</button>

        <ol>
          { categories.map( category => {
            return <li key={category}>{category}</li>
          })}
        </ol>
    </>
  )
}
