import { useState } from "react"
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {

  const [categories, setCategories] = useState(["Dandadan"]);

  const onAddCategory = (newCategory) => {
    const newCategoryLower = newCategory.toLowerCase();

    if(categories.some(category => category.toLowerCase() === newCategoryLower)) return;
    // if (categories.includes(newCategory)) return;

    setCategories( cat => [newCategory,...categories]);
    // setCategories(['Bleach anime',...categories]);
  }

  return (
    <> 
        <h1>GifExpertApp</h1>

        <AddCategory  
        onNewCategory={event => onAddCategory(event)}
        
        />

        { 
          categories.map( category => (
              <GifGrid key={category} category={category}/>
            )
          )
        }

    </>
  )
}
