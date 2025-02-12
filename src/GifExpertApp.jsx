import { useState } from "react"
import { AddCategory } from "./components/AddCategory";

export const GifExpertApp = () => {

  const [categories, setCategories] = useState(["Frieren anime", "Dandadan"]);

  const onAddCategory = () => {
    // setCategories(['Bleach anime',...categories]);
    setCategories( cat => ['Bleach anime',...categories]);
  }

  return (
    <>
        <h1>GifExpertApp</h1>

        <AddCategory/>

        <button onClick={onAddCategory}>Agregar Categoria</button>

        <ol>
          { categories.map( category => {
            return <li key={category}>{category}</li>
          })}
        </ol>
    </>
  )
}
